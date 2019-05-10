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
  state = { username: "" };
  handleSubmit = event => {
    if (this.state.username !== "") {
      this.props.updateUsername(this.state.username);
      this.props.updateRoute(Routes.DASHBOARD);
    }
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
            Sign in
          </Typography>
          <FormControl margin="normal" fullWidth>
            <InputLabel>Username</InputLabel>
            <Input
              name="username"
              autoComplete="username"
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign in
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  route: state.route
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(ACTIONS.updateUsername(username)),
  updateRoute: route => dispatch(ACTIONS.updateRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Home));
