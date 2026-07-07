import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categorie/${category.slug}`} className="category-card">
      <div className="category-icon">
        <span className="text-2xl">{category.icon}</span>
      </div>
      <strong>{category.name}</strong>
      <small>{category.description}</small>
    </Link>
  );
}
