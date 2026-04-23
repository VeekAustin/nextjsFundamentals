// Static — Next.js pre-renders this at build
export default function About() {
  return <p>Welcome to About us</p>
}

// Dynamic — re-fetches on every request
/** export default async function News() {
  const data = await fetch('https://api.example.com/news', {
    cache: 'no-store'
  })
  const news = await data.json()
  return <p>{news[0].title}</p>
}**/
