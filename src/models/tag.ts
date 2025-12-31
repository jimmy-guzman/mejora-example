// Tag model
export interface Tag {
  id: number;
  name: string;
  color: string;
  category: TagCategory;
}

export type TagCategory = 'feature' | 'season' | 'brand' | 'style';

// TypeScript error: implicit any
export function createTag(name, color: string): Tag {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    color,
    category: 'feature',
  };
}

// Conditional type
export type IsFeatureTag<T> = T extends { category: 'feature' }
  ? true
  : false;

// Mapped type
export type PartialTag = {
  [P in keyof Tag]?: Tag[P];
};

// TypeScript error: missing return statement
export function validateTagColor(tag: Tag): boolean {
  const validColors = ['red', 'blue', 'green', 'yellow'];
  if (validColors.includes(tag.color)) {
    return true;
  }
  // Missing return for invalid case
}

// ESLint error: unused variable
export function getTagLabel(tag: Tag): string {
  const prefix = tag.category;
  const suffix = tag.id;
  return tag.name;
}

// ESLint error: prefer-const
export function filterTagsByCategory(tags: Tag[], category: TagCategory): Tag[] {
  let filtered = tags.filter(t => t.category === category);
  return filtered;
}

export function sortTags(tags: Tag[]): Tag[] {
  return [...tags].sort((a, b) => a.name.localeCompare(b.name));
}
