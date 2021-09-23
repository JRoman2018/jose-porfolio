/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "José's Portfolio", // e.g: 'Name | Developer'
  lang: 'en,es', // e.g: en, es, fr, jp
  description: 'Portfolio about José', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'José Román',
  subtitle: "I'm a web Developer.",
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am a passionate young man and lover of full stack web programming, frameworks such as Laravel, ReactJs, .Net Core, etc...',
  paragraphTwo:
    'I am a person dedicated to what I do, very motivated, always willing to learn and who pays a lot for the small details of any job, that is why I consider that my strength is in the front.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'automed.png',
    title: 'AutomedDispenser',
    info:
      'This was my graduation project, which is in charge of administering a device in charge of supplying medicine from the website..',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'facerecognition.jpg',
    title: 'Face Recognition',
    info:
      'Is a face recognition app, were you can upload a picture and it will recognize the face.',
    info2: '',
    url: 'https://jroman2018.github.io/FaceRecognition/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robotfriends.png',
    title: 'Robofriend Api',
    info: "It's an api friendly search api robot.",
    info2: '',
    url: 'https://jroman2018.github.io/robofriends/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'menu.png',
    title: 'Menu',
    info: 'Menu template',
    info2: '',
    url: 'https://unruffled-joliot-d89c30.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reviews.png',
    title: 'Reviews',
    info: "It's a Review card",
    info2: '',
    url: 'https://suspicious-albattani-f71a26.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'el-1ero@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/josero1994/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/josealberto.romaninfante',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jose-roman-5497a1194/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
