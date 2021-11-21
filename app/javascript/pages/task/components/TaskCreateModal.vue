<template>
  <div id="task-create-modal">
    <div
      class="modal"
      tabindex="-1"
      @click.self="handleCloseModal"
    >
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">タイトル</label>
              <input type="text" class="form-control" v-model="task.title">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">説明文</label>
              <textarea type="text" class="form-control" v-model="task.description">
              </textarea>
            </div>
            <button
              type="button"
              class="btn btn-success"
              @click="handleCreateTask"
            >追加</button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="handleCloseModal"
            >閉じる</button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: ''
      },
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal')
    },
    handleCreateTask() {
      this.$emit('create-task', this.task)
    }
  }
}
</script>

<style scoped>
  .modal {
    display: block;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>