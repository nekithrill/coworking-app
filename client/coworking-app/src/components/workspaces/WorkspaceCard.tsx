import React, { useState } from 'react'
import { IWorkspace } from '../../models/entities/IWorkspace'
import '../../styles/components/_workspaceCard.scss'
import NextIcon from '../icons/NextIcon'
import PrevIcon from '../icons/PrevIcon'

interface WorkspaceCardProps {
	data: IWorkspace
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide(prevSlide =>
			prevSlide === (data.images?.length ?? 0) - 1 ? 0 : prevSlide + 1
		)
	}

	const prevSlide = () => {
		setCurrentSlide(prevSlide =>
			prevSlide === 0 ? (data.images?.length ?? 0) - 1 : prevSlide - 1
		)
	}

	const sliderStyle = {
		'--currentSlide': currentSlide
	} as React.CSSProperties

	return (
		<div className='workspace-card'>
			<div className='workspace-card__header'>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
			</div>

			<div className='workspace-card__sidebar'>
				<h2>Properties</h2>
				<p>Capacity - {data.capacity}</p>
				<p>Location - {data.location}</p>
				<p>Type - {data.type}</p>
				<p>Status - {data.status}</p>
				{data.amenities && (
					<div className='amenities'>
						<h4>Amenities:</h4>
						<ul>
							{data.amenities.map((amenity, index) => (
								<li key={index}>{amenity}</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<div className='workspace-card__images'>
				{data.images ? (
					<div className='workspace-card__images_slider' style={sliderStyle}>
						{data.images.map((image, index) => (
							<div
								key={index}
								className={`slide ${index === currentSlide ? 'active' : ''}`}
							>
								<img src={image} alt={`Workspace image ${index + 1}`} />
							</div>
						))}
					</div>
				) : (
					<p>No images available</p>
				)}
				{data.images && data.images.length > 1 && (
					<div>
						<button className='prevButton' onClick={prevSlide}>
							<PrevIcon color='var(--clr-slider-arrow)' />
						</button>
						<button className='nextButton' onClick={nextSlide}>
							<NextIcon color='var(--clr-slider-arrow)' />
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default WorkspaceCard
