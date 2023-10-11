<script setup>
const temp = defineProps(["name", "baseUrlSvg"]);
</script>

<template>
  <div class="col-4">
    <div class="card p-2 mb-3" >
      <!-- <img :src="temp.baseUrlSvg" class="card-img-top" height="300"> -->
      <p>{{ temp.name }}</p>
      <h5 class="card-title">{{ episode.name }}</h5>
    </div>
  </div>
</template>

<style>
.card.p-2.mb-3 {
  width: 300px;
  height: 450px;
}

.custom-card {
  border: none;
}

.custom-card-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

</style>