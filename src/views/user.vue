<template>
    <div>
        <h6>这是登陆头部</h6>
        <button @click="handleChange">改变Vuex count 的值</button>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
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
        }
    }
}
</script>

<style scoped>
h6{
    color : blue;
}
</style>


