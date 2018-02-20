import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Loading = () => (
  <MuiThemeProvider>
    <div id="loadingIcon">
      <h4>Loading...</h4>
      <br />
      <CircularProgress 
        size={80} 
        thickness={8} 
        color={'#c5050c'} />

    </div>
  </MuiThemeProvider>
);

export default Loading;