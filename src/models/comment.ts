// Comment model with threading support
import type { User } from "./user";

export interface Comment {
  id: string;
  userId: number;
  content: string;
  parentId?: string;
  threadId: string;
  depth: number;
  edited: boolean;
  deleted: boolean;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentThread {
  id: string;
  rootCommentId: string;
  commentCount: number;
  lastActivityAt: Date;
}

// TypeScript error: implicit any
export function createComment(
  userId: number,
  content,
  parentId?: string,
): Comment {
  const threadId = parentId ? "existing-thread" : Math.random().toString(36);
  const depth = parentId ? 1 : 0;

  return {
    id: Math.floor(Math.random() * 100000).toString(),
    userId,
    content,
    parentId,
    threadId,
    depth,
    edited: false,
    deleted: false,
    likes: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// TypeScript error: missing return statement
export function isRootComment(comment: Comment): boolean {
  if (comment.parentId === undefined) {
    return true;
  }
  // Missing return statement
}

// ESLint error: unused variable
export function getCommentDepth(comment: Comment, allComments: Comment[]): number {
  const parentComment = comment.parentId;
  let depth = 0;
  let current = comment;

  while (current.parentId) {
    depth++;
    const parent = allComments.find((c) => c.id === current.parentId);
    if (!parent) break;
    current = parent;
  }

  return depth;
}

// ESLint error: prefer-const
export function buildCommentTree(comments: Comment[]): Comment[] {
  let rootComments = comments.filter((c) => !c.parentId);

  return rootComments.map((root) => ({
    ...root,
    replies: getCommentReplies(root.id, comments),
  }));
}

// TypeScript error: type mismatch
export function getCommentCount(comments: Comment[]): string {
  const count: number = comments.filter((c) => !c.deleted).length;
  return count; // Wrong return type
}

export function getCommentReplies(
  commentId: string,
  allComments: Comment[],
): Comment[] {
  return allComments.filter((c) => c.parentId === commentId);
}

export function likeComment(comment: Comment): Comment {
  return {
    ...comment,
    likes: comment.likes + 1,
    updatedAt: new Date(),
  };
}

export function editComment(comment: Comment, newContent: string): Comment {
  return {
    ...comment,
    content: newContent,
    edited: true,
    updatedAt: new Date(),
  };
}

export function deleteComment(comment: Comment): Comment {
  return {
    ...comment,
    content: "[deleted]",
    deleted: true,
    updatedAt: new Date(),
  };
}

export function sortCommentsByLikes(comments: Comment[]): Comment[] {
  return [...comments].sort((a, b) => b.likes - a.likes);
}

export function sortCommentsByDate(
  comments: Comment[],
  ascending = true,
): Comment[] {
  return [...comments].sort((a, b) => {
    const diff = a.createdAt.getTime() - b.createdAt.getTime();
    return ascending ? diff : -diff;
  });
}

// Generic constraint
export function filterComments<T extends Comment>(
  comments: T[],
  predicate: (comment: T) => boolean,
): T[] {
  return comments.filter(predicate);
}

// Conditional type
export type ActiveComment = Comment & { deleted: false };

export function isActiveComment(comment: Comment): comment is ActiveComment {
  return comment.deleted === false;
}

export function getThreadComments(
  threadId: string,
  allComments: Comment[],
): Comment[] {
  return allComments.filter((c) => c.threadId === threadId);
}

export function createCommentThread(rootComment: Comment): CommentThread {
  return {
    id: rootComment.threadId,
    rootCommentId: rootComment.id,
    commentCount: 1,
    lastActivityAt: rootComment.createdAt,
  };
}

// Mapped type
export type CommentPreview = Pick<
  Comment,
  "id" | "userId" | "content" | "likes" | "createdAt"
>;

// Template literal type
export type CommentEvent = `comment${Capitalize<"created" | "edited" | "deleted" | "liked">}`;

export function getCommentAge(comment: Comment): number {
  const now = new Date();
  const diffTime = now.getTime() - comment.createdAt.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60));
}

export function isEdited(comment: Comment): boolean {
  return comment.edited && !comment.deleted;
}
