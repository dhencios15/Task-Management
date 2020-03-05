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

    export default {
        props: ['task', 'id'],
        data() {
            return {
                taskToSubmit: {}
            }
        },
        methods: {
            ...mapActions('tasks', ['updateTask']),
            submitForm() {
                this.$refs.modalTaskName.$refs.name.validate()
                if(!this.$refs.modalTaskName.$refs.name.hasError) {
                    this.submitTask()
                }
            },
            submitTask() {
                this.updateTask({
                    id: this.id,
                    updates: this.taskToSubmit
                })
                this.$emit('close')
            },
            clearDueDate() {
                this.taskToSubmit.dueDate = ''
                this.taskToSubmit.dueTime = ''
            }
        },
        components: {
            'modal-header': require('components/Tasks/Modals/Shared/ModalHeader').default,
            'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName').default,
            'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate').default,
            'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime').default,
            'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons').default
        },
        mounted() {
            this.taskToSubmit = Object.assign({}, this.task)
        }
    }
</script>

<style lang="scss" scoped>

</style>