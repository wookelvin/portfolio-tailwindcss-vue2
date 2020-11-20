<template>
  <Banner bgSrc="coding.jpg" bgAlt="Work sprawled across a desk" ratio="33.333">
    <h1>Resume</h1>
  </Banner>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner,
  },
})
export default class ResumeBanner extends Vue {}
</script>
