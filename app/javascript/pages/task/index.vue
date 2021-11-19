<template>
  <div>
    <div class="d-flex">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">TODO</div>
        <p>カウント：{{ count }}</p>
        <div
          v-for="task in tasks"
          :key="task.id"
          :id="'task-' + task.id"
          class="bg-white border shadow-sm rounded my-2 p-4"
          @click="handleShowTaskDetailModal(task)"
        >
          <span>{{ task.title }}</span>
        </div>
      <button class="btn btn-secondary col-12" @click="handleShowTaskCreateModal">タスクを追加</button>
      </div>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'TopIndex' }" class="btn btn-dark mt-5">戻る</router-link>
    </div>
    <transition name="fade">
      <TaskDetailModal
        v-if="isVisibleTaskDetailModal"
        :task = "taskDetail"
        @close-modal="handleCloseTaskDetailModal"
      />
    </transition>
    <transition name="fade">
      <TaskCreateModal
        v-if="isVisibleTaskCreateModal"
        @close-modal="handleCloseTaskCreateModal"
        @create-task="handleCreateTask"
      />
    </transition>
  </div>
</template>

<script>
import TaskDetailModal from 'components/TaskDetailModal'
import TaskCreateModal from 'components/TaskCreateModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "TaskIndex",
  components: {
    TaskDetailModal,
    TaskCreateModal,
  },
  data() {
    return {
      taskDetail: {},
      isVisibleTaskDetailModal: false,
      isVisibleTaskCreateModal: false,
    }
  },
  computed: {
    ... mapGetters(['tasks', 'count']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions([
      'fetchTasks',
      'createTask'
    ]),
    handleShowTaskDetailModal(task) {
      this.isVisibleTaskDetailModal = true;
      this.taskDetail = task;
    },
    handleCloseTaskDetailModal() {
      this.isVisibleTaskDetailModal = false;
    },
    handleShowTaskCreateModal() {
      this.isVisibleTaskCreateModal = true;
    },
    handleCloseTaskCreateModal() {
      this.isVisibleTaskCreateModal = false;
    },
    async handleCreateTask(task) {
      try {
        await this.createTask(task);
        this.handleCloseTaskCreateModal();
      } catch(error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
</style>