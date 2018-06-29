import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Routes'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../templates/custom.css' 
class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className='container'>
            <Routes />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
