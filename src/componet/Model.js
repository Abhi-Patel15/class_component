import { Button, Modal } from "antd";
import { Component, useState } from "react";

import React from 'react'

const Model = ({name, email, phone,}) => {
    const [visible, setVisible] = useState(false)
   const showModal = () => {
     setVisible(true)
      };
    
   const   handleOk = e => {
        console.log(e);
      setVisible(false)
      };
    
    const  handleCancel = e => {
        console.log(e);
     setVisible(false)
      };
  return (
    <>
    <Button type="primary" onClick={showModal}>
      view
    </Button>
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </Modal>
    </>
  )
}

export default Model;
