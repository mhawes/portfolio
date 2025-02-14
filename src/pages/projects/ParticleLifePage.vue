<template>
  <q-page class="q-pa-md">
    <div ref="p5Container" style="width: 100%; height: 400px;"></div>

    <q-card>
      <q-card-section>
        <div class="text-h6">Particle Life</div>
        <div class="text-subtitle1">Controls</div>
        <q-list bordered>
          <q-item>
            <q-item-section>Ctrl</q-item-section>
            <q-item-section>Open attraction matrix</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Enter</q-item-section>
            <q-item-section>Change particle colour</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Left click</q-item-section>
            <q-item-section>Place particle</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-subtitle1">Ruleset</div>
        <q-list bordered>
          <q-item>
            <q-item-section>Rule 1</q-item-section>
            <q-item-section>Particles attract or repel each other based on color.</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Rule 2</q-item-section>
            <q-item-section>Particles repel each other if they are too close.</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import p5 from 'p5';

const p5Container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!p5Container.value) return;

  new p5((sketch) => {
    sketch.setup = () => {
      if (!p5Container.value) return;

      sketch.createCanvas(p5Container.value.offsetWidth, p5Container.value.offsetHeight);
    };

    sketch.draw = () => {
      sketch.background(200);
      sketch.fill(255, 0, 0);
      sketch.ellipse(sketch.width / 2, sketch.height / 2, 50, 50);
    };
  }, p5Container.value);
});
</script>

<style scoped>
</style>
