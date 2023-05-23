import { Button, Table } from "antd";

import axios from "axios";
import React, { Component } from "react";
import Model from "./Model";
import { AddEdite } from "./AddEdite";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const res = await axios.get("http://localhost:3500/users");
    this.setState({ users: res.data });
  };

  
   deleteData = async (id) => {
    await axios.delete(`http://localhost:3500/users/${id}`)
    this.fetchData()
   }

  render() {
    const { users } = this.state;
    const Data = users.length>0 && users?.map((item) => ({
        item,
      key: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      action:(<><Model name = {item.name} email = {item.email} phone = {item.phone} /> &nbsp;<AddEdite  item={item}/>&nbsp;<Button onClick={()=>this.deleteData(item.id)
    }>delete</Button></>)
      
      
    }));

    console.log(users, "users");

    const columns = [
      {
        title: "name",
        dataIndex: "name",
      },
      {
        title: "email",
        dataIndex: "email",
      },
      {
        title: "phone",
        dataIndex: "phone",
      },
      {
        title: "Action",
        dataIndex: "action",
      },
    ];

    return (
      <>
      <AddEdite />
        <Table dataSource={Data} columns={columns} />
      </>
    );
  }
}
export default Home;
