import axios from 'axios'
class AuthService{
    onRegister(data){
       try {
        return new Promise((resolve,reject)=>{
            axios.post('http://localhost:3000/users',data)
            .then((res)=>{
                resolve({status:true})
            }).catch((error)=>{
                console.log(error);
                
            })
        })
       } catch (error) {
            console.log(error);
            
       }
    }

   getAllUser(){
    try {
        return new Promise((resolve,reject)=>{
            axios.get('http://localhost:3000/users')
            .then(res=>{
             resolve(res)
            }).catch(error=>{
                console.log(error);
                
            })
        })
    } catch (error) {
            console.log(error);
            
    }
   }
 

}


export default new AuthService;