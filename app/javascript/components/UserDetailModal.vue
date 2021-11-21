<template>
  <div :id="'user-detail-modal-' + user.id" >
    <div
      class="modal"
      tabindex="-1"
      @click.self="handleCloseModal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ user.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="handleCloseModal"></button>
          </div>
          <div class="modal-body">
            <p>{{ user.email }}</p>
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
    user: {
      type: Object,
      required: true
    }
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