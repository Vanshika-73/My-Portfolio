import {mobile, backend, creator, web, javascript,typescript, html, css, reactjs, redux, tailwind, nodejs,mongodb, git,figma,docker,meta,   techfest,gdsc,shopify,carrent,jobit,tripguide, threejs,madhuram,Quiz, todo, proshop, udyamwell, portfolio, udyamWellProject, Aditya, certificate2, certificate1, udyamwell_certificate, naivedyam, madhuram_web, ms_conclave, madhuram_Anchoring, anchoring, techfest23, coding_spardha, sachin_sir } from "../assets";
  
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
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "UdyamWell",
      icon: udyamwell,
      iconBg: "#383E56",
      date: "June 2023 - Sept 2023",
      points: [
        "Got the position in the founding team of UdyamWell.",
        "Developing and maintaining web applications using  Mern Stack technology",
        "Single handedly developed frontend of the website and contributed in backend part too."
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
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Vanshika for any Frontend Web Developer role. Her exceptional technical skills, collaborative spirit, and dedication were evident during her internship at UdyamWell Private Limited. Vanshika's talent and commitment make her an excellent fit for particular role.",
      name: "Sachin Korla",
      designation: "Founder & CEO",
      company: "UdyamWell Private Limited",
      image: sachin_sir,
    },
    {
      testimonial:
        "Vanshika has been an exceptional contributor to our GDSC remote project. Her dedication, attention to detail, and proactive approach have greatly enhanced our project's quality. I highly recommend Vanshika for her outstanding work and collaborative nature in each sprints of GDSC project.",
      name: "Aditya Bathani",
      designation: "Software Developer",
      company: "Drupal",
      image:Aditya,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "This is a personal portfolio project that I developed for myself to make my own identification to stand out from crowd by showcasing my skills.",
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
          name: "threeJs",
          color: "green-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Vanshika-73/My-Portfolio",
      web_link:"https://my-portfolio-ten-iota-52.vercel.app/"
    },
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
      name: "UdyamWell",
      description:
        "This is a website made for UdyamWell private limited. A startup for to help rural enterprises to grow.",
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
      image: udyamWellProject,
      source_code_link: "#",
      web_link:"https://udyamwell.com/"
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
  const achievements = [
    {
      img:udyamwell_certificate
    },
    {
      img:certificate1
    },
    {
      img:certificate2
    },
    {
      img:naivedyam
    },
    {
      img:madhuram_web
    },
    {
      img:ms_conclave
    },
    {
      img:madhuram_Anchoring
    },
    {
      img:anchoring
    },
    {
      img:techfest23
    },
    {
      img:coding_spardha
    }
  ]
  export { services, technologies, experiences, testimonials, projects,achievements };
