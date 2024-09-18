<script setup>
import { ShoppingCart, Heart, User } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full flex justify-between items-center border-b p-4">
    <div class="flex gap-2 items-center">
      <img src="/logo.png" alt="logo" class="w-14" />
      <div>
        <h2 class="font-semibold text-xl">Vue Sneakers</h2>
        <span class="text-gray-400">Магазин крассовок</span>
      </div>
    </div>

    <ul class="flex gap-5">
      <li class="font-semibold opacity-50 hover:opacity-100 flex gap-1 cursor-pointer">
        <ShoppingCart :size="24" color="black" />
        <span>1230 руб.</span>
      </li>
      <li
        class="font-semibold opacity-50 hover:opacity-100 hover:text-red-400 flex gap-1 cursor-pointer group"
      >
        <Heart :size="24" class="group-hover:text-red-400" />
        <span>Любимое</span>
      </li>
      <li class="font-semibold opacity-50 hover:opacity-100 flex gap-1 cursor-pointer">
        <User :size="24" color="black" />

        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
