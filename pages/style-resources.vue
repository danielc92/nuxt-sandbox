<template>
  <div class="sr container">
    <h1 class="sr__title">Styled resources</h1>
    <p class="sr_para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam
      molestiae impedit explicabo repellat excepturi accusantium sit corrupti
      delectus unde! Eveniet qui aliquam praesentium vero laudantium nulla, ab
      ex accusantium?
    </p>
    <p class="sr_para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam
      molesro laudantium nulla, ab ex accusantium?
    </p>
    <p class="sr_para">
      at excepturi accusantium sit corrupti delectus unde! Eveniet qui aliquam
      praesentium vero laudantium nulla, ab ex accusantium?
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.sr {
  &__title {
    color: $blue;
  }
  &__para {
    color: $black;
  }
}
</style>
