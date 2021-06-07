<template>
  <div class="w-full px-5 flex flex-wrap md:px-0">
      <div class="w-full md:w-1/3">
        <p class="text-white font-karla">{{ skill.period}}</p>
      </div>
      <div class="w-full md:w-2/3">
        <h2 class="text-3xl text-white font-karla">{{ skill.title}}</h2>
        <p class="text-white font-karla">{{ skill.desc}}</p>
         <hr class="my-10 w-2/3 border-t-1 h-px border-c-green">
      </div>
  </div>
</template>

<script>
export default {
props: ['skill']
}
</script>

<style>

</style>