import React, { Component } from "react";
import { connect } from "react-redux";
import ACTIONS from "../modules/action";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl,
  Paper
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const style = themes => ({
  login: {
    width: "50%",
    textAlign: "center"
  }
});

class Home extends Component {
  state = { username: "" };

  handleSubmit = event => {
    this.props.updateUsername(this.state.username);
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
      <div>
        <Paper className={classes.login}>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl>
              <TextField
                label="New Task"
                id="margin-dense"
                value={this.state.username}
                margin="dense"
                name="username"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(ACTIONS.updateUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Home));
