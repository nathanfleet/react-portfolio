import crypto from "../assets/proj/crypto.png"
import sneaker from "../assets/proj/sneaker.png"
import physics from "../assets/proj/physics.png"

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

export const projects = [
  {
    name: "Centralized Crypto",
    description: "Centralized crypto is an application that allows users to deposit money into various crypto currency accounts. Users are able to sign up for accounts with the “bank” to begin making transactions. Users are able to make deposits and withdraws from external bank accounts using the self service web application. In addition, users are able to transfer coins to other bank users by providing the application with the other user's account number and an amount.",
    tags: [
      {
        name: "balsamiq",
        color: "blue-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com",
  },
  {
    name: "Sneaker Sphere",
    description: "The purpose of the Sneaker Sphere website is to create a marketplace for shoe buyers and sellers. By implementing an SQL database, the website is able to manage all necessary information in one place, allowing for a more efficient and effective platform for shoe buying and selling",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: sneaker,
    source_code_link: "https://github.com",
  },
  {
    name: "Gamma Physics",
    description: "This project implements the p5.js library, as well as HTML and CSS to create a fun phsyics based ball game.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-600",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: physics,
    source_code_link: "https://github.com",
  },
];

export const styles = {
  headText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    
  subText:
  "text-white sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};