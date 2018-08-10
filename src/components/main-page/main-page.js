import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

// Components
import Joke from '../joke/joke';

// Services
import JokeService from '../../services/icndb-service';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    settingsBtn: {
        alignSelf: 'flex-end',
    },
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

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            joke: '',
            loadingJoke: true,
            firstName: 'Chuck',
            lastName: 'Norris',
        };
    }

    componentDidMount() {
        const { firstName, lastName } = this.state;
        JokeService.getRandomJoke(firstName, lastName)
            .then(joke => this.setState({
                joke,
                loadingJoke: false,
            }));
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        const { open, joke, loadingJoke } = this.state;

        return (
            <div className={classes.root}>
                <IconButton className={classes.settingsBtn} onClick={() => this.handleOpen()}>
                    <Icon className={classes.icon}>settings</Icon>
                </IconButton>
                <Joke text={joke} loading={loadingJoke} />
                <Modal
                    open={open}
                    onClose={() => this.handleClose()}
                >
                    <div className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Type firstName and lastName to customize jokes
                        </Typography>
                        <TextField label="FirstName" className={classes.textInput} />
                        <TextField label="LastName" className={classes.textInput} />
                        <Button variant="contained" color="default" className={classes.button}>
                            Update
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

MainPage.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MainPage);
