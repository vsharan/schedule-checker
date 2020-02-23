import React, { Fragment, useEffect } from "react";
import Layout from "../../src/components/common/Layout";
import { Button } from "@material-ui/core";
import AddUser from "../../src/components/users/AddUsers";
import UsersTable from "../../src/components/Users";

const Users = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    document.title='Users'
  })
  return (
    <Fragment>
      <Layout>
        <Button color={"primary"} variant="contained" onClick={handleClickOpen}>
          {" "}
          Add User{" "}
        </Button>
        <UsersTable />
        <AddUser open={open} handleClose={handleClose}/>
      </Layout>
    </Fragment>
  );
};

export default Users;
