<template>
  <div class="footer">
    <p class="footer-text">
      {{$t('createdBy')}}: <strong>Nebojša Bogosavljević</strong> - FullStack (MEVN) Developer
    </p>
    <p class="footer-text">
      <a
        href="mailto:nebojsa.bogosvljevic@gmail.com"
        class="footer-link"
        @mouseover="showTooltip"
        @mouseleave="hideTooltip"
      >
        Contact
      </a>
      <span v-if="tooltipVisible" class="tooltip">
        {{$t('email')}}: nebojsa.bogosvljevic3@gmail.com <br />
        {{$t('phone')}}: +381 69 20 32 132
      </span>
    </p>
    <div class="social-icons">
      <a
        href="https://www.linkedin.com/in/nebojsa-bogosaljevic-4283051ba/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        class="social-icon"
      >
        <img
          src="@/assets/icons/linkedin.svg"
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/nebojsabogosavljevic/nexus"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        class="social-icon"
      >
        <img
          src="@/assets/icons/github.svg"
          alt="GitHub"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tooltipVisible = ref(false);

function showTooltip() {
  tooltipVisible.value = true;
}

function hideTooltip() {
  tooltipVisible.value = false;
}
</script>

<style scoped>
.footer {
  background-color: #f4f7fb;
  text-align: center;
  padding: 20px 10px;
  border-top: 1px solid #e0e0e0;
  font-family: Arial, sans-serif;
}

.footer-text {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
  position: relative;
}

.footer-link {
  color: #007bff;
  text-decoration: none;
  position: relative;
  cursor: pointer;
}

.footer-link:hover {
  text-decoration: underline;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-bottom: 5px;
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.social-icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon img {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-icon:hover img {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
