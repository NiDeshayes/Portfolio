<template>
  <div>
    <div class="gallery">
      <img :src="currentImage" alt="" class="resized-image">
    </div>
    <button @click="previousImage" :disabled="currentIndex === 0">Previous</button>
    <button @click="nextImage" :disabled="currentIndex === images.length - 1">Next</button>
  </div>
</template>

<script>
export default {
  name: 'CahierDesCharges',
  data() {
    return {
      images: [
        require('../assets/cahier des charges page 1.png'),
        require('../assets/cahier des charges page 2.png'),
        require('../assets/cahier des charges page 3.png'),
        require('../assets/cahier des charges page 4.png'),
        require('../assets/cahier des charges page 5.png'),
        require('../assets/cahier des charges page 6.png'),
        require('../assets/cahier des charges page 7.png'),
        require('../assets/cahier des charges page 8.png'),
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }, 
  },
};
</script>

<style scoped>
.resized-image {
  max-width: 100%;
  height: 1000px;
}
</style>
