<template>
   <button @click="action" class="base_button">
    <slot></slot>
   </button>
</template>
<script>
export default{
    methods:{
        action(){
            this.$emit('action')
        }
    }
}
</script>
<style scoped>

.base_button{
    background-color: #F4E041;
    color: black;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 4px 22px 4px 22px;
    border-radius: 80px;
    
}
</style>