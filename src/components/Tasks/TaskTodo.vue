<template>
  <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut absolute-top">
    <div class="q-mb-lg">
      <list-header 
        bgColor="bg-orange-4">
        Task
      </list-header>

      <q-list
        separator
        bordered>
        <task
          v-for="(task, key) in tasksTodo"
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
        props: ['tasksTodo'],
        components: {
            'task': require('components/Tasks/Task').default,
            'list-header': require('components/Tasks/Modals/Shared/ListHeader').default
        }
    }
</script>
