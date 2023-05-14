<template>
    <div class="main_block">
    <h1 class="main_title">
        Test assignment for front-end developer
    </h1>
    <h3 class="main_text">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
    </h3>
<base-button>Sign up</base-button>
    </div>
</template>
<script>
export default{
    methods:{
        sayHello(){
            console.log('Hello!')
            
        }
    }
}
</script>
<style scoped lang="scss">
.main{
    &_block{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-image: url('../images/main_image.png');
    background-size: cover;
  background-position: center center;
  max-width: 1170px;
  margin: 0 auto;
  @media screen and (min-width: 360px) {
           padding: 40px 16px 70px 16px;
        }
        @media screen and (min-width: 768px) {
            padding: 89px 194px 88px 194px;
        }
        @media screen and (min-width: 1024px) {
            padding: 164px 332px 164px 332px;
        }
        @media screen and (min-width: 1170px) {
            padding: 164px 395px 163px 395px;
        }

}

&_title{
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    color: white;
    max-width: 400px;
    text-align: center;
}
&_text{
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: white;
    max-width: 400px;
    text-align: center;
    
}
}
</style>

