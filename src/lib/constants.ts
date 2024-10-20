export const SITE_NAME = 'Youth Red Cross Club'
export const SITE_DESCRIPTION = 'Empowering youth to serve humanity and make a difference in our community.'

export const CONTACT_EMAIL = 'contact@youthredcrossclub.org'
export const CONTACT_PHONE = '+1 (123) 456-7890'
export const CONTACT_ADDRESS = '123 College Street, City, State 12345'

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/youthredcrossclub',
  instagram: 'https://instagram.com/youthredcrossclub',
  twitter: 'https://twitter.com/youthredcrossclub',
}

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Events', href: '/events' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export const CORE_VALUES = [
  { 
    title: 'Humanity', 
    description: 'We serve people in need without discrimination.',
    icon: 'Heart'
  },
  { 
    title: 'Volunteerism', 
    description: 'Our strength lies in the dedication of our volunteers.',
    icon: 'Users'
  },
  { 
    title: 'Protection', 
    description: 'We strive to protect human life and health.',
    icon: 'Shield'
  },
  { 
    title: 'Universality', 
    description: 'We are committed to helping people worldwide.',
    icon: 'Globe'
  },
]

export const MEMBERSHIP_FAQS = [
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
    answer: "There is a nominal annual membership fee of $10 to cover basic club expenses. However, we offer fee waivers for students who may need financial assistance."
  }
]

export const GALLERY_CATEGORIES = [
  'All',
  'Blood Donation',
  'Community Service',
  'Health Awareness',
  'Training',
  'Disaster Relief'
]

export const API_ENDPOINTS = {
  events: '/api/events',
  news: '/api/news',
  contact: '/api/contact',
  membership: '/api/membership',
}

export const SEO_DEFAULTS = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.youthredcrossclub.org/',
    site_name: SITE_NAME,
  },
  twitter: {
    handle: '@youthredcrossclub',
    site: '@youthredcrossclub',
    cardType: 'summary_large_image',
  },
}