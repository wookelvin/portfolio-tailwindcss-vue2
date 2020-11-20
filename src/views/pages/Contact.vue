<template>
  <div>
    <ContactBanner/>
    <div class="my-10">
      <form @submit.stop.prevent="onSubmit()" v-if="!submitted">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <FormInput inputId="name" label="Name"/>
            <FormInput inputId="email" label="Email"/>
          </div>
          <div class="col-span-2">
            <FormTextarea inputId="message" label="Message"/>
            <div class="text-right">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </form>
      <div v-else>
        <div class="rounded-md p-5">
          <h2 class="font-bold text-2xl font-serif text-green-800">Success</h2>
          <p>You have successfully submitted your message. You'll be sure to hear back from me as soon as possible.</p>
          <Button class="mt-5">Back To Home</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactBanner from '@/views/ContactBanner.vue';
import FormInput from '@/components/FormInput.vue';
import FormTextarea from '@/components/FormTextarea.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    ContactBanner, 
    FormInput,
    FormTextarea, 
    Button

  },
})
export default class Contact extends Vue {
  submitted = false;
  onSubmit(){ 
    this.submitted = true;
  }
}
</script>
