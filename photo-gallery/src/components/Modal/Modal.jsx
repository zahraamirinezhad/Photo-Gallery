import classes from './Modal.module.scss'
import { motion } from 'framer-motion'

const Modal = ({ selectedImage, setSelectedImage }) => {
  const fadeSelectedImage = () => {
    setSelectedImage(null)
  }

  return (
    <motion.div
      className={classes.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={classes.overlay} onClick={fadeSelectedImage}></div>
      <motion.img
        src={selectedImage}
        alt="selected_image"
        initial={{ y: '-100vh' }}
        animate={{ y: '0' }}
      />
    </motion.div>
  )
}

export default Modal
