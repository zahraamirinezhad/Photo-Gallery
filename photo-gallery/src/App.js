import classes from './App.module.scss'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar'
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  const switchTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className={classes.app} data-theme={theme}>
      <NavBar switchTheme={switchTheme} />
      <Home />
    </div>
  )
}

export default App
