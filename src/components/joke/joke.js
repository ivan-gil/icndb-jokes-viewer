import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import { withStyles } from '@material-ui/core/styles';

// Components
import LoadingInfo from '../loading-info/loading-info';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    alignCenter: {
        alignSelf: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto 0',
        padding: '0 200px',
    },
});

class Joke extends React.PureComponent {
    render() {
        const { classes, text, loading } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.textContainer}>
                    <LoadingInfo
                        className={classes.alignCenter}
                        status={loading}
                        availableJoke={text}
                    />
                    <h1 className={classes.alignCenter}>
                        {text}
                    </h1>
                </div>
            </div>
        );
    }
}

Joke.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Joke);
