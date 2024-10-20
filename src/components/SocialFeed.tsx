'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SocialPost {
  id: string
  content: string
  author: string
  date: string
  platform: 'facebook' | 'instagram' | 'twitter'
}

export default function SocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your social media APIs
    const mockPosts: SocialPost[] = [
      {
        id: '1',
        content: 'Join us for our upcoming blood donation camp! #SaveLives',
        author: 'YRC Club',
        date: '2024-05-01',
        platform: 'twitter'
      },
      {
        id: '2',
        content: 'Check out photos from our recent community service event!',
        author: 'YRC Club',
        date: '2024-04-28',
        platform: 'instagram'
      },
      {
        id: '3',
        content: 'Were excited to announce our new partnership with Local Hospital for regular health camps.',
        author: 'YRC Club',
        date: '2024-04-25',
        platform: 'facebook'
      }
    ]
    setPosts(mockPosts)
  }, [])

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-lg shadow-lg p-4"
        >
          <div className="flex items-center mb-2">
            <div className={`w-6 h-6 rounded-full mr-2 ${
              post.platform === 'facebook' ? 'bg-blue-600' :
              post.platform === 'instagram' ? 'bg-pink-600' :
              'bg-sky-400'
            }`}></div>
            <span className="font-bold">{post.author}</span>
          </div>
          <p className="mb-2">{post.content}</p>
          <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
        </motion.div>
      ))}
    </div>
  )
}