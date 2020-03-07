<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search/>
      <sort/>
    </div>
    <p
      v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No
      Search
      Result</p>
    <no-tasks
      v-if="!Object.keys(tasksTodo).length && !search">
    </no-tasks>

    <task-todo 
      v-if="Object.keys(tasksTodo).length"
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
import { mapState,mapGetters } from 'vuex'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
     ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
     ...mapState('tasks', ['search'])
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
    'no-tasks': require('components/Tasks/NoTask').default,
    'search': require('components/Tasks/Tools/Search').default,
    'sort': require('components/Tasks/Tools/Sort').default
  }
}
</script>
