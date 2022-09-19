import classes from './UploadForm.module.scss'
import { useState } from 'react'
import Progressbar from '../Progressbar/Progressbar'
import addIcon from '../../images/add-icon.png'

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
    <div className={classes.uploadForm}>
      <div className={classes.addFile}>
        <button>
          <img src={addIcon} alt="add file" />
        </button>
        <input type="file" onChange={addFileHandler} accept="image/*" />
      </div>

      <div className={classes.output}>
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </div>
  )
}

export default UploadForm
