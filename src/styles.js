//import ATHEME from '@APLACE/mui-theme';
import {createMuiTheme} from '@material-ui/core/styles';
import {responsiveFontSizes} from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    subtitle2: {

    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          height: '100%',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
