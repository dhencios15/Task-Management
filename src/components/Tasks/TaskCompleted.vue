<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut">
    <div
      :class="{ 'q-mt-lg': !settings.showTasksInOneList}">
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-green-4">Completed Task
        </list-header>
        
      <q-list
        separator
        bordered>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key">
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: ['tasksCompleted'],
        components: {
            'task': require('components/Tasks/Task').default,
            'list-header': require('components/Tasks/Modals/Shared/ListHeader').default
        },
        computed: {
          ...mapGetters('settings', ['settings'])
        }
    }
</script>
