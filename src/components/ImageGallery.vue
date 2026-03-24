<script setup lang="ts">
import { ref, computed } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps<{
  slug: string;
  count: number;
}>();

const visible = ref(false);
const index = ref(0);

const thumbnails = computed(() =>
  Array.from({ length: props.count }, (_, i) =>
    `/images/projects/screenshots/${props.slug}-${i + 1}.webp`
  )
);

const fullImages = computed(() =>
  Array.from({ length: props.count }, (_, i) =>
    `/images/projects/screenshots/${props.slug}-${i + 1}.webp`
  )
);

const openLightbox = (i: number) => {
  index.value = i;
  visible.value = true;
  document.documentElement.style.overflow = 'hidden';
};

const closeLightbox = () => {
  visible.value = false;
  document.documentElement.style.overflow = 'auto';
};
</script>

<template>
  <div class="gallery">
    <Teleport to="body">
      <VueEasyLightbox
        :visible="visible"
        :imgs="fullImages"
        :index="index"
        @hide="closeLightbox"
      />
    </Teleport>

    <div class="gallery-grid">
      <div
        v-for="(url, i) in thumbnails"
        :key="i"
        class="gallery-item"
        :style="{ backgroundImage: `url('${url}')` }"
        @click="openLightbox(i)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.gallery-item {
  height: 140px;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 6px 10px -7px rgba(66, 68, 90, 1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px -6px rgba(66, 68, 90, 0.5);
  }
}
</style>
