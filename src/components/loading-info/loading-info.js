import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import Typography from '@material-ui/core/Typography';

class LoadingInfo extends React.PureComponent {
    render() {
        const { availableJoke, status } = this.props;
        let text;

        if (!status) {
            text = '';
        } else if (availableJoke) {
            text = 'Loading fresh Joke...';
        } else {
            text = 'Loading Joke...';
        }

        return (
            <Typography variant="headline" align="center">
                {text}
            </Typography>
        );
    }
}

LoadingInfo.propTypes = {
    availableJoke: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default LoadingInfo;
