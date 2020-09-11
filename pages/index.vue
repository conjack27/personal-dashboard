<template>
  <div class=" bg-grey">
    <div class="min-h-screen max-w-1200 mx-auto my-auto flex items-center justify-center">
      <div class=" text-white grid grid-cols-4 gap-2 w-full">
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98 col-span-2">
          <h2 class="text-6xl font-heading m-2">
            16 <span>| 24</span>
          </h2>
          <p class="text-xl font-body">
            Goals Completed
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            <i class="fas fa-battery-three-quarters" />
          </h2>
          <p class="text-xl font-body">
            Respiration
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            <i class="fas fa-running" />
          </h2>
          <p class="text-xl font-body">
            Miles
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            36 &deg;
          </h2>
          <p class="text-xl font-body">
            Temperature
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            <i class="fas fa-bed" />
          </h2>
          <p class="text-xl font-body">
            Sleep Keep
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98 col-span-2">
          <h2 class="text-6xl font-heading m-2">
            98 <span>bpm</span>
          </h2>
          <p class="text-xl font-body">
            Heart Rate
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            170 <span>lbs</span>
          </h2>
          <p class="text-xl font-body">
            Weight
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            28 <span>%</span>
          </h2>
          <p class="text-xl font-body">
            Fat Percentage
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98 col-span-2">
          <h2 class="text-6xl font-heading m-2">
            118 <span>mgdl</span>
          </h2>
          <p class="text-xl font-body">
            Blood Glucose
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98 col-span-2">
          <h2 class="text-6xl font-heading m-2">
            680 <span>kcal</span>
          </h2>
          <p class="text-xl font-body">
            AVG Consumption
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            <i class="fas fa-dumbbell" />
          </h2>
          <p class="text-xl font-body">
            Workouts
          </p>
        </div>
        <div class="cursor-pointer h-block bg-cover bg-fixed flex flex-col items-center justify-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform hover:opacity-75 hover:scale-98">
          <h2 class="text-6xl font-heading m-2">
            85 <span>%</span>
          </h2>
          <p class="text-xl font-body">
            Body Hydration
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35498e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
