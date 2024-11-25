<script setup lang="ts">
import LanguageSelector from './LanguageSelector.vue';

defineProps<{
  title: string
}>()

</script>
<template>
    <div class="headline">
        <img class="logo" src="@/assets/icons/nexus.svg" alt="Nexus Logo" />
        <h1 class="title">{{ title }}</h1>
        <div class="language-selector">
            <LanguageSelector />
        </div>
    </div>
</template>
<style scoped>
.headline {
    height: 80px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
}

.logo {
    width: 150px;
    height: 50px;
    margin-left: 20px;
}

.title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.language-selector {
    margin-right: 20px;
    /* width: 150px; */
}
</style>
