import React, {useEffect, useState} from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import {deleteUser} from '../services/api'
import {Table, TableHead, TableBody, TableRow, TableCell, styled} from '@mui/material'
import {getUsers} from '../services/api'
const StyledTable= styled(Table)`
  width:90%;
  margin: 50px auto 0 auto
`

const AllUser = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])
  const getAllUsers = async () =>{
    let res = await getUsers()
    setUser(res.data)
  }


  const DeleteUser = async(id) => {
    await deleteUser(id)
    getAllUsers()

  }
  
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell><Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button></TableCell>
              <TableCell><Button variant="contained" onClick={() => DeleteUser(user._id)} >Delete</Button></TableCell>
            </TableRow>
          ))
        }

      </TableBody>
    </StyledTable>
  )
}

export default AllUser