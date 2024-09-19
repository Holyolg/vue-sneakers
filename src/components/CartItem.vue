<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number
})

const emit = defineEmits(['onClickRemove'])
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <img :src="imageUrl" :alt="title" class="size-32" />
    <div>
      <p>{{ title }}</p>
      <p class="font-semibold flex-1">{{ price }} руб.</p>
    </div>
    <button>
      <X
        @click="emit('onClickRemove')"
        class="opacity-50 hover:opacity-100 border rounded-lg p-1"
      />
    </button>
  </div>
</template>
