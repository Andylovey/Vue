<template>
    <div>
        <h6>登陆尾部</h6>
        <button @click="handleAjax">发送ajax请求</button>
        <button @click="handleGetMock">获取Mock数据</button>
    </div>
</template>

<script>
import {get,post} from '@/Api/http.js'
// import axios from 'axios'
export default {
    name: 'pwd',
    data() {
        return {

        }
    },
    methods : {
        handleAjax() {
            post('/login',{username: 'xzt',password: 'admin'}).then(res => {
                localStorage.setItem('token',res.content.access_token)
                this.$router.push({
                    path : '/dashboard'
                })
            })
        },
        handleGetMock() {
            // axios.post('/news/getuser').then(res => {
            //     console.log(res)
            // })
            post('/news/getuser',{start: 0 ,limit : 10}).then(res => {
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


