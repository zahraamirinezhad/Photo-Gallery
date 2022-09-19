import classes from './Progressbar.module.scss'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'

const Progressbar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

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
