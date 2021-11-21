<template>
  <div>
    <div class="d-flex flex-row">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">TODO</div>
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

      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">Users</div>
        <div
          v-for="user in users"
          :key="user.id"
          :id="'user-' + user.id"
          class="bg-white border shadow-sm rounded my-2 p-4"
          @click="handleShowUserDetailModal(user)"
        >
          <span>{{ user.name }}さん</span>
          <br>
          <span>{{ user.email }}</span>
        </div>
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
        @show-edit-modal="handleShowTaskEditModal"
      />
    </transition>
    <transition name="fade">
      <UserDetailModal
        v-if="isVisibleUserDetailModal"
        :user = "userDetail"
        @close-modal="handleCloseUserDetailModal"
      />
    </transition>
    <transition name="fade">
      <TaskCreateModal
        v-if="isVisibleTaskCreateModal"
        @close-modal="handleCloseTaskCreateModal"
        @create-task="handleCreateTask"
      />
    </transition>
    <transition name="fade">
      <TaskEditModal
        v-if="isVisibleTaskEditModal"
        :task="taskEdit"
        @close-modal="handleCloseTaskEditModal"
        @update-task="handleUpdateTask"
      />
    </transition>
  </div>
</template>

<script>
import UserDetailModal from 'components/UserDetailModal'
import TaskDetailModal from './components/TaskDetailModal'
import TaskCreateModal from './components/TaskCreateModal'
import TaskEditModal from './components/TaskEditModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "TaskIndex",
  components: {
    TaskDetailModal,
    UserDetailModal,
    TaskCreateModal,
    TaskEditModal,
  },
  data() {
    return {
      taskDetail: {},
      taskEdit: {},
      userDetail: {},
      isVisibleTaskDetailModal: false,
      isVisibleTaskCreateModal: false,
      isVisibleTaskEditModal: false,
      isVisibleTaskDeleteModal: false,
      isVisibleUserDetailModal: false,
    }
  },
  computed: {
    ... mapGetters('tasks', ['tasks']),
    ... mapGetters('users', ['users']),
    ... mapGetters('now', ['now']),
  },
  created() {
    this.fetchTasks();
    this.fetchUsers();
    this.getCurrentTime();
  },
  methods: {
    ... mapActions('tasks', ['fetchTasks', 'createTask', 'deleteTask','updateTask']),
    ... mapActions('users', ['fetchUsers']),
    ... mapActions('now', ['getCurrentTime']),
    handleShowTaskDetailModal(task) {
      this.isVisibleTaskDetailModal = true;
      this.taskDetail = task;
    },
    handleCloseTaskDetailModal() {
      this.isVisibleTaskDetailModal = false;
    },
    handleShowTaskEditModal(task) {
      this.taskEdit = Object.assign({}, task);
      this.handleCloseTaskDetailModal();
      this.isVisibleTaskEditModal = true;
    },
    handleCloseTaskEditModal() {
      this.isVisibleTaskEditModal = false;
      this.taskEdit = {};
    },
    handleShowTaskDetailModal(task) {
      this.isVisibleTaskDetailModal = true;
      this.taskDetail = task;
    },
    handleCloseTaskDetailModal() {
      this.isVisibleTaskDetailModal = false;
    },
    handleShowUserDetailModal(user) {
      this.isVisibleUserDetailModal = true;
      this.userDetail = user;
    },
    handleCloseUserDetailModal() {
      this.isVisibleUserDetailModal = false;
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
    async handleDeleteTask(task) {
      try {
        await this.deleteTask(task);
        this.handleCloseTaskDetailModal();
      } catch (error) {
        console.log(error);
      }
    },
    async handleUpdateTask(task) {
      try {
        await this.updateTask(task);
        this.handleCloseTaskEditModal();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
</style>