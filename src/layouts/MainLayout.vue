<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white q-pa-md">
      <q-toolbar>
        <q-btn dense flat round :icon="leftDrawerOpen ? 'close' : 'menu'" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h6 text-weight-light q-pd-xl">
          <q-avatar size="xl" >
            <img src="me.jpg" />
          </q-avatar>
          Martin Hawes
        </q-toolbar-title>

        <q-toggle v-model="darkMode"
          size="xl"
          checked-icon="dark_mode"
          color="dark"
          unchecked-icon="light_mode"/>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/')">
          <q-item-section avatar>
            <q-icon name="home" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label header>Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/portfolio')">
          <q-item-section avatar>
            <q-icon name="book" color="secondary" />
          </q-item-section>
          <q-item-section>
            <q-item-label header>Portfolio</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/contact')">
          <q-item-section avatar>
            <q-icon name="mail" color="accent" />
          </q-item-section>
          <q-item-section>
            <q-item-label header>Contact</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :class="{ 'bg-dark': darkMode, 'text-white': darkMode }">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Dark } from 'quasar'

const leftDrawerOpen = ref(false)
const darkMode = ref(false)

watch(darkMode, (val) => {
  Dark.set(val)
})
const router = useRouter()

function navigateTo(route: string) {
  leftDrawerOpen.value = false
  router.push(route)
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
