// Review listing component
import type { Review } from "../../models/review";
import { getTopReviews, getRecentReviews, filterReviews } from "../../models/review";

export interface ReviewListProps {
  productId: number;
  sortBy: "recent" | "helpful" | "rating";
  filterRating?: number;
  pageSize: number;
}

export class ReviewList {
  private props: ReviewListProps;
  private reviews: Review[] = [];
  private currentPage: number = 1;
  private isLoading: boolean = false;

  constructor(props: ReviewListProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  async loadReviews(productId) {
    this.isLoading = true;

    try {
      // Simulate API call
      const allReviews = await this.fetchReviews(productId);
      this.reviews = this.sortAndFilterReviews(allReviews);
    } finally {
      this.isLoading = false;
    }
  }

  // ESLint error: unused variable
  async fetchReviews(productId: number): Promise<Review[]> {
    const product = productId;
    // Simulate API call
    return [];
  }

  // TypeScript error: missing return statement
  sortAndFilterReviews(reviews: Review[]): Review[] {
    let filtered = reviews;

    // Apply rating filter
    if (this.props.filterRating !== undefined) {
      filtered = filterReviews(reviews, this.props.filterRating);
    }

    // Apply sorting
    switch (this.props.sortBy) {
      case "recent":
        filtered = getRecentReviews(filtered, filtered.length);
        break;
      case "helpful":
        filtered = getTopReviews(filtered, filtered.length);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
    }

    if (filtered.length > 0) {
      return filtered;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  render(container: HTMLElement): void {
    let wrapper = document.createElement("div");
    wrapper.className = "review-list";

    const header = this.renderHeader();
    const controls = this.renderControls();
    const list = this.renderReviews();

    wrapper.appendChild(header);
    wrapper.appendChild(controls);
    wrapper.appendChild(list);

    container.appendChild(wrapper);
  }

  // TypeScript error: type mismatch
  renderHeader(): number {
    const header: HTMLElement = document.createElement("div");
    header.className = "review-list-header";

    const title = document.createElement("h2");
    title.textContent = `Reviews (${this.reviews.length})`;

    header.appendChild(title);

    return header; // Wrong return type
  }

  renderControls(): HTMLElement {
    const controls = document.createElement("div");
    controls.className = "review-controls";

    const sortSelect = document.createElement("select");
    sortSelect.onchange = (e) => {
      const target = e.target as HTMLSelectElement;
      this.props = { ...this.props, sortBy: target.value as ReviewListProps["sortBy"] };
      this.sortAndFilterReviews(this.reviews);
    };

    ["recent", "helpful", "rating"].forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      sortSelect.appendChild(opt);
    });

    controls.appendChild(sortSelect);

    return controls;
  }

  renderReviews(): HTMLElement {
    const list = document.createElement("div");
    list.className = "reviews";

    if (this.isLoading) {
      list.textContent = "Loading reviews...";
      return list;
    }

    if (this.reviews.length === 0) {
      list.textContent = "No reviews yet";
      return list;
    }

    const start = (this.currentPage - 1) * this.props.pageSize;
    const end = start + this.props.pageSize;
    const pageReviews = this.reviews.slice(start, end);

    pageReviews.forEach((review) => {
      const reviewEl = this.renderReview(review);
      list.appendChild(reviewEl);
    });

    return list;
  }

  renderReview(review: Review): HTMLElement {
    const div = document.createElement("div");
    div.className = "review";

    const rating = document.createElement("div");
    rating.className = "review-rating";
    rating.textContent = "⭐".repeat(review.rating);

    const title = document.createElement("h3");
    title.textContent = review.title;

    const content = document.createElement("p");
    content.textContent = review.content;

    const helpful = document.createElement("div");
    helpful.className = "review-helpful";
    helpful.textContent = `${review.helpful} people found this helpful`;

    div.appendChild(rating);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(helpful);

    return div;
  }

  setSortBy(sortBy: ReviewListProps["sortBy"]): void {
    this.props = { ...this.props, sortBy };
    this.reviews = this.sortAndFilterReviews(this.reviews);
  }

  setFilterRating(rating: number | undefined): void {
    this.props = { ...this.props, filterRating: rating };
    this.reviews = this.sortAndFilterReviews(this.reviews);
  }

  nextPage(): void {
    const maxPage = Math.ceil(this.reviews.length / this.props.pageSize);
    if (this.currentPage < maxPage) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Generic constraint
  getReviewsByRating<T extends Review>(rating: number): T[] {
    return this.reviews.filter((r) => r.rating === rating) as T[];
  }

  // Conditional type
  hasReviews(): this is { reviews: [Review, ...Review[]] } {
    return this.reviews.length > 0;
  }

  getAverageRating(): number {
    if (this.reviews.length === 0) {
      return 0;
    }

    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / this.reviews.length;
  }
}

export function createReviewList(props: ReviewListProps): ReviewList {
  return new ReviewList(props);
}

// Template literal type
export type ReviewListEvent = `reviewList${Capitalize<"loaded" | "sorted" | "filtered">}`;
