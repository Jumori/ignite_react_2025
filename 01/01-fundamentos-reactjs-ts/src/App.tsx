import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import { Post, type PostType } from './componentes/Post'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://github.com/Jumori.png',
      name: 'Juliana Morikoshi',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2025-02-12 20:00:00')
  },
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://placehold.co/500',
      name: 'John Doe',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2025-02-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}
