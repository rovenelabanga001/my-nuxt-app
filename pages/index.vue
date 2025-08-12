<script setup>
const { sayHello } = useUtils();
sayHello();

const { $hello } = useNuxtApp();
$hello("Rovenel");
console.log(useNuxtApp());
</script>

<template>
  <div class="Main">
    <h1 class="text-teal-300">Hello Nuxt 3</h1>
    <IconsBell />
  </div>
</template>
