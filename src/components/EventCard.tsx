import Image from 'next/image'

interface EventCardProps {
  title: string
  date: string
  description: string
  image: string
}

export default function EventCard({ title, date, description, image }: EventCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-primary mb-4">{new Date(date).toLocaleDateString()}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}