import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Realtor Pro",
    description:
      "This project is a web application developed with ReactJS to manage and track sales statistics for properties (lots, houses, apartments, etc.). It allows users to record, query, and analyze sales data to gain valuable insights into business performance.",
    images: [
      "/realtor-pro/image1.png",
      "/realtor-pro/image2.png",
      "/realtor-pro/image3.png",
      "/realtor-pro/image4.png",
      "/realtor-pro/image5.png",
    ],
    tags: [
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
      "MySQL",
    ],
    request_demo: true,
    complexity: "Advanced",
  },
  {
    id: 2,
    title: "Pulseara",
    description:
      "This application is designed to streamline medical practice operations by enabling healthcare providers to manage patient records, create consultations, track allergies and active conditions, add important notes, and store patient images. It also facilitates office management by allowing the creation of staff accounts, managing medication lists, generating printable documents, creating prescriptions, and handling insurance claims.  Future updates include features for service invoicing, office statistics, digital marketing, form creation, appointment scheduling, and patient queue management.",
    images: [
      "/pulseara/image1.png",
      "/pulseara/image2.png",
      "/pulseara/image3.png",
    ],
    tags: ["React", "JavaScript", "Electron", "AWS", "Material UI", "Jest"],
    link: "https://www.pulseara.com/",
    complexity: "Advanced",
  },
  {
    id: 3,
    title: "GlobalProf",
    description:
      "This application is designed to streamline medical practice operations by enabling healthcare providers to manage patient records, create consultations, track allergies and active conditions, add important notes, and store patient images. It also facilitates office management by allowing the creation of staff accounts, managing medication lists, generating printable documents, creating prescriptions, and handling insurance claims.  Future updates include features for service invoicing, office statistics, digital marketing, form creation, appointment scheduling, and patient queue management.",
    images: [
      "/globalProf/image1.png",
      "/globalProf/image2.png",
      "/globalProf/image3.png",
      "/globalProf/image4.png",
    ],
    tags: [
      "React",
      "JavaScript",
      "Typescript",
      "AWS",
      "Material UI",
      "Jest",
      "MySQL",
    ],
    request_demo: true,
    complexity: "Advanced",
  },
  {
    id: 4,
    title: "Caldo App",
    description:
      "Developed a scalable mobile learning application using React Native for both iOS and Android platforms, designed to support millions of users. Built a dynamic, with smart caching mechanisms to efficiently manage and update thousands of course materials in real time. Led a cross-functional team of front-end and back-end developers, coordinating task distribution, maintaining development velocity, and ensuring on-time project delivery.",
    images: [
      "/caldo/image1.png",
      "/caldo/image2.png",
      "/caldo/image3.png",
      "/caldo/image4.png",
      "/caldo/image5.png",
      "/caldo/image6.png",
      "/caldo/image7.png",
      "/caldo/image8.png",
    ],
    tags: [
      "React Native",
      "JavaScript",
      "Typescript",
      "Material UI",
      "MySQL",
      "Jest",
    ],
    request_demo: true,
    complexity: "Advanced",
  },
  {
    id: 5,
    title: "City Skyline",
    description:
      "This project creates a responsive animated city skyline using pure HTML and CSS. It visually represents a layered urban skyline scene with foreground and background buildings, designed using nested <div> elements and custom CSS classes.",
    images: ["/city_skyline/image1.png", "/city_skyline/image2.png"],
    tags: ["HTML", "CSS"],
    link: "https://css-variables-by-building-a-city-skyline.vercel.app/",
    complexity: "Beginner",
  },
  {
    id: 6,
    title: "CSS Penguin",
    description: `This project creates a cute cartoon penguin using only HTML and CSS. It features a stylized scene with mountains, a sun, and a hand-crafted penguin wearing a shirt that says "I 💜 CSS".`,
    images: ["/css_pinguin/image.png"],
    tags: ["HTML", "CSS"],
    link: "https://css-transform-building-a-penguin.vercel.app/",
    complexity: "Beginner",
  },
  {
    id: 7,
    title: "Redux Cart",
    description:
      "Built a robust and responsive e-commerce cart solution using React and Redux, enabling users to manage products with real-time state updates. Implemented features like dynamic item quantity control, persistent state via localStorage, and a fully modular cart architecture suitable for integration into larger applications. Focused on code scalability and performance, ensuring seamless UX across devices.",
    images: ["/redux-cart/image.png"],
    tags: ["HTML", "CSS", "React", "Redux"],
    link: "https://617ad74144cf641f05480ff1--objective-varahamihira-1ddfca.netlify.app/",
    complexity: "Intermediate",
  },
  {
    id: 8,
    title: "Monster Slayer Game",
    description:
      "Built an interactive turn-based combat game using Vue 3, featuring a player vs. monster mechanic with dynamic health bars, special attacks, healing, and surrender logic. Implemented game rounds with conditional logic to determine outcomes (win, lose, draw) and a reactive UI powered by Vue’s data, methods, computed, and watchers. Incorporated random value generation for attack and heal dynamics, along with a real-time action log to track gameplay events. Designed for learning Vue reactivity and user interface feedback through animations and state management.",
    images: ["/monster-slayer-game/image1.png"],
    tags: ["Vue", "Javascript"],
    link: "https://tender-knuth-e6d08b.netlify.app/",
    complexity: "Intermediate",
  },
  {
    id: 9,
    title: "Stripe Dynamic Submenu",
    description:
      "Created a dynamic and position-aware submenu component using React and the Context API to manage global state. The submenu adapts its layout based on the number of navigation links, adjusting between 2 to 4 column layouts dynamically. Leveraged useRef and useEffect hooks to calculate and set the submenu's exact screen position (left and top) based on user interaction. Built with scalability and clean UI in mind, making it ideal for use in responsive web applications with complex navigation needs.",
    images: ["/stripe-submenu/image.png"],
    tags: ["React", "Javascript"],
    link: "https://trusting-euler-7a34e4.netlify.app/",
    complexity: "Intermediate",
  },
  {
    id: 10,
    title: "Grocery List App (CRUD)",
    description:
      "Built a simple yet fully functional grocery list application using React, featuring CRUD operations with local storage persistence. Users can add, edit, and delete items with real-time alerts powered by a contextual alert system. Integrated localStorage to maintain data across sessions and designed intuitive form interactions for an improved user experience. Implemented controlled components with useState and useEffect to manage application state and side effects, ensuring data integrity and responsive UI behavior.",
    images: [
      "/grocery-app/image1.png",
      "/grocery-app/image2.png",
      "/grocery-app/image3.png",
      "/grocery-app/image4.png",
    ],
    tags: ["React", "Javascript", "CSS"],
    link: "https://boring-torvalds-1674f9.netlify.app/",
    complexity: "Intermediate",
  },
  {
    id: 11,
    title: "Color Generator",
    description:
      "Designed and developed a modern, fully responsive real estate website template using HTML5 and CSS3, ideal for agencies or independent realtors. The template includes a clean, intuitive layout featuring a hero section with a full-width background image or video, property listings with grid and list views, and a search/filter form to help users find properties by location, price, size, or type.",
    images: ["/color-generator/image1.png", "/color-generator/image2.png"],
    tags: ["React", "Javascript", "CSS"],
    link: "https://xenodochial-einstein-7aef09.netlify.app/",
    complexity: "Intermediate",
  },
  {
    id: 12,
    title: "Real State template",
    description:
      "Designed and developed a modern, fully responsive real estate website template using HTML5 and CSS3, ideal for agencies or independent realtors. The template includes a clean, intuitive layout featuring a hero section with a full-width background image or video, property listings with grid and list views, and a search/filter form to help users find properties by location, price, size, or type.",
    images: [
      "/real-state/image1.png",
      "/real-state/image2.png",
      "/real-state/image3.png",
      "/real-state/image4.png",
    ],
    tags: ["HTML", "CSS"],
    link: "https://dreamy-meninsky-307469.netlify.app/",
    complexity: "Beginner",
  },
  {
    id: 13,
    title: "Coffe Blog template",
    description:
      "Designed and developed a clean, visually rich coffee-themed blog template using HTML5 and CSS3, tailored for bloggers, coffee enthusiasts, or small café websites. The template emphasizes warm tones, elegant typography, and a magazine-style layout to enhance content readability and engagement.",
    images: [
      "/coffe-blog/image1.png",
      "/coffe-blog/image2.png",
      "/coffe-blog/image3.png",
    ],
    tags: ["HTML", "CSS"],
    link: "https://dreamy-meninsky-307469.netlify.app/",
    complexity: "Beginner",
  },
];
