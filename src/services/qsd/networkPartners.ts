export type NetworkPartnerType = 'dealer' | 'service'

export interface NetworkPartner {
  id: string
  name: string
  type: NetworkPartnerType
  address: string
  phone: string
  email: string
  lat: number
  lng: number
}

export interface NetworkPartnerQuery {
  type: NetworkPartnerType
  lat?: number
  lng?: number
}

const networkPartners: NetworkPartner[] = [
  {
    id: 'dl-01',
    name: 'Indraprastha Motors Pvt. Ltd.',
    type: 'dealer',
    address: 'Khasra No. 260, G T Karnal Road, Siraspur, Near Gurudwara, Delhi',
    phone: '91167055104',
    email: 'vipra@indraprasthmotors.com',
    lat: 28.7531,
    lng: 77.1612
  },
  {
    id: 'dl-02',
    name: 'Indraprastha Motors Pvt. Ltd.',
    type: 'dealer',
    address: 'Khasra No. 264 & 266, G T Karnal Road, Siraspur, Near Gurudwara, Delhi',
    phone: '91167055104',
    email: 'vipra@indraprasthmotors.com',
    lat: 28.7486,
    lng: 77.1578
  },
  {
    id: 'dl-03',
    name: 'Indraprastha Motors Pvt. Ltd.',
    type: 'dealer',
    address: 'Khasra No. 827/9, Village Mundka, Firni Road, New Delhi, Delhi',
    phone: '91167055104',
    email: 'vipra@indraprasthmotors.com',
    lat: 28.6822,
    lng: 77.0322
  },
  {
    id: 'dl-04',
    name: 'Capital EV Motors',
    type: 'dealer',
    address: 'Plot 12, Okhla Industrial Area Phase II, New Delhi, Delhi',
    phone: '911141057788',
    email: 'sales@capitalevmotors.com',
    lat: 28.5504,
    lng: 77.2694
  },
  {
    id: 'gur-01',
    name: 'NCR Green Motors',
    type: 'dealer',
    address: 'Sector 18, MG Road, Gurugram, Haryana',
    phone: '911244765120',
    email: 'info@ncrgreenmotors.com',
    lat: 28.4812,
    lng: 77.0633
  },
  {
    id: 'noi-01',
    name: 'Yamuna Auto Hub',
    type: 'dealer',
    address: 'Sector 63, Noida-Greater Noida Expressway, Noida, Uttar Pradesh',
    phone: '911205548812',
    email: 'contact@yamunaautohub.com',
    lat: 28.6272,
    lng: 77.3784
  },
  {
    id: 'mum-01',
    name: 'Sahyadri Electric Motors',
    type: 'dealer',
    address: 'Andheri East, Mumbai, Maharashtra',
    phone: '912267854412',
    email: 'sales@sahyadrimotors.com',
    lat: 19.1156,
    lng: 72.8695
  },
  {
    id: 'blr-01',
    name: 'Deccan EV Motors',
    type: 'dealer',
    address: 'Whitefield Main Road, Bengaluru, Karnataka',
    phone: '918041109922',
    email: 'hello@deccanevmotors.com',
    lat: 12.9698,
    lng: 77.7499
  },
  {
    id: 'chn-01',
    name: 'Marina Auto Traders',
    type: 'dealer',
    address: 'Anna Salai, Chennai, Tamil Nadu',
    phone: '914428554411',
    email: 'sales@marinaautotraders.com',
    lat: 13.0604,
    lng: 80.2496
  },
  {
    id: 'hyd-01',
    name: 'Charminar Motors',
    type: 'dealer',
    address: 'Banjara Hills, Hyderabad, Telangana',
    phone: '914023661188',
    email: 'info@charminarmotors.com',
    lat: 17.4126,
    lng: 78.4392
  },
  {
    id: 'sdl-01',
    name: 'QSD Delhi Service Centre',
    type: 'service',
    address: 'Khasra No. 260, G T Karnal Road, Siraspur, Near Gurudwara, Delhi',
    phone: '91167055104',
    email: 'vipra@indraprasthmotors.com',
    lat: 28.7527,
    lng: 77.1608
  },
  {
    id: 'sdl-02',
    name: 'QSD Mundka Service Centre',
    type: 'service',
    address: 'Khasra No. 827/9, Village Mundka, Firni Road, New Delhi, Delhi',
    phone: '91167055104',
    email: 'vipra@indraprasthmotors.com',
    lat: 28.6818,
    lng: 77.0318
  },
  {
    id: 'sdl-03',
    name: 'QSD Okhla Service Centre',
    type: 'service',
    address: 'Plot 12, Okhla Industrial Area Phase II, New Delhi, Delhi',
    phone: '911141057788',
    email: 'service@capitalevmotors.com',
    lat: 28.5508,
    lng: 77.2699
  },
  {
    id: 'sgur-01',
    name: 'QSD Gurugram Service Centre',
    type: 'service',
    address: 'Sector 18, MG Road, Gurugram, Haryana',
    phone: '911244765120',
    email: 'service@ncrgreenmotors.com',
    lat: 28.4808,
    lng: 77.0629
  },
  {
    id: 'snoi-01',
    name: 'QSD Noida Service Centre',
    type: 'service',
    address: 'Sector 63, Noida-Greater Noida Expressway, Noida, Uttar Pradesh',
    phone: '911205548812',
    email: 'service@yamunaautohub.com',
    lat: 28.6276,
    lng: 77.3789
  },
  {
    id: 'smum-01',
    name: 'QSD Mumbai Service Centre',
    type: 'service',
    address: 'Andheri East, Mumbai, Maharashtra',
    phone: '912267854412',
    email: 'service@sahyadrimotors.com',
    lat: 19.116,
    lng: 72.8691
  },
  {
    id: 'sblr-01',
    name: 'QSD Bengaluru Service Centre',
    type: 'service',
    address: 'Whitefield Main Road, Bengaluru, Karnataka',
    phone: '918041109922',
    email: 'service@deccanevmotors.com',
    lat: 12.9702,
    lng: 77.7503
  },
  {
    id: 'sch-01',
    name: 'QSD Chennai Service Centre',
    type: 'service',
    address: 'Anna Salai, Chennai, Tamil Nadu',
    phone: '914428554411',
    email: 'service@marinaautotraders.com',
    lat: 13.0608,
    lng: 80.25
  }
]

const distanceInKm = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const toRad = (value: number) => (value * Math.PI) / 180
  const earthRadius = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// 模拟 Java 接口：按类型返回附近网点，后续接入真实接口时替换此实现
export const searchNetworkPartners = ({
  type,
  lat,
  lng
}: NetworkPartnerQuery): Promise<NetworkPartner[]> => {
  const matched = networkPartners.filter((partner) => partner.type === type)

  return new Promise((resolve) => {
    setTimeout(() => {
      if (lat === undefined || lng === undefined) {
        resolve(matched)
        return
      }
      const nearby = matched.filter(
        (partner) => distanceInKm(lat, lng, partner.lat, partner.lng) <= 150
      )
      resolve((nearby.length ? nearby : matched).slice(0, 8))
    }, 300)
  })
}

export const partnerMapsUrl = (partner: NetworkPartner) =>
  `https://www.google.com/maps/search/?api=1&query=${partner.lat},${partner.lng}`
