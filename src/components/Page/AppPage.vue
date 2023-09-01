<script setup lang="ts"></script>

<template>
  <transition name="fade-slide" mode="out-in" appear>
    <section wh-full flex flex-col class="bg-[#f5f6fb] cus-scroll-y">
      <slot />
    </section>
  </transition>
</template>

<style scoped></style>
