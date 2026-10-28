import axios from 'axios'

import { categories, footerVehicleGroups, testimonials, vehicles } from './qsdData'

const mockResolve = async <T>(data: T): Promise<T> => {
  return Promise.resolve(data)
}

const INQUIRY_URL = 'https://jmtsbgisvehstpvmmpwh.supabase.co/functions/v1/submit-inquiry'

export interface InquiryPayload {
  full_name: string
  mobile_number: string
  email: string
  state: string
  city: string
  vehicle: string
  message: string
  company: string
  interest_type: string
}

export const submitQsdInquiry = (payload: InquiryPayload) => axios.post(INQUIRY_URL, payload)

export const getQsdVehicles = () => mockResolve(vehicles)

export const getQsdVehicleCategories = () => mockResolve(categories)

export const getQsdTestimonials = () => mockResolve(testimonials)

export const getQsdFooterVehicleGroups = () => mockResolve(footerVehicleGroups)

export const getQsdVehicleDetail = (id: string) => {
  return mockResolve(vehicles.find((vehicle) => vehicle.id === id) ?? vehicles[0])
}
