import { useEffect, useReducer } from 'react'
import { get } from './client'

function fetchReducer(state, action) {
  switch (action.type) {
    case 'start': return { data: null, loading: true, error: null }
    case 'success': return { data: action.data, loading: false, error: null }
    case 'error': return { data: null, loading: false, error: action.error }
    default: return state
  }
}

export function useFetch(path) {
  const [state, dispatch] = useReducer(fetchReducer, { data: null, loading: true, error: null })

  useEffect(() => {
    let active = true
    dispatch({ type: 'start' })
    get(path)
      .then((d) => { if (active) dispatch({ type: 'success', data: d }) })
      .catch((e) => { if (active) dispatch({ type: 'error', error: e }) })
    return () => { active = false }
  }, [path])

  return state
}
