<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut">
    <div class="q-mt-lg">
      <list_header
        bgColor="bg-green-4">Completed Task</list_header>
        
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

    export default {
        props: ['tasksCompleted'],
        components: {
            'task': require('components/Tasks/Task').default,
            'list_header': require('components/Tasks/Modals/Shared/ListHeader').default
        }
    }
</script>
