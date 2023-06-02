import axios from "axios";


const state = {
  products:[
    {
        id:1,
        title: "product 1",
        price:"200"
    },
    {
        id:2,
        title: "product 2",
        price:"300"
    }
  ],
  arr:[]

};

const getters={
    allProducts: state => state.products,
    allArr: state => state.arr,


};
const actions={
    async getProducts({commit}){
        const response = await axios.get("http://localhost:3000/products");
       commit("setProducts" , response.data);

    },
    async addProduct({commit}, product){
    const response = await axios.post("http://localhost:3000/products",product);
    commit("newProduct", response.data);
    }
     
    ,
    async getDetails({commit}){
        const res = await axios.get("https://reqres.in/api/users?page=1");
        console.log("getData" , res)
        commit("setDetails" , res.data.data)
    }

};


const mutations={
    setProducts: (state,products) =>(state.products = products),
    setDetails: (state,arr) =>(state.arr = arr),
    newProduct: (state, product)=> state.products.unshift(product)
};

export default{
    state,
    getters,
    actions,
    mutations
}