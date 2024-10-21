import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-card rounded-lg shadow-lg p-6 text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-primary mb-4">{role}</p>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  )
}