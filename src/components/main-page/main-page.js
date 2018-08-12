import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

// Components
import Joke from '../joke/joke';
import SettingsModal from '../settings-modal/settings-modal';

// Services
import JokeService from '../../services/icndb-service';

// Helpers
import Helpers from '../../helpers/common-helpers';

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
        let firstName;
        let lastName;

        if (Helpers.storageAvailable('localStorage')) {
            firstName = localStorage.getItem('firstName');
            lastName = localStorage.getItem('lastName');
        }

        this.state = {
            open: false,
            joke: {
                id: null,
                value: '',
            },
            loadingJoke: true,
            firstName: firstName || 'Chuck',
            lastName: lastName || 'Norris',
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

    componentDidUpdate(prevProps, { firstName: prevFirstName, lastName: prevLastName }) {
        const { firstName, lastName, joke } = this.state;

        if (firstName !== prevFirstName || lastName !== prevLastName) {
            this.getJoke(joke.id);
        }
    }

    getJoke(jokeId) {
        const { firstName, lastName } = this.state;
        const promise = jokeId ? JokeService.getJokeById(jokeId, firstName, lastName)
            : JokeService.getRandomJoke(firstName, lastName);

        promise.then(joke => this.setState({
            joke,
            loadingJoke: false,
        }));
    }

    openModal(event) {
        this.setState({ open: true });
        event.stopPropagation();
    }

    closeModal() {
        this.setState({ open: false });
    }

    submitModalData(props) {
        if (Helpers.storageAvailable('localStorage')) {
            localStorage.setItem('firstName', props.firstName);
            localStorage.setItem('lastName', props.lastName);
        }

        this.setState(props);
    }

    render() {
        const { classes } = this.props;
        const { open, joke, loadingJoke } = this.state;

        return (
            <div className={classes.root}>
                <IconButton className={classes.settingsBtn} onClick={e => this.openModal(e)}>
                    <Icon className={classes.icon}>settings</Icon>
                </IconButton>
                <Joke text={joke.value} loading={loadingJoke} />
                <SettingsModal
                    open={open}
                    closeHandler={() => this.closeModal()}
                    submitHandler={props => this.submitModalData(props)}
                />
            </div>
        );
    }
}

MainPage.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MainPage);
