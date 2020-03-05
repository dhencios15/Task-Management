<template>
    <div class="row q-mb-sm">
        <q-input
            outlined
            autofocus
            :value="name"
            @input="$emit('update:name', $event)"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            label="Task name"
            class="col">
            <template v-slot:append>
                    <q-icon
                    v-if="name"
                    name="close"
                    @click="$emit('update:name', '')"
                    class="cursor-pointer" />
            </template>
        </q-input>                 
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style lang="scss" scoped>

</style>