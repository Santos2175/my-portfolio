import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from 'react-icons/si';
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt, FaDribbble } from 'react-icons/fa6';
import { MdGroups3 } from 'react-icons/md';

import type {
  IMenuLink,
  ISkillTab,
  ISkill,
  IAboutMe,
  IProject,
} from '../types/data.types';

import POLLING_APP from '../assets/images/polling-app.png';

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
      'Proficient in building scalable, component-driven interfaces using React and hooks.',
  },
  {
    id: '02',
    icon: FaHtml5,
    skill: 'HTML',
    type: 'frontend',
    level: 'Proficient',
    description:
      'Strong grasp of semantic HTML for accessibility and SEO-friendly structure.',
  },
  {
    id: '03',
    icon: FaCss3,
    skill: 'CSS',
    type: 'frontend',
    level: 'Proficient',
    description:
      'Skilled in writing responsive and modular CSS with modern layout techniques.',
  },
  {
    id: '04',
    icon: FaNodeJs,
    skill: 'Node JS',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Built RESTful APIs and backend logic using Node.js and Express.',
  },
  {
    id: '05',
    icon: SiExpress,
    skill: 'Express JS',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Experience in building lightweight, scalable APIs with Express.',
  },
  {
    id: '06',
    icon: SiMongodb,
    skill: 'MongoDB',
    type: 'backend',
    level: 'Comfortable',
    description:
      'Worked with MongoDB for document-based data modeling and queries.',
  },
  {
    id: '07',
    icon: SiMysql,
    skill: 'MySQL',
    type: 'backend',
    level: 'Familiar',
    description:
      'Understand basic SQL operations, joins, and relational database schema.',
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
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: POLLING_APP,
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 2,
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: '',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 3,
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: '',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 4,
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: '',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 5,
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: '',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
] as const;
