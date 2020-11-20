<template>
  <div>
    <ResumeBanner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResumeBanner from '@/views/ResumeBanner.vue';

@Component({
  components: {
    ResumeBanner
  },
})
export default class Resume extends Vue {}
</script>
