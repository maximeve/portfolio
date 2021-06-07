<template>
  <section class="w-full flex flex-wrap pt-10 md:flex-nowrap">
    <div data-aos="fade-right" class="w-full text-white text-center font-rubik md:w-1/3 md:text-left">
      <h1
        class="cursor-pointer text-3xl font-bold hover:underline"
        @click="filterField('Design')"
      >DESIGN</h1>
      <h1
        class="cursor-pointer pt-10 text-3xl font-bold hover:underline"
        @click="filterField('Web')"
      >WEB</h1>
      <h1
        class="cursor-pointer pt-10 text-3xl font-bold hover:underline"
        @click="filterField('Mail')"
      >MAIL</h1>
      <div class="flex justify-center flex-wrap my-4 font-karla md:justify-start">
        <tag-component v-for="tag in this.tags" :key="tag" :name="tag" @clicked="filterTag"></tag-component>
      </div>
    </div>
    <div data-aos="fade-left" class="w-full flex flex-wrap mx-10 md:w-2/3">
      <stack :column-min-width="300" :gutter-width="10" :gutter-height="10" monitor-images-loaded>
        <stack-item
          v-for="skill in this.skills"
          :key="skill.id"
          style="transition: transform 300ms"
        >
          <nuxt-link :to="`/projects/${skill.id}`">
            <img
              :src="skill.image"
              class="rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            />
          </nuxt-link>
        </stack-item>
      </stack>
    </div>
  </section>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";
import tagComponent from "../components/tagComponent.vue";
export default {
  components: {
    tagComponent,
    Stack,
    StackItem
  },
  beforeMount() {
    this.sortTags();
    this.sortSkills();
  },
  computed: {
    getTags() {
      return this.$store.getters["skills/getSkills"];
    }
  },
  data: function() {
    return {
      tags: [],
      skills: []
    };
  },
  methods: {
    sortTags() {
      for (var i = 0; i < this.getTags.length; i++) {
        for (var j = 0; j < this.getTags[i].tags.length; j++) {
          if (this.tags.indexOf(this.getTags[i].tags[j]) === -1) {
            this.tags.push(this.getTags[i].tags[j]);
          }
        }
      }
    },
    sortSkills() {
      this.skills = this.getTags;
    },
    filterField(tag) {
      this.skills = [];
      for (var i = 0; i < this.getTags.length; i++) {
        if (this.getTags[i].field === tag) {
          this.skills.push(this.getTags[i]);
        }
      }
    },
    filterTag(tag) {
      this.skills = [];
      for (var i = 0; i < this.getTags.length; i++) {
        const tags = this.getTags[i].tags;
        const res = tags.indexOf(tag);
        if (res != -1) {
          this.skills.push(this.getTags[i]);
        }
      }
    }
  }
};
</script>
<style>
</style>