import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
  },
});

const selectItems = [
  {id: 2, value: 'Twin'},
  {id: 3, value: 'Tripple'},
  {id: 4, value: 'Qaudro'},
];

class SelectContainer extends React.Component {
  state = {
    age: '',
    open: false,
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  renderList = (selectItems) => selectItems.map((item, i) =>
    (<MenuItem value={item.id} key={item.id}>{item.value}</MenuItem>));

  render() {
    const {classes, handleChange, id, type, value} = this.props;
    return (
      <FormControl className={classes.formControl}>
        <Select
          id='select'
          open={this.state.open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={value}
          onChange={handleChange({id, type})}
          inputProps={{
            name: 'type',
            id: 'demo-controlled-open-select',
          }}
        >
          {this.renderList(selectItems)}
        </Select>
      </FormControl>
    );
  }
}

SelectContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectContainer);
