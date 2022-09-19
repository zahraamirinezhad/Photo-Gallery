import ImageGrid from '../ImageGrid/ImageGrid'
import Modal from '../Modal/Modal'
import UploadForm from '../UploadForm/UploadForm'
import classes from './Home.module.scss'
import { useState } from 'react'

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className={classes.home}>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  )
}

export default Home
