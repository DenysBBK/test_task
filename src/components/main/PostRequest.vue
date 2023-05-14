<template>
    <section class="post">
        <div class="post_container" v-if="isRegSuccess">
        <h3 class="post__title">User successfully registered</h3>
        <img src="../images/success-image.png" class="success_image">
        </div>
        <div class="post__container" v-if="!isRegSuccess">
            <h3 class="post__title">Working with POST request</h3>
            <form @submit.prevent="submitTheForm" class="post__form">
                <div class="form-item">
                    <input type="text" name="name" id="name" placeholder="Your name" v-model.trim="name" 
                    :style="{border: validationError && validationMessages.name?  '1px solid #CB3D40' : '1px solid #D0CFCF'}">
                    <span v-if="validationError && validationMessages.name">{{ validationMessages.name[0] }}</span>
                </div>
                <div class="form-item">
                    <input type="email" name="email" id="email" placeholder="Email" v-model.trim="email"
                    :style="{border: validationError && validationMessages.email?  '1px solid #CB3D40' : '1px solid #D0CFCF'}">
                    <span v-if="validationError && validationMessages.email">{{ validationMessages.email[0] }}</span>
                </div>
                <div class="tel-box form-item">
                    <input type="tel" name="tel" id="tel" placeholder="Phone" v-model.trim="phone"
                    :style="{border: validationError && validationMessages.phone?  '1px solid #CB3D40' : '1px solid #D0CFCF'}">
                    <label class="tel-label" for="tel">+38 (XXX) XXX - XX - XX</label>
                    <span v-if="validationError && validationMessages.phone">{{ validationMessages.phone[0] }}</span>
                </div>
                <div class="checkboboxs form-item">
                    <p class="checkbox-title">Select your position</p>
                    <div class="checkbobox-item"
                    v-for="pos in positions"
                    :key="pos.id">
                        <input type="radio" name="position" :id="pos.name" :value="pos.id" v-model="position">
                        <label :for="pos.name">{{ pos.name }}</label>
                    </div>
                    <span v-if="validationError && validationMessages.position_id">{{ validationMessages.position_id[0] }}</span>
                </div>
                <div class="image-post form-item">
                    <input type="file"  @change="onFileChange">
                    <span v-if="validationError && validationMessages.photo">{{ validationMessages.photo[0] }}</span>
                </div>
                <base-button type="submit" class="base_button form-button" v-if="!isLoading">Sign up</base-button>
                <base-loader v-if="isLoading"></base-loader>
                <span class="form-validation" v-if="isError">{{ errorMessage }}</span>
            </form>
        </div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            name:'',
            email:'',
            phone:'',
            position:null,
            photo:null,
            isError:false,
            errorMessage:'',
            validationMessages:'',
            validationError:false,
            isRegSuccess: false,
            isLoading:false,
            
        }
    },
    methods:{
        onFileChange(event) {
      this.photo = event.target.files[0];
        },
       async submitTheForm(){
        if(this.name === '' && this.email === '' && this.position === null && this.photo === null){
            this.isError = true
            this.errorMessage = 'Fill the form please'
            return
        }
        const token = localStorage.getItem('token')
        if(!token){
            this.isError = true
            this.errorMessage = 'Expired token. Refresh the page'
            return
        }
            this.isLoading = true
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('position_id', this.position);
            formData.append('photo', this.photo);
         try{
            await this.$store.dispatch('postUser', formData)
            this.isRegSuccess = true
         }catch(error){
            if(error.message && error.details.message === "Validation failed"){
                this.validationError = true
                this.validationMessages = error.details.fails
                this.errorMessage = error.message
                this.isError = true;
            }
            this.errorMessage = error.details.message
            this.isError = true;
            this.isRegSuccess = false
         }
         this.isLoading = false
         
        },
        onFileSelected(event) {
        this.photo = event.target.files[0];
      
    },
    },
    computed:{
        positions(){
            return this.$store.getters.getPositions

        }
    },
    created(){
        this.$store.dispatch('getPosition')
        
        
    }
}
</script>
<style scoped lang="scss"> 
.post {
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    // .post__container

    &__container {
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
        display: flex;
        flex-direction: column;
        row-gap: 50px;
        max-width: 380px;
    }

    // .post__title

    &__title {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 100%;
        display: flex;
        align-items: flex-end;
        text-align: center;
    }

    // .post__form

    &__form {
        display: flex;
        flex-direction: column;
        row-gap: 50px;
        & #name{
            padding: 14px 16px;
          
            border-radius: 4px;
        }
        & #email{
            padding: 14px 16px;
            border: 1px solid #D0CFCF;
            border-radius: 4px;
        }
        & #tel{
            padding: 14px 16px;
            border: 1px solid #D0CFCF;
            border-radius: 4px;
        }
    }
}
.tel-box{
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    & .tel-label{
    font-weight: 400;
    font-size: 12px;
    line-height: 117%;
    color: #7E7E7E;
 }
}
.checkboboxs {
display: flex;
flex-direction: column;
row-gap: 7px;
}
.checkbox-title {
    font-size: 16px;
line-height: 162%;
color: rgba(0, 0, 0, 0.87);

}
.checkbobox-item {
    display: flex;
    column-gap: 12px;
    align-items: center;
    font-size: 16px;
line-height: 162%;
color: rgba(0, 0, 0, 0.87);
}
.image-post {
    max-width: 100%;
    display: flex;
    & button{
        padding: 14px 15px;   
        font-size: 16px;
        line-height: 162%;
        text-align: center;
        color: rgba(0, 0, 0, 0.87);
        border: 1px solid rgba(0, 0, 0, 0.87);
border-radius: 4px 0px 0px 4px;
    }
    & input {
        width: 100%;
        font-size: 16px;
        line-height: 162%;
        text-align: center;
        border: 1px solid #D0CFCF;
        border-radius: 4px;
        color: #7E7E7E;
    }
& input[type="file"]{
    width: 100%;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    color: #7E7E7E;
    
        &::file-selector-button{
        padding: 14px 15px;   
        font-size: 16px;
        line-height: 162%;
        text-align: center;
        color: rgba(0, 0, 0, 0.87);
        border: 1px solid rgba(0, 0, 0, 0.87);
border-radius: 4px 0px 0px 4px;
background: transparent;}
}
}

.form-button {
    background: #B4B4B4;
    align-self: center;
}
input{
    &::placeholder{
        color: #7E7E7E;
    }
}
.form-item{
    position: relative;
    & span{
        position: absolute;
        bottom: -20px;
        left: 0;
        color: red;
    }
}
.form-validation{
        left: 0;
        color: red;
}
.success_image{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#email, #name{
    width: 100%;
}
</style>