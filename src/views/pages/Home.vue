<template>
  <div>
    <HomeBanner/>
    <AboutMe class="my-20"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutMe from '@/views/AboutMe.vue';
import HomeBanner from '@/views/HomeBanner.vue';

@Component({
  components: {
    HomeBanner,
    AboutMe
  },
})
export default class Home extends Vue {}
</script>
