<template>
    <div>
        <h3>欢迎来到登陆组件</h3>
        <router-link to="/login/user">登陆头部</router-link>
        <router-link to="/login/pwd">登陆尾部</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name : 'login',
    data() {
        return {

        }
    }    
}
</script>

<style scoped>

</style>

