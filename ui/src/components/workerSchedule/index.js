import ReactVirtualizedTable from "../common/Table";
import { columns, rowData } from "./constant";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { addWorkerSchedule } from "../../actions/workerScheduleActionCreator";

const WorkerSchedule = props => {
  const history = useRouter();

  const onRowClick = (e,rowData, actions) => {
    debugger;
    e.stopPropagation();
    if (actions === "delete") {
      let updateState = props.workerSchedule.workerScheduleList.filter(
        userSchedule => userSchedule.id !== rowData.id
      );
      updateState = updateState.concat(updateState);
      props.addWorkerSchedule(updateState);
    } else {
      history.replace(`/usersSchedule/${parseInt(rowData.userId)}`);
    }
  };
  return (
    <ReactVirtualizedTable
      columns={columns}
      rows={props.workerSchedule.workerScheduleList}
      onRowClick={onRowClick}
    />
  );
};

export default connect(
  state => state,
  { addWorkerSchedule }
)(WorkerSchedule);
