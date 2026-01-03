# mejora-example

A comprehensive example repository demonstrating how [mejora](https://github.com/jimmy-guzman/mejora)

## What is mejora?

`mejora` (Spanish for "improvement") prevents regressions by comparing code quality checks against a committed baseline. It allows improvements but fails on regressions.

## Repository Structure

```txt
src/
├── index.ts              # Main entry point with cross-module imports
├── components/           # UI components
│   ├── button.ts
│   ├── input.ts
│   ├── modal.ts
│   ├── card.ts
│   ├── list.ts
│   ├── form.ts
│   ├── table.ts
│   ├── dropdown.ts
│   ├── alert.ts
│   └── tabs.ts
├── services/             # Business logic
│   ├── product-service.ts
│   ├── order-service.ts
│   ├── auth-service.ts
│   ├── notification-service.ts
│   └── analytics-service.ts
├── models/               # Data models and types
│   ├── user.ts
│   ├── role.ts
│   ├── permission.ts
│   ├── product.ts
│   ├── category.ts
│   ├── tag.ts
│   ├── order.ts
│   ├── dashboard.ts
│   ├── notification.ts
│   ├── session.ts
│   ├── settings.ts
│   └── analytics.ts
├── utils/                # Utility functions
│   ├── string-utils.ts
│   ├── array-utils.ts
│   ├── date-utils.ts
│   ├── number-utils.ts
│   ├── object-utils.ts
│   ├── validation-utils.ts
│   ├── metrics.ts
│   ├── formatter.ts
│   ├── logger.ts
│   ├── cache.ts
│   ├── pagination.ts
│   ├── event-emitter.ts
│   └── async-utils.ts
├── api/                  # API client code
│   ├── types.ts
│   ├── client.ts
│   ├── user-api.ts
│   ├── product-api.ts
│   ├── order-api.ts
│   └── auth-api.ts
├── hooks/                # Custom hooks
│   ├── use-state.ts
│   ├── use-effect.ts
│   ├── use-fetch.ts
│   ├── use-local-storage.ts
│   ├── use-debounce.ts
│   └── use-auth.ts
└── features/             # Feature modules
    ├── dashboard/
    │   ├── dashboard-controller.ts
    │   └── types.ts
    ├── profile/
    │   └── profile-controller.ts
    ├── auth/
    │   └── auth-controller.ts
    ├── cart/
    │   └── cart-controller.ts
    ├── checkout/
    │   └── checkout-controller.ts
    ├── notifications/
    │   └── notification-controller.ts
    └── settings/
        └── settings-controller.ts
```
