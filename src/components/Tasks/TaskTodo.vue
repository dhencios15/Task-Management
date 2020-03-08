<template>
  <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut absolute-top">
    <div :class="{ 'q-mt-lg': !settings.showTasksInOneList}">
      <list-header 
        v-if="!settings.showTasksInOneList"
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
    import { mapGetters } from 'vuex'

    export default {
        props: ['tasksTodo'],
        components: {
            'task': require('components/Tasks/Task').default,
            'list-header': require('components/Tasks/Modals/Shared/ListHeader').default
        },
        computed: {
          ...mapGetters('settings', ['settings'])
        }
    }
</script>
