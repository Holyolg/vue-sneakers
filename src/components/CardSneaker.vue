<script setup>
import { Heart, CirclePlus, Check } from 'lucide-vue-next'

defineProps({
  imageUrl: String,
  title: String,
  price: String,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div
    class="relative border border-gray-100 rounded-xl hover:shadow-md transition-all p-4 cursor-pointer"
  >
    <Heart
      @click="onClickFavorite"
      :class="[
        'text-red-400 hover:fill-red-400 absolute top-4 left-4',
        isFavorite ? 'fill-red-400' : ''
      ]"
    />
    <img :src="imageUrl" alt="sneaker" />
    <p class="mt-2">{{ title }}</p>
    <div class="flex justify-between items-center mt-5">
      <div>
        <p class="text-gray-400">Цена:</p>
        <span class="font-semibold">{{ price }} руб.</span>
      </div>
      <button>
        <CirclePlus
          @click="onClickAdd"
          class="opacity-50 hover:opacity-100 fill-[#40b681] text-white"
          v-if="!isAdded"
        />
        <Check class="opacity-50 hover:opacity-100 text-[#40b681]" v-else />
      </button>
    </div>
  </div>
</template>
