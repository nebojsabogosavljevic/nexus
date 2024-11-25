<script setup lang="ts">
import Container from './components/Container.vue'
import Headline from './components/Headline.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <Headline :title="'Nexus ' + $t('assignment')" />
    </header>
    <main>
      <Container title="Dynamic Selector" />
    </main>
    <Footer />
  </div>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.footer {
  margin-top: auto;
}
.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
