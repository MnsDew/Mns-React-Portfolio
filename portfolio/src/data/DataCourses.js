import course1 from "../assest/course1.png";
import course2 from "../assest/Course2.png";
import course3 from "../assest/Course3.jpeg";
// import course4 from "../assest/mockupLibro.png";
import course4 from "../assest/1link.png";
import course5 from "../assest/portfolio.png";

const DataCourses = [
  {
    id: 1,
    title: "Bookstore Management System",
    description:
      "A command-line application built with JavaScript for managing bookstore inventory and sales operations.\
       The system allows users to perform CRUD operations for books—along with processing sales and generating receipts By Satr Platform Full-Stack Course.",
    link: "https://github.com/MnsDew/bookstore-management-system.git",
    image: course1,
    target: "_blank", // Opens link in a new tab
  },
  {
    id: 2,
    title: "Bus Reservation System",
    description:
      "A Java-based bus reservation system that enables users to book, update, cancel, and search for reservations. It includes admin functionalities for better management and data persistence.",
    link: "https://github.com/MnsDew/Bus-Reservation-System.git",
    image: course2,
  },
  {
    id: 3,
    title: "Vigor: Workout Plan Sharing App , Mobile Application",
    description:
      "Vigor is a fitness management app designed to help users set personal fitness goals, track their progress, and log activities. It features an intuitive interface to enhance engagement and motivation , using React-Native , Expo",
    link: "https://github.com/MnsDew/Vigor-App.git",
    image: course3,
  },
  {
    id: 4,
    title: "LibroTrack: Library Management System (LMS) , Desktop Application",
    description:
      "LibroTrack is a 100% Java library management system using MySQL, Swing, and JavaFX. It supports full CRUD for books and students, lending/returning, reports, and statistics on total books, students, and borrowed/returned items across two databases.",
    link: "https://librotrack.my.canva.site/",
    image: course4,
  },    
  {
    id: 5,
        title: "Client Portfolio Website: Ibo Global Influencer",
        description:
          "Built a responsive portfolio website for Ibo, a global influencer and content creator. The site showcases his personal brand, social media presence, and collaborations across platforms like TikTok, Instagram, YouTube, and Snapchat. Developed with Next.js, featuring smooth animations and multilingual support.",
    link: "https://ibo-mu.vercel.app/",
    image: course5,
  },
];    

export default DataCourses;
