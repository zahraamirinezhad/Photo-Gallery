import { useState, useEffect } from 'react'
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config.jsx'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (file) {
      const storageRef = projectStorage.ref(file.name)
      const collectionRef = projectFirestore.collection('images')

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
          const createdAt = timestamp()
          collectionRef.add({ URL, createdAt })
          setUrl(URL)
        },
      )
    }
  }, [file])

  return { progress, url, error }
}

export default useStorage
