<template>
    <div>
        <p></p>
        <!-- <input type="text" v-mode="message"> -->
        <!-- <p>{{message}}</p> -->
        <!-- <h1>{{msg}}</h1>
        <h1>{{message}}</h1>
        <h1>test</h1> -->
        <h1 v-for="(value, index) in listdata" :key="index">{{value}}</h1>
        <h2></h2>
    </div>
</template>

<script>
export default {
    name: 'test',
    props:{
        listdata: Array
    },
    data(){
        return{
            message: ''
        }
    }
}
</script>