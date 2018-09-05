import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Title from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  root: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: grey[400],
  },
  title: {
    flexGrow: 1,
  },
};

function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </SvgIcon>
  );
}


function Header(props) {
  const { classes, closeClick } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bgColor}>
          <Title className={classes.title}>
            Title text
          </Title>
          <Button onClick={closeClick}><CloseIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  closeClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);