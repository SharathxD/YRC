import Hero from '@/components/Hero'
import CoreValues from '@/components/CoreValues'
import DonationCounter from '@/components/DonationCounter'
import EventCard from '@/components/EventCard'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <CoreValues />
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <DonationCounter target={5000} />
        </div>
      </section>
      <section id="upcoming-events" className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Blood Donation Camp"
              date="2024-05-15"
              description="Join us for our annual blood donation camp and help save lives."
              image="/images/events/blood-donation.jpg"
            />
            <EventCard
              title="First Aid Workshop"
              date="2024-06-01"
              description="Learn essential first aid skills from certified professionals."
              image="/images/events/first-aid.jpg"
            />
            <EventCard
              title="Community Cleanup Drive"
              date="2024-06-15"
              description="Help us clean up our community and make it a better place for everyone."
              image="/images/events/cleanup.jpg"
            />
          </div>
        </div>
      </section>
    </>
  )
}