// Main entry point that demonstrates mejora with a large codebase
// This file imports from multiple modules to create cross-file dependencies

// Model imports
import type { User, UserProfile } from './models/user';
import type { Role } from './models/role';
import type { Permission } from './models/permission';
import type { Product } from './models/product';
import type { Order } from './models/order';
import type { DashboardData } from './models/dashboard';

// Service imports
import { userService } from './services/user-service';
import { productService } from './services/product-service';
import { orderService } from './services/order-service';
import { authService } from './services/auth-service';

// API imports
import { userApi } from './api/user-api';
import { productApi } from './api/product-api';
import { apiClient } from './api/client';

// Component imports
import { Button } from './components/button';
import { Input } from './components/input';
import { Modal } from './components/modal';
import { createCard } from './components/card';

// Utility imports
import { StringUtils } from './utils/string-utils';
import { ArrayUtils } from './utils/array-utils';
import { DateUtils } from './utils/date-utils';
import { ValidationUtils } from './utils/validation-utils';

// Feature imports
import { dashboardController } from './features/dashboard/dashboard-controller';
import { profileController } from './features/profile/profile-controller';
import { cartController } from './features/cart/cart-controller';

// Hook imports
import { useState } from './hooks/use-state';
import { useAuth } from './hooks/use-auth';
import { useFetch } from './hooks/use-fetch';

// TypeScript error: implicit any
async function initializeApplication(config) {
  console.log('Initializing application with config:', config);
  
  // Load dashboard for user
  const dashboard = await dashboardController.loadDashboard(1);
  
  // Fetch some users
  const users = await userService.fetchUsers('admin', { page: 1, pageSize: 10 });
  
  return dashboard;
}

// TypeScript error: missing return statement
function validateApplicationState(): boolean {
  const isAuthenticated = authService.isAuthenticated();
  
  if (!isAuthenticated) {
    return false;
  }
  
  const currentUser = authService.getCurrentUser();
  
  if (currentUser) {
    return true;
  }
  // Missing return for null user case
}

// ESLint error: unused variable
async function loadUserData(userId: number): Promise<User | null> {
  const startTime = Date.now();
  const cacheKey = `user-${userId}`;
  
  const user = await userService.getUserById(userId);
  
  if (user) {
    const displayName = StringUtils.capitalize(user.name);
    console.log('Loaded user:', displayName);
  }
  
  return user;
}

// ESLint error: prefer-const
function setupApplication(): void {
  let apiBaseUrl = 'https://api.example.com';
  
  // Initialize components
  const loginButton = new Button({
    text: 'Login',
    onClick: () => console.log('Login clicked'),
    variant: 'primary',
    size: 'medium',
  });
  
  const emailInput = new Input({
    type: 'email',
    value: '',
    placeholder: 'Enter email',
    onChange: (value) => console.log('Email changed:', value),
  });
}

// TypeScript error: type mismatch
async function getProductCount(): Promise<string> {
  const products = await productService.getAllProducts();
  const count: number = products.length.toString();
  return count; // Wrong return type
}

// Main application startup
async function main(): Promise<void> {
  try {
    console.log('Starting mejora example application...');
    
    // Initialize the application
    await initializeApplication({ env: 'development' });
    
    // Setup application
    setupApplication();
    
    // Validate state
    const isValid = validateApplicationState();
    
    if (isValid) {
      console.log('Application initialized successfully');
    } else {
      console.log('Application initialization failed');
    }
  } catch (error) {
    console.error('Application error:', error);
  }
}

// ESLint error: unused variable
const appVersion = '1.0.0';
const buildDate = new Date();

// Start the application
main().catch(console.error);
