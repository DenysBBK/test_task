<template>
    <header class="header">
<img src="../images/Logo.png">

    <div class="header_buttons">  
            <base-button>Users</base-button>
            <base-button>Sign up</base-button>
    </div>

    </header>
</template>
<script>
export default{

}
</script>
<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin: 0 auto;
    min-height: 60px;
    align-items: center;
    max-width: 1170px;
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (min-width: 360px) {
        padding-left: 16px;
        padding-right: 16px;
    }
    @media screen and (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media screen and (min-width: 1170px) {
        padding-left: 00px;
        padding-right: 00px;
    }
}
.header_buttons{
    flex: 0 1 210px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 10px;
    & button{
        flex: 0 1 100px;
    }
}
.header img{
    height: 26px;
    width:104px;
}


</style>