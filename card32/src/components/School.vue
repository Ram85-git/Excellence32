<template>
    <h1>Form from api</h1>
 <div class="form">
        <form >
            <input type="text" v-model="fname" placeholder="First name">
            <input type="text" v-model="lname" placeholder="Last name">
            <button class="button" v-on:click.prevent="onSubmit()">Submit</button>
        </form>
      </div>
<!--   
<ul class="products-listing">
    <li v-for="student in allStudents" :key="student.id">{{ student.fname }} {{ student.lname }}</li>
  </ul> -->
  <br>
  <table>
    <tr >
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        
    </tr>
    
    <tr v-for="student in allStudents" :key="student.id">
        <td>{{ student.id}}</td>
        <td>{{ student.fname}}</td>
        <td>{{ student.lname}}</td>
    
    </tr>
    
</table>


</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default{
    name: `School`,
    data(){
        return{
            fname:"",
            lname:"",
           
        }

    },

      methods: {
      ...mapActions(["addStudent"]),
    onSubmit(){

   this.addStudent({
    fname: this.fname,
    lname: this.lname
   });
}


  },
  
  computed: mapGetters(["allStudents"]),
          created(){

        this.addStudent();
  }
}



</script>

<style scoped>

form input{
    display: flex;
    flex-direction: row;
   
    margin: auto;
    
}

table {
    height: 50px;
    width: 400px;
    border: 2px solid gray;
}
 table tr th  { 
    border: 2px solid green;

 }
 table tr td  { 
    border: 2px solid rgba(31, 11, 150, 0.438);

 }


</style>