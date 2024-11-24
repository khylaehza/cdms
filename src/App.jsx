import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import RoutesNav from './navigation/RoutesNav';
import './App.css';
function App() {
	return (
		<ThemeProvider theme={theme}>
			<RoutesNav />
		</ThemeProvider>
	);
}

export default App;
