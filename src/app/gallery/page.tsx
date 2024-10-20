'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/gallery/blood-donation-1.jpg", alt: "Blood Donation Camp", category: "Blood Donation" },
  { id: 2, src: "/images/gallery/first-aid-1.jpg", alt: "First Aid Training", category: "Training" },
  { id: 3, src: "/images/gallery/community-service-1.jpg", alt: "Community Service", category: "Community Service" },
  { id: 4, src: "/images/gallery/blood-donation-2.jpg", alt: "Blood Donation Drive", category: "Blood Donation" },
  { id: 5, src: "/images/gallery/disaster-relief-1.jpg", alt: "Disaster Relief Efforts", category: "Disaster Relief" },
  { id: 6, src: "/images/gallery/health-camp-1.jpg", alt: "Health Awareness Camp", category: "Health Awareness" },
  { id: 7, src: "/images/gallery/community-service-2.jpg", alt: "Tree Planting Drive", category: "Community Service" },
  { id: 8, src: "/images/gallery/training-1.jpg", alt: "Volunteer Training Session", category: "Training" },
  { id: 9, src: "/images/gallery/health-camp-2.jpg", alt: "Eye Check-up Camp", category: "Health Awareness" },
]

const categories = ["All", "Blood Donation", "Training", "Community Service", "Disaster Relief", "Health Awareness"]

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredGallery = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h1>
      <div className="flex flex-wrap justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`m-2 px-4 py-2 rounded-full ${
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
      <motion.div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence>
          {filteredGallery.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-square cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
