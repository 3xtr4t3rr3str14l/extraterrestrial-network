import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const overwrites = {
  palette: {
    primary1Color: '#d84315',
    primary2Color: '#bf360c',
    accent1Color: '#d84315',
    accent2Color: '#90a4ae',
    primary3Color: '#757575',
    accent3Color: '#ff5722',
    canvasColor: '#212121',
  },
};
export default getMuiTheme(baseTheme, overwrites);
