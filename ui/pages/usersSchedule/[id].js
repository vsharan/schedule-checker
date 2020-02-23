import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/common/Layout";
import ReactVirtualizedTable from "../../src/components/common/Table";
import { columns } from "../../src/components/workerSchedule/constant";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const Users = props => {
  const histroy = useRouter();
  const [usersData, setUserData] = React.useState([]);
  useEffect(() => {
    const data = props.workerSchedule.workerScheduleList.filter(
      user => parseInt(user.userId) === parseInt(props.query.id)
    );

    setUserData(data);
  }, [props.query]);

  console.log(usersData, "===============context", props);
  return (
    <Layout>
      <Grid item xs={12}>
        {" "}
        Availbility{" "}
      </Grid>
      <ReactVirtualizedTable columns={columns} rows={usersData} />
    </Layout>
  );
};

export default connect(state => state)(Users);
