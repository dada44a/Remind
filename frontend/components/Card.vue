<script setup>
const quantityStatus = ref(false);

</script>
<template>
    <div class="w-[130px] h-[180px] lg:w-[230px] lg:h-[400px]">
      <div class="h-[70%] border border-black relative">
        <div v-if="quantityStatus" class="bg-red-300 w-[80px] lg:w-[100px] rounded-xl text-[12px] lg:text-[16px] text-center absolute left-1/2  lg:left-3/4 transform -translate-x-1/2 top-[90px] lg:top-[250px]">
          <p>No Stock</p>
        </div>
      </div>
  
      <div class="h-[30%] flex flex-col justify-start items-start w-full overflow-clip text-clip whitespace-nowrap">
        <p class="text-[16px] font-sans font-semibold">Khapse hello world</p>
        <div class="flex justify-between items-center w-full gap-5">
          <p class="text-[14px]">Rs 100</p>
        </div>
      </div>
    </div>
  </template>
  