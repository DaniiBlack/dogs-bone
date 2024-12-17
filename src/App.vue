<template>
  <div class="page-container">
    <NavBar />
    <Header />
    <main class="main-content">
      <div class="card-grid">
        <ImageCard 
          v-for="card in cards" 
          :key="card.id"
          v-bind="card"
        />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
import ImageCard from './components/gallery/ImageCard.vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
const cards = [
  {
    id: 1,
    image: 'https://picsum.photos/300/200?random=1',
    title: 'First Card',
    description: 'Description for first card'
  },
  {
    id: 2,
    image: 'https://picsum.photos/300/200?random=2',
    title: 'Second Card',
    description: 'Description for second card'
  },
  {
    id: 3,
    image: 'https://picsum.photos/300/200?random=3',
    title: 'Third Card',
    description: 'Description for third card'
  }
]
</script>