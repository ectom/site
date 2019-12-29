//import ATHEME from '@APLACE/mui-theme';
import {createMuiTheme} from '@material-ui/core/styles';
import {responsiveFontSizes} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


let theme = createMuiTheme({
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

const customStyles = makeStyles({
  subtitle1: {
    fontWeight: 'bold',
    fontSize: '250px',
  },
  subtitle2: {
    fontSize: '16px'
  },
})

const exports = {
  theme: theme,
  customStyles: customStyles
}

export default exports;
