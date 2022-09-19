import useFirestore from '../../hooks/useFirestore'
import classes from './ImageGrid.module.scss'

const ImageGrid = () => {
  const { docs } = useFirestore('images')

  return (
    <div className={classes.imageGrid}>
      {docs &&
        docs.map((doc) => (
          <div className={classes.image} key={doc.id}>
            <img src={doc.URL} alt="uploaded_image" />
          </div>
        ))}
    </div>
  )
}

export default ImageGrid
