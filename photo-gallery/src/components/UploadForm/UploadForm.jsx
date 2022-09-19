import classes from './UploadForm.module.scss'
import { useState } from 'react'

const UploadForm = () => {
  const [file, setFile] = useState(null)

  const addFileHandler = (e) => {
    let selectedFile = e.target.files[0]

    if (selectedFile) {
      setFile(selectedFile)
    } else {
      setFile(null)
    }
  }

  return (
    <form className={classes.uploadForm}>
      <input
        className={classes.fileInput}
        type="file"
        onChange={addFileHandler}
        accept="image/*"
      />
    </form>
  )
}

export default UploadForm
