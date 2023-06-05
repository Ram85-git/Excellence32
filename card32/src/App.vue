<template>
<AddProducts/>
<div id="app">
  <Products/>
</div>
<br>
<School/>
</template>

<script>
import AddProducts from './components/AddProducts.vue';
import Products from './components/Products.vue';
import School from './components/School.vue'
export default{
  name: 'App',
  components: {
    Products,
    AddProducts, 
    School

   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
