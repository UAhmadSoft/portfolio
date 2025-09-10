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

import { Skill } from '../types/types';

export const skills: Skill[] = [
  {
    category: 'Backend',
    technologies: [
      {
        name: 'Nest.js',
        color: '#E0234E',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/nestjs/nestjs-original.svg',
      },
      {
        name: 'Node.js',
        color: '#339933',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        color: '#000000',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },

      {
        name: 'TypeScript',
        color: '#3178C6',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/typescript/typescript-original.svg',
      },
      {
        name: 'TypeORM',
        color: '#F37626',
        icon: 'https://typeorm.io/img/typeorm-icon-colored.png',
      },
      {
        name: 'React.js',
        color: '#61DAFB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/react/react-original.svg',
      },
    ],
  },
  {
    category: 'Database',
    technologies: [
      {
        name: 'PostgresQL',
        color: '#336791',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySql',
        color: '#4479A1',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        color: '#47A248',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Redis',
        color: '#DC382D',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/redis/redis-original.svg',
      },
      {
        name: 'Firebase',
        color: '#FFCA28',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  },
  {
    category: 'DevOps',
    technologies: [
      {
        name: 'Jenkins',
        color: '#D33833',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      },
      {
        name: 'GitHub Actions',
        color: '#2088FF',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'AWS',
        color: '#FF9900',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
    ],
  },
];
