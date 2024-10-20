'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: "YRC Club Raises $5000 for Flood Relief",
    date: "2024-03-15",
    content: "Our recent fundraising campaign was a huge success, raising $5000 for flood relief efforts in the neighboring state.",
    category: "Achievements"
  },
  {
    id: 2,
    title: "Blood Donation Drive Collects 100 Units",
    date: "2024-02-28",
    content: "Thanks to the overwhelming support from our college community, we collected 100 units of blood in our recent drive.",
    category: "Events"
  },
  {
    id: 3,
    title: "YRC Members Attend National Conference",
    date: "2024-01-20",
    content: "Five of our club members represented our college at the National Youth Red Cross Conference, bringing back valuable insights and experiences.",
    category: "Announcements"
  },
  {
    id: 4,
    title: "New Partnership with Local Hospital",
    date: "2023-12-10",
    content: "We're excited to announce our new partnership with City General Hospital for regular health camps and awareness programs.",
    category: "Announcements"
  },
  {
    id: 5,
    title: "YRC Club Wins Best Community Service Award",
    date: "2023-11-05",
    content: "Our club has been recognized with the Best Community Service Award by the State Youth Council for our consistent efforts in serving the community.",
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