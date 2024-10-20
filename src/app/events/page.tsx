'use client'

import { useState } from 'react'
import EventCard from '@/components/EventCard'

const events = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "2023-07-28",
    description: "Join us for our annual blood donation camp and help save lives.",
    image: "/images/events/blood-donation.jpg",
    category: "Health"
  },
  {
    id: 2,
    title: "CPR and First Aid Workshop",
    date: "2023-07-20",
    description: "Learn essential first aid skills from certified professionals.",
    image: "/images/events/first-aid.jpg",
    category: "Training"
  },
  {
    id: 3,
    title: "Talk on Antibiotics",
    date: "2023-11-22",
    description: "Help us clean up our community and make it a better place for everyone.",
    image: "/images/events/cleanup.jpg",
    category: "Talks"
  },
  {
    id: 4,
    title: "Fire Awareness",
    date: "2024-05-08",
    description: "Get informed about disaster preparedness and emergency response.",
    image: "/images/events/fire-drill.jpg",
    category: "Training"
  },
  {
    id: 5,
    title: "Talk on Good Health",
    date: "2024-05-08",
    description: "Join us for a day of health education and free health screenings.",
    image: "/images/events/health-fair.jpg",
    category: "Health"
  }
]

const categories = ["All", "Health", "Training", "Talks"]

export default function EventsPage() {
  const [filter, setFilter] = useState("All")

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </div>
  )
}