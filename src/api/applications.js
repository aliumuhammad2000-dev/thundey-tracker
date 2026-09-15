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
