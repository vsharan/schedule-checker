import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  DialogActions,
  Button,
  Switch,
  makeStyles,
  Grid,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  addWorkerSchedule,
  deleteWorkerSchedule
} from "../../actions/workerScheduleActionCreator";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddSchedule = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    id: props.workerSchedule.workerScheduleList.length + 1,
    userId: "",
    name: "",
    onDate: "",
    startTime: "",
    endTime: ""
  });
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleSubmit = () => {
    let updateState = props.workerSchedule.workerScheduleList;
    updateState = updateState.concat([state]);
    props.addWorkerSchedule(updateState);
    props.handleClose();
  };
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={props.open}
      //   onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Add Schedule</DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  // ref={inputLabel}
                  htmlFor="outlined-userId-native-simple"
                >
                  UserId
                </InputLabel>
                <Select
                  native
                  value={state.userId}
                  onChange={handleChange("userId")}
                  labelWidth={50}
                  inputProps={{
                    name: "userId",
                    id: "outlined-userId-native-simple"
                  }}
                >
                <option key={-1} value={null}>
                        {""}
                      </option>
                  {props.worker.workerList &&
                    props.worker.workerList.map((info, index) => (
                      <option key={index} value={info.id}>
                        {info.username}
                      </option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xl={2}>
              <TextField
                id="outlined-helperText"
                label="Date"
                name="onDate"
                type={"date"}
                value={state.onDate}
                onChange={handleChange("onDate")}
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
            <Grid item xl={2}>
              <TextField
                id="outlined-helperText"
                name="startTime"
                label="Start Time"
                type={"time"}
                value={state.startTime}
                onChange={handleChange("startTime")}
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue="Default Value"
                helperText="Some important text"
                variant="outlined"
              />
            </Grid>
            <Grid item xl={2}>
              <TextField
                id="outlined-helperText"
                name="endTime"
                label="End Time"
                type={"time"}
                value={state.endTime}
                onChange={handleChange("endTime")}
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue="Default Value"
                helperText="Some important text"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Add Schedule
        </Button>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default connect(
  state => state,
  {
    addWorkerSchedule,
    deleteWorkerSchedule
  }
)(AddSchedule);
