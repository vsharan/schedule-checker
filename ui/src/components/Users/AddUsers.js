import React, {useEffect} from "react";
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
import { addWorker, deleteWorker } from "../../actions/workerActionCreator";

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

const AddUser = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    id: props.worker.workerList.length + 1,
    username: "",
    username: "",
    firstName: "",
    lastName: ""
  });
  useEffect(() => {
    setState({
      id: props.worker.workerList.length + 1,
      username: "",
      username: "",
      firstName: "",
      lastName: ""
    });
  }, [props.open]);
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleSubmit = () => {
    let updateState = props.worker.workerList;
    updateState = updateState.concat([state]);
    props.addWorker(updateState);
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
      <DialogTitle id="max-width-dialog-title">Add User</DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xl={2}>
              <TextField
                id="outlined-helperText"
                label="Username"
                name="username"
                value={state.username}
                onChange={handleChange("username")}
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
                name="firstName"
                label="Fisrt Name"
                value={state.firstName}
                onChange={handleChange("firstName")}
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue="Default Value"
                // helperText="Some important text"
                variant="outlined"
              />
            </Grid>
            <Grid item xl={2}>
              <TextField
                id="outlined-helperText"
                name="lastName"
                label="Last Name"
                value={state.lastName}
                onChange={handleChange("lastName")}
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue="Default Value"
                // helperText="Some important text"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add User
        </Button>
        <Button
          onClick={props.handleClose}
          variant="contained"
          color="secondary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  state => state,
  {
    addWorker,
    deleteWorker
  }
)(AddUser);
