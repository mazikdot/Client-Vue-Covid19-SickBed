<template>
    <div>
        <!-- <h1>{{message}}</h1>
        <app-input :msg="message"></app-input> -->
        <List :Listdata="items"></List>
    </div>
</template>

<script>
export default {
    name : 'test2',
    data(){
    return{
        message: 'This is a great Message',
        items:['first','second','third']
        }
      
    },
    componenets:{
        'app-input': Input
    }
}
</script>