import { useState, useEffect, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // since _query is an array which is a reference type, it is "different" on every call
  // therefore we would have an infinite loop, so we use useRef to get the reference to the original
  const query = useRef(_query).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }

    const unsubscribe = ref.onSnapshot((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      // update state
      setDocuments(results)
      setError(null)
    }, (error) => {
      console.log(error)
      setError('Could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query])

  return { documents, error }
}