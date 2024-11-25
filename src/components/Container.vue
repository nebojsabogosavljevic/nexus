<script setup lang="ts">
import { ref, watch } from 'vue'
import { useVehiclesStore } from '@/stores/useVehiclesStore'
import Dropdown from './Dropdown.vue'

const vehiclesStore = useVehiclesStore()

const selectedYear = ref('')
const selectedMake = ref('')
const selectedModel = ref('')

watch(selectedYear, (newYear) => {
  selectedMake.value = ''
  selectedModel.value = ''
  vehiclesStore.makes = []
  vehiclesStore.models = []
  if (newYear) vehiclesStore.fetchMakes(newYear)
})

watch(selectedMake, (newMake) => {
  selectedModel.value = ''
  vehiclesStore.models = []
  if (newMake) vehiclesStore.fetchModels(selectedYear.value, newMake)
})

vehiclesStore.fetchYears()
</script>

<template>
  <div class="container">
    <h1 class="title">{{ $t('select') }} {{ $t('vehicle') }}</h1>
    <Dropdown :label="$t('year2')" :options="vehiclesStore.years" v-model="selectedYear" />
    <Dropdown
      :label="$t('make')"
      :options="vehiclesStore.makes"
      v-model="selectedMake"
      :disabled="!selectedYear"
    />
    <Dropdown
      :label="$t('model')"
      :options="vehiclesStore.models"
      v-model="selectedModel"
      :disabled="!selectedMake"
    />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  background-color: #f4f7fb;
  width: 50%;
  height: 400px;
  padding: 10px 20px;
}
</style>
