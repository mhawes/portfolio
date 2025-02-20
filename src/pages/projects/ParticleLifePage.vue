<template>
  <q-page class="q-pa-md">
    <div ref="p5Container" style="width: 100%; height: 500px;"></div>

    <div class="q-pa-xs">
      <q-btn-group push >
        <q-btn icon="circle" color="accent" @click="mouseColorIx = (mouseColorIx + 1) % availableColours.length" />
        <q-btn icon="grid_on" color="accent" @click="showMatrix = !showMatrix" />
        <q-btn icon="help" color="accent" @click="randomise()" />
        <q-btn icon="auto_awesome" color="accent" @click="autoPopulate()" />
        <q-btn icon="delete" color="accent" @click="clear()" />
      </q-btn-group>
    </div>

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

let height = 400;
let width = 1900;

let surface: Surface;
let mouseColorIx = 0;
const availableColours = ['deeppink', 'yellow', 'blue', 'green', 'orange', 'darkmagenta' ];
let pauseSim = false;

let showMatrix = false;
const matrixSide = 60;

const radOne = 20;
const radTwo = radOne * 2;
const radThree = radTwo * 2;
const radFour = radThree * 2;
const radFive = radFour * 2;

let sk: p5 | null = null;

class Atom {
  color: p5.Color;
  position: p5.Vector | undefined;
  velocity: p5.Vector | undefined;
  colorRef: string;
  mass: number;

  constructor(color: p5.Color, position: p5.Vector | undefined, velocity: p5.Vector | undefined) {
    this.color = color;
    this.position = position;
    this.velocity = velocity;
    this.colorRef = color.toString('#rrggbb');
    this.mass = 7;
  }

  draw() {
    sk?.noStroke();
    sk?.fill(this.color);
    sk?.circle(this.position!.x, this.position!.y, this.mass);
  }
}

class Surface {
  atoms: Atom[];
  attractionMatrix: AttractionMatrix;

  constructor() {
    this.atoms = [];
    this.attractionMatrix = new AttractionMatrix();
  }

  addAtom(color: p5.Color, position: p5.Vector) {
    this.atoms.push(new Atom(color, position, sk?.createVector(0, 0) ));
  }

  addAtoms(color: p5.Color, count: number) {
    this.attractionMatrix.addColor(color);

    for (let i = 0; i < count; ++i) {
      this.atoms.push(new Atom(color, sk?.createVector(sk?.random(width), sk?.random(height)), sk?.createVector(0, 0)));
    }
  }

  getDistanceXWithWrapping(atomA: Atom, atomB: Atom) {
    let dx = atomA.position!.x - atomB.position!.x;
    let dxWrapMax = atomA.position!.x - (atomB.position!.x + width);
    let dxWrapMin = atomA.position!.x - (atomB.position!.x - width);
    if (Math.abs(dx) < Math.abs(dxWrapMax) && Math.abs(dx) < Math.abs(dxWrapMin)) {
      return dx;
    } else if (Math.abs(dxWrapMax) < Math.abs(dxWrapMin)) {
      return dxWrapMax;
    } else {
      return dxWrapMin;
    }
  }

  getDistanceYWithWrapping(atomA: Atom, atomB: Atom) {
    let dy = atomA.position!.y - atomB.position!.y;
    let dyWrapMax = atomA.position!.y - (atomB.position!.y + height);
    let dyWrapMin = atomA.position!.y - (atomB.position!.y - height);
    if (Math.abs(dy) < Math.abs(dyWrapMax) && Math.abs(dy) < Math.abs(dyWrapMin)) {
      return dy;
    } else if (Math.abs(dyWrapMax) < Math.abs(dyWrapMin)) {
      return dyWrapMax;
    } else {
      return dyWrapMin;
    }
  }

  doCalculations() {
    for (let i = 0; i < this.atoms.length; ++i) {
      let force = sk?.createVector(0, 0);
      for (let j = 0; j < this.atoms.length; ++j) {
        let atomA = this.atoms[i];
        let atomB = this.atoms[j];

        let g = this.attractionMatrix.getAttractionForColors(atomA.colorRef, atomB.colorRef) * 0.01;

        let dx = this.getDistanceXWithWrapping(atomA, atomB);
        let dy = this.getDistanceYWithWrapping(atomA, atomB);

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0 && distance <= radOne) {
          let F = g * 1 / distance;
          force!.x += F * dx;
          force!.y += F * dy;
        } else if (distance > radOne && distance <= radTwo) {
          g *= 0.5;
          let F = g * 1 / distance;
          force!.x += F * dx;
          force!.y += F * dy;
        } else if (distance > radTwo && distance < radThree) {
          g *= 0.25;
          let F = g * 1 / distance;
          force!.x += F * dx;
          force!.y += F * dy;
        } else if (distance > radThree && distance < radFour) {
          g *= 0.125;
          let F = g * 1 / distance;
          force!.x += F * dx;
          force!.y += F * dy;
        } else if (distance > radFour && distance < radFive) {
          g *= 0.0625;
          let F = g * 1 / distance;
          force!.x += F * dx;
          force!.y += F * dy;
        }

        atomA.velocity = p5.Vector.add(atomA.velocity!.mult(0.1), force!);
        atomA.position = p5.Vector.add(atomA.position!, atomA.velocity);

        if (atomA.position.x <= 0) { atomA.position.x = width; }
        if (atomA.position.x > width) { atomA.position.x = 0; }
        if (atomA.position.y <= 0) { atomA.position.y = height; }
        if (atomA.position.y > height) { atomA.position.y = 0; }
      }
    }
  }

  draw() {
    for (let i = 0; i < this.atoms.length; ++i) {
      this.atoms[i].draw();
    }
  }

  printDebug() {
    this.attractionMatrix.printDebug();
  }
}

class AttractionMatrix {
  attractions: Record<string, Record<string, number>>;
  colorRefs: string[];

  constructor() {
    this.attractions = {};
    this.colorRefs = [];
  }

  addColor(color: p5.Color) {
    let newColorRef = color.toString('#rrggbb');
    let newColorDict: Record<string, number> = {};

    this.colorRefs.push(newColorRef);

    for (let i = 0; i < this.colorRefs.length; ++i) {
      let existingColorRef = this.colorRefs[i];
      if (!this.attractions[existingColorRef]) {
        this.attractions[existingColorRef] = {};
      }
      this.attractions[existingColorRef][newColorRef] = 0;

      newColorDict[existingColorRef] = 0;
    }

    this.attractions[newColorRef] = newColorDict;
  }

  getAttractionForColors(colorARef: string, colorBRef: string) {
    return this.attractions[colorARef][colorBRef];
  }

  setAttractionForColors(colorA: p5.Color, colorB: p5.Color, attraction: number) {
    const colorARef = colorA.toString('#rrggbb');
    const colorBRef = colorB.toString('#rrggbb');
    this.attractions[colorARef][colorBRef] = attraction;
  }

  randomise() {
    for (let i = 0; i < this.colorRefs.length; ++i) {
      for (let j = 0; j < this.colorRefs.length; ++j) {
        const colorARef = this.colorRefs[i];
        const colorBRef = this.colorRefs[j];
        this.attractions[colorARef][colorBRef] = sk!.round(sk!.random(-0.5, 0.5), 2);
      }
    }
  }

  printDebug() {
    for (let i = 0; i < this.colorRefs.length; ++i) {
      let existingColorRef = this.colorRefs[i];
      sk?.print(existingColorRef + ': ' + JSON.stringify(this.attractions[existingColorRef]));
    }
  }
}
function updateMatrixValue() {
  let colorA = getMouseMatrixColorA();
  let colorB = getMouseMatrixColorB();
  let isRandButton = sk!.mouseX < matrixSide && sk!.mouseY < matrixSide;

  if (isRandButton) {
    surface.attractionMatrix.randomise();
  } else if (colorA != null && colorB != null) {
    let colorARef = sk!.color(colorA);
    let colorBRef = sk!.color(colorB);
    let amount = getMouseMatrixAmount();
    surface.attractionMatrix.setAttractionForColors(colorARef, colorBRef, amount!);
  }
}

function getMouseMatrixAmount() {
  let result = 0;
  for (let i = 0; i < availableColours.length; ++i) {
    let origY = matrixSide * (i + 1);
    if (sk!.mouseY >= origY && sk!.mouseY < origY + matrixSide) {
      return sk?.round(((sk?.mouseY - origY) / matrixSide) - 0.5, 2);
    }
  }
  return result;
}

function getMouseMatrixColorA() {
  for (let i = 0; i < availableColours.length; ++i) {
    let origX = matrixSide * (i + 1);
    if (sk!.mouseX >= origX && sk!.mouseX < origX + matrixSide) {
      return availableColours[i];
    }
  }
  return null;
}

function getMouseMatrixColorB() {
  for (let i = 0; i < availableColours.length; ++i) {
    let origY = matrixSide * (i + 1);
    if (sk!.mouseY >= origY && sk!.mouseY < origY + matrixSide) {
      return availableColours[i];
    }
  }
  return null;
}

function drawMatrix() {
  sk?.strokeWeight(5);
  sk?.stroke(50);

  sk?.fill(sk?.color('grey'));
  sk?.rect(0, 0, matrixSide, matrixSide);
  sk?.textSize(12);
  sk?.fill(sk?.color('white'));
  sk?.text('RAND', matrixSide / 4, matrixSide / 2);

  for (let i = 0; i < availableColours.length; ++i) {
    sk?.fill(sk?.color(availableColours[i]));
    let orig = matrixSide * (i + 1);
    sk?.rect(orig, 0, matrixSide, matrixSide);
    sk?.rect(0, orig, matrixSide, matrixSide);
  }

  sk?.strokeWeight(1);
  sk?.stroke(10);

  for (let i = 0; i < availableColours.length; ++i) {
    for (let j = 0; j < availableColours.length; ++j) {
      let colorARef = sk?.color(availableColours[i]).toString('#rrggbb');
      let colorBRef = sk?.color(availableColours[j]).toString('#rrggbb');
      let attraction = surface.attractionMatrix.getAttractionForColors(colorARef ?? '', colorBRef ?? '');

      let origX = matrixSide * (i + 1);
      let origY = matrixSide * (j + 1);
      sk?.fill(0);
      sk?.rect(origX, origY, matrixSide, matrixSide);

      sk?.textSize(12);
      sk?.fill(sk?.color('white'));
      sk?.text(attraction, origX + matrixSide / 3, origY + matrixSide / 2);
    }
  }
}

function drawAtomCursor() {
  sk?.noStroke();
  sk?.fill(sk?.color(availableColours[mouseColorIx]));
  sk?.circle(sk?.mouseX, sk?.mouseY, 6);
}

function randomise() {
  surface.attractionMatrix.randomise();
}

function clear() {
  surface.atoms = [];
}

function autoPopulate() {
  clear();
  const atomCount = Math.floor(Math.random() * 501) + 100;
  for (let i = 0; i < atomCount; i++) {
    const color = sk!.color(availableColours[Math.floor(Math.random() * availableColours.length)]);
    const position = sk!.createVector(sk!.random(width), sk!.random(height));
    surface.addAtom(color, position);
  }
}

onMounted(() => {
  if (!p5Container.value) return;

  new p5((sketch: p5) => {
    sketch.setup = () => {
      if (!p5Container.value) return;

      height = p5Container.value.offsetHeight;
      width = p5Container.value.offsetWidth;

      sk = sketch;
      sketch.createCanvas(p5Container.value.offsetWidth, p5Container.value.offsetHeight);
      surface = new Surface();
      for (let i = 0; i < availableColours.length; ++i) {
        surface.addAtoms(sketch.color(availableColours[i]), 0);
      }

      randomise();
      autoPopulate();
    };

    sketch.keyPressed = () => {
      if (sketch.key === 'Enter') {
        mouseColorIx = (mouseColorIx + 1) % availableColours.length;
      } else if (sketch.key === 'Control') {
        showMatrix = !showMatrix;
      }

      // pause
      if (sketch.key == 'p') {
        pauseSim = !pauseSim;
      }
    };

    sketch.mouseClicked = () => {
      if (!showMatrix) {
        surface.addAtom(sketch.color(availableColours[mouseColorIx]), sketch.createVector(sketch.mouseX, sketch.mouseY));
      } else {
        updateMatrixValue();
      }
    };

    sketch.mouseDragged = () => {
      if (!showMatrix) {
        surface.addAtom(sketch.color(availableColours[mouseColorIx]), sketch.createVector(sketch.mouseX, sketch.mouseY));
      }
    };

    sketch.draw = () => {
      sketch.background(0);
      if (!pauseSim) {
        surface.doCalculations();
      }
      surface.draw();
      drawAtomCursor();

      if (showMatrix) {
        drawMatrix();
      }
    };
  }, p5Container.value);
});
</script>

<style scoped>
</style>
