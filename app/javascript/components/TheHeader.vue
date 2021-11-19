<template>
  <nav class="navbar navbar-dark bg-dark mb-auto">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">タスク管理アプリ</span>
      <button
      class="btn btn-info"
      @click="increment(2)">TODOの下の数字を+1</button>
      <button
      class="btn btn-info"
      @click="decrement(3)">TODOの下の数字を-1</button>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>