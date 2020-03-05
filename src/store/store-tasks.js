import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1' : {
            name: 'Go to shop',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        'ID2' : {
            name: 'Go to sleep',
            completed: false,
            dueDate: '2019/05/13',
            dueTime: '13:30'
        },
        'ID3' : {
            name: 'Go to eat',
            completed: false,
            dueDate: '2019/05/15',
            dueTime: '11:30'
        }
    },
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)   
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)     
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((key) => {
            let task = state.tasks[key]
            if(!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((key) => {
            let task = state.tasks[key]
            if(task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}