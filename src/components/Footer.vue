<template>
  <div class="footer">
    <p class="footer-text">
      Created by: <strong>Nebojša Bogosavljević</strong> - FullStack (MEVN) Developer
    </p>
    <p class="footer-text">
      Task for Nexus Transport.
    </p>
    <p class="footer-text">
      <a href="mailto:nebojsa.bogosvljevic@gmail.com" class="footer-link">Contact</a>
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
        href="https://github.com/your-github-profile"
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
// No specific logic is required for this static footer
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
}

.footer-link {
  color: #007bff;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
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
