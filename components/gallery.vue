<template>
  <div class>
    <nuxt-link :to="`/projects/${skill.id}`">
      <img :src="skill.image" :width="width" :height="height" class="rounded-xl m-2 transition duration-300 ease-in-out transform hover:scale-110" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["skill"],
  components: {},
  beforeMount() {
    this.sortImages();
  },
  data: function() {
    return {
        sortedImages : '',
        width: '',
        height: ''
    };
  },
  methods: {
    sortImages() {
    let img = new Image();
    img.src = this.skill.image;
    console.log(img.naturalWidth, img.naturalHeight);
    if(img.height > 575 && img.naturalHeight < 1140){
        this.width = 490;
        this.height = 140;
    } else {
        this.width = 490;
        this.height = 300;
    }
    }
  }
};
</script>

<style>
.img{
    object-fit: fill;
}
</style>