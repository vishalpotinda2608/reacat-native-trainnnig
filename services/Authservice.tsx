import axios from "axios";

class AuthService{

    getPost=()=>{
        return new Promise((resolve,reject)=>{
            axios.get('http://localhost:3000/student')
            .then((res)=>{
                resolve(res)
            }).catch(err=>{
                console.log(err);
                
            })
        })
    }
    savePost=(data)=>{
        return new Promise((resolve,reject)=>{
            axios.post('http://localhost:3000/student',data)
            .then((res)=>{
                resolve(res)
            }).catch(err=>{
                console.log(err);
                
            })
        })
    }

}

export default new AuthService;