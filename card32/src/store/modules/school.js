import axios from "axios";



const state={
    school:[
        {
            id: 1,
            fname: "Ram",
            lname: "Bhatt"
          },
          {
            id: 2,
            fname: "Govind",
            lname: "Kumar"
          },
          

    ],
    arr2:[]

};
const getters={

    allStudents: state => state.school,
    allArr2: state => state.arr2
};

const actions={
    async getStudents({commit}){
        const response = await axios.get("http://localhost:3000/school");
       commit("setStudents" , response.data);

    },

    async addStudent({commit} , student){
    const response = await axios.post("http://localhost:3000/school",student);
    commit("newStudent", response.data);
    }
   

};
const mutations={
    setStudents: (state,school) => (state.school = school),
    newStudent: (state,student) => (state.school.unshift(student))

};






export default {
    state,
    getters,
    actions,
    mutations
}