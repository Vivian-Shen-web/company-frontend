import { categories, footerVehicleGroups, testimonials, vehicles } from './qsdData'

const mockResolve = async <T>(data: T): Promise<T> => {
  return Promise.resolve(data)
}

export const getQsdVehicles = () => mockResolve(vehicles)

export const getQsdVehicleCategories = () => mockResolve(categories)

export const getQsdTestimonials = () => mockResolve(testimonials)

export const getQsdFooterVehicleGroups = () => mockResolve(footerVehicleGroups)

export const getQsdVehicleDetail = (id: string) => {
  return mockResolve(vehicles.find((vehicle) => vehicle.id === id) ?? vehicles[0])
}
