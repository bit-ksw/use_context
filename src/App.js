import './App.css';

import { ThemeContext } from './context/ThemeContext'
import Page from './components/Page'
import { useState } from 'react';
import { UserContext } from './context/UserContext'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <UserContext.Provider value={'사용자test'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page></Page>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
