<template>
    <div>
        <h6>这是登陆头部</h6>
        <button @click="handleChange">改变Vuex count 的值</button>
        <p>{{ msg }}</p>
        <button @click="handleRoute">动态添加路由</button>
    </div>
</template>

<script>
import goodlist from '@/views/goodlist.vue'
import router from '@/router/index.js'

export default {
    name : 'user',
    data() {
        return {
            msg : ''
        }
    },
    methods : {
        handleChange() {
            this.$store.dispatch('ctm')
            this.msg = this.$store.getters.getCount
        },
        handleRoute() {
            this.$router.addRoutes([{
                path : '/goodlist',
                name : 'goodlist',
                component : goodlist
            }])
            console.log(this.$router)
            console.log(this.$route)
            console.log(router)
            this.$router.push({name : 'goodlist'})
        }
    }
}
</script>

<style scoped>
h6{
    color : blue;
}
</style>


