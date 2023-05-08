import React, {useState, useEffect} from 'react'
import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import {editUser, getUser} from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    };
    & > Button{
        margin-top: 20px;
        width: 20%
    }
`
const EditUser = () => {

    const defaultObj = {
        name:'',
        username: '',
        email: '',
        phone: ''
    }
    const [ user, setUser ] = useState(defaultObj);
    const navigate = useNavigate()
    const {id} = useParams()
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
  
    }
    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = async () => {
        const res = await getUser(id)
        setUser(res.data)
    }

    const EditUser = async () => {
        await editUser(user, id)
        navigate('/all')
    }
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}></Input>
      </FormControl>
      <Button variant="contained" onClick={()=> EditUser()}>Edit</Button>
    </Container>
  );
}

export default EditUser