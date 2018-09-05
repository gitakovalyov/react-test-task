import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import CountField from './CountField';
import SelectContainer from './SelectContainer';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  addButton: {
    color: '#33eaff',
  }
});


class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items && nextProps.items.length) {
      this.setState({ items: nextProps.items, count: nextProps.items.length });
    }
  }

  deleteItem(index) {
    const {items} = this.state;
    this.setState({items: items.filter((i) => i.id !== index)});
  }

  addItem = () => {
    const {items} = this.state;
    let id = items.length ? Math.max.apply(Math, items.map(function(o) { return o.id; })) : 0;
    id++;
    items.push({id, select: 2, count: 0});

    this.setState({items});
  };

  handleChange = item => event => {
    const {items} = this.state;
    const foundIndex = items.findIndex(x => x.id == item.id);
    switch (item.type) {
      case 'select':
        items[foundIndex].select = event.target.value;
        break;
      case 'count':
        items[foundIndex].count = event.target.value;
        break;
      default:break;
    }
    this.setState({
      items,
    });
  };


  renderList = () => {
    const {items} = this.state;
    return items.map((item, k) => {
      return (
        <div key={item.id} className={'items'}>
          <div className={"item"}>
            <SelectContainer id={item.id} value={item.select} type="select" handleChange={this.handleChange}/>
          </div>
          <div className={"item"}>
            <CountField id={item.id} value={item.count} type="count" handleChange={this.handleChange}/>
          </div>
          <div className={"item"}>
            <Icon className={"md-red"} color="inherit" onClick={() => {
              this.deleteItem(item.id)
            }}>cancel</Icon>
          </div>
        </div>
      );
    });
  }

  render() {
    const {classes, onSave, onClose} = this.props;

    return (
      <React.Fragment>
        <List>
          {this.renderList()}
        </List>
        <Button onClick={this.addItem} className={classes.addButton}>Add</Button>
        <div className="bottom-buttons">
          <Button
            variant="contained"
            className="saveButton"
            type="submit"
            onClick={(e) => {e.preventDefault(); onSave(this.state.items);}}
          >Save</Button>
          <Button
            onClick={(e) => {e.preventDefault(); onClose();}}
            className={classes.button}>Cancel</Button>
        </div>
      </React.Fragment>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.any,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
};

export default withStyles(styles)(Items);