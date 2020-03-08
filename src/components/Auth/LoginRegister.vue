<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary" />
                </template>
                {{ tab | titleCase }} to access your task
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
              class="col"
              outlined
              v-model="formData.email"
              label="Email"
              ref="email"
              stack-label
              lazy-rules
              :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']" />
        </div>
        <div class="row q-mb-md">
            <q-input
              class="col"
              outlined
              v-model="formData.password"
              type="password"
              label="Password"
              ref="password"
              stack-label
              lazy-rules
              :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']" />
        </div>
        <div class="row">
            <q-space/>
            <q-btn
              type="submit"
              color="primary"
              :label="tab" />
        </div>
    </form>
    
</template>

<script>
    export default {
        props: ['tab'],
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            isValidEmailAddress(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            submitForm() {
                this.$refs.email.validate()
                this.$refs.password.validate()
                if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
                    if(this.tab == 'login') {
                        console.log('login');
                    } else {
                        console.log('register');
                    }
                }
            }
        },
        filters: {
            titleCase(value) {
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>