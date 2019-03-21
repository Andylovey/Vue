<template>
    <div>
        <h6>登陆尾部</h6>
        <button @click="handleAjax">发送ajax请求</button>
    </div>
</template>

<script>
import {get,post} from '@/Api/http.js'
export default {
    name: 'pwd',
    data() {
        return {

        }
    },
    methods : {
        handleAjax() {
            post('/login',{username: 'xzt',password: 'admin'}).then(res => {
                console.log(res)
            })
        }  
    }
}
</script>

<style scoped>
h6{
    color : green
}
</style>


