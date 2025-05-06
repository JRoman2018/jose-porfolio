/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "José Román",
  title: "Hello, I'm José",
  subTitle: emoji(
    "Senior Full Stack Developer 🚀 specializing in the development of complex web application interfaces. Deep technical expertise in JavaScript, React.js, and modern front-end frameworks, including a comprehensive understanding of advanced concepts, design patterns, and performance optimization techniques. Proficient in the full front-end development lifecycle, from UI/UX design collaboration to deployment and maintenance."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/JRoman2018",
  linkedin:
    "https://www.linkedin.com/in/jos%C3%A9-rom%C3%A1n-5497a1194/?locale=en_US",
  gmail: "josealbertoromanynfante@gmail.com",
  stackoverflow:
    "https://stackoverflow.com/users/30430562/jos%c3%a9-rom%c3%a1n",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "I'm a Full Stack Developer with expertise in developing highly interactive web and mobile applications. My core skills include:",
  skills: [
    emoji(
      "⚡ Building dynamic user interfaces with HTML5, CSS3, Sass, JavaScript, and React.js."
    ),
    emoji(
      "⚡ Developing server-side logic using Node.js and managing databases (SQL)."
    ),
    emoji(
      "⚡ Creating Progressive Web Applications (PWAs) in both standard and Single Page Application (SPA) architectures."
    ),
    emoji(
      "⚡ Integrating applications with cloud services, including AWS and Firebase."
    ),
    emoji("⚡ Utilizing Docker for containerization and efficient deployment."),
    emoji("⚡ Python for scripting and automation.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "mdi mdi-language-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "mdi mdi-language-css3"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "mdi mdi-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "mdi mdi-language-javascript"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "mdi mdi-language-typescript"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "mdi mdi-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "mdi mdi-nodejs"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "mdi mdi-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "mdi mdi-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "mdi mdi-database-search"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "mdi mdi-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "mdi mdi-language-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "mdi mdi-language-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "mdi mdi-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pontificia Universidad Católica Madre y Maestra",
      logo: require("./assets/images/pucmmLogo.png"),
      subHeader: "Telecommunications Engineering",
      duration: "2012 - 2019",
      desc: "Development in the area of telecommunications engineering.",
      descBullets: [
        "Planning and design of information networks.",
        "Integration of high-tech solutions in systems that operate in a distributed manner and using technological solutions from various origins.",
        "Design of policies and mechanisms to ensure that information flows throughout the networks, preserving quality, confidentiality, security, and integrity.",
        "Creation of software to implement new services on a network. Examples of services include the Web, instant messaging, file transfer, and cellular services based on short text messages, among others.",
        "Analysis and design of networks, for which the information transport needs of the organization are studied and the solution with the best cost-benefit ratio is proposed.",
        "Administration of existing networks.",
        "Serve as a network security officer or auditor.",
        "Administration of telecommunications projects."
      ],
      activities: "Belonging to the athletics team.",
      aptitudes: [
        "AWS Lambda",
        "React Query",
        "Full Stack Development",
        "JavaScript",
        "Node.js",
        "SQL",
        "Docker",
        "Python",
        "Cloud Integration (AWS, Firebase)"
      ]
    },
    {
      schoolName: "Oasis Christian School",
      logo: require("./assets/images/oasisLogo.png"),
      subHeader: "High School Diploma, Technology and Computing Specialist",
      duration: "2006 - 2012",
      desc: "High school diploma with a specialization in technology and computing.",
      descBullets: [],
      activities:
        "Belonging to the soccer team. Belonging to the baseball team. Winner of 1st place in the Los Trinitarios contest (General information about the independence of the Dominican Republic).",
      aptitudes: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Newtech S.R.L",
      companylogo: require("./assets/images/newtechsaLogo.jpg"),
      bgColor: "#1e9acd",
      date: "Dec. 2021 - Actual",
      desc: "Worked with various technologies, such as React, Redux, React Router, and React Query. Obtained continuous information from users, customers, and colleagues. In charge of application performance monitoring. Watched for traffic drops related to site usability issues and rectified them. Wrote functional requirement documents and guides. Created quality models and prototypes to guarantee high-quality graphic standards and brand coherence. Converted UI/UX designs into prototypes and creating interactions from the designs. Wrote code and reusable libraries, with the corresponding documentation, according to a standard that makes it easier and faster to maintain code in the future. Optimized applications for maximum speed and scalability. Designed new features and maintained the old ones. Collaborated with back-end engineers and web designers to improve usability. Helped back-end engineers with coding and troubleshooting. Kept up to date with emerging technologies. Played a key role in developing and enhancing web applications using React and TypeScript, focusing on building intuitive and responsive user interfaces. I designed modular components and implemented state management solutions using Redux and Context API to ensure consistency and maintainability. I actively participated in agile develop",
      descBullets: [
        "Developed applications using React, Redux, React Router, and React Query.",
        "Gathered feedback from users, customers, and colleagues.",
        "Monitored application performance.",
        "Identified and resolved site usability issues causing traffic drops.",
        "Wrote functional requirements and user guides.",
        "Created quality models and prototypes for graphic standards and brand coherence.",
        "Translated UI/UX designs into interactive prototypes.",
        "Developed and documented reusable code libraries.",
        "Optimized applications for speed and scalability.",
        "Designed and maintained application features.",
        "Collaborated with backend and web designers to improve usability.",
        "Assisted backend engineers with coding and troubleshooting.",
        "Researched emerging technologies.",
        "Developed React and TypeScript web applications, focusing on building intuitive and responsive UIs. Designed modular components and implemented state management solutions using Redux and Context API.  Participated in agile development."
      ]
    },
    {
      role: "Software Developer",
      company: "BairesDev",
      bgColor: "#f76d35",
      companylogo: require("./assets/images/bairesdevLogo.jpg"),
      date: "Oct. 2022 - May. 2025",
      desc: "Work on: Designing practical solutions to solve problems. Participating in code reviews and tests. Providing the technology for a platform that facilitates monthly requests. Working with big data and predictive analytics in a distributed system. Collaborating with the development team, product owners, and customer services to innovate and get things done. Developing quality software and web applications. Analyzing and maintaining existing software applications. Designing highly scalable and testable code. Discovering and correcting programming errors. Building dynamic and responsive web applications with React and modern features such as hooks, Context API, and state management libraries such as Redux and React Query. Building scalable and maintainable applications with TypeScript. Defining strict types, interfaces, and generics to enhance code reliability and reduce runtime errors. Conducting end-to-end, integration, and component tests in React and Next.js with Cypress. Employing Jest for unit and integration tests in React, Next.js, and Node.js applications.(Please verify if these tasks are part of this experience.) Specialized in building dynamic, responsive user interfaces using React and TypeScript, focusing on creating reusable components and implementing robust state management with Redux and Context API. I integrated with backend services via RESTful APIs, ensuring efficient data handling and error management. My work also involved optimizing performance with memoization and lazy loading, writing unit tests with Jest and React Testing Library, and maintaining clean, maintainable code through peer reviews and agile collaboration.",
      descBullets: [
        "Designed and implemented practical solutions.",
        "Participated in code reviews and testing procedures.",
        "Developed a platform to facilitate monthly service requests.",
        "Worked with big data and predictive analytics within a distributed system.",
        "Collaborated with development, product, and customer service teams to drive innovation.",
        "Developed high-quality software and web applications.",
        "Analyzed and maintained existing software applications.",
        "Designed scalable and testable codebases.",
        "Debugged and resolved software defects.",
        "Engineered responsive web applications using React, hooks, Context API, Redux, and React Query.",
        "Developed scalable applications using TypeScript.",
        "Defined strict types, interfaces, and generics in TypeScript to improve code reliability.",
        "Conducted end-to-end and integration tests using Cypress.",
        "Utilized Jest for unit and integration testing across React, Next.js, and Node.js applications.",
        "Specialized in developing dynamic, responsive user interfaces with React and TypeScript, creating reusable components, implementing state management with Redux and Context API, integrating with RESTful APIs, optimizing performance, and performing unit testing."
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "Compañia Dominicana de Teléfonos (Claro)",
      companylogo: require("./assets/images/claroLogo.png"),
      date: "Aug. 2021 - Nov. 2021",
      desc: "Developed applications in Vue.js, Vue Router, and Vuex. In charge of web design and API consumption. I was responsible for building and maintaining web applications using Vue.js, Vue Router, and Vuex. I focused on creating dynamic and responsive user interfaces, leveraging Vue components to build scalable and modular architectures. I optimized application performance and ensured cross-browser compatibility through testing and debugging.",
      descBullets: [
        "Developed applications in Vue.js, Vue Router, and Vuex.",
        "Managed web design and API consumption.",
        "Built and maintained web applications using Vue.js, Vue Router, and Vuex. Focused on creating dynamic and responsive UIs, scalable architectures, and optimized performance."
      ]
    },
    {
      role: "Full Stack Software Developer",
      company: "Electrical Equipment Supplier",
      bgColor: "#000",
      companylogo: require("./assets/images/electricalLogo.png"),
      date: "Jun. 2020 - May. 2021",
      desc: "Designed, developed, tested, and deployed applications for the country’s electrical industry. Developed the frontend of web applications with React. Created web APIs with ASP.NET Core for the automation of electrical substations. Utilized Redux and RESTful APIs. At Electrical Equipment Supplier my primary focus was on creating interactive and dynamic frontend solutions using React and managing application state efficiently with Redux. I also developed robust and scalable web APIs using ASP.NET Core, enabling the automation of electrical substation processes. I collaborated closely with backend engineers to seamlessly integrate RESTful APIs, enabling smooth data exchange and real-time updates. Additionally, I participated in the full software development lifecycle, including testing, debugging, and deployment, to ensure reliable and maintainable solutions.",
      descBullets: [
        "Designed, developed, tested, and deployed applications for the electrical industry.",
        "Developed React frontend for web applications.",
        "Created ASP.NET Core APIs for electrical substation automation.",
        "Utilized Redux and RESTful APIs.",
        "Developed React frontend solutions and managed application state with Redux. Developed ASP.NET Core APIs for electrical substation automation and integrated RESTful APIs."
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Aura Systems",
      bgColor: "#eb7d32",
      companylogo: require("./assets/images/auraLogo.jpg"),
      date: "Aug. 2019 - Apr. 2020",
      desc: "Integrated user-facing elements developed by front-end engineers. Built efficient, testable, and reusable PHP modules based on the Laravel framework. Solved complex performance problems and architectural challenges. Utilized Laravel in the backend and Vue.js in the frontend. I was responsible for integrating user-facing elements developed by the frontend team with efficient and scalable backend solutions. On the backend, I built robust, testable, and reusable modules using PHP and the Laravel framework, tackling complex performance issues and architectural challenges. On the frontend, I utilized Vue.js to develop dynamic and responsive user interfaces, integrating seamlessly with the backend services.",
      descBullets: [
        "Integrated frontend elements.",
        "Built efficient, testable PHP modules with Laravel.",
        "Solved performance and architectural issues.",
        "Utilized Laravel and Vue.js for full stack development.",
        "Integrated frontend elements with scalable backend solutions using Laravel and Vue.js."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Professional Projects",
  subtitle:
    "A look into the products and startups I’ve helped shape through code.",
  projects: [
    {
      medias: [
        require("./assets/images/realtor-pro/image1.png"),
        require("./assets/images/realtor-pro/image2.png"),
        require("./assets/images/realtor-pro/image3.png"),
        require("./assets/images/realtor-pro/image4.png"),
        require("./assets/images/realtor-pro/image5.png")
      ],
      title: "Realtor Pro",
      description:
        "This project is a web application developed with ReactJS to manage and track sales statistics for properties (lots, houses, apartments, etc.). It allows users to record, query, and analyze sales data to gain valuable insights into business performance.",
      technologies: [
        "React",
        "JavaScript",
        "Typescript",
        "Next.js",
        "Redux",
        "Nestjs",
        "Express.js",
        "Jest",
        "Material UI",
        "Twilio",
        "MySQL"
      ],
      requestDemo: true,
      size: "large"
    },
    {
      medias: [
        require("./assets/images/pulseara/image1.png"),
        require("./assets/images/pulseara/image2.png"),
        require("./assets/images/pulseara/image3.png")
      ],
      title: "Pulseara",
      description:
        "This application is designed to streamline medical practice operations by enabling healthcare providers to manage patient records, create consultations, track allergies and active conditions, add important notes, and store patient images. It also facilitates office management by allowing the creation of staff accounts, managing medication lists, generating printable documents, creating prescriptions, and handling insurance claims.  Future updates include features for service invoicing, office statistics, digital marketing, form creation, appointment scheduling, and patient queue management.",
      technologies: [
        "React",
        "JavaScript",
        "Electron",
        "AWS",
        "Material UI",
        "Jest"
      ],
      liveDemoUrl: "https://www.pulseara.com/",
      size: "large"
    },
    {
      medias: [
        require("./assets/videos/globalProf/onboarding_process.mp4"),
        require("./assets/videos/globalProf/admin_panel.mp4")
      ],
      title: "GlobalProf",
      description:
        "This application is designed to streamline medical practice operations by enabling healthcare providers to manage patient records, create consultations, track allergies and active conditions, add important notes, and store patient images. It also facilitates office management by allowing the creation of staff accounts, managing medication lists, generating printable documents, creating prescriptions, and handling insurance claims.  Future updates include features for service invoicing, office statistics, digital marketing, form creation, appointment scheduling, and patient queue management.",
      technologies: [
        "React",
        "JavaScript",
        "Typescript",
        "AWS",
        "Material UI",
        "Jest",
        "MySQL"
      ],
      requestDemo: true,
      size: "large"
    },
    {
      medias: [
        require("./assets/images/caldo/image1.png"),
        require("./assets/images/caldo/image2.png"),
        require("./assets/images/caldo/image3.png"),
        require("./assets/images/caldo/image4.png"),
        require("./assets/images/caldo/image5.png"),
        require("./assets/images/caldo/image6.png"),
        require("./assets/images/caldo/image7.png"),
        require("./assets/images/caldo/image8.png")
      ],
      title: "Caldo App",
      description:
        "Developed a scalable mobile learning application using React Native for both iOS and Android platforms, designed to support millions of users. Built a dynamic, with smart caching mechanisms to efficiently manage and update thousands of course materials in real time. Led a cross-functional team of front-end and back-end developers, coordinating task distribution, maintaining development velocity, and ensuring on-time project delivery.",
      technologies: [
        "React Native",
        "JavaScript",
        "Typescript",
        "Material UI",
        "MySQL",
        "Jest"
      ],
      requestDemo: true,
      size: "large"
    },
    {
      medias: [
        require("./assets/images/city_skyline/image1.png"),
        require("./assets/images/city_skyline/image2.png")
      ],
      title: "City Skyline",
      description:
        "This project creates a responsive animated city skyline using pure HTML and CSS. It visually represents a layered urban skyline scene with foreground and background buildings, designed using nested <div> elements and custom CSS classes.",
      technologies: ["HTML", "CSS"],
      githubUrl:
        "https://github.com/JRoman2018/css-variables-by-building-a-city-skyline",
      liveDemoUrl:
        "https://css-variables-by-building-a-city-skyline.vercel.app/",
      size: "small"
    },
    {
      medias: [require("./assets/images/css_pinguin/image.png")],
      title: "CSS Penguin",
      description: `This project creates a cute cartoon penguin using only HTML and CSS. It features a stylized scene with mountains, a sun, and a hand-crafted penguin wearing a shirt that says "I 💜 CSS".`,
      technologies: ["HTML", "CSS"],
      githubUrl:
        "https://github.com/JRoman2018/css-transform-building-a-penguin",
      liveDemoUrl: "https://css-transform-building-a-penguin.vercel.app/",
      size: "small"
    },
    {
      medias: [require("./assets/images/redux-cart/image.png")],
      title: "Redux Cart",
      description:
        "Built a robust and responsive e-commerce cart solution using React and Redux, enabling users to manage products with real-time state updates. Implemented features like dynamic item quantity control, persistent state via localStorage, and a fully modular cart architecture suitable for integration into larger applications. Focused on code scalability and performance, ensuring seamless UX across devices.",
      technologies: ["HTML", "CSS", "React", "Redux"],
      githubUrl: "https://github.com/JRoman2018/redux-cart",
      liveDemoUrl:
        "https://617ad74144cf641f05480ff1--objective-varahamihira-1ddfca.netlify.app/",
      size: "medium"
    },
    {
      medias: [require("./assets/images/monster-slayer-game/image1.png")],
      title: "Monster Slayer Game",
      description:
        "Built an interactive turn-based combat game using Vue 3, featuring a player vs. monster mechanic with dynamic health bars, special attacks, healing, and surrender logic. Implemented game rounds with conditional logic to determine outcomes (win, lose, draw) and a reactive UI powered by Vue’s data, methods, computed, and watchers. Incorporated random value generation for attack and heal dynamics, along with a real-time action log to track gameplay events. Designed for learning Vue reactivity and user interface feedback through animations and state management.",
      technologies: ["Vue", "Javascript"],
      githubUrl:
        "https://github.com/JRoman2018/Monster-Slayer-Game/tree/master",
      liveDemoUrl: "https://tender-knuth-e6d08b.netlify.app/",
      size: "medium"
    },
    {
      medias: [require("./assets/images/stripe-submenu/image.png")],
      title: "Stripe Dynamic Submenu",
      description:
        "Created a dynamic and position-aware submenu component using React and the Context API to manage global state. The submenu adapts its layout based on the number of navigation links, adjusting between 2 to 4 column layouts dynamically. Leveraged useRef and useEffect hooks to calculate and set the submenu's exact screen position (left and top) based on user interaction. Built with scalability and clean UI in mind, making it ideal for use in responsive web applications with complex navigation needs.",
      technologies: ["React", "Javascript"],
      githubUrl: "https://github.com/JRoman2018/stripe-submenu",
      liveDemoUrl: "https://trusting-euler-7a34e4.netlify.app/",
      size: "medium"
    },
    {
      medias: [
        require("./assets/images/grocery-app/image1.png"),
        require("./assets/images/grocery-app/image2.png"),
        require("./assets/images/grocery-app/image3.png"),
        require("./assets/images/grocery-app/image4.png")
      ],
      title: "Grocery List App (CRUD)",
      description:
        "Built a simple yet fully functional grocery list application using React, featuring CRUD operations with local storage persistence. Users can add, edit, and delete items with real-time alerts powered by a contextual alert system. Integrated localStorage to maintain data across sessions and designed intuitive form interactions for an improved user experience. Implemented controlled components with useState and useEffect to manage application state and side effects, ensuring data integrity and responsive UI behavior.",
      technologies: ["React", "Javascript", "CSS"],
      githubUrl: "https://github.com/JRoman2018/Grocery-Bud/tree/main",
      liveDemoUrl: "https://boring-torvalds-1674f9.netlify.app/",
      size: "medium"
    },
    {
      medias: [
        require("./assets/images/color-generator/image1.png"),
        require("./assets/images/color-generator/image2.png")
      ],
      title: "Color Generator",
      description:
        "Developed an interactive color palette generator using React and the Values.js library. The application allows users to input a base color and dynamically generate shades and tints by specifying a division factor. Implemented robust error handling for invalid inputs and ensured responsive state updates using useState. The generated palette is rendered using reusable SingleColor components, providing a clean UI and user-friendly experience for designers or developers needing color schemes.",
      technologies: ["React", "Javascript", "CSS"],
      githubUrl: "https://github.com/JRoman2018/color-generator",
      liveDemoUrl: "https://xenodochial-einstein-7aef09.netlify.app/",
      size: "medium"
    },
    {
      medias: [
        require("./assets/images/real-state/image1.png"),
        require("./assets/images/real-state/image2.png"),
        require("./assets/images/real-state/image3.png"),
        require("./assets/images/real-state/image4.png")
      ],
      title: "Real State template",
      description:
        "Designed and developed a modern, fully responsive real estate website template using HTML5 and CSS3, ideal for agencies or independent realtors. The template includes a clean, intuitive layout featuring a hero section with a full-width background image or video, property listings with grid and list views, and a search/filter form to help users find properties by location, price, size, or type.",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/JRoman2018/Bienes-Raices-blog",
      liveDemoUrl: "https://dreamy-meninsky-307469.netlify.app/",
      size: "small"
    },
    {
      medias: [
        require("./assets/images/coffe-blog/image1.png"),
        require("./assets/images/coffe-blog/image2.png"),
        require("./assets/images/coffe-blog/image3.png")
      ],
      title: "Coffe Blog template",
      description:
        "Designed and developed a clean, visually rich coffee-themed blog template using HTML5 and CSS3, tailored for bloggers, coffee enthusiasts, or small café websites. The template emphasizes warm tones, elegant typography, and a magazine-style layout to enhance content readability and engagement.",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/JRoman2018/Bienes-Raices-blog",
      liveDemoUrl: "https://dreamy-meninsky-307469.netlify.app/",
      size: "small"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React Native - The Practical Guide [2023]",
      subtitle: "Udemy",
      date: "Expedición: oct. 2023",
      credentialId:
        "ID de la credencial UC-d4fd5402-0c7f-4fc5-a2b8-e20b561d43d",
      skills: ["React Native"],
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-d4fd5402-0c7f-4fc5-a2b8-e20b561d43d/"
        }
      ]
    },
    {
      title: "Agile Fundamentals: Including Scrum & Kanban",
      subtitle: "Udemy",
      date: "Expedición: jul. 2023",
      credentialId:
        "ID de la credencial UC-19f235ab-71c4-4a04-a998-dd486e76f198",
      skills: ["Kanban", "Scrum"],
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-19f235ab-71c4-4a04-a998-dd486e76f198/"
        }
      ]
    },
    {
      title: "Git for Geeks: Quick Training for Developer",
      subtitle: "Udemy",
      date: "Expedición: jun. 2023",
      credentialId:
        "ID de la credencial UC-d7ace264-0ea6-4fa5-8c05-5cf48375ea9c",
      skills: ["Git"],
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-d7ace264-0ea6-4fa5-8c05-5cf48375ea9c/"
        }
      ]
    },
    {
      title: "The ultimate Redux Course 2023 - [Redux-toolkit]",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      subtitle: "Udemy",
      date: "Expedición: jun. 2023",
      credentialId:
        "ID de la credencial UC-bbc89140-9faa-47c0-ae76-f8ca4c6d4db0",
      skills: ["Redux.js", "redux-toolkit"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-bbc89140-9faa-47c0-ae76-f8ca4c6d4db0/"
        }
      ]
    },
    {
      title: "TypeScript for Professionals - 2022 Edition",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      subtitle: "Udemy",
      date: "Expedición: dic. 2022",
      credentialId:
        "ID de la credencial UC-ca9211e4-336a-4514-93ce-d8ed2922df6a",
      skills: ["TypeScript"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-ca9211e4-336a-4514-93ce-d8ed2922df6a/"
        }
      ]
    },
    {
      title:
        "Learn best practices for testing your apps with Jest and React Testing Library!",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      subtitle: "Udemy",
      date: "Expedición: nov. 2022",
      credentialId:
        "ID de la credencial UC-fb7b4c78-288e-4911-b2c5-a59864293eec",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-fb7b4c78-288e-4911-b2c5-a59864293eec/"
        }
      ]
    },
    {
      title: "Security Awareness Foundations",
      subtitle: "KnowBe4",
      image: require("./assets/images/knowbe4_logo.jpg"),
      imageAlt: "Knowbe4 Logo",
      date: "Expedición: oct. 2022",
      footerLink: []
    },
    {
      title: "Front End Development Libraries",
      subtitle: "freeCodeCamp",
      date: "Expedición: mar. 2022",
      image: require("./assets/images/free_code_camp_logo.jpg"),
      imageAlt: "Freecode Camp Logo",
      credentialId:
        "ID de la credencial fcc32868ed4-4dd5-489d-96bf-98cc139ca599",
      skills: ["AWS Lambda", "React Query"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.freecodecamp.org/certification/fcc32868ed4-4dd5-489d-96bf-98cc139ca599/"
        }
      ]
    },
    {
      title: "React (Basic)",
      image: require("./assets/images/hackerrank_logo.jpg"),
      imageAlt: "HackerRank Logo",
      subtitle: "HackerRank",
      date: "Expedición: feb. 2022",
      credentialId: "ID de la credencial 83C99EC05EFE",
      skills: ["AWS Lambda", "React Query"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.hackerrank.com/certificates/83C99EC05EFE"
        }
      ]
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle: "Udemy",
      date: "Expedición: nov. 2021",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      credentialId:
        "ID de la credencial UC-b6fb40ff-b4bb-452c-81b1-94a0fc60cc49",
      skills: ["AWS Lambda", "React Query"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-b6fb40ff-b4bb-452c-81b1-94a0fc60cc49/"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "freeCodeCamp",
      date: "Expedición: sept. 2021",
      image: require("./assets/images/free_code_camp_logo.jpg"),
      imageAlt: "Freecode Camp Logo",
      credentialId:
        "ID de la credencial fcc32868ed4-4dd5-489d-96bf-98cc139ca599",
      skills: ["AWS Lambda", "React Query"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.freecodecamp.org/certification/fcc32868ed4-4dd5-489d-96bf-98cc139ca599/"
        }
      ]
    },
    {
      title: "Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
      subtitle: "Udemy",
      date: "Expedición: sept. 2021",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      credentialId:
        "ID de la credencial UC-fd887394-f764-450b-b4e6-1bdf39ec8d15",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-fd887394-f764-450b-b4e6-1bdf39ec8d15/"
        }
      ]
    },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp",
      date: "Expedición: abr. 2020",
      image: require("./assets/images/free_code_camp_logo.jpg"),
      imageAlt: "Freecode Camp Logo",
      credentialId:
        "ID de la credencial fcc32868ed4-4dd5-489d-96bf-98cc139ca599",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.freecodecamp.org/certification/fcc32868ed4-4dd5-489d-96bf-98cc139ca599/"
        }
      ]
    },
    {
      title: "2023 Salesforce Flows: The Complete Guide to Lightning Flows",
      subtitle: "Udemy",
      date: "Expedición feb. 2023 · Vencimiento: abr. 2023",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      credentialId:
        "ID de la credencial UC-3c13c46d-0cab-4eb7-9f71-80318fed5ea6",
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-3c13c46d-0cab-4eb7-9f71-80318fed5ea6/"
        }
      ]
    },
    {
      title: "Understanding Typescript",
      subtitle: "Udemy",
      date: "Expedición: dic. 2022",
      image: require("./assets/images/udemy_logo.jpg"),
      imageAlt: "Udemy Logo",
      credentialId:
        "ID de la credencial UC-5b5209d7-788f-4710-9952-799737d53909",
      skills: ["TypeScript"],
      footerLink: [
        {
          name: "Mostrar credencial",
          url: "https://www.udemy.com/certificate/UC-5b5209d7-788f-4710-9952-799737d53909/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (829) 962-3287",
  email_address: "josealbertoromanynfante@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
