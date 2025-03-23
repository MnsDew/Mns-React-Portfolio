import course1 from "../assest/course1.png";
import course2 from "../assest/Course2.png";
import course3 from "../assest/Course3.jpeg";

const DataCourses = [
  {
    id: 1,
    title: "Bookstore Management System",
    description:
      "A command-line application built with JavaScript for managing bookstore inventory and sales operations.\
       The system allows users to perform CRUD operations for books—along with processing sales and generating receipts.",
    link: "https://satr.codes/path/ecbAGsuqOQ/view",
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
    title: "Vigor: Workout Plan Sharing App",
    description:
      "Vigor is a fitness management app designed to help users set personal fitness goals, track their progress, and log activities. It features an intuitive interface to enhance engagement and motivation.",
    link: "https://github.com/MnsDew/Vigor-App.git",
    image: course3,
  },
];

export default DataCourses;
