export type AccommodationStatus = 'draft' | 'published' | 'pending';

export interface Price {
  from: number;
  currency: string;
}

export interface Accommodation {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  province: string;
  region?: string;
  type: string;
  images: string[];
  features: string[];
  price: Price;
  affiliateUrl: string;
  status: AccommodationStatus;
  source?: string;
  approvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Province {
  code: string;
  name: string;
}

export interface Region {
  slug: string;
  name: string;
  province: string;
}

export interface FilterState {
  category?: string;
  province?: string;
  type?: string;
}
