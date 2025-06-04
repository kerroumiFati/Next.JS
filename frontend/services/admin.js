import axios from 'axios';
const API_INSERT = 'http://localhost:4000/admin/insertData';
const ROLE_INSERT ='http://localhost:3000/admin/addRole';
const GET_USER ='http://localhost:3000/admin/GetEmployer';
const GET_LOGIN ='http://localhost:3000/admin/GetLogin';
const GET_ROLE ='http://localhost:4000/admin/GetRole';

class Admin {
    Insert_Employer(Data) {

        return axios.post(API_INSERT , Data)
    }
    Insert_Roles(Data) {

        return axios.post(ROLE_INSERT , Data)
    }
    Get_Roles() {

        return axios.get(GET_ROLE)
    }
    Get_USER() {

        return axios.post(GET_USER)
    }
    Get_Login(Data) {

        return axios.post(GET_LOGIN ,Data)
    }
    
}

export default new Admin()