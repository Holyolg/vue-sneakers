<script setup>
import { ShoppingCart, Heart, User } from 'lucide-vue-next'

defineProps({
  totalPrice: Number
})
const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="w-full flex justify-between items-center border-b px-10 py-6">
    <router-link to="/">
      <div class="flex gap-2 items-center">
        <img src="/logo.png" alt="logo" class="w-14" />
        <div>
          <h2 class="font-semibold text-xl">Vue Sneakers</h2>
          <span class="text-gray-400">Магазин крассовок</span>
        </div>
      </div>
    </router-link>

    <ul class="flex gap-5">
      <li
        @click="() => emit('openDrawer')"
        class="font-semibold opacity-50 hover:opacity-100 flex gap-1 cursor-pointer"
      >
        <ShoppingCart :size="24" color="black" />
        <span>{{ totalPrice }} руб.</span>
      </li>
      <router-link to="/favorites">
        <li
          class="font-semibold opacity-50 hover:opacity-100 hover:text-red-400 flex gap-1 cursor-pointer group"
        >
          <Heart :size="24" class="group-hover:text-red-400" />
          <span>Любимое</span>
        </li></router-link
      >
      <li class="font-semibold opacity-50 hover:opacity-100 flex gap-1 cursor-pointer">
        <User :size="24" color="black" />

        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
