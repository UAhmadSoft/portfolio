/*
 * Copyright 2025 Umad Ahmad
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Umad Ahmad',
    description: 'Portfolio website by Umad Ahmad',
    author: 'Umad Ahmad',
  },

  navigation: {
    logo: {
      text: 'PK',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Umad Ahmad',
      typingTexts: [
        'Building digital experiences',
        'Solving complex problems',
        'Creating user-focused apps',
      ],
      description: `Hi I am Umad Ahmad, a Full Stack Web Typescript Developer, who loves to develop smart, reliable and scalable applications.
My passion of developing efficient and convenient applications, interest in learning new technologies, enables me to develop more effective solutions and keep myself up to date. `,
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "I'm a passionate NestJS developer with a strong focus on building scalable and maintainable backend systems.",
        'I have hands-on experience designing RESTful APIs, integrating databases, and implementing authentication and authorization in modern web applications.',
        'I enjoy collaborating with cross-functional teams to deliver robust solutions and continuously improve my skills in TypeScript and backend architecture.',
      ],
      details: [
        { label: 'Location', value: 'Based in Islamabad' },
        { label: 'Experience', value: '4+ Years Experience' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Innovative Thinker',
          description:
            'I constantly explore new technologies and approaches to solve problems more efficiently.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'User-Focused',
          description:
            'I prioritize creating intuitive, accessible experiences that meet real user needs.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/UAhmadsoft',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Umad Ahmad. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;
