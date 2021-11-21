<template>
<div>
  <nav class="navbar navbar-dark bg-dark mb-auto">
    <div class="container">
      <span class="navbar-brand mb-0 h1">タスク管理アプリ</span>
      <span class="p-2 bg-warning rounded w-25">現在時刻：{{ now }}</span>
    </div>
  </nav>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('now', ['now'])
  },
  methods: {
    ...mapActions('now', ['getCurrentTime'])
  }
}
</script>