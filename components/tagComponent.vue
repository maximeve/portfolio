<template>
  <div class="mt-2">
      <div class="text-white rounded-full px-3 m-1 cursor-pointer hover:bg-c-purple transition delay-75" @click="emitTag(name)">{{ name }}</div>
  </div>
</template>

<script>
export default {
props: ['name'],
methods:{
  emitTag(name){
    this.$emit('clicked', name)
  }
}
}
</script>

<style>

</style>