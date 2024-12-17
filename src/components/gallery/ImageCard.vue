<template>
  <a :href="link" class="image-card">
    <article>
      <img :src="image" :alt="title" class="card-image">
      <div class="border-t-2 border-primary"></div>
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <div class="read-more">
          <span class="star text-accent-yellow">★</span>
          <span class="read-more-text">Read more</span>
        </div>
      </div>
    </article>
  </a>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  link: {
    type: String,
    default: '#'
  }
})
</script>

<style scoped>
.image-card {
  @apply rounded-lg shadow-lg overflow-hidden bg-secondary w-[300px] 
         transition-transform hover:scale-105 block no-underline;
}

.card-image {
  @apply w-full h-48 object-cover;
}

.card-content {
  @apply p-4;
}

.card-title {
  @apply font-bold text-lg mb-2 text-white;
}

.card-description {
  @apply text-gray-300 mb-4;
}

.read-more {
  @apply text-white hover:text-accent-green transition-colors flex items-center gap-2 mt-2;
}

.star {
  @apply text-xl;
}
</style>