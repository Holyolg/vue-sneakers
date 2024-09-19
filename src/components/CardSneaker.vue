<script setup>
import { Heart, CirclePlus, Check } from 'lucide-vue-next'
import { inject } from 'vue'

defineProps({
  imageUrl: String,
  id: Number,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div
    class="group relative border flex flex-col border-gray-100 rounded-xl hover:shadow-md transition-all p-4 cursor-pointer"
  >
    <Heart
      v-if="onClickFavorite"
      @click="onClickFavorite"
      :class="[
        'text-red-400 opacity-0 group-hover:opacity-100 absolute top-4 left-4 transition-all',
        isFavorite ? 'fill-red-400 hover:fill-red-200 opacity-100' : ''
      ]"
    />
    <img :src="imageUrl" alt="sneaker" />
    <p class="mt-2 flex-1">{{ title }}</p>
    <div class="flex justify-between items-center mt-5">
      <div>
        <p class="text-gray-400">Цена:</p>
        <span class="font-semibold">{{ price }} руб.</span>
      </div>
      <button>
        <CirclePlus
          v-if="onClickAdd && !isAdded"
          @click="onClickAdd"
          class="opacity-50 hover:opacity-100 fill-[#40b681] text-white"
        />
        <Check
          v-if="onClickAdd && isAdded"
          @click="onClickAdd"
          class="opacity-50 hover:opacity-100 text-[#40b681]"
        />
      </button>
    </div>
  </div>
</template>
