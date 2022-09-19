import classes from './UploadForm.module.scss'
import { useState } from 'react'
import Progressbar from '../Progressbar/Progressbar'
import addIcon from '../../images/add-icon.png'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const { progress, url } = useStorage(file)

  const addFileHandler = (e) => {
    let selectedFile = e.target.files[0]

    if (selectedFile) {
      setFile(selectedFile)
    } else {
      setFile(null)
    }
  }

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div className={classes.uploadForm}>
      <div className={classes.addFile}>
        <button>
          <img src={addIcon} alt="add file" />
        </button>
        <input type="file" onChange={addFileHandler} accept="image/*" />
      </div>

      <div className={classes.output}>
        {file && <Progressbar progress={progress} />}
      </div>
    </div>
  )
}

export default UploadForm
