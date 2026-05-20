import { useEffect, useState } from 'react'
import { get } from './client'

export function useFetch(path) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    get(path)
      .then((d) => { if (active) setData(d) })
      .catch((e) => { if (active) setError(e) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [path])

  return { data, loading, error }
}
