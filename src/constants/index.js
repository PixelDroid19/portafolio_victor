import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  Tecnisuport,
  AcademiaGeek,
  carrent,
  jobit,
  tripguide,
  Yhonaiker,
  Daniela,
  Jose
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'git',
    icon: git
  }
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'TecniSupport',
    icon: Tecnisuport,
    iconBg: '#E6DEDD',
    date: 'Dec 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title:
      'Front-End Development in React.Js and Application of Design Thinking Tools',
    company_name: 'Academia Geek',
    icon: AcademiaGeek,
    iconBg: '#E6DEDD',
    date: 'Jun 2021 - Dec 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I highly recommend Victor Gelvis due to his focus, dedication, and responsibility in everything he undertakes.',
    name: 'Yhonaiker Jose Moncada Campbell ',
    designation: 'Front End Developer',
    company: 'Technisupport S.A.S.',
    image: Yhonaiker
  },
  {
    testimonial:
      'I have worked closely with Victor Gelvis, who has proven to be a responsible person in all assigned responsibilities, always willing to teach and having a great sense of humor. Additionally, he has a facility to adapt to teamwork.',
    name: 'Jose Daniel Garcia Jaime',
    designation: 'Software Engineer',
    company: 'Academia Geek',
    image: Jose
  },
  {
    testimonial:
      'I had the opportunity to work with Victor, who proved to be a diligent and efficient employee by delivering his tasks quickly.',
    name: 'Daniela Rudolfo Martínez',
    designation: 'Engineer Back-End',
    company: 'Technisupport S.A.S.',
    image: Daniela
  }
]

const projects = [
  {
    name: 'Portfolio',
    description: 'Web-based',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Microsoft',
    description: 'Web application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Amazon',
    description: 'A comprehensive web app',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
]

export { services, technologies, experiences, testimonials, projects }
