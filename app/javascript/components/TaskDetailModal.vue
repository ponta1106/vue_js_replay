<template>
  <div :id="'task-detail-modal-' + task.id" >
    <div
      class="modal"
      tabindex="-1"
      @click.self="handleCloseModal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ task.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="handleCloseModal"></button>
          </div>
          <div class="modal-body">
            <p v-if="task.description == null">説明文なし</p>
            <p>{{ task.description }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="handleCloseModal">閉じる</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      title: {
        type: String,
        default: 'タイトルなし',
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal')
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