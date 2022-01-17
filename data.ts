import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Desenvolvimento Front-end",
    about:
      "Posso construir um SPA bonito e escalável usando <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Desenvolvimento de back-end",
    about:
      "Lidar com banco de dados, servidor, api usando <b>Express </b> e outros frameworks populares",
  },
  {
    Icon: AiOutlineApi,
    title: "Desenvolvimento de API",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Solucionar problemas com as melhores práticas de desenvolvimento. ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Designer de interface de usuário impressionante usando <b>Figma</b>  and  <b>AdobeXD</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Idéias Novas",
    about:
      "A transformação do mundo por intermédio da tecnologia.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJs",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "AdobeXD",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Projeto Nextar",
    description:
      "O projeto (teste) Desafio Tech Nextar é uma plataforma que permite obter informações, registros e cadastramento",
    image_path: "/images/nextar.png",
    deployed_url: "https://desafiotech.netlify.app/",
    github_url: "https://github.com/MirkaJuliet34/projeto-nextar",
    category: ["react"],
    key_techs: ["React", "JQuery", "Bootstrap"],
  },
  {
    name: "Halloween Website",
    image_path: "/images/terror.png",
    deployed_url: "https://terror-mj.netlify.app/",
    github_url: "https://github.com/MirkaJuliet34/halloweenwebsite",
    category: ["react", ],
    description:
      "Plataforma de compras on-line com o tema Halloween.",
    key_techs: ["JavaScript", "HTML5", "CSS"  ],
  },

  {
    name: "Projeto Fitness",
    image_path: "/images/fitness.png",
    deployed_url: "https://fitness-mj.netlify.app/",
    github_url: "https://github.com/MirkaJuliet34/fitness-mj",
    category: ["node", "react"],
    description:
      "O Projeto Fitness é uma plataforma que permite obter informações, registros e cadastramento",
    key_techs: [
      "JavaScript",
      "Bootstrap",
      "HTML5",
      "CSS"
    ],
  },

  {
    name: "Weather Forecast",
    image_path: "/images/weather-forecast.png",
    deployed_url: "https://tempw.netlify.app/",
    github_url: "https://github.com/MirkaJuliet34/weather-forecast",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Bootstrap"],
  },

  {
    name: "Em andamento...",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Em andamento...",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "Em andamento... ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Em andamento...",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];