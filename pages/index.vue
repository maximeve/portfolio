<template>
  <div class>
    <div class="bg-c-darkblue">
      <div class="container">
        <navbar></navbar>
        <hero id="home"></hero>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #243B53;"></path></svg></div>
    <div class="bg-c-lightblue">
      <div class="container">
        <portfolio id="portfolio"></portfolio>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #243B53;"></path></svg></div>
    <div class="bg-c-darkblue">
      <div class="container">
        <skill-component id="skills"></skill-component>
        <experience id="resume"></experience>
        <about id="about"></about>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import hero from "../components/hero.vue";
import portfolio from "../components/portfolio.vue";
import skillComponent from "../components/skillComponent.vue";
import experience from "../components/experience.vue";
import about from "../components/about.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
  components: {
    navbar,
    hero,
    portfolio,
    skillComponent,
    experience,
    about,
    footerComponent
  }
};
</script>

<style>
.html .body {
  margin: 0px !important;
  padding: 0px !important;
}
.container {
  margin: 0 auto;
  /* max-width: 1280px; */
}
</style>
