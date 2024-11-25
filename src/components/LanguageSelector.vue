<template>
  <div class="custom-language-selector">
    <div class="dropdown">
      <div class="dropdown-selected" @click="toggleDropdown">
        <img :src="getFlag(selectedLanguage)" alt="Selected Language Flag" class="flag" />
        <span class="language-name">
          {{ getLanguageName(selectedLanguage) }}
        </span>
        <span class="arrow">&#9662;</span>
      </div>
      <ul class="dropdown-menu" v-if="dropdownOpen">
        <li
          v-for="option in options"
          :key="option.code"
          @click="selectLanguage(option.code)"
          class="dropdown-item"
        >
          <img :src="option.flag" :alt="`${option.name} Flag`" class="flag" />
          <span class="language-name">
            {{ option.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()

const dropdownOpen = ref(false)
const selectedLanguage = ref(languageStore.getCurrentLanguage)

const options = [
  {
    code: 'us',
    name: 'English (US)',
    flag: './src/assets/flags/us.svg',
  },
  {
    code: 'sr',
    name: 'Serbian (SR)',
    flag: './src/assets/flags/sr.svg',
  },
]

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function selectLanguage(lang: string) {
  selectedLanguage.value = lang
  languageStore.setLanguage(lang)
  dropdownOpen.value = false
}

function getFlag(lang: string) {
  return options.find((option) => option.code === lang)?.flag || ''
}

function getLanguageName(lang: string) {
  return options.find((option) => option.code === lang)?.name || ''
}
</script>

<style scoped>
.custom-language-selector {
  position: relative;
  width: 150px;
  font-family: Arial, sans-serif;
}

.dropdown-label {
  font-size: 14px;
  margin-bottom: 5px;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.flag {
  width: 20px;
  height: 15px;
  margin-right: 8px;
}

.language-name {
  flex-grow: 1;
}

.arrow {
  margin-left: auto;
  font-size: 12px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 10;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
