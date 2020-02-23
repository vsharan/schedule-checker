import React, { Fragment, useEffect } from "react";
import Layout from "../../src/components/common/Layout";
import WorkerSchedule from "../../src/components/workerSchedule";
import { Button } from "@material-ui/core";
import AddSchedule from "../../src/components/workerSchedule/AddSchedule";

const workerSchedule = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    document.title='Users Schedules'
  })
  return (
    <Fragment>
      <Layout>
        <Button color={"primary"} variant="contained" onClick={handleClickOpen}>
          {" "}
          Add Schedule{" "}
        </Button>
        <WorkerSchedule />
        <AddSchedule open={open} handleClose={handleClose}/>
      </Layout>
    </Fragment>
  );
};

export default workerSchedule;
