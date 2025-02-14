<template>
  <q-page class="q-pa-md">
    <div class="text-h3">My Projects</div>
    <q-separator spaced />
      <div class="projects-grid">
      <q-card v-for="project in projects" :key="project.id" class="project-card">
        <q-card-section>
          <q-img
            :src="project.image"
            style="height: 250px">
            <div class="absolute-bottom q-pa-md text-white bg-dimmed">
              <div class="text-h6">{{ project.title }}</div>
              <div class="text-subtitle2">{{ project.description }}</div>
              <q-chip
                v-for="(tag, index) in project.tags"
                :key="index"
                color="secondary"
                text-color="white"
                size="sm"
              >
                {{ tag }}
              </q-chip>
            </div>
          </q-img>
        </q-card-section>

        <q-card-actions align="center" >
          <q-btn-group style="width: 90%">
            <q-btn style="width: 90%" :disable="!project.link" label="Explore" color="primary" @click="navigateToProject(project.link)" />
            <q-btn style="width: 90%" v-if="project.source" :href="project.source" target="_blank" label="Source" color="accent" />
          </q-btn-group>
        </q-card-actions>
      </q-card>
      </div>
  </q-page>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { QPage, QCard, QCardSection, QCardActions, QBtn } from 'quasar';
const router = useRouter();

function navigateToProject(link: string | null) {
  if (link) {
    router.push(link);
  }
};

const projects = ref([
  {
    id: 1,
    title: 'Particle life',
    image: 'projects/particle-life.png',
    description: 'A colourful cellular automata implemented using p5 js.',
    tags: ['p5.js', 'cellular automata'],
    link: '/portfolio/particle-life',
    source: 'https://github.com/mhawes/particle-life-p5'
  },
  {
    id: 2,
    title: 'Portfolio site',
    image: 'projects/quasar.png',
    description: 'The site you\'re looking at.',
    tags: ['Vue 3', 'Quasar', 'TypeScript'],
    link: '/',
    source: 'https://github.com/mhawes/portfolio'
  },
]);
</script>

<style scoped>
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
