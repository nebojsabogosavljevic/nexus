<script setup lang="ts">
defineProps<{
  label: string
  options: string[]
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

function handleChange(event: Event) {
  const selectedValue = (event.target as HTMLSelectElement).value
  emit('update:modelValue', selectedValue)
}
</script>

<template>
  <div class="dropdown">
    <label class="dropdown-label">{{ label }}</label>
    <select class="dropdown-select" :value="modelValue" @change="handleChange">
      <option value="" disabled>{{ $t('select') }} {{ label }}</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
}

.dropdown-label {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
}

.dropdown-select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
}
select option {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}
</style>
