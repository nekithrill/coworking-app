import React from 'react'
import { ITariff } from '../../models/entities/ITariff'
import '../../styles/components/_tariffCard.scss'

interface TariffCardProps {
	data: ITariff
}

const TariffCard: React.FC<TariffCardProps> = ({ data }) => {
	return (
		<div className='tariff-card'>
			<div className='tariff-card__content'>
				<div className='tariff-card__content_header'>
					{' '}
					<h2>{data.name}</h2>
					<p>
						${data.price} / {data.duration}
					</p>
				</div>

				<p className='tariff-card__content_description'>{data.description}</p>
				{data.services && (
					<div className='tariff-card__content_services'>
						<ul>
							{data.services.map((service, index) => (
								<li key={index}>{service}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default TariffCard
