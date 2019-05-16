// Import React components
import React, { Component } from "react";

// Import Redux components
import { connect } from "react-redux";
import ACTIONS from "../modules/action";

// Import Routes
import Routes from "../route";

// Import Material UI
import {
  InputLabel,
  Input,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  withStyles,
  Button,
  FormControl,
  Paper
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// Import CSS
import style from "./css.js";

class Home extends Component {
  state = { addr: "" };
  handleSubmit = event => {
    this.props.updateAddr(this.state.addr);
    this.props.updateRoute(Routes.DASHBOARD);
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.login}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" align="center">
            Hello World
          </Typography>
          <FormControl margin="normal" fullWidth>
            <InputLabel>Ethereum Public Address</InputLabel>
            <Input name="addr" value={this.state.addr} onChange={this.handleChange} />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Termonitor me
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  addr: state.addr,
  route: state.route
});

const mapDispatchToProps = dispatch => ({
  updateAddr: username => dispatch(ACTIONS.updateAddr(username)),
  updateRoute: route => dispatch(ACTIONS.updateRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Home));
