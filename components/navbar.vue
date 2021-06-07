<template>
  <section class="pt-5 flex justify-between font-karla">
    <div
      class="logo bg-gradient-to-r from-c-red to-c-purple rounded-full flex items-center justify-center"
    >
      <p class="text-base p-3 text-white font-bold">MVE</p>
    </div>
    <div href="#" @click="toggle = !toggle" class="toggle-button cursor-pointer">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <nav class="navbar">
      <ul class="flex font-karla">
        <li :class="this.toggle? 'active' : ''" class="navbarlinks">
          <nuxt-link :to="{ path: '',hash:'#home'}" class="text-base text-white sm:mr-12">HOME</nuxt-link>
        </li>
        <li :class="this.toggle? 'active' : ''" class="navbarlinks ">
          <nuxt-link
            :to="{ path: '',hash:'#portfolio'}"
            class="text-base text-white md:mr-12"
          >PORTFOLIO</nuxt-link>
        </li>
        <li :class="this.toggle? 'active' : ''" class="navbarlinks">
          <nuxt-link :to="{ path: '',hash:'#skills'}" class="text-base text-white sm:mr-12">SKILLS</nuxt-link>
        </li>
        <li :class="this.toggle? 'active' : ''" class="navbarlinks ">
          <nuxt-link :to="{ path: '',hash:'#resume'}" class="text-base text-white sm:mr-12">RESUME</nuxt-link>
        </li>
        <li :class="this.toggle? 'active' : ''" class="navbarlinks ">
          <nuxt-link :to="{ path: '',hash:'#about'}" class="text-base text-white sm:mr-12">ABOUT</nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      toggle: false
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.toggle-button {
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 31px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media only screen and (max-width: 640px) {
  .logo{
    z-index: 4;
    margin: 0 10px;
  }
  .toggle-button {
    display: flex;
    z-index: 4;
  }
  .navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
  }
  .navbar ul {
    padding: 10px 0;
    z-index: 3;
    background-color: #16222f;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
  .navbarlinks {
    display: none;
  }
    .navbarlinks.active {
      justify-content: center;
    display: flex;
    padding-top: 10px;
    flex-direction: row;
    width: 100%;
    margin-right: 0px;
  }
}
</style>