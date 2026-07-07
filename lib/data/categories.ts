import { Category } from '../types';

export const categories: Category[] = [
  {
    slug: 'romantisch',
    name: 'Romantisch',
    description: 'Intieme overnachtingen voor stellen',
    icon: '💕',
  },
  {
    slug: 'natuur',
    name: 'In de natuur',
    description: 'Midden in de bossen, heide of wei',
    icon: '🌲',
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description: 'Huisjes met sauna, hottub of spa',
    icon: '🧖',
  },
  {
    slug: 'tiny-house',
    name: 'Tiny Houses',
    description: 'Kleine, duurzame huisjes',
    icon: '🏠',
  },
  {
    slug: 'boomhut',
    name: 'Boomhutten',
    description: 'Overnachten tussen de bomen',
    icon: '🌳',
  },
  {
    slug: 'glamping',
    name: 'Glamping',
    description: 'Luxe kamperen met comfort',
    icon: '⛺',
  },
  {
    slug: 'luxe',
    name: 'Luxe overnachtingen',
    description: 'Premium verblijven met extra comfort',
    icon: '✨',
  },
  {
    slug: 'water',
    name: 'Aan het water',
    description: 'Huisjes aan meer, rivier of zee',
    icon: '💧',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};
