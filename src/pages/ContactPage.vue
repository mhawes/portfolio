<template>
  <q-page>
  <div class="contact-page">
    <q-card class="q-pa-xl bg-grey-2: dark">
      <q-card-section>
        <div class="text-h3">Contact me</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="submitForm" id="contact-form" ref="contactForm">
          <q-input outlined dense label-color="accent" class="q-mb-md" filled v-model="form.name" label="Name *" type="text" required />
          <q-input outlined dense label-color="accent" class="q-mb-md" filled v-model="form.email" label="Email Address *" type="email" required />
          <q-input outlined dense label-color="accent" class="q-mb-md" filled v-model="form.phone" label="Phone Number" type="tel" />
          <q-input outlined dense label-color="accent" class="q-mb-md" filled v-model="form.company" label="Company" type="text" />
          <q-input outlined dense label-color="accent" class="q-mb-md" filled v-model="form.message" label="Message *" type="textarea" required />
          <q-btn type="submit" label="Submit" color="primary" :loading="loading" />
        </q-form>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog.visible" auto-close timeout={1000} transition-show="fade" transition-hide="fade">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ dialog.message }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-spinner v-if="loading" size="50px" color="primary" />
  </div>
</q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
});

const dialog = reactive({
  visible: false,
  message: ''
});

const loading = ref(false);

function submitForm() {
  loading.value = true;
  emailjs.send('service_wpqerke', 'template_wrchaxk', form, '3wn89PUJScw8lrj2J')
    .then(() => {
      dialog.message = 'Message sent!';
      dialog.visible = true;
      loading.value = false;
      (Object.keys(form) as (keyof typeof form)[]).forEach(key => {
        form[key] = '';
      });
    }, (error) => {
      dialog.message = 'Message failed to send: ' + error;
      dialog.visible = true;
      loading.value = false;
    });
}
</script>
