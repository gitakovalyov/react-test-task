import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {withStyles} from '@material-ui/core/styles';
import Header from './Header';
import Items from './Items';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  Popover: {
    minWidth: '600px',
  },
});


class ModalWindow extends React.Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleSubmit = (items) => {
    items = items.filter(n=>n);
    this.props.saveItems(items);
    this.handleClose();
  };

  onClose = () => {
    this.handleClose();
  };

  onSubmit = (e, values) => {
    e.preventDefault();
  };


  render() {
    const {classes, items} = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? 'simple-popper' : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          Show test list
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 75, left: 300 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="padding-20">
            <Header closeClick={this.handleClose} />
            <form onSubmit={this.onSubmit}>
              <Items items={items} onSave={this.handleSubmit} onClose={this.onClose}/>
            </form>
          </div>
        </Popover>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.any,
};

export default withStyles(styles)(ModalWindow);
