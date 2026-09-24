import { useContext } from "react";
import { DataContext } from "../Authcontext";
import { login, register, getme } from "../services/authservice";

export const useAuth = () => {
  const data = useContext(DataContext);

  const { loading, userr, setLoading, setuser } = data;

  const HandleRegister = async(username, email, password) => {
    try {
      setLoading(true);

      const response = await register(username, email, password);

      setuser(response.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const HandleLogin = async(email, password) => {
    try {
      setLoading(true);

      const response = await login(email, password);

      setuser(response.user);
     
    }catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlegetme = async() =>{

   try{

     setLoading(true)

    const response = await getme()

    setuser(response.user)

   }catch(err){
      console.log(err)
   }finally{
    setLoading(false)
   }

  }
  return {
    loading,
    userr,
    HandleLogin,
    HandleRegister,
    handlegetme
  };
};