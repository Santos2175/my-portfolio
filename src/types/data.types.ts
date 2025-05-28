import type { IconType } from 'react-icons';

export interface IMenuLink {
  id: string;
  label: string;
  offset: number;
  to: string;
}

export interface ISkillTab {
  id: string;
  label: string;
  value: string;
}

export interface ISkill {
  id: string;
  icon: IconType;
  skill: string;
  type: 'frontend' | 'backend' | 'tools' | 'language' | 'soft-skills';
  description: string;
  level: 'Proficient' | 'Comfortable' | 'Familiar' | 'Learning';
}

export interface ISocialLink {
  id: string;
  icon: IconType;
  label: string;
  link: string;
}

export interface IAboutMe {
  content: string;
  socialLinks: ISocialLink[];
  email: string;
  phone: string;
}

export interface IProject {
  id: number;
  title: string;
  image: string;
  tags: string[];
}
