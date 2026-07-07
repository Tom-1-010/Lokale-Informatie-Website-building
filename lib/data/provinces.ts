import { Province, Region } from '../types';

export const provinces: Province[] = [
  { code: 'DR', name: 'Drenthe' },
  { code: 'FL', name: 'Flevoland' },
  { code: 'FR', name: 'Friesland' },
  { code: 'GE', name: 'Gelderland' },
  { code: 'GR', name: 'Groningen' },
  { code: 'LI', name: 'Limburg' },
  { code: 'NB', name: 'Noord-Brabant' },
  { code: 'NH', name: 'Noord-Holland' },
  { code: 'OV', name: 'Overijssel' },
  { code: 'UT', name: 'Utrecht' },
  { code: 'ZE', name: 'Zeeland' },
  { code: 'ZH', name: 'Zuid-Holland' },
];

export const regions: Region[] = [
  { slug: 'veluwe', name: 'Veluwe', province: 'Gelderland' },
  { slug: 'waddeneilanden', name: 'Waddeneilanden', province: 'Friesland' },
  { slug: 'zuid-limburg', name: 'Zuid-Limburg', province: 'Limburg' },
  { slug: 'biesbosch', name: 'Biesbosch', province: 'Noord-Brabant' },
  { slug: 'achterhoek', name: 'Achterhoek', province: 'Gelderland' },
  { slug: 'zeeuwse-kust', name: 'Zeeuwse kust', province: 'Zeeland' },
  { slug: 'drentse-natuur', name: 'Drentse natuur', province: 'Drenthe' },
  { slug: 'friese-meren', name: 'Friese meren', province: 'Friesland' },
];
