<template>
  <div class="d-flex flex-column min-vh-100">
    <TheHeader class="mb-auto"></TheHeader>
    <router-view/>
    <TheFooter class="mb-auto"></TheFooter>
  </div>
</template>

<script>
import TheHeader from 'components/TheHeader'
import TheFooter from 'components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>