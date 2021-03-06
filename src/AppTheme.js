import React, { Component } from 'react';
import { Font } from 'expo';
import { ThemeProvider } from 'react-native-material-ui';

import { AppWithNavigationState } from './redux';

// App theme config.
const uiTheme = {
  fontFamily: 'Roboto',
  palette: {
    primaryColor: '#0984e3',
    accentColor: '#054757',
    primaryTextColor: '#18232d',
    secondaryTextColor: '#666',
    alternateTextColor: '#FAFAFA',
    canvasColor: '#fff',
    borderColor: '#e3e3e3',
    disabledColor: '#666',
    disabledTextColor: '#888',
    activeIcon: '#18232d',
    inactiveIcon: '#888'
  }
};

class AppTheme extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    /* eslint-disable */
    await Font.loadAsync({
      'cabin-regular': require('./assets/fonts/Cabin-Regular.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
    /* eslint-enable */
  }

  render() {
    if (!this.state.fontLoaded) return null;
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <AppWithNavigationState />
      </ThemeProvider>
    );
  }
}

export default AppTheme;
