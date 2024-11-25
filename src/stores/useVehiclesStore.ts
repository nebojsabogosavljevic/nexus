import { ref } from 'vue'
import { defineStore } from 'pinia'

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`

export const useVehiclesStore = defineStore('vehicles', () => {
  const years = ref<string[]>([])
  const makes = ref<string[]>([])
  const models = ref<string[]>([])

  async function fetchYears() {
    try {
      const response = await fetch(`${API_BASE_URL}/years`)
      years.value = (await response.json()).data
    } catch (error) {
      console.error('Failed to fetch years:', error)
    }
  }

  async function fetchMakes(year: string) {
    if (!year) return
    try {
      const response = await fetch(`${API_BASE_URL}/makes?year=${year}`)
      const makeData = (await response.json()).data
      makes.value = makeData.map((item: { name: string }) => item.name)
    } catch (error) {
      console.error('Failed to fetch makes:', error)
    }
  }

  async function fetchModels(year: string, make: string) {
    if (!year || !make) return
    try {
      const response = await fetch(`${API_BASE_URL}/models?year=${year}&make=${make}`)
      const modelData = (await response.json()).data
      models.value = modelData.map((item: { model: string }) => item.model)
    } catch (error) {
      console.error('Failed to fetch models:', error)
    }
  }

  return {
    years,
    makes,
    models,
    fetchYears,
    fetchMakes,
    fetchModels,
  }
})
