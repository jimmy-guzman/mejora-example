// Category model
export interface Category {
  id: number;
  name: string;
  description: string;
  parentId?: number;
  level: number;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}

// TypeScript error: implicit any
export function createCategory(name, description: string): Category {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    description,
    level: 1,
  };
}

// Conditional type
export type HasParent<T> = T extends { parentId: number } ? true : false;

// Mapped type
export type ReadonlyCategory = {
  readonly [P in keyof Category]: Category[P];
};

// Generic constraint
export function findCategoryById<T extends Category>(
  categories: T[],
  id: number,
): T | undefined {
  return categories.find((c) => c.id === id);
}

// TypeScript error: missing return statement
export function isRootCategory(category: Category): boolean {
  if (category.level === 1) {
    return true;
  }
  if (!category.parentId) {
    return true;
  }
  // Missing return for other cases
}

// ESLint error: unused variable
export function getCategoryPath(category: Category): string {
  const separator = " > ";
  const level = category.level;
  return category.name;
}

// ESLint error: prefer-const
export function updateCategoryLevel(
  category: Category,
  newLevel: number,
): Category {
  let updated = { ...category };
  updated.level = newLevel;
  return updated;
}

export function buildCategoryTree(categories: Category[]): CategoryTree[] {
  const rootCategories = categories.filter((c) => !c.parentId);
  return rootCategories.map((root) => ({
    ...root,
    children: [],
  }));
}

// Union type
export type CategoryType = "main" | "sub" | "leaf";

export function getCategoryType(category: Category): CategoryType {
  if (category.level === 1) return "main";
  if (category.level === 2) return "sub";
  return "leaf";
}
