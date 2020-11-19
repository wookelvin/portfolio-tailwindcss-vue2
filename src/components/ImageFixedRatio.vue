<template>
  <div>
    <div class="bgimg bg-gray-100 relative overflow-hidden" :style="{paddingBottom:`${ratio}%`}">
      <img :src="getImg(src)" :alt="alt" class="object-cover w-full h-full absolute"/>  
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImageFixedRatio extends Vue {

  @Prop({required:true})
  src!: string;

  @Prop({required: true})
  alt!: string;

  @Prop({default: 56.25})
  ratio!: number

  getImg(AssetImg: string){ 
    if (this.src){
      const images = require.context('../assets/', false, /\.jpg$/);
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
