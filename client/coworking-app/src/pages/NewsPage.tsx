import { useEffect, useMemo, useState } from 'react'
import AdCard from '../components/news/AdCard'
import NewsCard from '../components/news/NewsCard'
import { INewsAndAds } from '../models/entities/INewsAndAds'
import AdService from '../services/AdService'
import NewsService from '../services/NewsService'
import '../styles/layout/_newsPage.scss'

const NewsAndAds = () => {
	const [activeTab, setActiveTab] = useState<'news' | 'ads'>('news')
	const [data, setData] = useState<INewsAndAds[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [sortBy, setSortBy] = useState<'new' | 'old'>('new')

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			setError(null)
			try {
				let response
				if (activeTab === 'news') {
					response = await NewsService.getAllNews()
				} else {
					response = await AdService.getAllAds()
				}
				setData(response.data)
			} catch (error) {
				if (error instanceof Error) {
					setError(`Error fetching ${activeTab}: ${error.message}`)
				} else {
					setError(`Error fetching ${activeTab}: An unknown error occurred`)
				}
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [activeTab])

	const sortedData = useMemo(() => {
		return [...data].sort((a, b) => {
			const dateA = new Date(a.createdAt || 0).getTime()
			const dateB = new Date(b.createdAt || 0).getTime()
			return sortBy === 'new' ? dateB - dateA : dateA - dateB
		})
	}, [data, sortBy])

	return (
		<div className='news'>
			<div className='news__header'>
				<h1>News and Ads</h1>
				<p>On this page you can find all news and ads.</p>
			</div>

			<div className='news__content'>
				<div className='news__content_header'>
					<div className='news__content_header_tabs'>
						<button
							className={activeTab === 'news' ? 'active' : ''}
							onClick={() => setActiveTab('news')}
						>
							News
						</button>
						<button
							className={activeTab === 'ads' ? 'active' : ''}
							onClick={() => setActiveTab('ads')}
						>
							Ads
						</button>
					</div>

					<div className='news__content_header_filter'>
						<label>
							<input
								type='radio'
								name='sortBy'
								value='new'
								checked={sortBy === 'new'}
								onChange={() => setSortBy('new')}
							/>
							<span>New</span>
						</label>
						<label>
							<input
								type='radio'
								name='sortBy'
								value='old'
								checked={sortBy === 'old'}
								onChange={() => setSortBy('old')}
							/>
							<span>Old</span>
						</label>
						<span className='selection'></span>
					</div>
				</div>

				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>{error}</p>
				) : (
					<ul>
						{sortedData.map(item => (
							<li key={item._id}>
								{activeTab === 'news' ? (
									<NewsCard data={item} />
								) : (
									<AdCard data={item} />
								)}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default NewsAndAds
