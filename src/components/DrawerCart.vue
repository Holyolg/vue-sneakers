<script setup>
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'
import DrawerHead from './DrawerHead.vue'
import { computed } from 'vue'

defineProps({
  totalPrice: Number,
  buttonDisabled: Boolean
})
const emit = defineEmits(['createOrder'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-black/50 z-10">
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-6 overflow-y-auto">
      <DrawerHead />

      <div v-if="!totalPrice" class="flex justify-center h-5/6">
        <InfoBlock
          imageUrl="/package-icon.png"
          title="Корзина пустая"
          desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        />
      </div>

      <CartItemList />

      <div v-if="totalPrice">
        <div class="my-6">
          <div class="flex justify-between gap-2">
            <p class="text-gray-400">Итого:</p>
            <div class="flex-1 border-b border-dashed"></div>
            <p class="font-semibold">{{ totalPrice }} руб.</p>
          </div>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="() => emit('createOrder')"
          class="p-2 w-full text-white font-semibold bg-[#40b681] rounded-xl hover:opacity-80 transition-all active:translate-y-1 shadow-md disabled:bg-gray-400 disabled:pointer-events-none"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
