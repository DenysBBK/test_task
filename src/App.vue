<template>
  <div class="wrapper">
  <the-header></the-header>
  <the-main></the-main>
  <get-request></get-request>
  <post-request></post-request>
  
</div>
</template>

<script>
import TheMain from './components/main/TheMain.vue';
import TheHeader from './components/main/TheHeader.vue';
import GetRequest from './components/main/GetRequest.vue';
import PostRequest from './components/main/PostRequest.vue';
export default {
  components:{
    TheMain,
    TheHeader,
    GetRequest,
    PostRequest
  },
  mounted(){
    document.title='TESTTASK'
  }
}


</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:200,300,regular,500,600,700,800,900,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic');
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
:focus,
:active {
   outline: none;
}
a:focus,
a:active {
   outline: none;
}
html,
body {
  height: 100%;
}
body {
  line-height: 1;
  font-family: 'Nunito';
}
input,
button,
textarea {
  font-size: inherit;
  
}
button {
  cursor: pointer;
  color: inherit;
  font-family: 'Nunito';
  background-color: transparent;
}
a {
  color: inherit;
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
.wrapper {
  min-height: 100%;
  background-color: #F8F8F8;
 
  flex-direction: column;
  overflow: hidden;
 
}
</style>
