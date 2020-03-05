<template>
  <div class="q-mb-lg">
    <list_header 
      bgColor="bg-orange-4">
      Todo
    </list_header>

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
    
</template>

<script>

    export default {
        props: ['tasksTodo'],
        components: {
            'task': require('components/Tasks/Task').default,
            'list_header': require('components/Tasks/Modals/Shared/ListHeader').default
        }
    }
</script>
