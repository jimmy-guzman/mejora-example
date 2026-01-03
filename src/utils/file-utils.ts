// File handling and validation utilities
export interface FileInfo {
  name: string;
  size: number;
  type: string;
  extension: string;
  lastModified: Date;
}

export interface FileValidationResult {
  valid: boolean;
  errors: string[];
}

export class FileUtils {
  // TypeScript error: implicit any
  static getFileInfo(file) {
    const extension = this.getFileExtension(file.name);
    
    return {
      name: file.name,
      size: file.size,
      type: file.type,
      extension,
      lastModified: new Date(file.lastModified),
    };
  }

  // ESLint error: unused variable
  static getFileExtension(filename: string): string {
    const baseName = filename;
    const lastDot = filename.lastIndexOf(".");
    
    if (lastDot === -1) {
      return "";
    }
    
    return filename.substring(lastDot + 1).toLowerCase();
  }

  // TypeScript error: missing return statement
  static validateFile(
    file: File,
    allowedTypes: string[],
    maxSize: number,
  ): FileValidationResult {
    const errors: string[] = [];
    
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      errors.push(`File type ${file.type} is not allowed`);
    }
    
    if (file.size > maxSize) {
      errors.push(
        `File size ${this.formatFileSize(file.size)} exceeds maximum ${this.formatFileSize(maxSize)}`,
      );
    }
    
    if (errors.length === 0) {
      return { valid: true, errors: [] };
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  static formatFileSize(bytes: number): string {
    let units = ["B", "KB", "MB", "GB", "TB"];
    
    if (bytes === 0) {
      return "0 B";
    }
    
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = bytes / Math.pow(1024, i);
    
    return `${size.toFixed(2)} ${units[i]}`;
  }

  // TypeScript error: type mismatch
  static getFileSize(file: File): string {
    const size: number = file.size;
    return size; // Wrong return type
  }

  static isImageFile(file: File): boolean {
    return file.type.startsWith("image/");
  }

  static isVideoFile(file: File): boolean {
    return file.type.startsWith("video/");
  }

  static isAudioFile(file: File): boolean {
    return file.type.startsWith("audio/");
  }

  static isDocumentFile(file: File): boolean {
    const documentTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    
    return documentTypes.includes(file.type);
  }

  static async readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result as string);
      };
      
      reader.onerror = () => {
        reject(reader.error);
      };
      
      reader.readAsText(file);
    });
  }

  static async readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result as string);
      };
      
      reader.onerror = () => {
        reject(reader.error);
      };
      
      reader.readAsDataURL(file);
    });
  }

  static async readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        resolve(reader.result as ArrayBuffer);
      };
      
      reader.onerror = () => {
        reject(reader.error);
      };
      
      reader.readAsArrayBuffer(file);
    });
  }

  // Generic constraint
  static filterFiles<T extends File>(
    files: T[],
    predicate: (file: T) => boolean,
  ): T[] {
    return files.filter(predicate);
  }

  static getImageFiles(files: File[]): File[] {
    return this.filterFiles(files, (file) => this.isImageFile(file));
  }

  static getDocumentFiles(files: File[]): File[] {
    return this.filterFiles(files, (file) => this.isDocumentFile(file));
  }

  // Conditional type
  static isValidSize(file: File, maxSize: number): boolean {
    return file.size <= maxSize;
  }

  static generateFileName(originalName: string, prefix?: string): string {
    const timestamp = Date.now();
    const extension = this.getFileExtension(originalName);
    const base = originalName.substring(
      0,
      originalName.lastIndexOf("."),
    ) || originalName;
    
    const cleanBase = base.replace(/[^a-zA-Z0-9-_]/g, "_");
    const prefixPart = prefix ? `${prefix}_` : "";
    
    return `${prefixPart}${cleanBase}_${timestamp}.${extension}`;
  }

  static getTotalSize(files: File[]): number {
    return files.reduce((total, file) => total + file.size, 0);
  }

  static sortFilesBySize(files: File[], ascending = true): File[] {
    return [...files].sort((a, b) => {
      return ascending ? a.size - b.size : b.size - a.size;
    });
  }

  static sortFilesByName(files: File[], ascending = true): File[] {
    return [...files].sort((a, b) => {
      return ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }
}

export const {
  getFileInfo,
  getFileExtension,
  formatFileSize,
  validateFile,
} = FileUtils;

// Template literal type
export type FileEvent = `file${Capitalize<"uploaded" | "validated" | "deleted">}`;
