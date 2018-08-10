import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        transform: 'translate(-50%, -50%)',
    },
    textInput: {
        margin: '10px',
    },
});

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.lastNameInput = React.createRef();
        this.firstNameInput = React.createRef();
        this.state = {
            firstName: '',
            lastName: '',
        };
    }

    onSubmit(stateHandler) {
        const { firstName, lastName } = this.state;

        stateHandler({
            firstName,
            lastName,
            open: false,
        });
    }

    handleFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    render() {
        const {
            classes,
            closeHandler,
            submitHandler,
            open,
        } = this.props;
        const { firstName, lastName } = this.state;

        return (
            <Modal
                open={open}
                onClose={closeHandler}
            >
                <div className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        Type firstName and lastName to customize jokes
                    </Typography>
                    <TextField
                        onChange={e => this.handleFirstName(e)}
                        label="FirstName"
                        className={classes.textInput}
                        value={firstName}
                    />
                    <TextField
                        onChange={e => this.handleLastName(e)}
                        label="LastName"
                        className={classes.textInput}
                        value={lastName}
                    />
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        onClick={() => this.onSubmit(submitHandler)}
                    >
                        Update
                    </Button>
                </div>
            </Modal>
        );
    }
}

SettingsModal.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    closeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SettingsModal);
