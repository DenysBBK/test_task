<template>
    <section class="get">
        <div class="container">
            <h2 class="get-title">Working with GET request</h2>
            <div class="card-box">
                <user-card v-for="user in fisrtUsers"
                :name="user.name"
                :position="user.position"
                :email="user.email"
                :key="user.id"
                :phone="user.phone"
                :photo="user.photo"
                >{{ user }}</user-card>
            </div>
            <base-button @action="getMoreUsers" v-if="!isError && !isLoading">Show more</base-button>
            <base-loader v-if="isLoading"></base-loader>
            <p v-if="isError">{{ errorMessage }}</p>
        </div>
    </section>
</template>
<script>
import UserCard from '../ui/UserCard.vue';
export default{
    components:{
        UserCard
    },
    data(){
        return{
            isError:false,
            errorMessage:'',
            isLoading:false
        }
    },
    computed:{
        fisrtUsers(){
            return this.$store.getters.mainUsers
        }
    },
    methods:{
        async getMoreUsers(){
            this.isLoading = true
            try{
                await this.$store.dispatch('getUsers')
            }catch(error){
                this.isError = true
                this.errorMessage = error.message 
            }
            this.isLoading = false
        },
        
    },
    //First 6 users and token after page loaded
    created(){
        this.$store.dispatch('getUsers')
        this.$store.dispatch('getUserToken')
    }
}
</script>
<style scoped lang="scss">
.get {
    padding-top: 140px;
    max-width: 1170px;
    margin: 0 auto;
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
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
}
.get-title {
    text-align: center;
font-size: 40px;
line-height: 40px;
}
.card-box {
display: flex;
gap: 20px;
justify-content: center;
@media screen and (min-width: 360px) {
    gap: 20px;
    flex-wrap: wrap;
    }
    @media screen and (min-width: 768px) {
        gap: 16px;
    }
    @media screen and (min-width: 1024px) {
        gap: 29px;
    }
}

</style>