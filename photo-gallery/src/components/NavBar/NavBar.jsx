import classes from './NavBar.module.scss'

const NavBar = ({ switchTheme }) => {
  return (
    <div className={classes.navbar}>
      <button
        className={`${classes.mode} ${classes.light_mode}`}
        onClick={() => switchTheme('light')}
      ></button>
      <button
        className={`${classes.mode} ${classes.dark_mode}`}
        onClick={() => switchTheme('dark')}
      ></button>
    </div>
  )
}

export default NavBar
