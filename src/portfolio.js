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
      'A remake of reddit built on Apollo, Graph QL. Node and React',
    stack: ['React', 'Node', 'GraphQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'A mobile zombie hunter game built with the React Native Game Engine module',
    stack: ['React Native', 'Expo'],
    sourceCode: 'https://github.com/rn-zombie-hunter',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'An 8-bit game built purely in JavaScript',
    stack: ['JavaScript'],
    sourceCode: 'https://github.com',
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
  'React Native',
  'Redux',
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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'sky',
    img: './img/sky-logo.png',
    description:
      'Through my current employer I was able to work at Sky for a year as a Full-Stack Senior Software Engineer, delivering a successful launch of the Sky Glass TV. The main work involed improving the site performance, security and monitoring.',
    stack: ['React', 'Node', 'GraphQL'],
    livePreview: 'https://sky.com',
  },
  {
    name: 'nttdata',
    img: './img/NTTDATA.png',
    description:
      '',
    stack: ['React', 'React Native', 'Node', 'Graph QL', 'Mongo DB'],
    livePreview: 'https://fin-ex.com',
  },
  {
    name: 'prh',
    img: './img/prh.png',
    description:
      '',
    stack: ['JavaScript'], 
    livePreview: 'https://github.com',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'write.to.chris.palmer@gmail.com',
}

export { header, about, projects, skills, experience, contact }
