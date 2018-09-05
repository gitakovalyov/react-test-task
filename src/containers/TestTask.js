import { connect } from 'react-redux';
import * as Actions from '../actions/TestTask';
import ModalWindow from '../components/ModalWindow';
import { selectItems } from '../selectors/TestTask';

const mapStateToProps = state => {
  return {
    items: selectItems(state),
  }
};

const mapDispatchToProps = dispatch => {
    return {
        saveItems: data => {
            dispatch(Actions.saveItems(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null)(ModalWindow);
