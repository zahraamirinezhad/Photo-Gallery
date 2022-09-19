import useFirestore from '../../hooks/useFirestore'
import classes from './ImageGrid.module.scss'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images')

  return (
    <div className={classes.imageGrid}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className={classes.image}
            key={doc.id}
            onClick={() => setSelectedImage(doc.URL)}
          >
            <motion.img
              src={doc.URL}
              alt="uploaded_image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
