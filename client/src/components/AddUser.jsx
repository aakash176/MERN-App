import React, {useState} from 'react'
import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import {addUser} from '../services/addUser'
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
const AddUser = () => {
    const defaultObj = {
        name:'',
        username: '',
        email: '',
        phone: ''
    }
    const [ user, setUser ] = useState(defaultObj);
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const AddUser = async () => {
        await addUser(user)
    }
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"></Input>
      </FormControl>
      <Button variant="contained" onSubmit={()=> AddUser()}>Submit</Button>
    </Container>
  );
}

export default AddUser