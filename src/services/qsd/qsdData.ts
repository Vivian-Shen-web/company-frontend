export type QsdPage =
  'home' | 'vehicles' | 'detail' | 'compare' | 'contact' | 'dealer' | 'service' | 'factory'

export type VehicleCategory =
  '3W Passenger' | '3W Cargo' | '4W Passenger' | '4W Cargo' | '2W Electric'

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

const qsdPngAssets = import.meta.glob('../../assets/img/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

const qsdSvgAssets = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

export const asset = (name: string) => {
  if (name.endsWith('.png')) return qsdPngAssets[`../../assets/img/${name}`] || ''
  if (name.endsWith('.svg')) return qsdSvgAssets[`../../assets/icons/${name}`] || ''
  return ''
}

export const vehicles: VehicleModel[] = [
  {
    id: 'sun-13',
    name: 'QSD-SUN 1+3',
    category: '3W Passenger',
    description: 'Built for everyday passenger routes.',
    image: asset('u77.png'),
    speed: '50-55km/h',
    range: '80-100kms',
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
    id: 'sun-cargo',
    name: 'QSD-SUN Loader',
    category: '3W Cargo',
    description: 'Heavy-duty cargo tricycle for urban & rural haulage.',
    image: asset('sun-cargo.png'),
    speed: '≤50km/h',
    range: '100+kms',
    seats: '1000kgs',
    specs: {
      'Dimension (L-W-H)': '3100*1280*1710mm',
      'Motor type': 'Permanent Magnet Synchronous Motor',
      'Brake type': 'Hydraulic Braking System',
      'Loading capacity': '1000kgs',
      'Front wheel size': '450-10*1',
      Motor: '60V4Kw',
      Tire: 'F:450-10*1  R 450-12*2',
      'Shock absorption': 'Dedicated suspension',
      'Top speed (km/h)': '≤50km/h',
      'Endurance mileage': '100+kmS',
      'Rear Wheel Size': '450-12*2',
      Battery: '60V 100Ah lithium battery',
      'Charge Voltage': '220V,60HZ'
    },
    highlights: [
      '1000kgs loading capacity',
      '60V 100Ah lithium battery',
      'Dedicated suspension',
      'Hydraulic braking system'
    ]
  }
]

export const footerVehicleGroups = [
  ['3W Passebger', 'QSD-SUN 1+3'],
  ['3W Cargo', 'QSD-SUN Loader']
]

export const siteContact = {
  email: 'Jeff.cao@pcqs-china.com',
  phone: '+8615030611128',
  whatsapp: 'https://wa.me/8615030611128',
  companyAddress:
    'Room A516, 5th floor, Efficiency House, 35 Tai Yau Street, San Po Kong, Kowloon, HONGKONG',
  factoryAddress: 'Qianwang Industry Zone, Xianghe County, Langfang City, Hebei Province, China',
  maps: 'https://www.google.com/maps/place/QSPOWER+GROUP+CO.,+LIMITED/@22.3351411,114.196021,21z/data=!4m6!3m5!1s0x340406db351c9ce7:0x8734e06c2b97d345!8m2!3d22.3351411!4d114.196021!16s%2Fg%2F11yqp4p4hc?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D',
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  }
}

export const categories: VehicleCategory[] = ['3W Passenger', '3W Cargo']

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
