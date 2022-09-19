import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config.jsx'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name)

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        setProgress((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (err) => {
        setError(err)
      },
      async () => {
        const URL = await storageRef.getDownloadURL()
        setUrl(URL)
      },
    )
  }, [file])

  return { progress, error, url }
}

export default useStorage
