import classes from './Progressbar.module.scss'
import useStorage from '../../hooks/useStorage'

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  console.log(progress, url)

  return (
    <div className={classes.progressbarContainer}>
      <div
        className={classes.progressbar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default Progressbar
