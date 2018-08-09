import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                {'Hello World'}
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
