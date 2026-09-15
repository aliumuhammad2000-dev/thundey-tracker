const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6'

const statuses = ['Applied', 'Interview', 'Applied', 'Rejected', 'Offer', 'Interview']

export async function fetchApplications() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Unable to load applications right now.')
  }

  const posts = await response.json()

  return posts.map((post, index) => ({
    id: post.id,
    company: ['Northstar Labs', 'Orbit Systems', 'Lumen Studio', 'Vertex Health', 'Kite Finance', 'Atlas Digital'][index],
    role: ['Frontend Developer', 'React Engineer', 'UI Developer', 'Web Developer', 'Frontend Engineer', 'Product Engineer'][index],
    status: statuses[index],
    notes: post.title,
  }))
}

export async function createApplication(application) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(application),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })

  if (!response.ok) throw new Error('Unable to save this application right now.')

  const saved = await response.json()
  return { ...application, id: saved.id }
}

export async function deleteApplication(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) throw new Error('Unable to delete this application right now.')
}
