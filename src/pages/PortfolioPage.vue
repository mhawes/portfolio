<template>
  <div class="portfolio-page">
    <div class="text-h3">My Projects</div>
    <q-separator spaced />
    <q-page class="projects-grid">
      <q-card v-for="project in projects" :key="project.id" class="project-card">
        <q-card-section>
          <q-parallax
            :src="project.image"
            style="height: 250px"
            :speed="5">
            <div class="absolute-bottom q-pa-md text-white dimmed">
              <div class="text-h6">{{ project.title }}</div>
              <div class="text-subtitle2">{{ project.description }}</div>
            </div>
          </q-parallax>

        </q-card-section>

        <q-card-actions align="center">
            <q-btn label="Explore" color="primary" @click="() => $router.push(project.link)" />
          <q-btn v-if="project.source" :href="project.source" target="_blank" label="Source" color="accent" />
        </q-card-actions>
      </q-card>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QPage, QCard, QCardSection, QCardActions, QBtn } from 'quasar';

const projects = ref([
  {
    id: 1,
    title: 'Particle life',
    image: 'projects/particle-life.png',
    description: 'A colourful cellular automata implemented using p5 js.',
    link: '#/portfolio/particle-life',
    source: 'https://github.com/mhawes/particle-life-p5'
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'path/to/image2.jpg',
    description: 'Description for project two.',
    link: 'https://example.com/project-two',
    source: 'https://example.com/project-one'
  },
  {
    id: 3,
    title: 'Project Two',
    image: 'path/to/image2.jpg',
    description: 'Description for project two.',
    link: 'https://example.com/project-two',
    source: 'https://example.com/project-one'
  },
  {
    id: 4,
    title: 'Project Two',
    image: 'path/to/image2.jpg',
    description: 'Description for project two.',
    link: 'https://example.com/project-two',
    source: 'https://example.com/project-one'
  },
  {
    id: 5,
    title: 'Project Two',
    image: 'path/to/image2.jpg',
    description: 'Description for project two.',
    link: 'https://example.com/project-two'
  },
]);
</script>

<style scoped>
.portfolio-page {
  padding: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.project-card h2 {
  margin: 16px 0 8px;
}

.project-card p {
  margin: 0 0 16px;
}
</style>
