import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class CountField extends React.Component {

    render() {
        const {classes, handleChange, value, type, id} = this.props;
        return (
            <div>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="number"
                        value={value}
                        onChange={handleChange({id, type})}
                        type='number'
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </FormControl>
            </div>
        );
    }
}

CountField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountField);
