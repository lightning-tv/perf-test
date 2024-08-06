<template>
    <node ref="blockContainer">
        <FunTile v-for="block in blocks" :data="block"></FunTile>
    </node>
  </template>
  
  // <node v-for="block in blocks" v-bind="block"></node>
  <script setup>
  import { ref, onMounted, markRaw } from 'vue';
  import Tile from './components/Tile.vue';
  import FunTile from './components/FunTile.jsx';
  
  const WIDTH = 800;
  const HEIGHT = 600;
  
  const blocks = ref([]);
  const blockContainer = ref(null);
  
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  const generateRandomColor = () => '0x' + Math.floor(Math.random() * 16777215).toString(16) + 'FF';

  const generateBlocks = () => {
    const _blocks = markRaw([]);
    for (let step = 0; step < 1000; step++) {
      _blocks.push({
        id: step,
        width: random(50, 100),
        height: random(50, 100),
        x: random(0, WIDTH),
        y: random(0, HEIGHT),
        borderRadius: random(0, 50),
        color: generateRandomColor()
      });
    }
    blocks.value = _blocks;
  };
  
  onMounted(() => {
    setInterval(() => {
      generateBlocks();
    }, 2000);
  });
  
  </script>
  