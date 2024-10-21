'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MembershipPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can join the Youth Red Cross Club?",
      answer: "Any student enrolled in our college can join the Youth Red Cross Club. We welcome members from all academic years and departments."
    },
    {
      question: "What are the membership benefits?",
      answer: "Members get opportunities to participate in community service, develop leadership skills, attend workshops, and network with like-minded individuals passionate about humanitarian work."
    },
    {
      question: "How often does the club meet?",
      answer: "We have general meetings twice a month, usually on Saturdays. Additional meetings may be scheduled for event planning and special activities."
    },
    {
      question: "Is there a membership fee?",
      answer: "NO !! . There isn't any sort of membership fee ."
    }
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Youth Red Cross Club</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Becoming a member of the Youth Red Cross Club is a great way to serve your community, develop leadership skills, and make lasting friendships. Fill out the form below to start your journey with us!
        </p>
        <div className="bg-card rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Membership Application</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/your-google-form-url/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                {faq.question}
                <svg
                  className={`w-6 h-6 transition-transform ${
                    activeAccordion === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeAccordion === index ? 'auto' : 0, opacity: activeAccordion === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 bg-background">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}