import axios from 'axios'

const URL = "https://node-express-backend-qu35oqtp6a-uc.a.run.app";

export const addUser= async (data) => {
    try{

        return await axios.post(`${URL}/add`, data)
    } catch(error){
        console.log('error while adding user: ', error);
    }
}

export const getUsers = async() => {
    try{
        return await axios.get(`${URL}/all`)
    } catch(err){
        console.log('error while calling get user api', err);
    }
}

export const getUser = async(id) => {
    try{
        return await axios.get(`${URL}/edit/${id}`)
    } catch(err){
        console.log(err);
    }
}

export const editUser = async(user, id) =>{
    try{
        return await axios.put(`${URL}/edit/${id}`, user)

    } catch(err){
        console.log('error while updating user');
    }

}

export const deleteUser = async(id) => {
    try{

        return await axios.delete(`${URL}/delete/${id}`)
    } catch(err){
        console.log('error while deleting user in client side', err);
    }
}