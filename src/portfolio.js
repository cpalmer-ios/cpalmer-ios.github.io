const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cpalmer-ios.github.io',
  title: 'Built in React JS.', 
}

const about = {
  // all the properties are optional - can be left empty or deleted
  image: './profile-pic.png',
  name: 'Chris Palmer',
  role: 'Full-Stack Software Engineer',
  description:
    'I love making websites, games and apps. With over 6 years of experience, I\'ve enjoyed the opportunity to work for some great teams in many great companies. I also love running, reading, pizza and music.',
  resume: './ChrisPalmerResume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/mrcpalmer',
    github: 'https://github.com/cpalmer-ios',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'A remake of Reddit built with Apollo, Graph QL, Node, React and Redis.',
    stack: ['React', 'Node', 'GraphQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'A mobile game built using Expo and the React Native Game Engine module.',
    stack: ['React Native', 'Expo'],
    sourceCode: 'https://github.com/rn-zombie-hunter',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'A retro pixel animation game built purely in JavaScript !',
    stack: ['JavaScript'],
    sourceCode: 'https://github.com/cpalmer-ios/sprite-javascript',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'React',
  'Next',
  'React Native',
  'Redux',
  'Express',
  'Apollo',
  'Redis',
  'Mongo DB',
  'SQL',
  'C',
  'C ++',
  'Graph QL',
  'WordPress',
  'pHp',
  'AWS',
  'Docker',
  'Bash',
  'Ruby on Rails',
  'Java',
  'Varnish',
  'Unity',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const experience = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'sky',
    img: './img/sky.png',
    description:
      'Delivering a successful launch of the Sky Glass TV sales channel on the main sky.com site. The work also involved working with a team to improve the site performance, security and monitoring.',
    stack: ['React', 'Node', 'GraphQL'],
    livePreview: 'https://sky.com',
  },
  {
    name: 'nttdata',
    img: './img/NTTDATA.png',
    description:
      'Building internal applications and working as a Software Engineer / Consultant for other clients which include BT, Vodafone & Microsoft.',
    stack: ['React', 'Node', 'Mongo DB'],
    livePreview: 'https://nttdata.com',
  },
  {
    name: 'prh',
    img: './img/prh.png',
    description:
      'Building internal staff applications with the Twitter API and PRHs entire biblio database. All integrated on a secure internal network with key token login and multiple users online functoinality.',
    stack: ['JavaScript', 'Node', 'Java'], 
    livePreview: 'https://github.com',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'write.to.chris.palmer@gmail.com',
}

export { header, about, projects, skills, experience, contact }
