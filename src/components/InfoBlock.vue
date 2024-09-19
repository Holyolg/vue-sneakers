<script setup>
defineProps({
  imageUrl: String,
  title: String,
  desc: String
})
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center w-72 mx-auto">
    <img class="size-32" :src="imageUrl" alt="info" />
    <h2 class="mt-4 text-2xl font-semibold">{{ title }}</h2>
    <p class="text-gray-400 mt-1">{{ desc }}</p>
  </div>
</template>
