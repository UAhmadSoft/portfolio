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

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ubrealty',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Google APIs', 'Redis'],
    githubLink: '',
    liveLink: 'https://ubrealty.com',
    type: 'Backend',
    thumbnail: '/images/ubrealty/home-cropped.png',
    carouselImages: [
      '/images/ubrealty/home-cropped.png',
      '/images/ubrealty/condos.png',
      '/images/ubrealty/houses.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'Armada',
    description:
      "The seamless platform connecting car owners and renters in one dynamic marketplace. Whether you're looking to rent for your next trip or list your car to earn extra income, Armada makes it easy!.",
    tags: ['Express.js', 'Node.js', 'MongoDB', 'TypeScript'],
    githubLink: 'https://github.com/PraveenGongada/Catalyst',
    liveLink: '',
    type: 'Backend',
    thumbnail: '/images/armada/thumbnail.jfif',
    gifUrl: '',
    carouselImages: [
      '/images/armada/thumbnail.jfif',
      '/images/armada/roles.jfif',
      '/images/armada/home.jfif',
      '/images/armada/bookings.jfif',
      '/images/armada/list-car.jfif',
      '/images/armada/car-details.jfif',
      '/images/armada/review.jfif',
      '/images/armada/wallet.jfif',
      '/images/armada/inbox.jfif',
    ],
  },
  {
    id: 3,
    title: 'PlantX',
    description:
      'An AI-based app designed to take plant care to the next level! With cutting-edge AI technology, Plantx helps plant lovers like you thrive by providing personalized plant care solutions, all at your fingertips. 🌞💧',
    tags: ['NestJs', 'TypeScript', 'MongoDB', 'AI'],
    githubLink: 'https://github.com/PraveenGongada/MovieDB',
    type: 'Backend',
    thumbnail: '/images/plantx/thumbnail.jpg',
    carouselImages: [
      '/images/plantx/thumbnail.jpg',
      '/images/plantx/home-screen.jpg',
      '/images/plantx/scan.jpg',
      '/images/plantx/plant.jpg',
      '/images/plantx/reminder.jpg',
      '/images/plantx/scanning.jpg',
      '/images/plantx/water-calculator.jpg',
      '/images/plantx/footer.jpg',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
