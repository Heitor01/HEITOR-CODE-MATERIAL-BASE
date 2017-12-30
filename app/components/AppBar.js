import React from 'react';
import props from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    fontSize: 35,
  },
  menuButton: {
    marginLeft: -60,
    marginRight: 20,
    marginBottom: 60,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            NOME DO SITE
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.texto}>
        <TextField floatingLabelText="email" />
      </div>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
