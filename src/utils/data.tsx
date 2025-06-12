import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitAlt,
  FaSass,
} from 'react-icons/fa';
import { FaXTwitter, FaDocker } from 'react-icons/fa6';

import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoRedux,
} from 'react-icons/bi';
import { TbSql } from 'react-icons/tb';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiWebpack,
  SiReactquery,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import type {
  IMenuLink,
  ISkillTab,
  ISkill,
  IAboutMe,
  IProject,
} from '../types/data.types';

import POLLING_APP from '../assets/images/polling-app.png';
import DEV_COMMUNITY from '../assets/images/devSocialApp.png';
import CHAT_APP from '../assets/images/chatApp.png';
import ADMIN_DASHBOARD from '../assets/images/adminDashboard.png';
import GYM_APP from '../assets/images/evogym.png';
import WEATHER_APP from '../assets/images/weather-app.png';
import EXPENSE_TRACKER from '../assets/images/expense-tracker.png';
import AUTH_APP from '../assets/images/auth-app.png';
import MULTI_STEPPER_FORM from '../assets/images/multi-stepper-form.png';

// Data for menu links
export const MENU_LINKS: IMenuLink[] = [
  { id: '01', label: 'Home', offset: -100, to: 'hero' },
  { id: '02', label: 'Skills', offset: -100, to: 'skills' },
  { id: '03', label: 'About', offset: -100, to: 'about' },
  { id: '04', label: 'Projects', offset: -100, to: 'projects' },
  { id: '05', label: 'Contacts', offset: -100, to: 'contact' },
] as const;

// Data for skill tab
export const SKILL_TABS: ISkillTab[] = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'Language', value: 'language' },
  { id: '05', label: 'Tools', value: 'tools' },
] as const;

// Data for skills
export const SKILLS: ISkill[] = [
  {
    id: '01',
    icon: FaReact,
    skill: 'React JS',
    type: 'frontend',
    level: 'Proficient',
    description:
      'Proficient in building scalable, component-driven UIs using React, hooks, and context for dynamic single-page applications.',
  },
  {
    id: '02',
    icon: FaHtml5,
    skill: 'HTML',
    type: 'frontend',
    level: 'Proficient',
    description:
      'Strong grasp of semantic HTML to structure accessible and SEO-optimized web pages.',
  },
  {
    id: '03',
    icon: FaCss3,
    skill: 'CSS',
    type: 'frontend',
    level: 'Proficient',
    description:
      'Skilled in crafting responsive, adaptive designs using Flexbox, Grid, and modular CSS techniques.',
  },
  {
    id: '04',
    icon: FaNodeJs,
    skill: 'Node JS',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Developed backend logic and RESTful services using Node.js, handling asynchronous operations and middleware.',
  },
  {
    id: '05',
    icon: SiExpress,
    skill: 'Express JS',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Hands-on experience on building scalable API endpoints with Express, using middleware and routing patterns effectively.',
  },
  {
    id: '06',
    icon: SiMongodb,
    skill: 'MongoDB',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Hands-on experience with MongoDB for schema design, CRUD operations, and aggregation pipelines in NoSQL environments.',
  },
  {
    id: '07',
    icon: SiMysql,
    skill: 'MySQL',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Good understanding of relational schema, joins, indexing, and SQL queries to manage structured data.',
  },
  {
    id: '08',
    icon: TbSql,
    skill: 'SQL',
    type: 'language',
    level: 'Comfortable',
    description:
      'Capable of writing optimized SQL queries for data retrieval, manipulation, and relational joins across tables.',
  },
  {
    id: '09',
    icon: VscVscode,
    skill: 'VsCode',
    type: 'tools',
    level: 'Comfortable',
    description:
      'Efficient with VSCode extensions, snippets, and debugging tools to speed up development and reduce context-switching.',
  },
  {
    id: '10',
    icon: SiWebpack,
    skill: 'Webpack',
    type: 'frontend',
    level: 'Familiar',
    description:
      'Basic understanding of module bundling, asset optimization, and configuration for custom React setups.',
  },
  {
    id: '11',
    icon: SiPostman,
    skill: 'Postman',
    type: 'tools',
    level: 'Comfortable',
    description:
      'Regularly use Postman to test, debug, and document REST APIs with collection and environment setup.',
  },
  {
    id: '12',
    icon: SiReactquery,
    skill: 'React Query',
    type: 'frontend',
    level: 'Comfortable',
    description:
      'Used React Query to handle server state with caching, background refetching, and automated data synchronization.',
  },
  {
    id: '13',
    icon: SiTailwindcss,
    skill: 'TailwindCSS',
    type: 'frontend',
    level: 'Comfortable',
    description:
      'Built responsive UIs using utility-first classes with Tailwind, improving design consistency and development speed.',
  },
  {
    id: '14',
    icon: FaSass,
    skill: 'SASS',
    type: 'frontend',
    level: 'Comfortable',
    description:
      'Experienced in writing modular SCSS using variables, mixins, nesting, and partials to maintain clean and scalable codebases.',
  },
  {
    id: '15',
    icon: FaGitAlt,
    skill: 'Git',
    type: 'tools',
    level: 'Comfortable',
    description:
      'Use Git for version control, branching workflows, and collaboration through pull requests and conflict resolution.',
  },
  {
    id: '16',
    icon: FaDocker,
    skill: 'Docker',
    type: 'tools',
    level: 'Comfortable',
    description:
      'Basic knowledge of containerization to package and run applications in isolated environments using Dockerfiles and volumes.',
  },
  {
    id: '17',
    icon: FaGithub,
    skill: 'Gihhub',
    type: 'tools',
    level: 'Comfortable',
    description:
      'Use GitHub for source code management, issue tracking, and project collaboration via repositories and actions.',
  },
  {
    id: '18',
    icon: BiLogoJavascript,
    skill: 'Javascript',
    type: 'language',
    level: 'Proficient',
    description:
      'Proficient in writing clean, modular JavaScript with ES6+ features, async handling, and DOM manipulation.',
  },
  {
    id: '19',
    icon: BiLogoTypescript,
    skill: 'Typescript',
    type: 'language',
    level: 'Proficient',
    description:
      'Skilled in using TypeScript for scalable codebases, leveraging types, interfaces, and generics for reliability.',
  },
  {
    id: '20',
    icon: BiLogoPython,
    skill: 'Python',
    type: 'language',
    level: 'Comfortable',
    description:
      'Comfortable scripting in Python for automation, data parsing, and logic-building with libraries like requests and pandas.',
  },
  {
    id: '21',
    icon: BiLogoRedux,
    skill: 'Redux',
    type: 'frontend',
    level: 'Comfortable',
    description:
      'Comfortable with Redux Toolkit using createSlice, createAsyncThunk, and best practices for managing complex state.',
  },
] as const;

// Data about me
export const ABOUT_ME: IAboutMe = {
  content: `My journey into full-stack development began with a simple fascination: how technology makes everyday life easier. I was especially curious about how websites and apps work behind the scenes—how data flows, how systems connect, and how it all comes together to solve real problems. That curiosity grew into a strong interest, and over time, I started building projects that allowed me to explore both the frontend and backend sides of development.

Today, I work with tools like React, Node.js, Express, and MongoDB to create web applications that are not only functional but also user-friendly. I enjoy the process of turning ideas into real, working solutions—whether it’s designing interfaces, building APIs, or managing data. I’m always looking to improve my skills and take on projects that challenge me to grow. I'm open to opportunities where I can contribute to meaningful work and continue learning alongside experienced teams.`,
  socialLinks: [
    {
      id: '01',
      icon: FaFacebook,
      label: 'Facebook',
      link: 'https://www.facebook.com/santos.grg.507/',
    },
    {
      id: '02',
      icon: FaInstagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/santos__gurung/',
    },
    {
      id: '03',
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/santosh-gurung2175/',
    },
    {
      id: '04',
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/Santos2175',
    },
    {
      id: '05',
      icon: FaXTwitter,
      label: 'Twitter',
      link: 'https://x.com/Santosh2175',
    },
  ],
  email: 'santoshgurung2175@gmail.com',
  phone: '(+977) 9846819969',
} as const;

// Data for projects
export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'BuzzPoll - Fullstack polling app (MERN)',
    description:
      'Create and vote on polls in real-time with authentication, results, and user analytics. Built with the MERN stack for seamless interaction.',
    image: POLLING_APP,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    codeLink: 'https://github.com/Santos2175/polling-app',
    liveLink: 'https://polling-app-self.vercel.app/',
  },
  {
    id: 2,
    title: 'Expense Tracker - Fullstack Finance App (MERN)',
    description:
      'Track your income and expenses visually with charts and summaries. User authentication and persistent storage using MongoDB.',
    image: EXPENSE_TRACKER,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    codeLink: 'https://github.com/Santos2175/expense-tracker',
    liveLink: 'https://expense-tracker-nu-bice.vercel.app/',
  },
  {
    id: 3,
    title: 'Klimate - Weather dashboard (React Frontend)',
    description:
      'A sleek dashboard showing current weather and forecasts using OpenWeather API. Built with TypeScript, React, and modern UI components.',
    image: WEATHER_APP,
    tags: [
      'Typescript',
      'React.js',
      'React Query',
      'Axios',
      'Shadcn',
      'Openweather Api',
    ],
    codeLink: 'https://github.com/Santos2175/weather-app',
    liveLink: 'https://weather-app-sepia-pi-93.vercel.app/',
  },
  {
    id: 4,
    title: 'Auth App - Full Stack (MERN)',
    description:
      'An authentication app with features such as verify email, forgot password, reset password along with security tokens',
    image: AUTH_APP,
    tags: [
      'Typescript',
      'React.js',
      'Axios',
      'Zustand',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    codeLink: 'https://github.com/Santos2175/auth-app',
    liveLink: 'https://auth-app-two-ebon.vercel.app/',
  },
  {
    id: 5,
    title: 'Multi Stepper Form - React.js',
    description:
      'A multi step form built for guiding the clients through mulitple steps for project planning setup.',
    image: MULTI_STEPPER_FORM,
    tags: [
      'Typescript',
      'React.js',
      'React Hook Form',
      'shadcn',
      'Tailwindcss',
    ],
    codeLink: 'https://github.com/Santos2175/multi-stepper-form',
    liveLink: 'https://multi-stepper-form-three.vercel.app/',
  },
  {
    id: 6,
    title: 'EvoGym - Gym app (React Frontend)',
    description:
      'Responsive gym website with membership plans, class schedules, and animations. Built with React and styled using Tailwind CSS.',
    image: GYM_APP,
    tags: [
      'Typescript',
      'React.js',
      'Tailwindcss',
      'React hook form',
      'framer-motion',
    ],
    codeLink: 'https://github.com/Santos2175/gym-app',
    liveLink: 'https://gym-app-orcin-nine.vercel.app/',
  },
  {
    id: 7,
    title: 'Admin Dashboard - (React Frontend)',
    description:
      'Interactive dashboard with charts, analytics, and UI animations. Built using React, Tailwind, Framer Motion, and Recharts.',
    image: ADMIN_DASHBOARD,
    tags: [
      'React.js',
      'Tailwindcss',
      'Recharts',
      'lucide-react',
      'framer-motion',
    ],
    codeLink: 'https://github.com/Santos2175/Admin-Dashboard',
    liveLink: 'https://admin-dashboard-topaz-seven-38.vercel.app/',
  },
  {
    id: 8,
    title: 'DevCommunity - Fullstack social app (MERN)',
    description:
      'Connect with developers, share posts, and comment your opinions on their posts. Full-featured social platform using MERN stack with authentication and feeds.',
    image: DEV_COMMUNITY,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    codeLink: 'https://github.com/Santos2175/Dev-Social-App',
    liveLink: 'https://dev-social-app.onrender.com/',
  },
  {
    id: 9,
    title: 'Connectify - Fullstack chat app (MERN)',
    description:
      'Real-time chat application with WebSocket (Socket.io) integration. Supports user auth, and message persistence with MongoDB',
    image: CHAT_APP,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'socket.io'],
    codeLink: 'https://github.com/Santos2175/Chat-App',
    liveLink: 'https://chat-app-qo06.onrender.com/',
  },
] as const;
