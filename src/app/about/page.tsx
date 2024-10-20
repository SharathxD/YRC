import Image from 'next/image'
import TeamMember from '@/components/TeamMember'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Youth Red Cross Club</h1>
      <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            The Youth Red Cross Club at our college is dedicated to fostering a spirit of service and volunteerism among students. We work tirelessly to support our community through various initiatives, including blood donation camps, disaster relief efforts, and health awareness programs.
          </p>
          <p className="text-lg">
            Our club is affiliated with the International Red Cross and Red Crescent Movement, sharing its fundamental principles of humanity, impartiality, neutrality, independence, voluntary service, unity, and universality.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/images/about-yrc.jpg"
            alt="Youth Red Cross volunteers in action"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TeamMember
          name="Dr. Jane Smith"
          role="Faculty Advisor"
          image="/images/team/jane-smith.jpg"
          bio="Dr. Smith has been guiding the YRC Club for over a decade, bringing her expertise in community health."
        />
        <TeamMember
          name="John Doe"
          role="Club President"
          image="/images/team/john-doe.jpg"
          bio="John is a final year student passionate about making a difference in the community through the YRC."
        />
        <TeamMember
          name="Emily Chen"
          role="Secretary"
          image="/images/team/emily-chen.jpg"
          bio="Emily manages the club's activities and ensures smooth coordination between members and the community."
        />
      </div>
    </div>
  )
}