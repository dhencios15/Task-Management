<template>
    <q-card>
        <modal-header>Edit Task</modal-header>
        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <modal-task-name
                  :name.sync="taskToSubmit.name"
                  ref="modalTaskName" />

                <modal-due-date
                  :dueDate.sync="taskToSubmit.dueDate" 
                  @clear="clearDueDate"/>

                <modal-due-time
                  v-if="taskToSubmit.dueDate"
                  :dueTime.sync="taskToSubmit.dueTime" />
              
            </q-card-section>

            <modal-buttons />

        </form>

    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'


    export default {
        props: ['task', 'id'],
        mixins: [mixinAddEditTask],
        data() {
            return {
                taskToSubmit: {}
            }
        },
        methods: {
            ...mapActions('tasks', ['updateTask']),
            submitTask() {
                this.updateTask({
                    id: this.id,
                    updates: this.taskToSubmit
                })
                this.$emit('close')
            }
        },
        mounted() {
            this.taskToSubmit = Object.assign({}, this.task)
        }
    }
</script>

<style lang="scss" scoped>

</style>