import classes from './Progressbar.module.scss'
import { motion } from 'framer-motion'

const Progressbar = ({ progress }) => {
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
