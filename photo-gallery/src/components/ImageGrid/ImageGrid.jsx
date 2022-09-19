import useFirestore from '../../hooks/useFirestore'
import classes from './ImageGrid.module.scss'

const ImageGrid = () => {
  const { docs } = useFirestore('images')

  console.log(docs)

  return <div className={classes.imageGrid}>ImageGrid</div>
}

export default ImageGrid
