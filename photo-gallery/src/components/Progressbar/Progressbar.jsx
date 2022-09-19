import classes from './Progressbar.module.scss'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Progressbar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div className={classes.progressbarContainer}>
      <motion.div
        className={classes.progressbar}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
      ></motion.div>
    </div>
  )
}

export default Progressbar
