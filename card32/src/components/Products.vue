<template>
  <div>
    Products
  </div>
  <ul class="products-listing">
    <li v-for="product in allProducts" :key="product.id">{{ product.title }} {{ product.price }}</li>
  </ul>
  <br>
  <h1>Data is comming from API</h1>
<table>
    <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Profile picture</th>
    </tr>
    <tr v-for="data in allArr" :key="data.id" id="frame">
        <td>{{ data.id}}</td>
        <td>{{ data.first_name}}</td>
        <td>{{ data.last_name}}</td>
        <td>{{ data.email}}</td>
        
        <td><img  :src="data.avatar"  alt=""></td>
        <br>
        
    
    </tr>
</table>
    


    
  
</template>

<script>
import { mapGetters , mapActions} from 'vuex';
export default {
  name: `Products`,
  methods: {
    ...mapActions(["getProduts","getDetails" ])
  },
  computed: mapGetters(["allProducts","allArr"]),
  created(){
    this.getProduts();
    this.getDetails();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table {
    height: 500px;
    width: 800px;
    border: 2px solid gray;
}
 table tr th  { 
    border: 2px solid green;

 }
 table tr td  { 
    border: 2px solid rgba(31, 11, 150, 0.438);

 }
 .img1{
    background-color: rgb(15, 94, 240);
 }

/* 
ul {
  list-style-type: none;
  padding: 0;
}
li { */
  /* display: inline-block; */
  /* margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
