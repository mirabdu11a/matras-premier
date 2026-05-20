const BASE_URL = import.meta.env.VITE_API_URL || ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    let detail
    try { detail = await res.json() } catch { detail = null }
    const err = new Error(`Request failed: ${res.status}`)
    err.status = res.status
    err.detail = detail
    throw err
  }
  if (res.status === 204) return null
  return res.json()
}

// Unwrap DRF pagination (`{results: [...]}`) or return the raw payload.
export function unwrap(data) {
  return data && Array.isArray(data.results) ? data.results : data
}

export function get(path) {
  return request(path).then(unwrap)
}

export function post(path, body) {
  return request(path, { method: 'POST', body: JSON.stringify(body) })
}
