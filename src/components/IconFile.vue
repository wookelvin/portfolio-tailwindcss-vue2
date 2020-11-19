<template>
  <img :src="getImg(src)" :alt="alt" class="h-6 w-6"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class IconFile extends Vue {
  @Prop({required:true})
  src!: string;

  @Prop({required:true})
  alt!: string;

  getImg(AssetImg: string){ 
    if (this.src){
      const images = require.context('../assets/', false, /\.svg$/);
      return images('./'+AssetImg);
    }else{ 
      return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
