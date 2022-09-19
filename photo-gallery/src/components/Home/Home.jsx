import UploadForm from '../UploadForm/UploadForm'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <div className={classes.home}>
      <UploadForm />
    </div>
  )
}

export default Home
