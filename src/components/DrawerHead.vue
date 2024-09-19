<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import { inject } from 'vue'

const { closeDrawer } = inject('cart')
</script>

<template>
  <div class="flex gap-3 items-center mb-4">
    <ArrowLeft
      @click="closeDrawer"
      :size="16"
      class="opacity-50 hover:opacity-100 transition cursor-pointer"
    />
    <h2 class="3xl font-semibold">Корзина</h2>
  </div>
</template>
