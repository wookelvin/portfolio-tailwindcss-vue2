<template>
  <div>
    <div class="bgimg bg-gray-100 relative overflow-hidden" :style="{paddingBottom:`${ratio}%`}">
      <img :src="bgImg(bgSrc)" :alt="bgAlt" class="object-cover w-full h-full absolute"/>  
      <div class="bg-white dark:bg-gray-800 pt-5 pr-8 absolute bottom-0 max-w-lg">
        <div class="text-4xl font-serif font-bold">
          <slot></slot>
        </div>
        <slot name="cta"></slot>
      </div>
    </div>
    
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
  @Prop({required: true})
  bgSrc!: string;

  @Prop({required: true})
  bgAlt!: string;

  @Prop({default: 56.25})
  ratio!: number

  bgImg(AssetImg: string){ 
    if (this.bgSrc){
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
