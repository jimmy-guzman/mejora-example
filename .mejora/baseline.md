# Mejora Baseline

This file represents the current accepted state of the codebase.

## eslint (243 issues)

### [src/api/auth-api.ts](../src/api/auth-api.ts) (2)

- [Line 48](../src/api/auth-api.ts#L48) - @typescript-eslint/no-unused-vars: 'status' is assigned a value but never used.
- [Line 58](../src/api/auth-api.ts#L58) - prefer-const: 'endpoint' is never reassigned. Use 'const' instead.

### [src/api/client.ts](../src/api/client.ts) (3)

- [Line 57](../src/api/client.ts#L57) - @typescript-eslint/no-unused-vars: 'authHeader' is assigned a value but never used.
- [Line 63](../src/api/client.ts#L63) - prefer-const: 'headers' is never reassigned. Use 'const' instead.
- [Line 84](../src/api/client.ts#L84) - @typescript-eslint/no-unused-vars: 'maxRetries' is defined but never used.

### [src/api/order-api.ts](../src/api/order-api.ts) (3)

- [Line 48](../src/api/order-api.ts#L48) - @typescript-eslint/no-unused-vars: 'cacheKey' is assigned a value but never used.
- [Line 55](../src/api/order-api.ts#L55) - prefer-const: 'total' is never reassigned. Use 'const' instead.
- [Line 69](../src/api/order-api.ts#L69) - @typescript-eslint/no-unused-vars: 'orderId' is defined but never used.

### [src/api/product-api.ts](../src/api/product-api.ts) (3)

- [Line 48](../src/api/product-api.ts#L48) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 55](../src/api/product-api.ts#L55) - prefer-const: 'searchEndpoint' is never reassigned. Use 'const' instead.
- [Line 68](../src/api/product-api.ts#L68) - @typescript-eslint/no-unused-vars: 'productId' is defined but never used.

### [src/api/types.ts](../src/api/types.ts) (2)

- [Line 53](../src/api/types.ts#L53) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 86](../src/api/types.ts#L86) - prefer-const: 'hasMore' is never reassigned. Use 'const' instead.

### [src/api/user-api.ts](../src/api/user-api.ts) (2)

- [Line 48](../src/api/user-api.ts#L48) - @typescript-eslint/no-unused-vars: 'status' is assigned a value but never used.
- [Line 58](../src/api/user-api.ts#L58) - prefer-const: 'endpoint' is never reassigned. Use 'const' instead.

### [src/components/alert.ts](../src/components/alert.ts) (3)

- [Line 53](../src/components/alert.ts#L53) - @typescript-eslint/no-unused-vars: 'oldMessage' is assigned a value but never used.
- [Line 54](../src/components/alert.ts#L54) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 60](../src/components/alert.ts#L60) - prefer-const: 'newType' is never reassigned. Use 'const' instead.

### [src/components/button.ts](../src/components/button.ts) (4)

- [Line 2](../src/components/button.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 37](../src/components/button.ts#L37) - @typescript-eslint/no-unused-vars: 'disabledClass' is assigned a value but never used.
- [Line 51](../src/components/button.ts#L51) - prefer-const: 'newProps' is never reassigned. Use 'const' instead.
- [Line 66](../src/components/button.ts#L66) - @typescript-eslint/no-unused-vars: 'state' is defined but never used.

### [src/components/card.ts](../src/components/card.ts) (4)

- [Line 52](../src/components/card.ts#L52) - @typescript-eslint/no-unused-vars: 'oldTitle' is assigned a value but never used.
- [Line 53](../src/components/card.ts#L53) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 67](../src/components/card.ts#L67) - prefer-const: 'newProps' is never reassigned. Use 'const' instead.
- [Line 82](../src/components/card.ts#L82) - @typescript-eslint/no-unused-vars: 'metadata' is defined but never used.

### [src/components/dropdown.ts](../src/components/dropdown.ts) (3)

- [Line 67](../src/components/dropdown.ts#L67) - @typescript-eslint/no-unused-vars: 'oldValue' is assigned a value but never used.
- [Line 68](../src/components/dropdown.ts#L68) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 74](../src/components/dropdown.ts#L74) - prefer-const: 'options' is never reassigned. Use 'const' instead.

### [src/components/form.ts](../src/components/form.ts) (4)

- [Line 54](../src/components/form.ts#L54) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 55](../src/components/form.ts#L55) - @typescript-eslint/no-unused-vars: 'fieldCount' is assigned a value but never used.
- [Line 66](../src/components/form.ts#L66) - prefer-const: 'isValid' is never reassigned. Use 'const' instead.
- [Line 88](../src/components/form.ts#L88) - @typescript-eslint/no-unused-vars: 'validator' is defined but never used.

### [src/components/input.ts](../src/components/input.ts) (3)

- [Line 40](../src/components/input.ts#L40) - @typescript-eslint/no-unused-vars: 'element' is assigned a value but never used.
- [Line 41](../src/components/input.ts#L41) - @typescript-eslint/no-unused-vars: 'defaultValue' is assigned a value but never used.
- [Line 56](../src/components/input.ts#L56) - prefer-const: 'newProps' is never reassigned. Use 'const' instead.

### [src/components/list.ts](../src/components/list.ts) (3)

- [Line 38](../src/components/list.ts#L38) - @typescript-eslint/no-unused-vars: 'count' is assigned a value but never used.
- [Line 39](../src/components/list.ts#L39) - @typescript-eslint/no-unused-vars: 'className' is assigned a value but never used.
- [Line 53](../src/components/list.ts#L53) - prefer-const: 'newItems' is never reassigned. Use 'const' instead.

### [src/components/modal.ts](../src/components/modal.ts) (4)

- [Line 2](../src/components/modal.ts#L2) - @typescript-eslint/no-unused-vars: 'Button' is defined but never used.
- [Line 47](../src/components/modal.ts#L47) - @typescript-eslint/no-unused-vars: 'previousState' is assigned a value but never used.
- [Line 48](../src/components/modal.ts#L48) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 62](../src/components/modal.ts#L62) - prefer-const: 'newProps' is never reassigned. Use 'const' instead.

### [src/components/table.ts](../src/components/table.ts) (3)

- [Line 74](../src/components/table.ts#L74) - @typescript-eslint/no-unused-vars: 'oldData' is assigned a value but never used.
- [Line 75](../src/components/table.ts#L75) - @typescript-eslint/no-unused-vars: 'dataLength' is assigned a value but never used.
- [Line 81](../src/components/table.ts#L81) - prefer-const: 'sorted' is never reassigned. Use 'const' instead.

### [src/components/tabs.ts](../src/components/tabs.ts) (3)

- [Line 71](../src/components/tabs.ts#L71) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 72](../src/components/tabs.ts#L72) - @typescript-eslint/no-unused-vars: 'index' is assigned a value but never used.
- [Line 78](../src/components/tabs.ts#L78) - prefer-const: 'items' is never reassigned. Use 'const' instead.

### [src/features/auth/auth-controller.ts](../src/features/auth/auth-controller.ts) (3)

- [Line 30](../src/features/auth/auth-controller.ts#L30) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 31](../src/features/auth/auth-controller.ts#L31) - @typescript-eslint/no-unused-vars: 'currentUser' is assigned a value but never used.
- [Line 37](../src/features/auth/auth-controller.ts#L37) - prefer-const: 'user' is never reassigned. Use 'const' instead.

### [src/features/cart/cart-controller.ts](../src/features/cart/cart-controller.ts) (4)

- [Line 2](../src/features/cart/cart-controller.ts#L2) - @typescript-eslint/no-unused-vars: 'Product' is defined but never used.
- [Line 44](../src/features/cart/cart-controller.ts#L44) - @typescript-eslint/no-unused-vars: 'itemCount' is assigned a value but never used.
- [Line 45](../src/features/cart/cart-controller.ts#L45) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 54](../src/features/cart/cart-controller.ts#L54) - prefer-const: 'item' is never reassigned. Use 'const' instead.

### [src/features/checkout/checkout-controller.ts](../src/features/checkout/checkout-controller.ts) (3)

- [Line 54](../src/features/checkout/checkout-controller.ts#L54) - @typescript-eslint/no-unused-vars: 'baseRate' is assigned a value but never used.
- [Line 55](../src/features/checkout/checkout-controller.ts#L55) - @typescript-eslint/no-unused-vars: 'weightFactor' is assigned a value but never used.
- [Line 67](../src/features/checkout/checkout-controller.ts#L67) - prefer-const: 'order' is never reassigned. Use 'const' instead.

### [src/features/dashboard/dashboard-controller.ts](../src/features/dashboard/dashboard-controller.ts) (4)

- [Line 2](../src/features/dashboard/dashboard-controller.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 47](../src/features/dashboard/dashboard-controller.ts#L47) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 48](../src/features/dashboard/dashboard-controller.ts#L48) - @typescript-eslint/no-unused-vars: 'hasData' is assigned a value but never used.
- [Line 58](../src/features/dashboard/dashboard-controller.ts#L58) - prefer-const: 'metrics' is never reassigned. Use 'const' instead.

### [src/features/dashboard/types.ts](../src/features/dashboard/types.ts) (4)

- [Line 2](../src/features/dashboard/types.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 66](../src/features/dashboard/types.ts#L66) - @typescript-eslint/no-unused-vars: 'width' is assigned a value but never used.
- [Line 67](../src/features/dashboard/types.ts#L67) - @typescript-eslint/no-unused-vars: 'height' is assigned a value but never used.
- [Line 77](../src/features/dashboard/types.ts#L77) - prefer-const: 'newPosition' is never reassigned. Use 'const' instead.

### [src/features/notifications/notification-controller.ts](../src/features/notifications/notification-controller.ts) (4)

- [Line 28](../src/features/notifications/notification-controller.ts#L28) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 29](../src/features/notifications/notification-controller.ts#L29) - @typescript-eslint/no-unused-vars: 'result' is assigned a value but never used.
- [Line 34](../src/features/notifications/notification-controller.ts#L34) - prefer-const: 'notifications' is never reassigned. Use 'const' instead.
- [Line 34](../src/features/notifications/notification-controller.ts#L34) - @typescript-eslint/no-unused-vars: 'notifications' is assigned a value but never used.

### [src/features/profile/profile-controller.ts](../src/features/profile/profile-controller.ts) (4)

- [Line 2](../src/features/profile/profile-controller.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 52](../src/features/profile/profile-controller.ts#L52) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 53](../src/features/profile/profile-controller.ts#L53) - @typescript-eslint/no-unused-vars: 'hasProfile' is assigned a value but never used.
- [Line 65](../src/features/profile/profile-controller.ts#L65) - prefer-const: 'newPreferences' is never reassigned. Use 'const' instead.

### [src/features/settings/settings-controller.ts](../src/features/settings/settings-controller.ts) (4)

- [Line 3](../src/features/settings/settings-controller.ts#L3) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 54](../src/features/settings/settings-controller.ts#L54) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 55](../src/features/settings/settings-controller.ts#L55) - @typescript-eslint/no-unused-vars: 'hasSettings' is assigned a value but never used.
- [Line 61](../src/features/settings/settings-controller.ts#L61) - prefer-const: 'current' is never reassigned. Use 'const' instead.

### [src/hooks/use-auth.ts](../src/hooks/use-auth.ts) (6)

- [Line 37](../src/hooks/use-auth.ts#L37) - @typescript-eslint/no-unused-vars: 'error' is defined but never used.
- [Line 54](../src/hooks/use-auth.ts#L54) - @typescript-eslint/no-unused-vars: 'error' is defined but never used.
- [Line 62](../src/hooks/use-auth.ts#L62) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 63](../src/hooks/use-auth.ts#L63) - @typescript-eslint/no-unused-vars: 'isAuth' is assigned a value but never used.
- [Line 69](../src/hooks/use-auth.ts#L69) - prefer-const: 'newState' is never reassigned. Use 'const' instead.
- [Line 84](../src/hooks/use-auth.ts#L84) - @typescript-eslint/no-unused-vars: 'permission' is defined but never used.

### [src/hooks/use-debounce.ts](../src/hooks/use-debounce.ts) (4)

- [Line 38](../src/hooks/use-debounce.ts#L38) - @typescript-eslint/no-unused-vars: 'currentTimeoutId' is assigned a value but never used.
- [Line 39](../src/hooks/use-debounce.ts#L39) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 49](../src/hooks/use-debounce.ts#L49) - prefer-const: 'initialValue' is never reassigned. Use 'const' instead.
- [Line 49](../src/hooks/use-debounce.ts#L49) - @typescript-eslint/no-unused-vars: 'initialValue' is assigned a value but never used.

### [src/hooks/use-effect.ts](../src/hooks/use-effect.ts) (4)

- [Line 53](../src/hooks/use-effect.ts#L53) - @typescript-eslint/no-unused-vars: 'hasCleanup' is assigned a value but never used.
- [Line 54](../src/hooks/use-effect.ts#L54) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 64](../src/hooks/use-effect.ts#L64) - prefer-const: 'cleanup' is never reassigned. Use 'const' instead.
- [Line 64](../src/hooks/use-effect.ts#L64) - @typescript-eslint/no-unused-vars: 'cleanup' is assigned a value but never used.

### [src/hooks/use-fetch.ts](../src/hooks/use-fetch.ts) (4)

- [Line 2](../src/hooks/use-fetch.ts#L2) - @typescript-eslint/no-unused-vars: 'ApiResponse' is defined but never used.
- [Line 56](../src/hooks/use-fetch.ts#L56) - @typescript-eslint/no-unused-vars: 'oldState' is assigned a value but never used.
- [Line 57](../src/hooks/use-fetch.ts#L57) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 63](../src/hooks/use-fetch.ts#L63) - prefer-const: 'controller' is never reassigned. Use 'const' instead.

### [src/hooks/use-local-storage.ts](../src/hooks/use-local-storage.ts) (5)

- [Line 16](../src/hooks/use-local-storage.ts#L16) - @typescript-eslint/no-unused-vars: 'error' is defined but never used.
- [Line 23](../src/hooks/use-local-storage.ts#L23) - @typescript-eslint/no-unused-vars: 'oldValue' is assigned a value but never used.
- [Line 24](../src/hooks/use-local-storage.ts#L24) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 46](../src/hooks/use-local-storage.ts#L46) - prefer-const: 'key' is never reassigned. Use 'const' instead.
- [Line 46](../src/hooks/use-local-storage.ts#L46) - @typescript-eslint/no-unused-vars: 'key' is assigned a value but never used.

### [src/hooks/use-state.ts](../src/hooks/use-state.ts) (3)

- [Line 22](../src/hooks/use-state.ts#L22) - @typescript-eslint/no-unused-vars: 'oldValue' is assigned a value but never used.
- [Line 23](../src/hooks/use-state.ts#L23) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 48](../src/hooks/use-state.ts#L48) - prefer-const: 'value' is never reassigned. Use 'const' instead.

### [src/index.ts](../src/index.ts) (31)

- [Line 5](../src/index.ts#L5) - @typescript-eslint/no-unused-vars: 'UserProfile' is defined but never used.
- [Line 6](../src/index.ts#L6) - @typescript-eslint/no-unused-vars: 'Role' is defined but never used.
- [Line 7](../src/index.ts#L7) - @typescript-eslint/no-unused-vars: 'Permission' is defined but never used.
- [Line 8](../src/index.ts#L8) - @typescript-eslint/no-unused-vars: 'Product' is defined but never used.
- [Line 9](../src/index.ts#L9) - @typescript-eslint/no-unused-vars: 'Order' is defined but never used.
- [Line 10](../src/index.ts#L10) - @typescript-eslint/no-unused-vars: 'DashboardData' is defined but never used.
- [Line 15](../src/index.ts#L15) - @typescript-eslint/no-unused-vars: 'orderService' is defined but never used.
- [Line 19](../src/index.ts#L19) - @typescript-eslint/no-unused-vars: 'userApi' is defined but never used.
- [Line 20](../src/index.ts#L20) - @typescript-eslint/no-unused-vars: 'productApi' is defined but never used.
- [Line 21](../src/index.ts#L21) - @typescript-eslint/no-unused-vars: 'apiClient' is defined but never used.
- [Line 26](../src/index.ts#L26) - @typescript-eslint/no-unused-vars: 'Modal' is defined but never used.
- [Line 27](../src/index.ts#L27) - @typescript-eslint/no-unused-vars: 'createCard' is defined but never used.
- [Line 31](../src/index.ts#L31) - @typescript-eslint/no-unused-vars: 'ArrayUtils' is defined but never used.
- [Line 32](../src/index.ts#L32) - @typescript-eslint/no-unused-vars: 'DateUtils' is defined but never used.
- [Line 33](../src/index.ts#L33) - @typescript-eslint/no-unused-vars: 'ValidationUtils' is defined but never used.
- [Line 37](../src/index.ts#L37) - @typescript-eslint/no-unused-vars: 'profileController' is defined but never used.
- [Line 38](../src/index.ts#L38) - @typescript-eslint/no-unused-vars: 'cartController' is defined but never used.
- [Line 41](../src/index.ts#L41) - @typescript-eslint/no-unused-vars: 'useState' is defined but never used.
- [Line 42](../src/index.ts#L42) - @typescript-eslint/no-unused-vars: 'useAuth' is defined but never used.
- [Line 43](../src/index.ts#L43) - @typescript-eslint/no-unused-vars: 'useFetch' is defined but never used.
- [Line 53](../src/index.ts#L53) - @typescript-eslint/no-unused-vars: 'users' is assigned a value but never used.
- [Line 78](../src/index.ts#L78) - @typescript-eslint/no-unused-vars: 'loadUserData' is defined but never used.
- [Line 79](../src/index.ts#L79) - @typescript-eslint/no-unused-vars: 'startTime' is assigned a value but never used.
- [Line 80](../src/index.ts#L80) - @typescript-eslint/no-unused-vars: 'cacheKey' is assigned a value but never used.
- [Line 94](../src/index.ts#L94) - prefer-const: 'apiBaseUrl' is never reassigned. Use 'const' instead.
- [Line 94](../src/index.ts#L94) - @typescript-eslint/no-unused-vars: 'apiBaseUrl' is assigned a value but never used.
- [Line 97](../src/index.ts#L97) - @typescript-eslint/no-unused-vars: 'loginButton' is assigned a value but never used.
- [Line 104](../src/index.ts#L104) - @typescript-eslint/no-unused-vars: 'emailInput' is assigned a value but never used.
- [Line 113](../src/index.ts#L113) - @typescript-eslint/no-unused-vars: 'getProductCount' is defined but never used.
- [Line 144](../src/index.ts#L144) - @typescript-eslint/no-unused-vars: 'appVersion' is assigned a value but never used.
- [Line 145](../src/index.ts#L145) - @typescript-eslint/no-unused-vars: 'buildDate' is assigned a value but never used.

### [src/models/analytics.ts](../src/models/analytics.ts) (3)

- [Line 54](../src/models/analytics.ts#L54) - @typescript-eslint/no-unused-vars: 'totalSessions' is assigned a value but never used.
- [Line 55](../src/models/analytics.ts#L55) - @typescript-eslint/no-unused-vars: 'singlePageSessions' is assigned a value but never used.
- [Line 63](../src/models/analytics.ts#L63) - prefer-const: 'pageViews' is never reassigned. Use 'const' instead.

### [src/models/category.ts](../src/models/category.ts) (3)

- [Line 53](../src/models/category.ts#L53) - @typescript-eslint/no-unused-vars: 'separator' is assigned a value but never used.
- [Line 54](../src/models/category.ts#L54) - @typescript-eslint/no-unused-vars: 'level' is assigned a value but never used.
- [Line 63](../src/models/category.ts#L63) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/dashboard.ts](../src/models/dashboard.ts) (3)

- [Line 57](../src/models/dashboard.ts#L57) - @typescript-eslint/no-unused-vars: 'userCount' is assigned a value but never used.
- [Line 58](../src/models/dashboard.ts#L58) - @typescript-eslint/no-unused-vars: 'revenue' is assigned a value but never used.
- [Line 67](../src/models/dashboard.ts#L67) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/notification.ts](../src/models/notification.ts) (2)

- [Line 58](../src/models/notification.ts#L58) - @typescript-eslint/no-unused-vars: 'priority' is assigned a value but never used.
- [Line 64](../src/models/notification.ts#L64) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/order.ts](../src/models/order.ts) (3)

- [Line 60](../src/models/order.ts#L60) - @typescript-eslint/no-unused-vars: 'hasItems' is assigned a value but never used.
- [Line 61](../src/models/order.ts#L61) - @typescript-eslint/no-unused-vars: 'hasUser' is assigned a value but never used.
- [Line 67](../src/models/order.ts#L67) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/permission.ts](../src/models/permission.ts) (2)

- [Line 74](../src/models/permission.ts#L74) - @typescript-eslint/no-unused-vars: 'isValidAction' is assigned a value but never used.
- [Line 90](../src/models/permission.ts#L90) - prefer-const: 'grouped' is never reassigned. Use 'const' instead.

### [src/models/product.ts](../src/models/product.ts) (4)

- [Line 60](../src/models/product.ts#L60) - @typescript-eslint/no-unused-vars: 'categoryName' is assigned a value but never used.
- [Line 61](../src/models/product.ts#L61) - @typescript-eslint/no-unused-vars: 'tagCount' is assigned a value but never used.
- [Line 70](../src/models/product.ts#L70) - prefer-const: 'updated' is never reassigned. Use 'const' instead.
- [Line 103](../src/models/product.ts#L103) - @typescript-eslint/no-unused-vars: 'products' is defined but never used.

### [src/models/role.ts](../src/models/role.ts) (3)

- [Line 21](../src/models/role.ts#L21) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 31](../src/models/role.ts#L31) - @typescript-eslint/no-unused-vars: 'role' is defined but never used.
- [Line 65](../src/models/role.ts#L65) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/session.ts](../src/models/session.ts) (2)

- [Line 49](../src/models/session.ts#L49) - @typescript-eslint/no-unused-vars: 'duration' is assigned a value but never used.
- [Line 55](../src/models/session.ts#L55) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/settings.ts](../src/models/settings.ts) (5)

- [Line 2](../src/models/settings.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 75](../src/models/settings.ts#L75) - @typescript-eslint/no-unused-vars: 'theme' is assigned a value but never used.
- [Line 76](../src/models/settings.ts#L76) - @typescript-eslint/no-unused-vars: 'lang' is assigned a value but never used.
- [Line 77](../src/models/settings.ts#L77) - @typescript-eslint/no-unused-vars: 'tz' is assigned a value but never used.
- [Line 86](../src/models/settings.ts#L86) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/tag.ts](../src/models/tag.ts) (3)

- [Line 40](../src/models/tag.ts#L40) - @typescript-eslint/no-unused-vars: 'prefix' is assigned a value but never used.
- [Line 41](../src/models/tag.ts#L41) - @typescript-eslint/no-unused-vars: 'suffix' is assigned a value but never used.
- [Line 50](../src/models/tag.ts#L50) - prefer-const: 'filtered' is never reassigned. Use 'const' instead.

### [src/models/user.ts](../src/models/user.ts) (3)

- [Line 27](../src/models/user.ts#L27) - @typescript-eslint/no-unused-vars: 'permission' is defined but never used.
- [Line 42](../src/models/user.ts#L42) - @typescript-eslint/no-unused-vars: 'isValid' is assigned a value but never used.
- [Line 82](../src/models/user.ts#L82) - prefer-const: 'defaultPrefs' is never reassigned. Use 'const' instead.

### [src/services/analytics-service.ts](../src/services/analytics-service.ts) (4)

- [Line 35](../src/services/analytics-service.ts#L35) - @typescript-eslint/no-unused-vars: 'allEvents' is assigned a value but never used.
- [Line 36](../src/services/analytics-service.ts#L36) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 42](../src/services/analytics-service.ts#L42) - prefer-const: 'pageViews' is never reassigned. Use 'const' instead.
- [Line 96](../src/services/analytics-service.ts#L96) - @typescript-eslint/no-unused-vars: 'bounceRate' is assigned a value but never used.

### [src/services/auth-service.ts](../src/services/auth-service.ts) (4)

- [Line 50](../src/services/auth-service.ts#L50) - @typescript-eslint/no-unused-vars: 'isValidEmail' is assigned a value but never used.
- [Line 51](../src/services/auth-service.ts#L51) - @typescript-eslint/no-unused-vars: 'minPasswordLength' is assigned a value but never used.
- [Line 61](../src/services/auth-service.ts#L61) - prefer-const: 'token' is never reassigned. Use 'const' instead.
- [Line 101](../src/services/auth-service.ts#L101) - @typescript-eslint/no-unused-vars: 'validation' is assigned a value but never used.

### [src/services/notification-service.ts](../src/services/notification-service.ts) (4)

- [Line 3](../src/services/notification-service.ts#L3) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 49](../src/services/notification-service.ts#L49) - @typescript-eslint/no-unused-vars: 'readCount' is assigned a value but never used.
- [Line 55](../src/services/notification-service.ts#L55) - prefer-const: 'notification' is never reassigned. Use 'const' instead.
- [Line 92](../src/services/notification-service.ts#L92) - @typescript-eslint/no-unused-vars: 'userId' is defined but never used.

### [src/services/order-service.ts](../src/services/order-service.ts) (7)

- [Line 3](../src/services/order-service.ts#L3) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 27](../src/services/order-service.ts#L27) - @typescript-eslint/no-unused-vars: 'itemCount' is assigned a value but never used.
- [Line 28](../src/services/order-service.ts#L28) - @typescript-eslint/no-unused-vars: 'shippingCost' is assigned a value but never used.
- [Line 48](../src/services/order-service.ts#L48) - prefer-const: 'response' is never reassigned. Use 'const' instead.
- [Line 85](../src/services/order-service.ts#L85) - @typescript-eslint/no-unused-vars: 'hasItems' is assigned a value but never used.
- [Line 86](../src/services/order-service.ts#L86) - @typescript-eslint/no-unused-vars: 'hasValidUser' is assigned a value but never used.
- [Line 87](../src/services/order-service.ts#L87) - @typescript-eslint/no-unused-vars: 'totalCalculated' is assigned a value but never used.

### [src/services/product-service.ts](../src/services/product-service.ts) (5)

- [Line 3](../src/services/product-service.ts#L3) - @typescript-eslint/no-unused-vars: 'Category' is defined but never used.
- [Line 29](../src/services/product-service.ts#L29) - @typescript-eslint/no-unused-vars: 'originalPrice' is assigned a value but never used.
- [Line 50](../src/services/product-service.ts#L50) - prefer-const: 'updateData' is never reassigned. Use 'const' instead.
- [Line 80](../src/services/product-service.ts#L80) - @typescript-eslint/no-unused-vars: 'lowerQuery' is assigned a value but never used.
- [Line 81](../src/services/product-service.ts#L81) - @typescript-eslint/no-unused-vars: 'searchTimestamp' is assigned a value but never used.

### [src/services/user-service.ts](../src/services/user-service.ts) (9)

- [Line 4](../src/services/user-service.ts#L4) - @typescript-eslint/no-unused-vars: 'UserRole' is defined but never used.
- [Line 5](../src/services/user-service.ts#L5) - @typescript-eslint/no-unused-vars: 'UserPermissions' is defined but never used.
- [Line 11](../src/services/user-service.ts#L11) - @typescript-eslint/no-unused-vars: 'ApiResponse' is defined but never used.
- [Line 11](../src/services/user-service.ts#L11) - @typescript-eslint/no-unused-vars: 'PaginatedResult' is defined but never used.
- [Line 34](../src/services/user-service.ts#L34) - @typescript-eslint/no-unused-vars: 'isValid' is assigned a value but never used.
- [Line 35](../src/services/user-service.ts#L35) - @typescript-eslint/no-unused-vars: 'hasName' is assigned a value but never used.
- [Line 64](../src/services/user-service.ts#L64) - prefer-const: 'userData' is never reassigned. Use 'const' instead.
- [Line 92](../src/services/user-service.ts#L92) - @typescript-eslint/no-unused-vars: 'searchTerm' is assigned a value but never used.
- [Line 93](../src/services/user-service.ts#L93) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.

### [src/utils/array-utils.ts](../src/utils/array-utils.ts) (3)

- [Line 4](../src/utils/array-utils.ts#L4) - @typescript-eslint/no-unused-vars: 'T' is defined but never used.
- [Line 11](../src/utils/array-utils.ts#L11) - @typescript-eslint/no-unused-vars: 'totalChunks' is assigned a value but never used.
- [Line 33](../src/utils/array-utils.ts#L33) - prefer-const: 'result' is never reassigned. Use 'const' instead.

### [src/utils/async-utils.ts](../src/utils/async-utils.ts) (3)

- [Line 46](../src/utils/async-utils.ts#L46) - @typescript-eslint/no-unused-vars: 'count' is assigned a value but never used.
- [Line 47](../src/utils/async-utils.ts#L47) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 53](../src/utils/async-utils.ts#L53) - prefer-const: 'results' is never reassigned. Use 'const' instead.

### [src/utils/cache.ts](../src/utils/cache.ts) (2)

- [Line 33](../src/utils/cache.ts#L33) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 49](../src/utils/cache.ts#L49) - prefer-const: 'result' is never reassigned. Use 'const' instead.

### [src/utils/date-utils.ts](../src/utils/date-utils.ts) (2)

- [Line 18](../src/utils/date-utils.ts#L18) - @typescript-eslint/no-unused-vars: 'millisecondsPerDay' is assigned a value but never used.
- [Line 39](../src/utils/date-utils.ts#L39) - prefer-const: 'diff' is never reassigned. Use 'const' instead.

### [src/utils/event-emitter.ts](../src/utils/event-emitter.ts) (2)

- [Line 39](../src/utils/event-emitter.ts#L39) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 51](../src/utils/event-emitter.ts#L51) - prefer-const: 'wrappedHandler' is never reassigned. Use 'const' instead.

### [src/utils/formatter.ts](../src/utils/formatter.ts) (2)

- [Line 25](../src/utils/formatter.ts#L25) - @typescript-eslint/no-unused-vars: 'cleaned' is assigned a value but never used.
- [Line 36](../src/utils/formatter.ts#L36) - prefer-const: 'percentage' is never reassigned. Use 'const' instead.

### [src/utils/logger.ts](../src/utils/logger.ts) (3)

- [Line 28](../src/utils/logger.ts#L28) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 29](../src/utils/logger.ts#L29) - @typescript-eslint/no-unused-vars: 'levelStr' is assigned a value but never used.
- [Line 47](../src/utils/logger.ts#L47) - prefer-const: 'newLevel' is never reassigned. Use 'const' instead.

### [src/utils/metrics.ts](../src/utils/metrics.ts) (5)

- [Line 2](../src/utils/metrics.ts#L2) - @typescript-eslint/no-unused-vars: 'AnalyticsMetrics' is defined but never used.
- [Line 31](../src/utils/metrics.ts#L31) - @typescript-eslint/no-unused-vars: 'ratio' is assigned a value but never used.
- [Line 32](../src/utils/metrics.ts#L32) - @typescript-eslint/no-unused-vars: 'decimal' is assigned a value but never used.
- [Line 43](../src/utils/metrics.ts#L43) - prefer-const: 'normalized' is never reassigned. Use 'const' instead.
- [Line 43](../src/utils/metrics.ts#L43) - @typescript-eslint/no-unused-vars: 'normalized' is assigned a value but never used.

### [src/utils/number-utils.ts](../src/utils/number-utils.ts) (3)

- [Line 11](../src/utils/number-utils.ts#L11) - @typescript-eslint/no-unused-vars: 'range' is assigned a value but never used.
- [Line 27](../src/utils/number-utils.ts#L27) - @typescript-eslint/no-unused-vars: 'range' is assigned a value but never used.
- [Line 27](../src/utils/number-utils.ts#L27) - prefer-const: 'range' is never reassigned. Use 'const' instead.

### [src/utils/object-utils.ts](../src/utils/object-utils.ts) (2)

- [Line 13](../src/utils/object-utils.ts#L13) - @typescript-eslint/no-unused-vars: 'sourceCount' is assigned a value but never used.
- [Line 35](../src/utils/object-utils.ts#L35) - prefer-const: 'result' is never reassigned. Use 'const' instead.

### [src/utils/pagination.ts](../src/utils/pagination.ts) (2)

- [Line 47](../src/utils/pagination.ts#L47) - @typescript-eslint/no-unused-vars: 'ratio' is assigned a value but never used.
- [Line 58](../src/utils/pagination.ts#L58) - prefer-const: 'pages' is never reassigned. Use 'const' instead.

### [src/utils/string-utils.ts](../src/utils/string-utils.ts) (3)

- [Line 13](../src/utils/string-utils.ts#L13) - @typescript-eslint/no-unused-vars: 'ellipsis' is assigned a value but never used.
- [Line 14](../src/utils/string-utils.ts#L14) - @typescript-eslint/no-unused-vars: 'originalLength' is assigned a value but never used.
- [Line 36](../src/utils/string-utils.ts#L36) - prefer-const: 'slug' is never reassigned. Use 'const' instead.

### [src/utils/validation-utils.ts](../src/utils/validation-utils.ts) (6)

- [Line 11](../src/utils/validation-utils.ts#L11) - @typescript-eslint/no-unused-vars: 'protocol' is assigned a value but never used.
- [Line 39](../src/utils/validation-utils.ts#L39) - prefer-const: 'phoneRegex' is never reassigned. Use 'const' instead.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \+.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \(.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \).
- [Line 81](../src/utils/validation-utils.ts#L81) - @typescript-eslint/no-unused-vars: 'typeCheck' is assigned a value but never used.

## typescript > noImplicitAny (282 issues)

### [src/api/auth-api.ts](../src/api/auth-api.ts) (5)

- [Line 20](../src/api/auth-api.ts#L20) - TS7006: Parameter 'credentials' implicitly has an 'any' type.
- [Line 29](../src/api/auth-api.ts#L29) - TS7006: Parameter 'userData' implicitly has an 'any' type.
- [Line 38](../src/api/auth-api.ts#L38) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 68](../src/api/auth-api.ts#L68) - TS2322: Type 'string' is not assignable to type 'boolean'.
- [Line 69](../src/api/auth-api.ts#L69) - TS2322: Type 'boolean' is not assignable to type 'string'.

### [src/api/client.ts](../src/api/client.ts) (4)

- [Line 17](../src/api/client.ts#L17) - TS7006: Parameter 'endpoint' implicitly has an 'any' type.
- [Line 43](../src/api/client.ts#L43) - TS7006: Parameter 'body' implicitly has an 'any' type.
- [Line 69](../src/api/client.ts#L69) - TS2534: A function returning 'never' cannot have a reachable end point.
- [Line 78](../src/api/client.ts#L78) - TS2322: Type 'ApiClient' is not assignable to type 'number'.

### [src/api/order-api.ts](../src/api/order-api.ts) (5)

- [Line 8](../src/api/order-api.ts#L8) - TS7006: Parameter 'orderId' implicitly has an 'any' type.
- [Line 22](../src/api/order-api.ts#L22) - TS7006: Parameter 'orderData' implicitly has an 'any' type.
- [Line 38](../src/api/order-api.ts#L38) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 70](../src/api/order-api.ts#L70) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 71](../src/api/order-api.ts#L71) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/api/product-api.ts](../src/api/product-api.ts) (5)

- [Line 8](../src/api/product-api.ts#L8) - TS7006: Parameter 'productId' implicitly has an 'any' type.
- [Line 22](../src/api/product-api.ts#L22) - TS7006: Parameter 'productData' implicitly has an 'any' type.
- [Line 38](../src/api/product-api.ts#L38) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 69](../src/api/product-api.ts#L69) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 70](../src/api/product-api.ts#L70) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/api/types.ts](../src/api/types.ts) (4)

- [Line 32](../src/api/types.ts#L32) - TS7006: Parameter 'data' implicitly has an 'any' type.
- [Line 44](../src/api/types.ts#L44) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 102](../src/api/types.ts#L102) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 103](../src/api/types.ts#L103) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/api/user-api.ts](../src/api/user-api.ts) (5)

- [Line 8](../src/api/user-api.ts#L8) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 22](../src/api/user-api.ts#L22) - TS7006: Parameter 'userData' implicitly has an 'any' type.
- [Line 38](../src/api/user-api.ts#L38) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 71](../src/api/user-api.ts#L71) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 72](../src/api/user-api.ts#L72) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/components/alert.ts](../src/components/alert.ts) (6)

- [Line 19](../src/components/alert.ts#L19) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 20](../src/components/alert.ts#L20) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 23](../src/components/alert.ts#L23) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 28](../src/components/alert.ts#L28) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/components/alert.ts#L44) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 67](../src/components/alert.ts#L67) - TS2322: Type 'boolean' is not assignable to type 'string'.

### [src/components/button.ts](../src/components/button.ts) (3)

- [Line 23](../src/components/button.ts#L23) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 24](../src/components/button.ts#L24) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 42](../src/components/button.ts#L42) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/components/card.ts](../src/components/card.ts) (8)

- [Line 18](../src/components/card.ts#L18) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 19](../src/components/card.ts#L19) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 23](../src/components/card.ts#L23) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 29](../src/components/card.ts#L29) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 33](../src/components/card.ts#L33) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 38](../src/components/card.ts#L38) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 58](../src/components/card.ts#L58) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 78](../src/components/card.ts#L78) - TS2322: Type 'string' is not assignable to type 'boolean'.

### [src/components/dropdown.ts](../src/components/dropdown.ts) (8)

- [Line 23](../src/components/dropdown.ts#L23) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 24](../src/components/dropdown.ts#L24) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 28](../src/components/dropdown.ts#L28) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 37](../src/components/dropdown.ts#L37) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 49](../src/components/dropdown.ts#L49) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 50](../src/components/dropdown.ts#L50) - TS2304: Cannot find name 'HTMLSelectElement'.
- [Line 58](../src/components/dropdown.ts#L58) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 81](../src/components/dropdown.ts#L81) - TS2322: Type 'number' is not assignable to type 'boolean'.

### [src/components/form.ts](../src/components/form.ts) (7)

- [Line 20](../src/components/form.ts#L20) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 21](../src/components/form.ts#L21) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 33](../src/components/form.ts#L33) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 42](../src/components/form.ts#L42) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 82](../src/components/form.ts#L82) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 83](../src/components/form.ts#L83) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 94](../src/components/form.ts#L94) - TS7006: Parameter 'field' implicitly has an 'any' type.

### [src/components/input.ts](../src/components/input.ts) (7)

- [Line 15](../src/components/input.ts#L15) - TS2304: Cannot find name 'HTMLInputElement'.
- [Line 22](../src/components/input.ts#L22) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 23](../src/components/input.ts#L23) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 30](../src/components/input.ts#L30) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 31](../src/components/input.ts#L31) - TS2304: Cannot find name 'HTMLInputElement'.
- [Line 46](../src/components/input.ts#L46) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 75](../src/components/input.ts#L75) - TS2322: Type 'string' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.

### [src/components/list.ts](../src/components/list.ts) (7)

- [Line 17](../src/components/list.ts#L17) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 18](../src/components/list.ts#L18) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 22](../src/components/list.ts#L22) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 27](../src/components/list.ts#L27) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/components/list.ts#L44) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 64](../src/components/list.ts#L64) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 65](../src/components/list.ts#L65) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/components/modal.ts](../src/components/modal.ts) (9)

- [Line 14](../src/components/modal.ts#L14) - TS2304: Cannot find name 'HTMLElement'.
- [Line 21](../src/components/modal.ts#L21) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 26](../src/components/modal.ts#L26) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 29](../src/components/modal.ts#L29) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 32](../src/components/modal.ts#L32) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 35](../src/components/modal.ts#L35) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 53](../src/components/modal.ts#L53) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 83](../src/components/modal.ts#L83) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 98](../src/components/modal.ts#L98) - TS7006: Parameter 'action' implicitly has an 'any' type.

### [src/components/table.ts](../src/components/table.ts) (10)

- [Line 23](../src/components/table.ts#L23) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 24](../src/components/table.ts#L24) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 28](../src/components/table.ts#L28) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 29](../src/components/table.ts#L29) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 32](../src/components/table.ts#L32) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 41](../src/components/table.ts#L41) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/components/table.ts#L44) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 47](../src/components/table.ts#L47) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 65](../src/components/table.ts#L65) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 96](../src/components/table.ts#L96) - TS2322: Type 'number' is not assignable to type 'boolean'.

### [src/components/tabs.ts](../src/components/tabs.ts) (7)

- [Line 24](../src/components/tabs.ts#L24) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 25](../src/components/tabs.ts#L25) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 29](../src/components/tabs.ts#L29) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 33](../src/components/tabs.ts#L33) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 46](../src/components/tabs.ts#L46) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 84](../src/components/tabs.ts#L84) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 85](../src/components/tabs.ts#L85) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/features/auth/auth-controller.ts](../src/features/auth/auth-controller.ts) (5)

- [Line 7](../src/features/auth/auth-controller.ts#L7) - TS7006: Parameter 'email' implicitly has an 'any' type.
- [Line 18](../src/features/auth/auth-controller.ts#L18) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 48](../src/features/auth/auth-controller.ts#L48) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 49](../src/features/auth/auth-controller.ts#L49) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 53](../src/features/auth/auth-controller.ts#L53) - TS7006: Parameter 'email' implicitly has an 'any' type.

### [src/features/cart/cart-controller.ts](../src/features/cart/cart-controller.ts) (5)

- [Line 13](../src/features/cart/cart-controller.ts#L13) - TS7006: Parameter 'product' implicitly has an 'any' type.
- [Line 32](../src/features/cart/cart-controller.ts#L32) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 71](../src/features/cart/cart-controller.ts#L71) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 72](../src/features/cart/cart-controller.ts#L72) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 77](../src/features/cart/cart-controller.ts#L77) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: CartItem, index: number, array: CartItem&#91;&#93;) =&gt; value is T, thisArg?: any): T&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: CartItem, index: number, array: CartItem&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'CartItem' is not assignable to type 'T'.
          'CartItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'CartItem'.
  Overload 2 of 2, '(predicate: (value: CartItem, index: number, array: CartItem&#91;&#93;) =&gt; unknown, thisArg?: any): CartItem&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: CartItem, index: number, array: CartItem&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'CartItem' is not assignable to type 'T'.
          'CartItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'CartItem'.

### [src/features/checkout/checkout-controller.ts](../src/features/checkout/checkout-controller.ts) (5)

- [Line 25](../src/features/checkout/checkout-controller.ts#L25) - TS7006: Parameter 'data' implicitly has an 'any' type.
- [Line 42](../src/features/checkout/checkout-controller.ts#L42) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 79](../src/features/checkout/checkout-controller.ts#L79) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 80](../src/features/checkout/checkout-controller.ts#L80) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 84](../src/features/checkout/checkout-controller.ts#L84) - TS7006: Parameter 'method' implicitly has an 'any' type.

### [src/features/dashboard/dashboard-controller.ts](../src/features/dashboard/dashboard-controller.ts) (5)

- [Line 10](../src/features/dashboard/dashboard-controller.ts#L10) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 30](../src/features/dashboard/dashboard-controller.ts#L30) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 69](../src/features/dashboard/dashboard-controller.ts#L69) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 71](../src/features/dashboard/dashboard-controller.ts#L71) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 87](../src/features/dashboard/dashboard-controller.ts#L87) - TS7006: Parameter 'charts' implicitly has an 'any' type.

### [src/features/dashboard/types.ts](../src/features/dashboard/types.ts) (2)

- [Line 28](../src/features/dashboard/types.ts#L28) - TS7006: Parameter 'refreshInterval' implicitly has an 'any' type.
- [Line 57](../src/features/dashboard/types.ts#L57) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/features/notifications/notification-controller.ts](../src/features/notifications/notification-controller.ts) (4)

- [Line 9](../src/features/notifications/notification-controller.ts#L9) - TS7006: Parameter 'title' implicitly has an 'any' type.
- [Line 17](../src/features/notifications/notification-controller.ts#L17) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 45](../src/features/notifications/notification-controller.ts#L45) - TS2322: Type 'boolean' is not assignable to type 'string'.
- [Line 49](../src/features/notifications/notification-controller.ts#L49) - TS7006: Parameter 'type' implicitly has an 'any' type.

### [src/features/profile/profile-controller.ts](../src/features/profile/profile-controller.ts) (4)

- [Line 9](../src/features/profile/profile-controller.ts#L9) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 31](../src/features/profile/profile-controller.ts#L31) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 79](../src/features/profile/profile-controller.ts#L79) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 101](../src/features/profile/profile-controller.ts#L101) - TS7006: Parameter 'profile' implicitly has an 'any' type.

### [src/features/settings/settings-controller.ts](../src/features/settings/settings-controller.ts) (4)

- [Line 9](../src/features/settings/settings-controller.ts#L9) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 41](../src/features/settings/settings-controller.ts#L41) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 75](../src/features/settings/settings-controller.ts#L75) - TS2322: Type 'string' is not assignable to type 'boolean'.
  Type 'string' is not assignable to type 'boolean'.
- [Line 83](../src/features/settings/settings-controller.ts#L83) - TS7006: Parameter 'settings' implicitly has an 'any' type.

### [src/hooks/use-auth.ts](../src/hooks/use-auth.ts) (2)

- [Line 26](../src/hooks/use-auth.ts#L26) - TS7006: Parameter 'email' implicitly has an 'any' type.
- [Line 76](../src/hooks/use-auth.ts#L76) - TS2322: Type 'boolean' is not assignable to type 'number'.

### [src/hooks/use-debounce.ts](../src/hooks/use-debounce.ts) (4)

- [Line 15](../src/hooks/use-debounce.ts#L15) - TS7006: Parameter 'newValue' implicitly has an 'any' type.
- [Line 29](../src/hooks/use-debounce.ts#L29) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 56](../src/hooks/use-debounce.ts#L56) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 57](../src/hooks/use-debounce.ts#L57) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/hooks/use-effect.ts](../src/hooks/use-effect.ts) (5)

- [Line 6](../src/hooks/use-effect.ts#L6) - TS2300: Duplicate identifier 'cleanup'.
- [Line 10](../src/hooks/use-effect.ts#L10) - TS7006: Parameter 'deps' implicitly has an 'any' type.
- [Line 26](../src/hooks/use-effect.ts#L26) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 52](../src/hooks/use-effect.ts#L52) - TS2300: Duplicate identifier 'cleanup'.
- [Line 72](../src/hooks/use-effect.ts#L72) - TS2322: Type 'boolean' is not assignable to type 'number'.

### [src/hooks/use-fetch.ts](../src/hooks/use-fetch.ts) (3)

- [Line 23](../src/hooks/use-fetch.ts#L23) - TS7006: Parameter 'url' implicitly has an 'any' type.
- [Line 47](../src/hooks/use-fetch.ts#L47) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 83](../src/hooks/use-fetch.ts#L83) - TS2322: Type 'boolean' is not assignable to type 'string'.

### [src/hooks/use-local-storage.ts](../src/hooks/use-local-storage.ts) (6)

- [Line 14](../src/hooks/use-local-storage.ts#L14) - TS2304: Cannot find name 'window'.
- [Line 27](../src/hooks/use-local-storage.ts#L27) - TS2304: Cannot find name 'window'.
- [Line 34](../src/hooks/use-local-storage.ts#L34) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 36](../src/hooks/use-local-storage.ts#L36) - TS2304: Cannot find name 'window'.
- [Line 52](../src/hooks/use-local-storage.ts#L52) - TS2304: Cannot find name 'window'.
- [Line 53](../src/hooks/use-local-storage.ts#L53) - TS2322: Type 'boolean' is not assignable to type 'number'.

### [src/hooks/use-state.ts](../src/hooks/use-state.ts) (3)

- [Line 29](../src/hooks/use-state.ts#L29) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 56](../src/hooks/use-state.ts#L56) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 57](../src/hooks/use-state.ts#L57) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/index.ts](../src/index.ts) (4)

- [Line 46](../src/index.ts#L46) - TS7006: Parameter 'config' implicitly has an 'any' type.
- [Line 62](../src/index.ts#L62) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 115](../src/index.ts#L115) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 116](../src/index.ts#L116) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/analytics.ts](../src/models/analytics.ts) (2)

- [Line 21](../src/models/analytics.ts#L21) - TS7006: Parameter 'eventName' implicitly has an 'any' type.
- [Line 45](../src/models/analytics.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/category.ts](../src/models/category.ts) (2)

- [Line 15](../src/models/category.ts#L15) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 41](../src/models/category.ts#L41) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/dashboard.ts](../src/models/dashboard.ts) (2)

- [Line 25](../src/models/dashboard.ts#L25) - TS7006: Parameter 'metrics' implicitly has an 'any' type.
- [Line 45](../src/models/dashboard.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/notification.ts](../src/models/notification.ts) (2)

- [Line 19](../src/models/notification.ts#L19) - TS7006: Parameter 'title' implicitly has an 'any' type.
- [Line 45](../src/models/notification.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/order.ts](../src/models/order.ts) (6)

- [Line 30](../src/models/order.ts#L30) - TS7006: Parameter 'items' implicitly has an 'any' type.
- [Line 31](../src/models/order.ts#L31) - TS7006: Parameter 'sum' implicitly has an 'any' type.
- [Line 31](../src/models/order.ts#L31) - TS7006: Parameter 'item' implicitly has an 'any' type.
- [Line 48](../src/models/order.ts#L48) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 87](../src/models/order.ts#L87) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 88](../src/models/order.ts#L88) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/permission.ts](../src/models/permission.ts) (2)

- [Line 27](../src/models/permission.ts#L27) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 60](../src/models/permission.ts#L60) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/product.ts](../src/models/product.ts) (4)

- [Line 24](../src/models/product.ts#L24) - TS7006: Parameter 'product' implicitly has an 'any' type.
- [Line 48](../src/models/product.ts#L48) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 104](../src/models/product.ts#L104) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 105](../src/models/product.ts#L105) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/role.ts](../src/models/role.ts) (5)

- [Line 32](../src/models/role.ts#L32) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 33](../src/models/role.ts#L33) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 57](../src/models/role.ts#L57) - TS7006: Parameter 'roles' implicitly has an 'any' type.
- [Line 58](../src/models/role.ts#L58) - TS7006: Parameter 'acc' implicitly has an 'any' type.
- [Line 58](../src/models/role.ts#L58) - TS7006: Parameter 'role' implicitly has an 'any' type.

### [src/models/session.ts](../src/models/session.ts) (2)

- [Line 16](../src/models/session.ts#L16) - TS7006: Parameter 'token' implicitly has an 'any' type.
- [Line 38](../src/models/session.ts#L38) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/settings.ts](../src/models/settings.ts) (2)

- [Line 32](../src/models/settings.ts#L32) - TS7006: Parameter 'user' implicitly has an 'any' type.
- [Line 66](../src/models/settings.ts#L66) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/tag.ts](../src/models/tag.ts) (2)

- [Line 12](../src/models/tag.ts#L12) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 30](../src/models/tag.ts#L30) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/user.ts](../src/models/user.ts) (2)

- [Line 27](../src/models/user.ts#L27) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 35](../src/models/user.ts#L35) - TS7006: Parameter 'user' implicitly has an 'any' type.

### [src/services/analytics-service.ts](../src/services/analytics-service.ts) (5)

- [Line 8](../src/services/analytics-service.ts#L8) - TS7006: Parameter 'eventName' implicitly has an 'any' type.
- [Line 22](../src/services/analytics-service.ts#L22) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 61](../src/services/analytics-service.ts#L61) - TS7006: Parameter 'predicate' implicitly has an 'any' type.
- [Line 71](../src/services/analytics-service.ts#L71) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 72](../src/services/analytics-service.ts#L72) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/services/auth-service.ts](../src/services/auth-service.ts) (5)

- [Line 12](../src/services/auth-service.ts#L12) - TS7006: Parameter 'email' implicitly has an 'any' type.
- [Line 31](../src/services/auth-service.ts#L31) - TS7006: Parameter 'userData' implicitly has an 'any' type.
- [Line 37](../src/services/auth-service.ts#L37) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 92](../src/services/auth-service.ts#L92) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 93](../src/services/auth-service.ts#L93) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/services/notification-service.ts](../src/services/notification-service.ts) (5)

- [Line 11](../src/services/notification-service.ts#L11) - TS7006: Parameter 'title' implicitly has an 'any' type.
- [Line 30](../src/services/notification-service.ts#L30) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 85](../src/services/notification-service.ts#L85) - TS7006: Parameter 'type' implicitly has an 'any' type.
- [Line 93](../src/services/notification-service.ts#L93) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 94](../src/services/notification-service.ts#L94) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/services/order-service.ts](../src/services/order-service.ts) (5)

- [Line 9](../src/services/order-service.ts#L9) - TS7006: Parameter 'orderId' implicitly has an 'any' type.
- [Line 19](../src/services/order-service.ts#L19) - TS7006: Parameter 'items' implicitly has an 'any' type.
- [Line 33](../src/services/order-service.ts#L33) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 79](../src/services/order-service.ts#L79) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 80](../src/services/order-service.ts#L80) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/services/product-service.ts](../src/services/product-service.ts) (5)

- [Line 8](../src/services/product-service.ts#L8) - TS7006: Parameter 'productId' implicitly has an 'any' type.
- [Line 22](../src/services/product-service.ts#L22) - TS7006: Parameter 'productData' implicitly has an 'any' type.
- [Line 35](../src/services/product-service.ts#L35) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 74](../src/services/product-service.ts#L74) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 75](../src/services/product-service.ts#L75) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/services/user-service.ts](../src/services/user-service.ts) (9)

- [Line 4](../src/services/user-service.ts#L4) - TS2305: Module '"../models/user"' has no exported member 'UserRole'.
- [Line 5](../src/services/user-service.ts#L5) - TS2724: '"../models/user"' has no exported member named 'UserPermissions'. Did you mean 'hasPermission'?
- [Line 15](../src/services/user-service.ts#L15) - TS7006: Parameter 'role' implicitly has an 'any' type.
- [Line 15](../src/services/user-service.ts#L15) - TS7006: Parameter 'options' implicitly has an 'any' type.
- [Line 17](../src/services/user-service.ts#L17) - TS2322: Type 'ApiResponse&lt;PaginatedResult&lt;User&gt;&gt;' is not assignable to type 'string'.
- [Line 40](../src/services/user-service.ts#L40) - TS7006: Parameter 'email' implicitly has an 'any' type.
- [Line 47](../src/services/user-service.ts#L47) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 86](../src/services/user-service.ts#L86) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 87](../src/services/user-service.ts#L87) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/array-utils.ts](../src/utils/array-utils.ts) (7)

- [Line 4](../src/utils/array-utils.ts#L4) - TS7006: Parameter 'arr' implicitly has an 'any' type.
- [Line 21](../src/utils/array-utils.ts#L21) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 55](../src/utils/array-utils.ts#L55) - TS7006: Parameter 'key' implicitly has an 'any' type.
- [Line 57](../src/utils/array-utils.ts#L57) - TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'unknown'.
- [Line 58](../src/utils/array-utils.ts#L58) - TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'unknown'.
- [Line 79](../src/utils/array-utils.ts#L79) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 80](../src/utils/array-utils.ts#L80) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/async-utils.ts](../src/utils/async-utils.ts) (3)

- [Line 6](../src/utils/async-utils.ts#L6) - TS7006: Parameter 'maxAttempts' implicitly has an 'any' type.
- [Line 31](../src/utils/async-utils.ts#L31) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 70](../src/utils/async-utils.ts#L70) - TS2322: Type 'T' is not assignable to type 'string'.

### [src/utils/cache.ts](../src/utils/cache.ts) (3)

- [Line 6](../src/utils/cache.ts#L6) - TS7006: Parameter 'value' implicitly has an 'any' type.
- [Line 59](../src/utils/cache.ts#L59) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 60](../src/utils/cache.ts#L60) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/date-utils.ts](../src/utils/date-utils.ts) (5)

- [Line 4](../src/utils/date-utils.ts#L4) - TS7006: Parameter 'date' implicitly has an 'any' type.
- [Line 24](../src/utils/date-utils.ts#L24) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 62](../src/utils/date-utils.ts#L62) - TS7006: Parameter 'dateStr' implicitly has an 'any' type.
- [Line 73](../src/utils/date-utils.ts#L73) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 74](../src/utils/date-utils.ts#L74) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/event-emitter.ts](../src/utils/event-emitter.ts) (4)

- [Line 8](../src/utils/event-emitter.ts#L8) - TS7006: Parameter 'handler' implicitly has an 'any' type.
- [Line 20](../src/utils/event-emitter.ts#L20) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 27](../src/utils/event-emitter.ts#L27) - TS2345: Argument of type 'EventHandler&lt;Events&#91;K&#93;&gt;' is not assignable to parameter of type 'EventHandler&lt;unknown&gt;'.
  Type 'unknown' is not assignable to type 'Events&#91;K&#93;'.
    'unknown' is assignable to the constraint of type 'Events&#91;K&#93;', but 'Events&#91;K&#93;' could be instantiated with a different subtype of constraint 'unknown'.
- [Line 67](../src/utils/event-emitter.ts#L67) - TS2322: Type 'boolean' is not assignable to type 'number'.

### [src/utils/formatter.ts](../src/utils/formatter.ts) (3)

- [Line 4](../src/utils/formatter.ts#L4) - TS7006: Parameter 'num' implicitly has an 'any' type.
- [Line 9](../src/utils/formatter.ts#L9) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 43](../src/utils/formatter.ts#L43) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/utils/logger.ts](../src/utils/logger.ts) (3)

- [Line 8](../src/utils/logger.ts#L8) - TS7006: Parameter 'message' implicitly has an 'any' type.
- [Line 15](../src/utils/logger.ts#L15) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 54](../src/utils/logger.ts#L54) - TS2322: Type 'string' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.

### [src/utils/metrics.ts](../src/utils/metrics.ts) (4)

- [Line 7](../src/utils/metrics.ts#L7) - TS7006: Parameter 'current' implicitly has an 'any' type.
- [Line 16](../src/utils/metrics.ts#L16) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 57](../src/utils/metrics.ts#L57) - TS2322: Type 'string' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.
- [Line 65](../src/utils/metrics.ts#L65) - TS7006: Parameter 'metrics1' implicitly has an 'any' type.

### [src/utils/number-utils.ts](../src/utils/number-utils.ts) (5)

- [Line 4](../src/utils/number-utils.ts#L4) - TS7006: Parameter 'num' implicitly has an 'any' type.
- [Line 18](../src/utils/number-utils.ts#L18) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 37](../src/utils/number-utils.ts#L37) - TS7006: Parameter 'amount' implicitly has an 'any' type.
- [Line 51](../src/utils/number-utils.ts#L51) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 52](../src/utils/number-utils.ts#L52) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/object-utils.ts](../src/utils/object-utils.ts) (6)

- [Line 4](../src/utils/object-utils.ts#L4) - TS7006: Parameter 'obj' implicitly has an 'any' type.
- [Line 14](../src/utils/object-utils.ts#L14) - TS2322: Type 'Partial&lt;T&gt;' is not assignable to type 'T'.
  'Partial&lt;T&gt;' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'Record&lt;string, unknown&gt;'.
- [Line 20](../src/utils/object-utils.ts#L20) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 60](../src/utils/object-utils.ts#L60) - TS7006: Parameter 'obj' implicitly has an 'any' type.
- [Line 70](../src/utils/object-utils.ts#L70) - TS2322: Type 'unknown&#91;&#93;' is not assignable to type 'T&#91;keyof T&#93;&#91;&#93;'.
  Type 'unknown' is not assignable to type 'T&#91;keyof T&#93;'.
    'unknown' is assignable to the constraint of type 'T&#91;keyof T&#93;', but 'T&#91;keyof T&#93;' could be instantiated with a different subtype of constraint 'unknown'.
- [Line 71](../src/utils/object-utils.ts#L71) - TS2322: Type 'T&#91;keyof T&#93;&#91;&#93;' is not assignable to type 'string'.

### [src/utils/pagination.ts](../src/utils/pagination.ts) (3)

- [Line 19](../src/utils/pagination.ts#L19) - TS7006: Parameter 'options' implicitly has an 'any' type.
- [Line 35](../src/utils/pagination.ts#L35) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 77](../src/utils/pagination.ts#L77) - TS2322: Type 'boolean' is not assignable to type 'string'.

### [src/utils/string-utils.ts](../src/utils/string-utils.ts) (4)

- [Line 4](../src/utils/string-utils.ts#L4) - TS7006: Parameter 'str' implicitly has an 'any' type.
- [Line 24](../src/utils/string-utils.ts#L24) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 60](../src/utils/string-utils.ts#L60) - TS7006: Parameter 'str' implicitly has an 'any' type.
- [Line 72](../src/utils/string-utils.ts#L72) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/utils/validation-utils.ts](../src/utils/validation-utils.ts) (4)

- [Line 4](../src/utils/validation-utils.ts#L4) - TS7006: Parameter 'value' implicitly has an 'any' type.
- [Line 21](../src/utils/validation-utils.ts#L21) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 48](../src/utils/validation-utils.ts#L48) - TS7006: Parameter 'min' implicitly has an 'any' type.
- [Line 59](../src/utils/validation-utils.ts#L59) - TS2322: Type 'boolean' is not assignable to type 'number'.
