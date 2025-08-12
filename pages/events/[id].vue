<script setup>
definePageMeta({
  validate: (route) => {
    //route.params.id should only contain digits

    return /^\d+$/.test(String(route.params.id));
  },
});
const nuxt = useNuxtApp();

console.log(nuxt);
</script>

<template>
  <div>event id {{ $route.params.id }}</div>
</template>
