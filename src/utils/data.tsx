import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

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

// Data for menu links
export const MENU_LINKS: IMenuLink[] = [
  { id: '01', label: 'Home', offset: -100, to: 'hero' },
  { id: '02', label: 'Skills', offset: -100, to: 'skills' },
  { id: '03', label: 'About', offset: -100, to: 'about' },
  { id: '04', label: 'Projects', offset: -100, to: 'projects' },
  { id: '05', label: 'Contacts', offset: -100, to: 'contacts' },
] as const;

// Data for skill tab
export const SKILL_TABS: ISkillTab[] = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'Tools', value: 'tools' },
] as const;

// Data for skills
export const SKILLS: ISkill[] = [
  {
    id: '01',
    icon: FaReact,
    skill: 'React JS',
    type: 'frontend',
    description:
      'Experienced in building, component-driven web applications using React.js.',
  },
] as const;

// Data about me
export const ABOUT_ME: IAboutMe = {
  content: 'Full stack developer',
  socialLinks: [
    { id: '01', icon: FaFacebook, label: 'Facebook', link: '#' },
    { id: '01', icon: FaInstagram, label: 'Instagram', link: '#' },
    { id: '01', icon: FaLinkedin, label: 'LinkedIn', link: '#' },
  ],
  email: 'santoshgurung2175@gmail.com',
} as const;

// Data for projects
export const PROJECTS: IProject[] = [
  {
    id: 1,
    title:
      'Full Stack polling-app using MERN | MongoDB, Express, React JS, Node JS',
    image: '',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
  },
] as const;
