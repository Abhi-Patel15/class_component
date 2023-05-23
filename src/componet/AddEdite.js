import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AddEdite = ({item}) => {
    const [visible, setVisible] = useState(false)
    const [users, setUsers] = useState({
        name:'',
        email:'',
        phone:''
    })
    const {name, email,phone} = users

    const handleChange = (e) => {
        setUsers({...users,[e.target.name]:e.target.value})
    }

   const handleSubmit = async() => {
    if(!item){
        await axios.post("http://localhost:3500/users", users);
       
    }else{
        await axios.put(`http://localhost:3500/users/${item.id}`,users)
        
    }
    setVisible(false)
        window.location.reload()
}

useEffect(()=>{
    getData()
},[])

  const getData = async () => {
    const res = await axios.get(`http://localhost:3500/users/${item.id}`)
    setUsers(res.data)
  }
    const showModal = () => {
      setVisible(true)
       };

       const   handleOk = async ()=> {
        if(!item){
            await axios.post("http://localhost:3500/users", users);
      
        }else{
            await axios.put(`http://localhost:3500/users/${item.id}`,users)
            
        }
        setVisible(false)
              getData()
      };
    
    const  handleCancel = e => {
        console.log(e);
     setVisible(false)
      };

  return (
    <>
    <Button type="primary" onClick={showModal}>
      {!item?"add" : "edit"}
    </Button>
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
  
    >
      <Input label="name" placeholder='name' name='name' onChange={handleChange} value={name}/>
      <Input label="email" placeholder='email' name='email' onChange={handleChange} value={email}/>
      <Input label="phone" placeholder='phone' name='phone' onChange={handleChange} value={phone}/>
    </Modal>
    </>
  )
}
