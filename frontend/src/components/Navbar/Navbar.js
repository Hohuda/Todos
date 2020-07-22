import React from "react";

import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="main-div">
        <Appbar position="static">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs></Grid>
              <Grid item xs>
                <Typography align="center" variant="h4">
                  My todos app
                </Typography>
              </Grid>
              <Grid item xs container justify="flex-end">
                <Button
                  variant="contained"
                  color="inherit"
                  endIcon={<Add color="primary" />}
                  size="small"
                >
                  <Typography variant="caption" color="primary">
                    New category
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Appbar>
      </div>
    );
  }
}

export default Navbar;
