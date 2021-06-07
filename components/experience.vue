<template>
  <section class="w-full">
    <div class="w-full justify-end">
      <h2 class="w-full font-rubik bg-c-pink text-white p-5 rounded-xl absolute left-0 text-right shadow-lg sm:w-1/3">EXPERIENCES</h2>
    </div>
    <div class="pt-36"></div>
    <experience-component data-aos="zoom-out" v-for="skill in this.skills" :key="skill.id" :skill="skill"></experience-component>
  </section>
</template>

<script>
import experienceComponent from "../components/experienceComponent.vue";
export default {
  components: {
    experienceComponent
  },
  beforeMount() {
    this.pushSkills();
  },
  computed: {
    getSkills() {
      return this.$store.getters["skills/getExperience"];
    }
  },
  data: function() {
    return {
      skills: []
    };
  },
  methods: {
    pushSkills() {
      this.skills = this.getSkills;
    }
  }
};
</script>

<style>
</style>