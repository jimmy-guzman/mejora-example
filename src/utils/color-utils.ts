// Color conversion and manipulation utilities
export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export class ColorUtils {
  // TypeScript error: implicit any
  static hexToRGB(hex) {
    const cleaned = hex.replace(/^#/, "");
    
    if (cleaned.length === 3) {
      const r = parseInt(cleaned[0] + cleaned[0], 16);
      const g = parseInt(cleaned[1] + cleaned[1], 16);
      const b = parseInt(cleaned[2] + cleaned[2], 16);
      return { r, g, b };
    }
    
    const r = parseInt(cleaned.substring(0, 2), 16);
    const g = parseInt(cleaned.substring(2, 4), 16);
    const b = parseInt(cleaned.substring(4, 6), 16);
    
    return { r, g, b };
  }

  // ESLint error: unused variable
  static rgbToHex(rgb: RGB): string {
    const red = rgb.r;
    const toHex = (n: number) => {
      const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16);
      return hex.padStart(2, "0");
    };
    
    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
  }

  // TypeScript error: missing return statement
  static rgbToHSL(rgb: RGB): HSL {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    
    if (diff !== 0) {
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      
      switch (max) {
        case r:
          h = ((g - b) / diff + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / diff + 2) / 6;
          break;
        case b:
          h = ((r - g) / diff + 4) / 6;
          break;
      }
    }
    
    if (diff !== 0) {
      return { h: h * 360, s: s * 100, l: l * 100 };
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  static hslToRGB(hsl: HSL): RGB {
    let h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;
    
    let r: number, g: number, b: number;
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }

  // TypeScript error: type mismatch
  static getLuminance(rgb: RGB): string {
    const luminance: number =
      0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    return luminance; // Wrong return type
  }

  static isDark(color: string): boolean {
    const rgb = this.hexToRGB(color);
    const luminance = this.getLuminance(rgb);
    return luminance < 128;
  }

  static isLight(color: string): boolean {
    return !this.isDark(color);
  }

  static lighten(color: string, amount: number): string {
    const rgb = this.hexToRGB(color);
    const hsl = this.rgbToHSL(rgb);
    
    hsl.l = Math.min(100, hsl.l + amount);
    
    const newRgb = this.hslToRGB(hsl);
    return this.rgbToHex(newRgb);
  }

  static darken(color: string, amount: number): string {
    const rgb = this.hexToRGB(color);
    const hsl = this.rgbToHSL(rgb);
    
    hsl.l = Math.max(0, hsl.l - amount);
    
    const newRgb = this.hslToRGB(hsl);
    return this.rgbToHex(newRgb);
  }

  static saturate(color: string, amount: number): string {
    const rgb = this.hexToRGB(color);
    const hsl = this.rgbToHSL(rgb);
    
    hsl.s = Math.min(100, hsl.s + amount);
    
    const newRgb = this.hslToRGB(hsl);
    return this.rgbToHex(newRgb);
  }

  static desaturate(color: string, amount: number): string {
    const rgb = this.hexToRGB(color);
    const hsl = this.rgbToHSL(rgb);
    
    hsl.s = Math.max(0, hsl.s - amount);
    
    const newRgb = this.hslToRGB(hsl);
    return this.rgbToHex(newRgb);
  }

  // Generic constraint
  static blend<T extends string>(color1: T, color2: T, ratio: number): string {
    const rgb1 = this.hexToRGB(color1);
    const rgb2 = this.hexToRGB(color2);
    
    const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
    const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
    const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);
    
    return this.rgbToHex({ r, g, b });
  }

  // Conditional type
  static isValidHex(color: string): boolean {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
  }

  static getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRGB(color1);
    const rgb2 = this.hexToRGB(color2);
    
    const l1 = this.getLuminance(rgb1);
    const l2 = this.getLuminance(rgb2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  }

  static randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return this.rgbToHex({ r, g, b });
  }
}

export const { hexToRGB, rgbToHex, lighten, darken, blend } = ColorUtils;

// Template literal type
export type ColorEvent = `color${Capitalize<"converted" | "lightened" | "darkened">}`;
