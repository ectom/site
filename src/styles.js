import { createMuiTheme } from '@material-ui/core/styles';
// import Raleway from './fonts/raleway/Raleway-Regular.ttf';

// const raleway = {
//   fontFamily: 'Raleway',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Raleway'),
//     local('Raleway-Regular'),
//     url(${Raleway}) format('ttf')
//   `,
//   unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
//      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

const theme = createMuiTheme({
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
		textField: {
			display: 'block',
			marginBottom: '10px',
		},
	},
});

export default theme;
