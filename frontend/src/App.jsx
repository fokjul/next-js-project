import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  useEffect (() => {
    fetch("http://localhost:8050/posts")
    .then((res) => res.json())
    .then((posts) => {setPosts(posts)
    })
  }, []);

  return (
    <>
      <p>Hello</p>
    </>
  )
}

export default App
