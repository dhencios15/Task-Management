<template>
  <q-page class="q-pa-md">

    <no-tasks
      v-if="!Object.keys(tasksTodo).length">
    </no-tasks>

    <task-todo 
      v-else
      :tasksTodo="tasksTodo"/>

      <q-separator inset spaced/>
    
    <task-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"/>
    

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
    />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
    

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
     ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    'add-task': require('components/Tasks/Modals/AddTask').default,
    'task-todo': require('components/Tasks/TaskTodo').default,
    'task-completed': require('components/Tasks/TaskCompleted').default,
    'no-tasks': require('components/Tasks/NoTask').default
  }
}
</script>
