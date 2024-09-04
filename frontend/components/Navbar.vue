<script setup>
import { ref } from 'vue';

const search = ref('');
const menu = ref(false);
const cart = ref(false);

const toggleController = () => {
    menu.value = !menu.value;
};

const toggleCart = () => {
    cart.value = !cart.value;
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full bg-white h-[65px] lg:h-[100px] flex items-center justify-between p-3 lg:p-5 z-50">
    
    <!-- Cart Sidebar -->
    <div
      v-if="cart"
      class="fixed top-0 right-0 w-[350px] h-full bg-white border-l border-gray-300 z-40 shadow-lg transition-transform duration-300"
    >
      <div class="p-4 flex items-center justify-between">
        <p class="font-bold text-lg">Your Cart</p>
        <button @click="toggleCart" class="text-gray-600 hover:text-black">Close</button>
      </div>
      <div class="p-4">
        <!-- Cart content here -->
        <p class="text-[18px] font-[500] font-sans mt-5">Your cart is empty.</p>
      </div>
    </div>
    
    <!-- Logo -->
    <div class="flex items-center font-sans">
      <p class="font-bold text-[22px] lg:text-[35px]">Remind</p>
    </div>
    
    <!-- Navigation Links and Search Bar -->
    <div class="flex items-center space-x-5 lg:space-x-8">
      
      <!-- Mobile Menu -->
      <div
        id="sm-menu"
        v-if="menu"
        class="lg:hidden h-auto w-[200px] z-10 absolute top-[60px] right-[2px] rounded-2xl bg-white shadow-lg p-5"
      >
        <ul class="space-y-3 text-[18px] font-[500] font-sans">
          <li><NuxtLink to="/" class="block hover:text-gray-600">Home</NuxtLink></li>
          <li><NuxtLink to="/shop" class="block hover:text-gray-600">Shop</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block hover:text-gray-600">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/account" class="block hover:text-gray-600">Account</NuxtLink></li>
          <li><a @click="toggleCart" class="cursor-pointer">Cart</a></li>
        </ul>
      </div>
      
      <!-- Desktop Menu Links -->
      <div class="hidden lg:flex space-x-5 text-[20px] font-[500] font-sans">
        <NuxtLink to="/" class="hover:text-gray-600">Home</NuxtLink>
        <NuxtLink to="/shop" class="hover:text-gray-600">Shop</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-600">Contact Us</NuxtLink>
        <NuxtLink to="/account" class="hover:text-gray-600">Account</NuxtLink>
        <a @click="toggleCart" class="hover:text-gray-600 cursor-pointer">Cart</a>
      </div>
     
      <!-- Search Bar -->
      <div class="relative hidden md:block">
        <input type="text" v-model="search" placeholder="Search" class="border rounded-xl px-3 py-1 text-[16px] lg:text-[18px] w-[200px] lg:w-[300px] focus:outline-none focus:ring-2 focus:ring-orange-500">
      </div>
      
      <!-- Mobile Menu Icon -->
      <div class="lg:hidden flex items-center">
        <a @click="toggleController"> 
          <img src="/images/menu_icons.png" alt="Menu Icon" width="24" height="24" />
        </a>
      </div>

    </div>
  </div>
</template>
