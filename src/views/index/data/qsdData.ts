export type QsdPage =
  'home' | 'vehicles' | 'detail' | 'compare' | 'contact' | 'dealer' | 'service' | 'factory'

export type VehicleCategory = '3W Passenger' | '3W Cargo' | '4W Passenger' | '4W Cargo'

export interface VehicleModel {
  id: string
  name: string
  category: VehicleCategory
  description: string
  image: string
  speed: string
  range: string
  seats: string
  specs: Record<string, string>
  highlights: string[]
}

const qsdAssets = import.meta.glob('../../../assets/qsd/india_l5/*', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

export const asset = (name: string) => qsdAssets[`../../../assets/qsd/india_l5/${name}`] || ''

export const vehicles: VehicleModel[] = [
  {
    id: 'sun-13',
    name: 'QSD-SUN 1+3',
    category: '3W Passenger',
    description: 'Driver + 3 passenger tricycle.',
    image: asset('u77.png'),
    speed: '55km/h',
    range: '100km',
    seats: '1+3',
    specs: {
      'Dimension (L-W-H)': '2760*1350*1900 mm',
      'Motor type': 'Permanent Magnet Synchronous Motor',
      'Brake type': 'Front & rear oil drum brakes',
      Battery: '72V120Ah lithium battery',
      'Loading capacity': 'D+3 passengers',
      'Front wheel size': '400-12*1 Steel rim',
      Motor: '72V4000W',
      Tire: '4.00-12*4',
      'Shock absorption': 'U Hydraulic shocker',
      'Top speed (km/h)': '50-55km/h',
      'Endurance mileage': '80-100kms',
      'Climbing ability': '<=20degree',
      'Rear Wheel Size': '400-12*3 Steel rim'
    },
    highlights: [
      'Driver + 3 passenger seating',
      '72V120Ah lithium battery',
      'U hydraulic shock absorber',
      'Front & rear oil drum brakes'
    ]
  },
  {
    id: 'tesla-d46',
    name: 'QSD-TESLA(D+4)',
    category: '3W Passenger',
    description: 'Driver + 4/6 passenger tricycle.',
    image: asset('u81.png'),
    speed: '38-40km/h',
    range: '100km',
    seats: '1+4/6',
    specs: {
      'Dimension (L-W-H)': '3040*1380*1950 mm',
      'Motor type': 'Permanent Magnet Motor',
      Battery: '72V120Ah lithium battery',
      'Loading capacity': 'D+4/6 passengers',
      'Front wheel size': '400-12*1 Steel rim',
      Tire: '4.00-12*4'
    },
    highlights: [
      'Flexible passenger layout',
      'Low operating cost',
      'Stable chassis',
      'Fleet route ready'
    ]
  },
  {
    id: 'joy-18',
    name: 'QSD-JOY1+8',
    category: '3W Passenger',
    description: 'Driver + 8 passenger tricycle.',
    image: asset('u82.png'),
    speed: '55-60km/h',
    range: '<=180km',
    seats: '1+8',
    specs: {
      'Dimension (L-W-H)': '3600*1450*1980 mm',
      'Motor type': 'Permanent Magnet Motor',
      Battery: 'Long-range lithium battery',
      'Loading capacity': 'D+8 passengers',
      'Front wheel size': '400-12*1 Steel rim',
      Tire: '4.00-12*4'
    },
    highlights: [
      'Long-range lithium battery',
      'Higher passenger capacity',
      'Comfortable cabin',
      'Built for tough roads'
    ]
  }
]

export const footerVehicleGroups = [
  ['3W Passebger', 'QSD-SUN 1+3', 'JOY SPORT  1+3', 'QSD-OCTPUS', 'MASTER 1.2M'],
  ['3W Cago', 'SUN  1.8 Loader', 'QSD-1.5 BULL', 'QSD-1.7 red flag'],
  ['4W Passebger', 'MASTER 1.2M', 'QSD-OCTPUS', 'JOY SPORT  1+3'],
  ['4W Cargo', 'QSD-1.7 red flag', 'SUN  1.8 Loader']
]

export const categories: VehicleCategory[] = [
  '3W Passenger',
  '3W Cargo',
  '4W Passenger',
  '4W Cargo'
]

export const testimonials = [
  {
    quote:
      'This electric rickshaw loader sells very fast in our market. Customers like that it can carry daily goods, handle rough roads, and keep running costs low. The frame is strong, the chassis feels stable, and after the first batch sold out, we quickly placed a second order with QSD.',
    name: 'Daniel Mwangi',
    market: 'India'
  },
  {
    quote:
      'We visited three factories before choosing QSD. The difference in organization, cleanliness, and attention to detail was clear from the moment we walked in.',
    name: 'Distributor',
    market: 'Africa'
  },
  {
    quote:
      'Seeing the production line and testing process gave us full confidence in the quality. The team was prepared for every technical question we had.',
    name: 'Fleet Operator',
    market: 'Bangladesh'
  }
]
