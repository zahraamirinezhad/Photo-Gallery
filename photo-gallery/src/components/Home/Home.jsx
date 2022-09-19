import ImageGrid from '../ImageGrid/ImageGrid'
import UploadForm from '../UploadForm/UploadForm'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <div className={classes.home}>
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default Home
