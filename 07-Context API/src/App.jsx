import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider } from './contexts/Theme';
import { ThemeContext } from './contexts/Theme';
import Card from './components/Card';
import Themebutton from './components/Themebutton';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  
  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebutton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
