<template>
<div>
  <nav class="navbar navbar-dark bg-dark mb-auto">
    <div class="container">
      <span class="navbar-brand mb-0 h1">タスク管理アプリ</span>
      <p class="p-2 bg-warning rounded w-25">現在時刻：{{ now }}</p>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="m-3" >
      <button
      class="btn btn-info"
      @click="increment(1)">TODOの下の数字を+1</button>
      <button
      class="btn btn-info"
      @click="decrement(1)">TODOの下の数字を-1</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['now'])
  },
  methods: {
    ...mapActions(['increment', 'decrement','getCurrentTime'])
  }
}
</script>