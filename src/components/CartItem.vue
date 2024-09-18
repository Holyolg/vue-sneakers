<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  imageUrl: String,
  title: String,
  price: String
})
</script>

<template>
  <div class="flex justify-between items-center">
    <img :src="imageUrl" :alt="title" />
    <div>
      <p>{{ title }}</p>
      <p class="font-semibold">{{ price }} руб.</p>
    </div>
    <button>
      <X class="opacity-50 hover:opacity-100 border rounded-lg p-1" />
    </button>
  </div>
</template>
