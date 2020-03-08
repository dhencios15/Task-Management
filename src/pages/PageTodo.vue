<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search/>
        <sort/>
      </div>
        <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No Search Result</p>

        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks
            v-if="!Object.keys(tasksTodo).length && !search  && !settings.showTasksInOneList">
          </no-tasks>

          <task-todo 
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"/>

            <!-- <q-separator inset spaced/> -->
          
          <task-completed
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"/>
        </q-scroll-area>
        

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            dense
            class="all-pointer-events"
            color="primary"
            size="20px"
            icon="add"
        />
        </div>

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
     ...mapGetters('settings', ['settings']),
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

<style>
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>