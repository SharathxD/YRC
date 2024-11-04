'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: "NEWS 1",
    date: "2024-03-15",
    content: "NEWS 1 content",
    category: "Achievements"
  },
  {
    id: 2,
    title: "NEWS 2",
    date: "2024-02-28",
    content: "NEWS 2 content",
    category: "Events"
  },
  {
    id: 3,
    title: "NEWS 3",
    date: "2024-01-20",
    content: "NEWS 3 content",
    category: "Announcements"
  },
  {
    id: 4,
    title: "NEWS 4",
    date: "2023-12-10",
    content: "NEWS 4 content",
    category: "Announcements"
  },
  {
    id: 5,
    title: "NEWS 5",
    date: "2023-11-05",
    content: "NEWS 5 content",
    category: "Achievements"
  }
]


const categories = ["All", "Events", "Achievements", "Announcements"]

export default function NewsPage() {
  const [filter, setFilter] = useState("All")

  const filteredNews = filter === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === filter)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">News and Announcements</h1>
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            } transition-colors`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filteredNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
            <p className="mb-4">{item.content}</p>
            <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
              {item.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
