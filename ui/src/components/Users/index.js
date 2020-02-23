import ReactVirtualizedTable from "../common/Table";
import { columns } from "./constant";
import { connect } from "react-redux";
import { addWorker } from "../../actions/workerActionCreator";

const UserList = props => {
  const onRowClick = (e, rowData, actions) => {
    if (actions === "delete") {
      let updateState = props.worker.workerList.filter(
        user => user.id !== rowData.id
      );
      updateState = updateState.concat(updateState);
      props.addWorker(updateState);
    }
  };
  return (
    <ReactVirtualizedTable
      columns={columns}
      rows={props.worker.workerList}
      onRowClick={onRowClick}
    />
  );
};

export default connect(
  state => state,
  { addWorker }
)(UserList);
