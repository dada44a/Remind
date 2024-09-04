<template>
  <div class="min-h-[100vh] w-full">
    <!-- Hero Section -->
    <div id="hero" class="h-[80vh] p-3 overflow-clip text-clip flex items-center justify-center flex-col text-center lg:text-left px-4">
      <h1 class="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-semibold mb-4 font-serif text-start md:text-center">
        Crave the Crunch, Savor the Flavor
      </h1>
      <p class="text-[14px] lg:text-[16px] mb-6 font-serif text-gray-800 text-start md:text-center">
        Discover a world of delicious snacks crafted for every craving. Dive into our selection and taste the difference with every bite.
      </p>
      <div class="flex gap-4 w-full max-w-md">
        <input type="text" placeholder="Search" class="hidden lg:flex lg:px-4 lg:py-2 border border-gray-300 rounded-lg" />
        <a href="#shop" class="hidden bg-orange-500 lg:flex items-center justify-center text-white px-3 py-1 lg:px-6 lg:py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
          Shop Now
        </a>
      </div>
    </div>

    <!-- Popular Products Section -->
    <div id="popular" class="h-[250px] lg:h-[350px] p-3">
      <h1 class="font-semibold text-[20px] lg:text-[30px] mt-2">#Popular Products</h1>
      <div id="popular-grid" class="flex gap-3 lg:gap-5 overflow-x-scroll">
        <Card class="card" />
        <Card class="card" />
        <Card class="card"/>
        <Card class="card" />
        <Card  class="card"/>
        <Card  class="card"/>
        <Card class="card" />
      </div>
    </div>

    <div class=" mb-[10px] lg:mt-[100px]">
            <div class="text-[40px] h-[70px] lg:text-[60px] lg:h-[90px] flex gap-[30px] items-center p-2  logos-slide">
                <p class="rubik text-black whitespace-nowrap font-bold loop">
                  Satisfy Your Cravings - <span class="text-deep-orange-lighten-3 ">One Bite at a Time! </span>
                </p>
                <p class="rubik text-black inline-block whitespace-nowrap font-bold loop">
                  Satisfy Your Cravings - <span class="text-deep-orange-lighten-3">One Bite at a Time! </span>
                </p>
                <p class="rubik text-black inline-block whitespace-nowrap font-bold loop">
                  Satisfy Your Cravings - <span class="text-deep-orange-lighten-3">One Bite at a Time! </span>
                </p>
              
            </div>
        </div>

    <!-- Recent Products Section -->
    <div id="recent" class="h-[250px] lg:h-[250px] p-3">
      <h1 class="font-semibold text-[20px] lg:text-[30px] mb-5 mt-2">#Recent Products</h1>
      <div id="popular-grid" class="flex gap-3 lg:gap-5 overflow-x-scroll flex-shrink-0">
        <Card class="card" />
        <Card class="card" />
        <Card class="card"/>
        <Card class="card" />
        <Card  class="card"/>
        <Card  class="card"/>
        <Card class="card" />
      </div>
    </div>

    <footer class="bg-black text-white text-center text-[14px] lg:mt-[220px]">
      <p>Copyrigh &COPY; Remind - 2024</p>
    </footer>
  </div>
</template>

<style scoped>
#hero {
  background-image: url('/images/wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  color: #333333;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
input::placeholder {
  color: #d1d5db;
}
#popular-grid::-webkit-scrollbar,
#recently-added-grid::-webkit-scrollbar {
  display: none;
}
.logos-slide {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.loop {
  display: inline-block;
  padding-left: 70%;
  animation: slide 5s linear infinite;
}
.card{
  flex-shrink: 0;
}

@keyframes slide {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }

</style>
