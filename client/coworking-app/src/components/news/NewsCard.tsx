import React from 'react'
import { INewsAndAds } from '../../models/entities/INewsAndAds'
import '../../styles/components/_newsCard.scss'

interface NewsAndAdsCardProps {
	data: INewsAndAds
}

const NewsCard: React.FC<NewsAndAdsCardProps> = ({ data }) => {
	return (
		<div className='news-card'>
			<div className='news-card__content'>
				<div className='news-card__content_img'>
					{data.imageUrl && <img src={data.imageUrl} alt='News image' />}
				</div>

				<div className='news-card__content_text'>
					<h2>{data.title}</h2>
					<p>{data.content}</p>
				</div>
			</div>

			<div className='news-card__date'>
				{data.createdAt && (
					<p>
						Created At:{' '}
						<span className='date'>
							{new Date(data.createdAt).toLocaleString()}
						</span>
					</p>
				)}
				{data.updatedAt && (
					<p>
						Updated At:{' '}
						<span className='date'>
							{new Date(data.updatedAt).toLocaleString()}
						</span>
					</p>
				)}
			</div>
		</div>
	)
}

export default NewsCard
