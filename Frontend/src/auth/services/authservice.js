import axios from "axios";

export const register = async(username,email,password)=>{
try{
    const response = await axios.post("http://localhost:3000/perplex/users/register" ,{
        username,
        email,
        password
    },{
        withCredentials:true
    })

    return response.data

}catch(err){
    console.log(err)
}
}


export const login = async(email,password) =>{

  try{

    const response = await axios.post("http://localhost:3000/perplex/users/login",{
        email,
        password
    },{
        withCredentials:true
    })

    return response.data

  }catch(err){
    console.log(err)
  }

}

export const getme = async () => {
    const response = await axios.get(
        "http://localhost:3000/perplex/users/get-me",
        {
            withCredentials: true,
        }
    );

    return response.data;
}