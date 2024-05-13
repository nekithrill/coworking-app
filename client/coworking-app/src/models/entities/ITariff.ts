export interface ITariff {
	_id: string
	name: string
	description: string
	price: number
	duration: 'daily' | 'weekly' | 'monthly'
	services?: string[]
	available?: boolean
}
