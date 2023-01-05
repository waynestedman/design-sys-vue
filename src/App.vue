<script setup>
import MainApp from './components/MainApp.vue'
</script>

<template>
  <header>
    <h3>Wayne's Micro Design System (Vue version)</h3>
  </header>
  <main-app msg="Tokens to App, how does it work?" />
</template>

<style lang="scss">
header {
  background-color: var(--teal03);
  color: var(--white);
  margin: 0;
  text-align: center;
}
h3 {
  font-family: var(--raleway);
  font-size: var(--h3);
  padding: 1rem;
  margin: 0;
}
</style>
