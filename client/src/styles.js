//import ATHEME from '@APLACE/mui-theme';
import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
//  ...ATHEME,
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
