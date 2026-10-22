import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { type VehicleCategory, vehicles } from '@/views/index/data/qsdData'

export const useQsdStore = defineStore('qsd', () => {
  const currentCategory = ref<VehicleCategory>('3W Passenger')
  const activeVehicleId = ref(vehicles[0].id)
  const inquiryOpen = ref(false)

  const activeVehicle = computed(() => {
    return vehicles.find((vehicle) => vehicle.id === activeVehicleId.value) ?? vehicles[0]
  })

  const filteredVehicles = computed(() => {
    return vehicles.filter((vehicle) => vehicle.category === currentCategory.value)
  })

  const setActiveVehicle = (id: string) => {
    activeVehicleId.value = id
  }

  const openInquiry = () => {
    inquiryOpen.value = true
  }

  const closeInquiry = () => {
    inquiryOpen.value = false
  }

  return {
    currentCategory,
    activeVehicleId,
    inquiryOpen,
    activeVehicle,
    filteredVehicles,
    setActiveVehicle,
    openInquiry,
    closeInquiry
  }
})
