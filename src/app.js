import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from './components/main-page/main-page';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <MainPage />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
