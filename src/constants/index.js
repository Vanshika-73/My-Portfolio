import {mobile, backend, creator, web, javascript,typescript, html, css, reactjs, redux, tailwind, nodejs,mongodb, git,figma,docker,meta,   techfest,gdsc,shopify,carrent,jobit,tripguide, threejs,madhuram,Quiz, todo, proshop, udyamwell } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Intern",
      company_name: "UdyamWell",
      icon: udyamwell,
      iconBg: "#383E56",
      date: "Sept 2022 - Oct 2022",
      points: [
        "Developing and maintaining web applications using  Mern Stack technology.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "Madhuram",
      icon: madhuram,
      iconBg: "#383E56",
      date: "Sept 2022 - Oct 2022",
      points: [
        "Maintaining the website which is developed using Wordpress.",
        "Developing and maintaining various posts in Our Team page and Gallery page",
        "Given the voting functionality to the website ",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "techFest23",
      icon: techfest,
      iconBg: "black",
      date: " Dec 2022 - Mar 2023",
      points: [
        "Developing and maintaining web applications using  Mern Stack technology.",
        "Developed various frontend pages.",
        "Developed image crousel using Js.",
        "helped in developing backend code.",
        "gave various functionalities like email verifications and forgot password, conversion of data to csv or pdf file"
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "GDSC",
      icon: gdsc,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "I have been a part of the team where we developed a solution named- Feed Who need-Ek kiran roshni ki....",
        "Developed frontend pages related to the user registrataion and gave validations."
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Proshop",
      description:
        "This, an Ecommerce project using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project aimed to create a fully functional and user-friendly online marketplace for selling products. Frontend link is provided in the web link. Register yourself and enjoy the experience on online selling platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "expressJs",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
      ],
      image: proshop,
      source_code_link: "https://github.com/Vanshika-73/Proshop",
      web_link:"https://proshop-five-beta.vercel.app/"
    },
    {
      name: "Quiz Game",
      description:
        "Web-based platform that allows users to test their knowledge by answering atmost 5 questions in various fields. This is made using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "expressJs",
          color: "blue-text-gradient",
        },
      ],
      image: Quiz,
      source_code_link: "https://github.com/Vanshika-73/QuizGame.git",
      web_link:"https://quiz-game-five-jade.vercel.app/"
    },
    {
      name: "To-Do List Maker",
      description:
        "Web application that helps users to create a to-do list on daily basis to help with their daily chores.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Vanshika-73/ToDo",
      web_link:"https://to-do-nine-delta.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };