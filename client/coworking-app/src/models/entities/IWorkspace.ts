export interface IWorkspace {
	_id: string
	name: string
	description: string
	images?: string[]
	capacity: number
	location: string
	coefficient: number
	type: 'Office' | 'Co-Working' | 'Meeting Room' | 'Event Space'
	status?: 'occupied' | 'available'
	amenities?: ('Wi-Fi' | 'Coffee' | 'Printer' | 'Parking' | 'Kitchen')[]
}
