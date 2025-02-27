// lib/actions.ts
export default async function getProducts() {
  const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL

  // Verify API URL is set
  if (!API_URL) throw new Error('Missing NEXT_PUBLIC_PAYLOAD_URL')

  // Get authentication token
  const token = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Login failed: ${res.status}`)
      return res.json()
    })
    .then((data) => data.token)
    .catch((error) => {
      console.error('Authentication error:', error)
      return null
    })

  if (!token) throw new Error('Authentication failed')

  // Fetch products
  return fetch(`${API_URL}/api/products`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
    next: { revalidate: 60 },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Products fetch failed: ${res.status}`)
      return res.json()
    })
    .then((data) => data.docs)
    .catch((error) => {
      console.error('Fetch error:', error)
      throw new Error('Failed to load products')
    })
}
