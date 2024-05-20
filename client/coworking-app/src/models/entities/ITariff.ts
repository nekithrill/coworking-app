export interface ITariff {
	_id: string
	name: string
	description: string
	price: number
	duration: 'day' | 'week' | 'month' | 'annual'
	services?: string[]
	available?: boolean
}
