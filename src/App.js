import { useContext } from 'react';
import Dashboard from './containers/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './context/themeContext';

function App() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Dashboard />
      </>
    </ThemeProvider>
  );
}

export default App;
