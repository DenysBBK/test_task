<template>
    <div class="card">
        <img :src="photo">
        <span>{{ name }}</span>
        <div class="text">
        <span>{{ position }}</span>
        <span>{{ email }}</span>
        <span>{{ phone }}</span>
    </div>
    </div>
    
</template>
<script>
export default{
props:{
    photo:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
}
}
</script>
<style scoped lang="scss">
.card {
font-size: 16px;
line-height: 162%;

background: #FFFFFF;
border-radius: 10px;
padding: 20px;
display: flex;
flex-direction: column;
row-gap: 20px;
align-items: center;
& img{
    border-radius: 50%;
    flex: 0 0 70px;
    width: 70px;
}
@media screen and (min-width: 360px) {
       flex: 0 1 328px;
    }
    @media screen and (min-width: 768px) {
        flex: 0 1 344px;
    }
    @media screen and (min-width: 1024px) {
        flex: 0 1 282px;
    }
    @media screen and (min-width: 1170px) {
        flex: 0 1 370px;
    }
}
.text{
    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>