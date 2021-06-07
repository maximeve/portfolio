<template>
  <div class="container">
    <div class="w-full pt-20 text-white flex flex-wrap pb-20">
      <img :src="project.image" width="" class="w-full sm:w-1/2" />
      <div class="px-5 pt-10 w-full sm:pt-0 sm:w-1/2">
        <h1 class="font-rubik text-3xl pb-3">{{ project.title }}</h1>
        <h2 class="text-white pb-5">{{ project.field }}</h2>
        <p class="font-karla pb-3">{{ project.text}}</p>
        <a class="font-karla" :href="project.link" target="_blank">Link</a>
        <div class="pt-3 flex flex-wrap">
          <div
            class="border text-white rounded-full px-3 m-1"
            v-for="tag in project.tags"
            :key="tag"
          >{{ tag }}</div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import footerComponent from '../../components/footerComponent'
export default {
  components: {
    footerComponent
  },
  beforeMount() {
    this.getParams();
  },
  data: function() {
    return {
      id: "",
      project: ""
    };
  },
  methods: {
    getParams() {
      var projects = [];
      this.id = this.$router.history.current.params.id;
      projects = this.$store.getters["skills/getSkills"];
      console.log(this.id)
      for (var i = 0; i < projects.length; i++) {
        if(projects[i].id === parseInt(this.id)){
            this.project = projects[i]
            console.log(this.project)
        } else {
            console.log('failed')
        }
      }
    }
  }
};
</script>

<style scoped>
.html .body {
  margin: 0px !important;
  padding: 0px !important;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>