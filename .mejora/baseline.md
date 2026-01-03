# Mejora Baseline

This file represents the current accepted state of the codebase.

## eslint (378 issues)

### [src/api/analytics-api.ts](../src/api/analytics-api.ts) (2)

- [Line 34](../src/api/analytics-api.ts#L34) - @typescript-eslint/no-unused-vars: 'dateRange' is assigned a value but never used.
- [Line 57](../src/api/analytics-api.ts#L57) - prefer-const: 'data' is never reassigned. Use 'const' instead.

### [src/api/auth-api.ts](../src/api/auth-api.ts) (2)

- [Line 48](../src/api/auth-api.ts#L48) - @typescript-eslint/no-unused-vars: 'status' is assigned a value but never used.
- [Line 58](../src/api/auth-api.ts#L58) - prefer-const: 'endpoint' is never reassigned. Use 'const' instead.

### [src/api/client.ts](../src/api/client.ts) (3)

- [Line 57](../src/api/client.ts#L57) - @typescript-eslint/no-unused-vars: 'authHeader' is assigned a value but never used.
- [Line 63](../src/api/client.ts#L63) - prefer-const: 'headers' is never reassigned. Use 'const' instead.
- [Line 84](../src/api/client.ts#L84) - @typescript-eslint/no-unused-vars: 'maxRetries' is defined but never used.

### [src/api/notification-api.ts](../src/api/notification-api.ts) (4)

- [Line 3](../src/api/notification-api.ts#L3) - @typescript-eslint/no-unused-vars: 'PaginatedResult' is defined but never used.
- [Line 31](../src/api/notification-api.ts#L31) - @typescript-eslint/no-unused-vars: 'user' is assigned a value but never used.
- [Line 53](../src/api/notification-api.ts#L53) - prefer-const: 'data' is never reassigned. Use 'const' instead.
- [Line 151](../src/api/notification-api.ts#L151) - @typescript-eslint/no-unused-vars: 'callback' is defined but never used.

### [src/api/order-api.ts](../src/api/order-api.ts) (3)

- [Line 48](../src/api/order-api.ts#L48) - @typescript-eslint/no-unused-vars: 'cacheKey' is assigned a value but never used.
- [Line 55](../src/api/order-api.ts#L55) - prefer-const: 'total' is never reassigned. Use 'const' instead.
- [Line 69](../src/api/order-api.ts#L69) - @typescript-eslint/no-unused-vars: 'orderId' is defined but never used.

### [src/api/product-api.ts](../src/api/product-api.ts) (3)

- [Line 48](../src/api/product-api.ts#L48) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 55](../src/api/product-api.ts#L55) - prefer-const: 'searchEndpoint' is never reassigned. Use 'const' instead.
- [Line 68](../src/api/product-api.ts#L68) - @typescript-eslint/no-unused-vars: 'productId' is defined but never used.

### [src/api/settings-api.ts](../src/api/settings-api.ts) (3)

- [Line 4](../src/api/settings-api.ts#L4) - @typescript-eslint/no-unused-vars: 'Settings' is defined but never used.
- [Line 38](../src/api/settings-api.ts#L38) - @typescript-eslint/no-unused-vars: 'settingsId' is assigned a value but never used.
- [Line 59](../src/api/settings-api.ts#L59) - prefer-const: 'data' is never reassigned. Use 'const' instead.

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

### [src/components/breadcrumb.ts](../src/components/breadcrumb.ts) (3)

- [Line 2](../src/components/breadcrumb.ts#L2) - @typescript-eslint/no-unused-vars: 'NavigationItem' is defined but never used.
- [Line 50](../src/components/breadcrumb.ts#L50) - @typescript-eslint/no-unused-vars: 'itemUrl' is assigned a value but never used.
- [Line 85](../src/components/breadcrumb.ts#L85) - prefer-const: 'activeItem' is never reassigned. Use 'const' instead.

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

### [src/components/footer.ts](../src/components/footer.ts) (2)

- [Line 53](../src/components/footer.ts#L53) - @typescript-eslint/no-unused-vars: 'sectionTitle' is assigned a value but never used.
- [Line 96](../src/components/footer.ts#L96) - prefer-const: 'year' is never reassigned. Use 'const' instead.

### [src/components/form.ts](../src/components/form.ts) (4)

- [Line 54](../src/components/form.ts#L54) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 55](../src/components/form.ts#L55) - @typescript-eslint/no-unused-vars: 'fieldCount' is assigned a value but never used.
- [Line 66](../src/components/form.ts#L66) - prefer-const: 'isValid' is never reassigned. Use 'const' instead.
- [Line 88](../src/components/form.ts#L88) - @typescript-eslint/no-unused-vars: 'validator' is defined but never used.

### [src/components/header.ts](../src/components/header.ts) (3)

- [Line 3](../src/components/header.ts#L3) - @typescript-eslint/no-unused-vars: 'Button' is defined but never used.
- [Line 52](../src/components/header.ts#L52) - @typescript-eslint/no-unused-vars: 'logoUrl' is assigned a value but never used.
- [Line 88](../src/components/header.ts#L88) - prefer-const: 'div' is never reassigned. Use 'const' instead.

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

### [src/components/navigation.ts](../src/components/navigation.ts) (3)

- [Line 3](../src/components/navigation.ts#L3) - @typescript-eslint/no-unused-vars: 'Button' is defined but never used.
- [Line 76](../src/components/navigation.ts#L76) - @typescript-eslint/no-unused-vars: 'isExactMatch' is assigned a value but never used.
- [Line 82](../src/components/navigation.ts#L82) - prefer-const: 'expanded' is never reassigned. Use 'const' instead.

### [src/components/popover.ts](../src/components/popover.ts) (3)

- [Line 2](../src/components/popover.ts#L2) - @typescript-eslint/no-unused-vars: 'Tooltip' is defined but never used.
- [Line 49](../src/components/popover.ts#L49) - @typescript-eslint/no-unused-vars: 'wasOpen' is assigned a value but never used.
- [Line 78](../src/components/popover.ts#L78) - prefer-const: 'isCurrentlyOpen' is never reassigned. Use 'const' instead.

### [src/components/sidebar.ts](../src/components/sidebar.ts) (2)

- [Line 51](../src/components/sidebar.ts#L51) - @typescript-eslint/no-unused-vars: 'sectionId' is assigned a value but never used.
- [Line 88](../src/components/sidebar.ts#L88) - prefer-const: 'collapsed' is never reassigned. Use 'const' instead.

### [src/components/table.ts](../src/components/table.ts) (3)

- [Line 74](../src/components/table.ts#L74) - @typescript-eslint/no-unused-vars: 'oldData' is assigned a value but never used.
- [Line 75](../src/components/table.ts#L75) - @typescript-eslint/no-unused-vars: 'dataLength' is assigned a value but never used.
- [Line 81](../src/components/table.ts#L81) - prefer-const: 'sorted' is never reassigned. Use 'const' instead.

### [src/components/tabs.ts](../src/components/tabs.ts) (3)

- [Line 71](../src/components/tabs.ts#L71) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 72](../src/components/tabs.ts#L72) - @typescript-eslint/no-unused-vars: 'index' is assigned a value but never used.
- [Line 78](../src/components/tabs.ts#L78) - prefer-const: 'items' is never reassigned. Use 'const' instead.

### [src/components/tooltip.ts](../src/components/tooltip.ts) (2)

- [Line 45](../src/components/tooltip.ts#L45) - @typescript-eslint/no-unused-vars: 'wasVisible' is assigned a value but never used.
- [Line 73](../src/components/tooltip.ts#L73) - prefer-const: 'rect' is never reassigned. Use 'const' instead.

### [src/features/admin/admin-dashboard.ts](../src/features/admin/admin-dashboard.ts) (5)

- [Line 3](../src/features/admin/admin-dashboard.ts#L3) - @typescript-eslint/no-unused-vars: 'userService' is defined but never used.
- [Line 32](../src/features/admin/admin-dashboard.ts#L32) - @typescript-eslint/no-unused-vars: 'userId' is defined but never used.
- [Line 41](../src/features/admin/admin-dashboard.ts#L41) - @typescript-eslint/no-unused-vars: 'startTime' is assigned a value but never used.
- [Line 82](../src/features/admin/admin-dashboard.ts#L82) - prefer-const: 'refreshId' is never reassigned. Use 'const' instead.
- [Line 151](../src/features/admin/admin-dashboard.ts#L151) - @typescript-eslint/no-unused-vars: 'limit' is assigned a value but never used.

### [src/features/admin/user-management.ts](../src/features/admin/user-management.ts) (4)

- [Line 44](../src/features/admin/user-management.ts#L44) - @typescript-eslint/no-unused-vars: 'searchTerm' is assigned a value but never used.
- [Line 83](../src/features/admin/user-management.ts#L83) - prefer-const: 'user' is never reassigned. Use 'const' instead.
- [Line 105](../src/features/admin/user-management.ts#L105) - @typescript-eslint/no-unused-vars: 'reason' is defined but never used.
- [Line 190](../src/features/admin/user-management.ts#L190) - @typescript-eslint/no-unused-vars: 'query' is defined but never used.

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

### [src/features/reports/report-generator.ts](../src/features/reports/report-generator.ts) (5)

- [Line 3](../src/features/reports/report-generator.ts#L3) - @typescript-eslint/no-unused-vars: 'Order' is defined but never used.
- [Line 24](../src/features/reports/report-generator.ts#L24) - @typescript-eslint/no-unused-vars: 'reportOptions' is assigned a value but never used.
- [Line 25](../src/features/reports/report-generator.ts#L25) - @typescript-eslint/no-unused-vars: 'format' is assigned a value but never used.
- [Line 48](../src/features/reports/report-generator.ts#L48) - prefer-const: 'lines' is never reassigned. Use 'const' instead.
- [Line 121](../src/features/reports/report-generator.ts#L121) - @typescript-eslint/no-unused-vars: 'content' is assigned a value but never used.

### [src/features/reports/report-viewer.ts](../src/features/reports/report-viewer.ts) (2)

- [Line 39](../src/features/reports/report-viewer.ts#L39) - @typescript-eslint/no-unused-vars: 'reportTitle' is assigned a value but never used.
- [Line 79](../src/features/reports/report-viewer.ts#L79) - prefer-const: 'div' is never reassigned. Use 'const' instead.

### [src/features/reviews/review-form.ts](../src/features/reviews/review-form.ts) (2)

- [Line 62](../src/features/reviews/review-form.ts#L62) - @typescript-eslint/no-unused-vars: 'fieldName' is assigned a value but never used.
- [Line 125](../src/features/reviews/review-form.ts#L125) - prefer-const: 'div' is never reassigned. Use 'const' instead.

### [src/features/reviews/review-list.ts](../src/features/reviews/review-list.ts) (2)

- [Line 37](../src/features/reviews/review-list.ts#L37) - @typescript-eslint/no-unused-vars: 'product' is assigned a value but never used.
- [Line 72](../src/features/reviews/review-list.ts#L72) - prefer-const: 'wrapper' is never reassigned. Use 'const' instead.

### [src/features/search/search-component.ts](../src/features/search/search-component.ts) (3)

- [Line 4](../src/features/search/search-component.ts#L4) - @typescript-eslint/no-unused-vars: 'Input' is defined but never used.
- [Line 42](../src/features/search/search-component.ts#L42) - @typescript-eslint/no-unused-vars: 'placeholder' is assigned a value but never used.
- [Line 84](../src/features/search/search-component.ts#L84) - prefer-const: 'div' is never reassigned. Use 'const' instead.

### [src/features/search/search-service.ts](../src/features/search/search-service.ts) (4)

- [Line 44](../src/features/search/search-service.ts#L44) - @typescript-eslint/no-unused-vars: 'query' is assigned a value but never used.
- [Line 45](../src/features/search/search-service.ts#L45) - @typescript-eslint/no-unused-vars: 'categoryFilter' is assigned a value but never used.
- [Line 86](../src/features/search/search-service.ts#L86) - prefer-const: 'sorted' is never reassigned. Use 'const' instead.
- [Line 169](../src/features/search/search-service.ts#L169) - @typescript-eslint/no-unused-vars: 'limit' is assigned a value but never used.

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

### [src/hooks/use-form.ts](../src/hooks/use-form.ts) (3)

- [Line 52](../src/hooks/use-form.ts#L52) - @typescript-eslint/no-unused-vars: 'fieldName' is assigned a value but never used.
- [Line 53](../src/hooks/use-form.ts#L53) - @typescript-eslint/no-unused-vars: 'isDirty' is assigned a value but never used.
- [Line 80](../src/hooks/use-form.ts#L80) - prefer-const: 'touchedState' is never reassigned. Use 'const' instead.

### [src/hooks/use-local-storage.ts](../src/hooks/use-local-storage.ts) (5)

- [Line 16](../src/hooks/use-local-storage.ts#L16) - @typescript-eslint/no-unused-vars: 'error' is defined but never used.
- [Line 23](../src/hooks/use-local-storage.ts#L23) - @typescript-eslint/no-unused-vars: 'oldValue' is assigned a value but never used.
- [Line 24](../src/hooks/use-local-storage.ts#L24) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 46](../src/hooks/use-local-storage.ts#L46) - prefer-const: 'key' is never reassigned. Use 'const' instead.
- [Line 46](../src/hooks/use-local-storage.ts#L46) - @typescript-eslint/no-unused-vars: 'key' is assigned a value but never used.

### [src/hooks/use-media-query.ts](../src/hooks/use-media-query.ts) (2)

- [Line 52](../src/hooks/use-media-query.ts#L52) - @typescript-eslint/no-unused-vars: 'width' is assigned a value but never used.
- [Line 76](../src/hooks/use-media-query.ts#L76) - prefer-const: 'breakpoint' is never reassigned. Use 'const' instead.

### [src/hooks/use-pagination.ts](../src/hooks/use-pagination.ts) (3)

- [Line 39](../src/hooks/use-pagination.ts#L39) - @typescript-eslint/no-unused-vars: 'currentPage' is assigned a value but never used.
- [Line 56](../src/hooks/use-pagination.ts#L56) - prefer-const: 'totalPages' is never reassigned. Use 'const' instead.
- [Line 113](../src/hooks/use-pagination.ts#L113) - prefer-const: 'end' is never reassigned. Use 'const' instead.

### [src/hooks/use-state.ts](../src/hooks/use-state.ts) (3)

- [Line 22](../src/hooks/use-state.ts#L22) - @typescript-eslint/no-unused-vars: 'oldValue' is assigned a value but never used.
- [Line 23](../src/hooks/use-state.ts#L23) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 48](../src/hooks/use-state.ts#L48) - prefer-const: 'value' is never reassigned. Use 'const' instead.

### [src/hooks/use-theme.ts](../src/hooks/use-theme.ts) (2)

- [Line 34](../src/hooks/use-theme.ts#L34) - @typescript-eslint/no-unused-vars: 'currentTheme' is assigned a value but never used.
- [Line 35](../src/hooks/use-theme.ts#L35) - @typescript-eslint/no-unused-vars: 'isDark' is assigned a value but never used.

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

### [src/integrations/admin-integration.ts](../src/integrations/admin-integration.ts) (2)

- [Line 45](../src/integrations/admin-integration.ts#L45) - @typescript-eslint/no-unused-vars: 'adminUser' is assigned a value but never used.
- [Line 85](../src/integrations/admin-integration.ts#L85) - prefer-const: 'hasAccess' is never reassigned. Use 'const' instead.

### [src/integrations/checkout-integration.ts](../src/integrations/checkout-integration.ts) (3)

- [Line 5](../src/integrations/checkout-integration.ts#L5) - @typescript-eslint/no-unused-vars: 'orderService' is defined but never used.
- [Line 80](../src/integrations/checkout-integration.ts#L80) - @typescript-eslint/no-unused-vars: 'itemCount' is assigned a value but never used.
- [Line 121](../src/integrations/checkout-integration.ts#L121) - prefer-const: 'reservations' is never reassigned. Use 'const' instead.

### [src/integrations/dashboard-integration.ts](../src/integrations/dashboard-integration.ts) (8)

- [Line 6](../src/integrations/dashboard-integration.ts#L6) - @typescript-eslint/no-unused-vars: 'Card' is defined but never used.
- [Line 7](../src/integrations/dashboard-integration.ts#L7) - @typescript-eslint/no-unused-vars: 'Table' is defined but never used.
- [Line 39](../src/integrations/dashboard-integration.ts#L39) - @typescript-eslint/no-unused-vars: 'metrics' is assigned a value but never used.
- [Line 56](../src/integrations/dashboard-integration.ts#L56) - @typescript-eslint/no-unused-vars: 'userId' is defined but never used.
- [Line 60](../src/integrations/dashboard-integration.ts#L60) - @typescript-eslint/no-unused-vars: 'dateRange' is assigned a value but never used.
- [Line 87](../src/integrations/dashboard-integration.ts#L87) - prefer-const: 'data' is never reassigned. Use 'const' instead.
- [Line 96](../src/integrations/dashboard-integration.ts#L96) - @typescript-eslint/no-unused-vars: 'report' is assigned a value but never used.
- [Line 128](../src/integrations/dashboard-integration.ts#L128) - @typescript-eslint/no-unused-vars: 'widgetName' is defined but never used.

### [src/integrations/reporting-integration.ts](../src/integrations/reporting-integration.ts) (7)

- [Line 4](../src/integrations/reporting-integration.ts#L4) - @typescript-eslint/no-unused-vars: 'reportViewer' is defined but never used.
- [Line 6](../src/integrations/reporting-integration.ts#L6) - @typescript-eslint/no-unused-vars: 'Order' is defined but never used.
- [Line 79](../src/integrations/reporting-integration.ts#L79) - @typescript-eslint/no-unused-vars: 'filename' is defined but never used.
- [Line 81](../src/integrations/reporting-integration.ts#L81) - @typescript-eslint/no-unused-vars: 'reportData' is assigned a value but never used.
- [Line 82](../src/integrations/reporting-integration.ts#L82) - @typescript-eslint/no-unused-vars: 'exportFormat' is assigned a value but never used.
- [Line 125](../src/integrations/reporting-integration.ts#L125) - prefer-const: 'nextRun' is never reassigned. Use 'const' instead.
- [Line 143](../src/integrations/reporting-integration.ts#L143) - @typescript-eslint/no-unused-vars: 'limit' is assigned a value but never used.

### [src/models/address.ts](../src/models/address.ts) (6)

- [Line 136](../src/models/address.ts#L136) - no-useless-escape: Unnecessary escape character: \(.
- [Line 136](../src/models/address.ts#L136) - no-useless-escape: Unnecessary escape character: \).
- [Line 136](../src/models/address.ts#L136) - no-useless-escape: Unnecessary escape character: \+.
- [Line 177](../src/models/address.ts#L177) - @typescript-eslint/no-unused-vars: 'address' is defined but never used.
- [Line 183](../src/models/address.ts#L183) - @typescript-eslint/no-unused-vars: 'addr1' is defined but never used.
- [Line 184](../src/models/address.ts#L184) - @typescript-eslint/no-unused-vars: 'addr2' is defined but never used.

### [src/models/analytics.ts](../src/models/analytics.ts) (3)

- [Line 54](../src/models/analytics.ts#L54) - @typescript-eslint/no-unused-vars: 'totalSessions' is assigned a value but never used.
- [Line 55](../src/models/analytics.ts#L55) - @typescript-eslint/no-unused-vars: 'singlePageSessions' is assigned a value but never used.
- [Line 63](../src/models/analytics.ts#L63) - prefer-const: 'pageViews' is never reassigned. Use 'const' instead.

### [src/models/category.ts](../src/models/category.ts) (3)

- [Line 53](../src/models/category.ts#L53) - @typescript-eslint/no-unused-vars: 'separator' is assigned a value but never used.
- [Line 54](../src/models/category.ts#L54) - @typescript-eslint/no-unused-vars: 'level' is assigned a value but never used.
- [Line 63](../src/models/category.ts#L63) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/comment.ts](../src/models/comment.ts) (3)

- [Line 2](../src/models/comment.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 59](../src/models/comment.ts#L59) - @typescript-eslint/no-unused-vars: 'parentComment' is assigned a value but never used.
- [Line 75](../src/models/comment.ts#L75) - prefer-const: 'rootComments' is never reassigned. Use 'const' instead.

### [src/models/dashboard.ts](../src/models/dashboard.ts) (3)

- [Line 57](../src/models/dashboard.ts#L57) - @typescript-eslint/no-unused-vars: 'userCount' is assigned a value but never used.
- [Line 58](../src/models/dashboard.ts#L58) - @typescript-eslint/no-unused-vars: 'revenue' is assigned a value but never used.
- [Line 67](../src/models/dashboard.ts#L67) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/invoice.ts](../src/models/invoice.ts) (3)

- [Line 66](../src/models/invoice.ts#L66) - @typescript-eslint/no-unused-vars: 'isPastDue' is assigned a value but never used.
- [Line 72](../src/models/invoice.ts#L72) - prefer-const: 'timestamp' is never reassigned. Use 'const' instead.
- [Line 72](../src/models/invoice.ts#L72) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.

### [src/models/notification.ts](../src/models/notification.ts) (2)

- [Line 58](../src/models/notification.ts#L58) - @typescript-eslint/no-unused-vars: 'priority' is assigned a value but never used.
- [Line 64](../src/models/notification.ts#L64) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/order.ts](../src/models/order.ts) (3)

- [Line 60](../src/models/order.ts#L60) - @typescript-eslint/no-unused-vars: 'hasItems' is assigned a value but never used.
- [Line 61](../src/models/order.ts#L61) - @typescript-eslint/no-unused-vars: 'hasUser' is assigned a value but never used.
- [Line 67](../src/models/order.ts#L67) - prefer-const: 'updated' is never reassigned. Use 'const' instead.

### [src/models/payment.ts](../src/models/payment.ts) (2)

- [Line 73](../src/models/payment.ts#L73) - @typescript-eslint/no-unused-vars: 'paymentStatus' is assigned a value but never used.
- [Line 80](../src/models/payment.ts#L80) - prefer-const: 'updatedPayment' is never reassigned. Use 'const' instead.

### [src/models/permission.ts](../src/models/permission.ts) (2)

- [Line 74](../src/models/permission.ts#L74) - @typescript-eslint/no-unused-vars: 'isValidAction' is assigned a value but never used.
- [Line 90](../src/models/permission.ts#L90) - prefer-const: 'grouped' is never reassigned. Use 'const' instead.

### [src/models/product.ts](../src/models/product.ts) (4)

- [Line 60](../src/models/product.ts#L60) - @typescript-eslint/no-unused-vars: 'categoryName' is assigned a value but never used.
- [Line 61](../src/models/product.ts#L61) - @typescript-eslint/no-unused-vars: 'tagCount' is assigned a value but never used.
- [Line 70](../src/models/product.ts#L70) - prefer-const: 'updated' is never reassigned. Use 'const' instead.
- [Line 103](../src/models/product.ts#L103) - @typescript-eslint/no-unused-vars: 'products' is defined but never used.

### [src/models/review.ts](../src/models/review.ts) (3)

- [Line 2](../src/models/review.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 58](../src/models/review.ts#L58) - @typescript-eslint/no-unused-vars: 'count' is assigned a value but never used.
- [Line 71](../src/models/review.ts#L71) - prefer-const: 'distribution' is never reassigned. Use 'const' instead.

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

### [src/models/shipment.ts](../src/models/shipment.ts) (2)

- [Line 86](../src/models/shipment.ts#L86) - @typescript-eslint/no-unused-vars: 'totalSteps' is assigned a value but never used.
- [Line 96](../src/models/shipment.ts#L96) - prefer-const: 'updatedShipment' is never reassigned. Use 'const' instead.

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

### [src/services/inventory-service.ts](../src/services/inventory-service.ts) (2)

- [Line 40](../src/services/inventory-service.ts#L40) - @typescript-eslint/no-unused-vars: 'productSku' is assigned a value but never used.
- [Line 74](../src/services/inventory-service.ts#L74) - prefer-const: 'item' is never reassigned. Use 'const' instead.

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

### [src/services/payment-service.ts](../src/services/payment-service.ts) (9)

- [Line 2](../src/services/payment-service.ts#L2) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 3](../src/services/payment-service.ts#L3) - @typescript-eslint/no-unused-vars: 'Order' is defined but never used.
- [Line 64](../src/services/payment-service.ts#L64) - @typescript-eslint/no-unused-vars: 'paymentId' is assigned a value but never used.
- [Line 65](../src/services/payment-service.ts#L65) - @typescript-eslint/no-unused-vars: 'startTime' is assigned a value but never used.
- [Line 79](../src/services/payment-service.ts#L79) - @typescript-eslint/no-unused-vars: 'transactionId' is defined but never used.
- [Line 80](../src/services/payment-service.ts#L80) - prefer-const: 'captured' is never reassigned. Use 'const' instead.
- [Line 94](../src/services/payment-service.ts#L94) - @typescript-eslint/no-unused-vars: 'transactionId' is defined but never used.
- [Line 94](../src/services/payment-service.ts#L94) - @typescript-eslint/no-unused-vars: 'amount' is defined but never used.
- [Line 155](../src/services/payment-service.ts#L155) - @typescript-eslint/no-unused-vars: 'userId' is defined but never used.

### [src/services/product-service.ts](../src/services/product-service.ts) (5)

- [Line 3](../src/services/product-service.ts#L3) - @typescript-eslint/no-unused-vars: 'Category' is defined but never used.
- [Line 29](../src/services/product-service.ts#L29) - @typescript-eslint/no-unused-vars: 'originalPrice' is assigned a value but never used.
- [Line 50](../src/services/product-service.ts#L50) - prefer-const: 'updateData' is never reassigned. Use 'const' instead.
- [Line 80](../src/services/product-service.ts#L80) - @typescript-eslint/no-unused-vars: 'lowerQuery' is assigned a value but never used.
- [Line 81](../src/services/product-service.ts#L81) - @typescript-eslint/no-unused-vars: 'searchTimestamp' is assigned a value but never used.

### [src/services/reporting-service.ts](../src/services/reporting-service.ts) (6)

- [Line 3](../src/services/reporting-service.ts#L3) - @typescript-eslint/no-unused-vars: 'User' is defined but never used.
- [Line 48](../src/services/reporting-service.ts#L48) - @typescript-eslint/no-unused-vars: 'orderCount' is assigned a value but never used.
- [Line 77](../src/services/reporting-service.ts#L77) - prefer-const: 'dataMap' is never reassigned. Use 'const' instead.
- [Line 109](../src/services/reporting-service.ts#L109) - @typescript-eslint/no-unused-vars: 'startDate' is defined but never used.
- [Line 109](../src/services/reporting-service.ts#L109) - @typescript-eslint/no-unused-vars: 'endDate' is defined but never used.
- [Line 114](../src/services/reporting-service.ts#L114) - @typescript-eslint/no-unused-vars: 'userId' is defined but never used.

### [src/services/shipping-service.ts](../src/services/shipping-service.ts) (7)

- [Line 45](../src/services/shipping-service.ts#L45) - @typescript-eslint/no-unused-vars: 'itemCount' is assigned a value but never used.
- [Line 66](../src/services/shipping-service.ts#L66) - @typescript-eslint/no-unused-vars: 'weight' is defined but never used.
- [Line 67](../src/services/shipping-service.ts#L67) - @typescript-eslint/no-unused-vars: 'dimensions' is defined but never used.
- [Line 68](../src/services/shipping-service.ts#L68) - @typescript-eslint/no-unused-vars: 'destination' is defined but never used.
- [Line 70](../src/services/shipping-service.ts#L70) - prefer-const: 'rates' is never reassigned. Use 'const' instead.
- [Line 147](../src/services/shipping-service.ts#L147) - @typescript-eslint/no-unused-vars: 'shipmentId' is defined but never used.
- [Line 148](../src/services/shipping-service.ts#L148) - @typescript-eslint/no-unused-vars: 'status' is defined but never used.

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

### [src/utils/color-utils.ts](../src/utils/color-utils.ts) (2)

- [Line 35](../src/utils/color-utils.ts#L35) - @typescript-eslint/no-unused-vars: 'red' is assigned a value but never used.
- [Line 82](../src/utils/color-utils.ts#L82) - prefer-const: 'h' is never reassigned. Use 'const' instead.

### [src/utils/crypto-utils.ts](../src/utils/crypto-utils.ts) (1)

- [Line 50](../src/utils/crypto-utils.ts#L50) - prefer-const: 'passwordHash' is never reassigned. Use 'const' instead.

### [src/utils/date-utils.ts](../src/utils/date-utils.ts) (2)

- [Line 18](../src/utils/date-utils.ts#L18) - @typescript-eslint/no-unused-vars: 'millisecondsPerDay' is assigned a value but never used.
- [Line 39](../src/utils/date-utils.ts#L39) - prefer-const: 'diff' is never reassigned. Use 'const' instead.

### [src/utils/event-emitter.ts](../src/utils/event-emitter.ts) (2)

- [Line 39](../src/utils/event-emitter.ts#L39) - @typescript-eslint/no-unused-vars: 'timestamp' is assigned a value but never used.
- [Line 51](../src/utils/event-emitter.ts#L51) - prefer-const: 'wrappedHandler' is never reassigned. Use 'const' instead.

### [src/utils/file-utils.ts](../src/utils/file-utils.ts) (2)

- [Line 31](../src/utils/file-utils.ts#L31) - @typescript-eslint/no-unused-vars: 'baseName' is assigned a value but never used.
- [Line 67](../src/utils/file-utils.ts#L67) - prefer-const: 'units' is never reassigned. Use 'const' instead.

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

### [src/utils/url-utils.ts](../src/utils/url-utils.ts) (3)

- [Line 7](../src/utils/url-utils.ts#L7) - @typescript-eslint/no-unused-vars: 'error' is defined but never used.
- [Line 15](../src/utils/url-utils.ts#L15) - @typescript-eslint/no-unused-vars: 'paramValue' is assigned a value but never used.
- [Line 45](../src/utils/url-utils.ts#L45) - prefer-const: 'urlObj' is never reassigned. Use 'const' instead.

### [src/utils/validation-utils.ts](../src/utils/validation-utils.ts) (6)

- [Line 11](../src/utils/validation-utils.ts#L11) - @typescript-eslint/no-unused-vars: 'protocol' is assigned a value but never used.
- [Line 39](../src/utils/validation-utils.ts#L39) - prefer-const: 'phoneRegex' is never reassigned. Use 'const' instead.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \+.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \(.
- [Line 39](../src/utils/validation-utils.ts#L39) - no-useless-escape: Unnecessary escape character: \).
- [Line 81](../src/utils/validation-utils.ts#L81) - @typescript-eslint/no-unused-vars: 'typeCheck' is assigned a value but never used.

## typescript > noImplicitAny (611 issues)

### [src/api/analytics-api.ts](../src/api/analytics-api.ts) (12)

- [Line 22](../src/api/analytics-api.ts#L22) - TS7006: Parameter 'eventName' implicitly has an 'any' type.
- [Line 40](../src/api/analytics-api.ts#L40) - TS2554: Expected 1 arguments, but got 2.
- [Line 44](../src/api/analytics-api.ts#L44) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 45](../src/api/analytics-api.ts#L45) - TS2554: Expected 1 arguments, but got 2.
- [Line 50](../src/api/analytics-api.ts#L50) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;number&#91;&#93;&gt;'.
  Type 'unknown' is not assignable to type 'number&#91;&#93;'.
- [Line 70](../src/api/analytics-api.ts#L70) - TS2554: Expected 1 arguments, but got 2.
- [Line 73](../src/api/analytics-api.ts#L73) - TS2322: Type 'ApiResponse&lt;number&gt;' is not assignable to type 'string'.
- [Line 77](../src/api/analytics-api.ts#L77) - TS2554: Expected 1 arguments, but got 2.
- [Line 84](../src/api/analytics-api.ts#L84) - TS2554: Expected 1 arguments, but got 2.
- [Line 98](../src/api/analytics-api.ts#L98) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;void&gt;'.
  Type 'unknown' is not assignable to type 'void'.
- [Line 106](../src/api/analytics-api.ts#L106) - TS2554: Expected 1 arguments, but got 2.
- [Line 116](../src/api/analytics-api.ts#L116) - TS2554: Expected 1 arguments, but got 2.

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

### [src/api/notification-api.ts](../src/api/notification-api.ts) (7)

- [Line 23](../src/api/notification-api.ts#L23) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 24](../src/api/notification-api.ts#L24) - TS2554: Expected 1 arguments, but got 2.
- [Line 36](../src/api/notification-api.ts#L36) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;number&gt;'.
  Type 'unknown' is not assignable to type 'number'.
- [Line 40](../src/api/notification-api.ts#L40) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 41](../src/api/notification-api.ts#L41) - TS2554: Expected 2 arguments, but got 1.
- [Line 46](../src/api/notification-api.ts#L46) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;void&gt;'.
  Type 'unknown' is not assignable to type 'void'.
- [Line 64](../src/api/notification-api.ts#L64) - TS2322: Type 'ApiResponse&lt;void&gt;' is not assignable to type 'number'.

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

### [src/api/settings-api.ts](../src/api/settings-api.ts) (6)

- [Line 29](../src/api/settings-api.ts#L29) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 41](../src/api/settings-api.ts#L41) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;UserSettings&gt;'.
  Type 'unknown' is not assignable to type 'UserSettings'.
- [Line 45](../src/api/settings-api.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 49](../src/api/settings-api.ts#L49) - TS2322: Type 'ApiResponse&lt;unknown&gt;' is not assignable to type 'ApiResponse&lt;string&gt;'.
  Type 'unknown' is not assignable to type 'string'.
- [Line 70](../src/api/settings-api.ts#L70) - TS2322: Type 'ApiResponse&lt;NotificationSettings&gt;' is not assignable to type 'number'.
- [Line 94](../src/api/settings-api.ts#L94) - TS2554: Expected 2 arguments, but got 1.

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

### [src/components/breadcrumb.ts](../src/components/breadcrumb.ts) (12)

- [Line 24](../src/components/breadcrumb.ts#L24) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 25](../src/components/breadcrumb.ts#L25) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 29](../src/components/breadcrumb.ts#L29) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 47](../src/components/breadcrumb.ts#L47) - TS2304: Cannot find name 'HTMLElement'.
- [Line 48](../src/components/breadcrumb.ts#L48) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 53](../src/components/breadcrumb.ts#L53) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 58](../src/components/breadcrumb.ts#L58) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 61](../src/components/breadcrumb.ts#L61) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 72](../src/components/breadcrumb.ts#L72) - TS2304: Cannot find name 'HTMLElement'.
- [Line 73](../src/components/breadcrumb.ts#L73) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 92](../src/components/breadcrumb.ts#L92) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 107](../src/components/breadcrumb.ts#L107) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: BreadcrumbItem, index: number, obj: BreadcrumbItem&#91;&#93;) =&gt; value is T, thisArg?: any): T | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: BreadcrumbItem, index: number, obj: BreadcrumbItem&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'BreadcrumbItem' is not assignable to type 'T'.
          'BreadcrumbItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'BreadcrumbItem'.
  Overload 2 of 2, '(predicate: (value: BreadcrumbItem, index: number, obj: BreadcrumbItem&#91;&#93;) =&gt; unknown, thisArg?: any): BreadcrumbItem | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: BreadcrumbItem, index: number, obj: BreadcrumbItem&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'BreadcrumbItem' is not assignable to type 'T'.
          'BreadcrumbItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'BreadcrumbItem'.

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

### [src/components/footer.ts](../src/components/footer.ts) (13)

- [Line 29](../src/components/footer.ts#L29) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 30](../src/components/footer.ts#L30) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 33](../src/components/footer.ts#L33) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 50](../src/components/footer.ts#L50) - TS2304: Cannot find name 'HTMLElement'.
- [Line 51](../src/components/footer.ts#L51) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 55](../src/components/footer.ts#L55) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 59](../src/components/footer.ts#L59) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 61](../src/components/footer.ts#L61) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 62](../src/components/footer.ts#L62) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 80](../src/components/footer.ts#L80) - TS2304: Cannot find name 'HTMLElement'.
- [Line 81](../src/components/footer.ts#L81) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 106](../src/components/footer.ts#L106) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 125](../src/components/footer.ts#L125) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: FooterLink, index: number, array: FooterLink&#91;&#93;) =&gt; value is T, thisArg?: any): T&#91;&#93;', gave the following error.
    Argument of type '(link: T) =&gt; boolean' is not assignable to parameter of type '(value: FooterLink, index: number, array: FooterLink&#91;&#93;) =&gt; value is T'.
      Types of parameters 'link' and 'value' are incompatible.
        Type 'FooterLink' is not assignable to type 'T'.
          'FooterLink' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'FooterLink'.
  Overload 2 of 2, '(predicate: (value: FooterLink, index: number, array: FooterLink&#91;&#93;) =&gt; unknown, thisArg?: any): FooterLink&#91;&#93;', gave the following error.
    Argument of type '(link: T) =&gt; boolean' is not assignable to parameter of type '(value: FooterLink, index: number, array: FooterLink&#91;&#93;) =&gt; unknown'.
      Types of parameters 'link' and 'value' are incompatible.
        Type 'FooterLink' is not assignable to type 'T'.
          'FooterLink' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'FooterLink'.

### [src/components/form.ts](../src/components/form.ts) (7)

- [Line 20](../src/components/form.ts#L20) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 21](../src/components/form.ts#L21) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 33](../src/components/form.ts#L33) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 42](../src/components/form.ts#L42) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 82](../src/components/form.ts#L82) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 83](../src/components/form.ts#L83) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 94](../src/components/form.ts#L94) - TS7006: Parameter 'field' implicitly has an 'any' type.

### [src/components/header.ts](../src/components/header.ts) (17)

- [Line 30](../src/components/header.ts#L30) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 31](../src/components/header.ts#L31) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 49](../src/components/header.ts#L49) - TS2304: Cannot find name 'HTMLElement'.
- [Line 50](../src/components/header.ts#L50) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 54](../src/components/header.ts#L54) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 58](../src/components/header.ts#L58) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 68](../src/components/header.ts#L68) - TS2304: Cannot find name 'HTMLElement'.
- [Line 69](../src/components/header.ts#L69) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 73](../src/components/header.ts#L73) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 87](../src/components/header.ts#L87) - TS2304: Cannot find name 'HTMLElement'.
- [Line 88](../src/components/header.ts#L88) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 91](../src/components/header.ts#L91) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 108](../src/components/header.ts#L108) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 123](../src/components/header.ts#L123) - TS2304: Cannot find name 'HTMLElement'.
- [Line 124](../src/components/header.ts#L124) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 134](../src/components/header.ts#L134) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 147](../src/components/header.ts#L147) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: HeaderMenuItem, index: number, obj: HeaderMenuItem&#91;&#93;) =&gt; value is T, thisArg?: any): T | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: HeaderMenuItem, index: number, obj: HeaderMenuItem&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'HeaderMenuItem' is not assignable to type 'T'.
          'HeaderMenuItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'HeaderMenuItem'.
  Overload 2 of 2, '(predicate: (value: HeaderMenuItem, index: number, obj: HeaderMenuItem&#91;&#93;) =&gt; unknown, thisArg?: any): HeaderMenuItem | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: HeaderMenuItem, index: number, obj: HeaderMenuItem&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'HeaderMenuItem' is not assignable to type 'T'.
          'HeaderMenuItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'HeaderMenuItem'.

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

### [src/components/navigation.ts](../src/components/navigation.ts) (9)

- [Line 31](../src/components/navigation.ts#L31) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 32](../src/components/navigation.ts#L32) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/components/navigation.ts#L44) - TS2304: Cannot find name 'HTMLElement'.
- [Line 45](../src/components/navigation.ts#L45) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 52](../src/components/navigation.ts#L52) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 55](../src/components/navigation.ts#L55) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 63](../src/components/navigation.ts#L63) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 95](../src/components/navigation.ts#L95) - TS2322: Type 'NavigationItem | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
- [Line 111](../src/components/navigation.ts#L111) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: NavigationItem, index: number, obj: NavigationItem&#91;&#93;) =&gt; value is T, thisArg?: any): T | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: NavigationItem, index: number, obj: NavigationItem&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'NavigationItem' is not assignable to type 'T'.
          'NavigationItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'NavigationItem'.
  Overload 2 of 2, '(predicate: (value: NavigationItem, index: number, obj: NavigationItem&#91;&#93;) =&gt; unknown, thisArg?: any): NavigationItem | undefined', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: NavigationItem, index: number, obj: NavigationItem&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'NavigationItem' is not assignable to type 'T'.
          'NavigationItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'NavigationItem'.

### [src/components/popover.ts](../src/components/popover.ts) (16)

- [Line 7](../src/components/popover.ts#L7) - TS2304: Cannot find name 'HTMLElement'.
- [Line 17](../src/components/popover.ts#L17) - TS2304: Cannot find name 'HTMLElement'.
- [Line 18](../src/components/popover.ts#L18) - TS2304: Cannot find name 'HTMLElement'.
- [Line 25](../src/components/popover.ts#L25) - TS7006: Parameter 'targetElement' implicitly has an 'any' type.
- [Line 43](../src/components/popover.ts#L43) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 43](../src/components/popover.ts#L43) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 56](../src/components/popover.ts#L56) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 68](../src/components/popover.ts#L68) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 86](../src/components/popover.ts#L86) - TS2304: Cannot find name 'HTMLElement'.
- [Line 87](../src/components/popover.ts#L87) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 91](../src/components/popover.ts#L91) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 97](../src/components/popover.ts#L97) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 149](../src/components/popover.ts#L149) - TS2304: Cannot find name 'Node'.
- [Line 150](../src/components/popover.ts#L150) - TS2304: Cannot find name 'Node'.
- [Line 159](../src/components/popover.ts#L159) - TS2322: Type 'string' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.
- [Line 162](../src/components/popover.ts#L162) - TS2304: Cannot find name 'HTMLElement'.

### [src/components/sidebar.ts](../src/components/sidebar.ts) (9)

- [Line 34](../src/components/sidebar.ts#L34) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 35](../src/components/sidebar.ts#L35) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 48](../src/components/sidebar.ts#L48) - TS2304: Cannot find name 'HTMLElement'.
- [Line 49](../src/components/sidebar.ts#L49) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 53](../src/components/sidebar.ts#L53) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 63](../src/components/sidebar.ts#L63) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 65](../src/components/sidebar.ts#L65) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 95](../src/components/sidebar.ts#L95) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 114](../src/components/sidebar.ts#L114) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: SidebarSection, index: number, obj: SidebarSection&#91;&#93;) =&gt; value is T, thisArg?: any): T | undefined', gave the following error.
    Argument of type '(section: T) =&gt; boolean' is not assignable to parameter of type '(value: SidebarSection, index: number, obj: SidebarSection&#91;&#93;) =&gt; value is T'.
      Types of parameters 'section' and 'value' are incompatible.
        Type 'SidebarSection' is not assignable to type 'T'.
          'SidebarSection' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'SidebarSection'.
  Overload 2 of 2, '(predicate: (value: SidebarSection, index: number, obj: SidebarSection&#91;&#93;) =&gt; unknown, thisArg?: any): SidebarSection | undefined', gave the following error.
    Argument of type '(section: T) =&gt; boolean' is not assignable to parameter of type '(value: SidebarSection, index: number, obj: SidebarSection&#91;&#93;) =&gt; unknown'.
      Types of parameters 'section' and 'value' are incompatible.
        Type 'SidebarSection' is not assignable to type 'T'.
          'SidebarSection' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'SidebarSection'.

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

### [src/components/tooltip.ts](../src/components/tooltip.ts) (11)

- [Line 19](../src/components/tooltip.ts#L19) - TS2304: Cannot find name 'HTMLElement'.
- [Line 27](../src/components/tooltip.ts#L27) - TS7006: Parameter 'targetElement' implicitly has an 'any' type.
- [Line 32](../src/components/tooltip.ts#L32) - TS2304: Cannot find name 'window'.
- [Line 35](../src/components/tooltip.ts#L35) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 52](../src/components/tooltip.ts#L52) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 60](../src/components/tooltip.ts#L60) - TS2304: Cannot find name 'HTMLElement'.
- [Line 61](../src/components/tooltip.ts#L61) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 72](../src/components/tooltip.ts#L72) - TS2304: Cannot find name 'HTMLElement'.
- [Line 103](../src/components/tooltip.ts#L103) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 121](../src/components/tooltip.ts#L121) - TS2304: Cannot find name 'HTMLElement'.
- [Line 125](../src/components/tooltip.ts#L125) - TS2304: Cannot find name 'HTMLElement'.

### [src/features/admin/admin-dashboard.ts](../src/features/admin/admin-dashboard.ts) (3)

- [Line 32](../src/features/admin/admin-dashboard.ts#L32) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 82](../src/features/admin/admin-dashboard.ts#L82) - TS2304: Cannot find name 'window'.
- [Line 93](../src/features/admin/admin-dashboard.ts#L93) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/features/admin/user-management.ts](../src/features/admin/user-management.ts) (5)

- [Line 27](../src/features/admin/user-management.ts#L27) - TS7006: Parameter 'filters' implicitly has an 'any' type.
- [Line 31](../src/features/admin/user-management.ts#L31) - TS2339: Property 'getAllUsers' does not exist on type 'UserService'.
- [Line 70](../src/features/admin/user-management.ts#L70) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 83](../src/features/admin/user-management.ts#L83) - TS2339: Property 'updateUser' does not exist on type 'UserService'.
- [Line 102](../src/features/admin/user-management.ts#L102) - TS2322: Type 'boolean' is not assignable to type 'number'.

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

### [src/features/reports/report-generator.ts](../src/features/reports/report-generator.ts) (3)

- [Line 13](../src/features/reports/report-generator.ts#L13) - TS7006: Parameter 'options' implicitly has an 'any' type.
- [Line 37](../src/features/reports/report-generator.ts#L37) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 66](../src/features/reports/report-generator.ts#L66) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/features/reports/report-viewer.ts](../src/features/reports/report-viewer.ts) (25)

- [Line 20](../src/features/reports/report-viewer.ts#L20) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 21](../src/features/reports/report-viewer.ts#L21) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 36](../src/features/reports/report-viewer.ts#L36) - TS2304: Cannot find name 'HTMLElement'.
- [Line 37](../src/features/reports/report-viewer.ts#L37) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 41](../src/features/reports/report-viewer.ts#L41) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/features/reports/report-viewer.ts#L44) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 54](../src/features/reports/report-viewer.ts#L54) - TS2304: Cannot find name 'HTMLElement'.
- [Line 55](../src/features/reports/report-viewer.ts#L55) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 65](../src/features/reports/report-viewer.ts#L65) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 78](../src/features/reports/report-viewer.ts#L78) - TS2304: Cannot find name 'HTMLElement'.
- [Line 79](../src/features/reports/report-viewer.ts#L79) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 99](../src/features/reports/report-viewer.ts#L99) - TS2304: Cannot find name 'HTMLElement'.
- [Line 99](../src/features/reports/report-viewer.ts#L99) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 102](../src/features/reports/report-viewer.ts#L102) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 106](../src/features/reports/report-viewer.ts#L106) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 109](../src/features/reports/report-viewer.ts#L109) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 112](../src/features/reports/report-viewer.ts#L112) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 125](../src/features/reports/report-viewer.ts#L125) - TS2304: Cannot find name 'HTMLElement'.
- [Line 126](../src/features/reports/report-viewer.ts#L126) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 132](../src/features/reports/report-viewer.ts#L132) - TS2304: Cannot find name 'HTMLElement'.
- [Line 133](../src/features/reports/report-viewer.ts#L133) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 142](../src/features/reports/report-viewer.ts#L142) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 145](../src/features/reports/report-viewer.ts#L145) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 188](../src/features/reports/report-viewer.ts#L188) - TS2304: Cannot find name 'window'.
- [Line 189](../src/features/reports/report-viewer.ts#L189) - TS2304: Cannot find name 'window'.

### [src/features/reviews/review-form.ts](../src/features/reviews/review-form.ts) (27)

- [Line 36](../src/features/reviews/review-form.ts#L36) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 37](../src/features/reviews/review-form.ts#L37) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 50](../src/features/reviews/review-form.ts#L50) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 59](../src/features/reviews/review-form.ts#L59) - TS2304: Cannot find name 'HTMLElement'.
- [Line 60](../src/features/reviews/review-form.ts#L60) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 64](../src/features/reviews/review-form.ts#L64) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 67](../src/features/reviews/review-form.ts#L67) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 71](../src/features/reviews/review-form.ts#L71) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 84](../src/features/reviews/review-form.ts#L84) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 94](../src/features/reviews/review-form.ts#L94) - TS2304: Cannot find name 'HTMLElement'.
- [Line 95](../src/features/reviews/review-form.ts#L95) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 98](../src/features/reviews/review-form.ts#L98) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 101](../src/features/reviews/review-form.ts#L101) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 104](../src/features/reviews/review-form.ts#L104) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 105](../src/features/reviews/review-form.ts#L105) - TS2304: Cannot find name 'HTMLInputElement'.
- [Line 114](../src/features/reviews/review-form.ts#L114) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 124](../src/features/reviews/review-form.ts#L124) - TS2304: Cannot find name 'HTMLElement'.
- [Line 125](../src/features/reviews/review-form.ts#L125) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 128](../src/features/reviews/review-form.ts#L128) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 131](../src/features/reviews/review-form.ts#L131) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 134](../src/features/reviews/review-form.ts#L134) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 135](../src/features/reviews/review-form.ts#L135) - TS2304: Cannot find name 'HTMLTextAreaElement'.
- [Line 144](../src/features/reviews/review-form.ts#L144) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 155](../src/features/reviews/review-form.ts#L155) - TS2304: Cannot find name 'HTMLElement'.
- [Line 155](../src/features/reviews/review-form.ts#L155) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 158](../src/features/reviews/review-form.ts#L158) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 163](../src/features/reviews/review-form.ts#L163) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

### [src/features/reviews/review-list.ts](../src/features/reviews/review-list.ts) (21)

- [Line 23](../src/features/reviews/review-list.ts#L23) - TS7006: Parameter 'productId' implicitly has an 'any' type.
- [Line 43](../src/features/reviews/review-list.ts#L43) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 71](../src/features/reviews/review-list.ts#L71) - TS2304: Cannot find name 'HTMLElement'.
- [Line 72](../src/features/reviews/review-list.ts#L72) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 88](../src/features/reviews/review-list.ts#L88) - TS2304: Cannot find name 'HTMLElement'.
- [Line 88](../src/features/reviews/review-list.ts#L88) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 91](../src/features/reviews/review-list.ts#L91) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 99](../src/features/reviews/review-list.ts#L99) - TS2304: Cannot find name 'HTMLElement'.
- [Line 100](../src/features/reviews/review-list.ts#L100) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 103](../src/features/reviews/review-list.ts#L103) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 104](../src/features/reviews/review-list.ts#L104) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 105](../src/features/reviews/review-list.ts#L105) - TS2304: Cannot find name 'HTMLSelectElement'.
- [Line 111](../src/features/reviews/review-list.ts#L111) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 122](../src/features/reviews/review-list.ts#L122) - TS2304: Cannot find name 'HTMLElement'.
- [Line 123](../src/features/reviews/review-list.ts#L123) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 148](../src/features/reviews/review-list.ts#L148) - TS2304: Cannot find name 'HTMLElement'.
- [Line 149](../src/features/reviews/review-list.ts#L149) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 152](../src/features/reviews/review-list.ts#L152) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 156](../src/features/reviews/review-list.ts#L156) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 159](../src/features/reviews/review-list.ts#L159) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 162](../src/features/reviews/review-list.ts#L162) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

### [src/features/search/search-component.ts](../src/features/search/search-component.ts) (23)

- [Line 23](../src/features/search/search-component.ts#L23) - TS7006: Parameter 'container' implicitly has an 'any' type.
- [Line 24](../src/features/search/search-component.ts#L24) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 39](../src/features/search/search-component.ts#L39) - TS2304: Cannot find name 'HTMLElement'.
- [Line 40](../src/features/search/search-component.ts#L40) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 44](../src/features/search/search-component.ts#L44) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 49](../src/features/search/search-component.ts#L49) - TS7006: Parameter 'e' implicitly has an 'any' type.
- [Line 50](../src/features/search/search-component.ts#L50) - TS2304: Cannot find name 'HTMLInputElement'.
- [Line 55](../src/features/search/search-component.ts#L55) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 66](../src/features/search/search-component.ts#L66) - TS2304: Cannot find name 'HTMLElement'.
- [Line 67](../src/features/search/search-component.ts#L67) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 83](../src/features/search/search-component.ts#L83) - TS2304: Cannot find name 'HTMLElement'.
- [Line 84](../src/features/search/search-component.ts#L84) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 87](../src/features/search/search-component.ts#L87) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 90](../src/features/search/search-component.ts#L90) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 101](../src/features/search/search-component.ts#L101) - TS2304: Cannot find name 'HTMLElement'.
- [Line 101](../src/features/search/search-component.ts#L101) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 104](../src/features/search/search-component.ts#L104) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 107](../src/features/search/search-component.ts#L107) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 111](../src/features/search/search-component.ts#L111) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 122](../src/features/search/search-component.ts#L122) - TS2304: Cannot find name 'HTMLElement'.
- [Line 123](../src/features/search/search-component.ts#L123) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 141](../src/features/search/search-component.ts#L141) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 143](../src/features/search/search-component.ts#L143) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

### [src/features/search/search-service.ts](../src/features/search/search-service.ts) (9)

- [Line 24](../src/features/search/search-service.ts#L24) - TS7006: Parameter 'filters' implicitly has an 'any' type.
- [Line 49](../src/features/search/search-service.ts#L49) - TS2339: Property 'data' does not exist on type 'Product&#91;&#93;'.
- [Line 53](../src/features/search/search-service.ts#L53) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 57](../src/features/search/search-service.ts#L57) - TS2551: Property 'categoryId' does not exist on type 'Product'. Did you mean 'category'?
- [Line 74](../src/features/search/search-service.ts#L74) - TS2345: Argument of type 'string' is not assignable to parameter of type 'Tag'.
- [Line 92](../src/features/search/search-service.ts#L92) - TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
- [Line 92](../src/features/search/search-service.ts#L92) - TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
- [Line 113](../src/features/search/search-service.ts#L113) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 141](../src/features/search/search-service.ts#L141) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: Product, index: number, array: Product&#91;&#93;) =&gt; value is T, thisArg?: any): T&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: Product, index: number, array: Product&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'Product' is not assignable to type 'T'.
          'Product' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'Product'.
  Overload 2 of 2, '(predicate: (value: Product, index: number, array: Product&#91;&#93;) =&gt; unknown, thisArg?: any): Product&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: Product, index: number, array: Product&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'Product' is not assignable to type 'T'.
          'Product' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'Product'.

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

### [src/hooks/use-form.ts](../src/hooks/use-form.ts) (2)

- [Line 37](../src/hooks/use-form.ts#L37) - TS7006: Parameter 'field' implicitly has an 'any' type.
- [Line 94](../src/hooks/use-form.ts#L94) - TS2322: Type 'string | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.

### [src/hooks/use-local-storage.ts](../src/hooks/use-local-storage.ts) (6)

- [Line 14](../src/hooks/use-local-storage.ts#L14) - TS2304: Cannot find name 'window'.
- [Line 27](../src/hooks/use-local-storage.ts#L27) - TS2304: Cannot find name 'window'.
- [Line 34](../src/hooks/use-local-storage.ts#L34) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 36](../src/hooks/use-local-storage.ts#L36) - TS2304: Cannot find name 'window'.
- [Line 52](../src/hooks/use-local-storage.ts#L52) - TS2304: Cannot find name 'window'.
- [Line 53](../src/hooks/use-local-storage.ts#L53) - TS2322: Type 'boolean' is not assignable to type 'number'.

### [src/hooks/use-media-query.ts](../src/hooks/use-media-query.ts) (17)

- [Line 30](../src/hooks/use-media-query.ts#L30) - TS2304: Cannot find name 'window'.
- [Line 31](../src/hooks/use-media-query.ts#L31) - TS2304: Cannot find name 'window'.
- [Line 32](../src/hooks/use-media-query.ts#L32) - TS2304: Cannot find name 'window'.
- [Line 36](../src/hooks/use-media-query.ts#L36) - TS2304: Cannot find name 'window'.
- [Line 42](../src/hooks/use-media-query.ts#L42) - TS7006: Parameter 'query' implicitly has an 'any' type.
- [Line 43](../src/hooks/use-media-query.ts#L43) - TS2304: Cannot find name 'window'.
- [Line 47](../src/hooks/use-media-query.ts#L47) - TS2304: Cannot find name 'window'.
- [Line 67](../src/hooks/use-media-query.ts#L67) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 83](../src/hooks/use-media-query.ts#L83) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 128](../src/hooks/use-media-query.ts#L128) - TS2304: Cannot find name 'window'.
- [Line 135](../src/hooks/use-media-query.ts#L135) - TS2304: Cannot find name 'window'.
- [Line 136](../src/hooks/use-media-query.ts#L136) - TS2304: Cannot find name 'window'.
- [Line 143](../src/hooks/use-media-query.ts#L143) - TS2304: Cannot find name 'window'.
- [Line 146](../src/hooks/use-media-query.ts#L146) - TS2304: Cannot find name 'window'.
- [Line 154](../src/hooks/use-media-query.ts#L154) - TS2304: Cannot find name 'window'.
- [Line 158](../src/hooks/use-media-query.ts#L158) - TS2304: Cannot find name 'window'.
- [Line 160](../src/hooks/use-media-query.ts#L160) - TS2304: Cannot find name 'MediaQueryListEvent'.

### [src/hooks/use-pagination.ts](../src/hooks/use-pagination.ts) (2)

- [Line 26](../src/hooks/use-pagination.ts#L26) - TS7006: Parameter 'page' implicitly has an 'any' type.
- [Line 71](../src/hooks/use-pagination.ts#L71) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/hooks/use-state.ts](../src/hooks/use-state.ts) (3)

- [Line 29](../src/hooks/use-state.ts#L29) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 56](../src/hooks/use-state.ts#L56) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 57](../src/hooks/use-state.ts#L57) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/hooks/use-theme.ts](../src/hooks/use-theme.ts) (13)

- [Line 22](../src/hooks/use-theme.ts#L22) - TS7006: Parameter 'theme' implicitly has an 'any' type.
- [Line 40](../src/hooks/use-theme.ts#L40) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 59](../src/hooks/use-theme.ts#L59) - TS2304: Cannot find name 'window'.
- [Line 59](../src/hooks/use-theme.ts#L59) - TS2304: Cannot find name 'window'.
- [Line 60](../src/hooks/use-theme.ts#L60) - TS2304: Cannot find name 'window'.
- [Line 69](../src/hooks/use-theme.ts#L69) - TS2322: Type 'boolean' is not assignable to type 'string'.
- [Line 73](../src/hooks/use-theme.ts#L73) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 75](../src/hooks/use-theme.ts#L75) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 76](../src/hooks/use-theme.ts#L76) - TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
- [Line 104](../src/hooks/use-theme.ts#L104) - TS2304: Cannot find name 'window'.
- [Line 104](../src/hooks/use-theme.ts#L104) - TS2304: Cannot find name 'window'.
- [Line 108](../src/hooks/use-theme.ts#L108) - TS2304: Cannot find name 'window'.
- [Line 110](../src/hooks/use-theme.ts#L110) - TS2304: Cannot find name 'MediaQueryListEvent'.

### [src/index.ts](../src/index.ts) (4)

- [Line 46](../src/index.ts#L46) - TS7006: Parameter 'config' implicitly has an 'any' type.
- [Line 62](../src/index.ts#L62) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 115](../src/index.ts#L115) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 116](../src/index.ts#L116) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/integrations/admin-integration.ts](../src/integrations/admin-integration.ts) (3)

- [Line 27](../src/integrations/admin-integration.ts#L27) - TS7006: Parameter 'adminUser' implicitly has an 'any' type.
- [Line 58](../src/integrations/admin-integration.ts#L58) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 96](../src/integrations/admin-integration.ts#L96) - TS2322: Type 'ApiResponse&lt;AnalyticsMetrics&gt;' is not assignable to type 'string'.

### [src/integrations/checkout-integration.ts](../src/integrations/checkout-integration.ts) (8)

- [Line 29](../src/integrations/checkout-integration.ts#L29) - TS7006: Parameter 'checkoutData' implicitly has an 'any' type.
- [Line 59](../src/integrations/checkout-integration.ts#L59) - TS2339: Property 'carrier' does not exist on type 'number'.
- [Line 95](../src/integrations/checkout-integration.ts#L95) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 100](../src/integrations/checkout-integration.ts#L100) - TS2322: Type '{ productId: number; quantity: number; price: number; }&#91;&#93;' is not assignable to type 'OrderItem&#91;&#93;'.
  Property 'product' is missing in type '{ productId: number; quantity: number; price: number; }' but required in type 'OrderItem'.
- [Line 133](../src/integrations/checkout-integration.ts#L133) - TS2322: Type 'ShippingRate | undefined' is not assignable to type 'number'.
  Type 'undefined' is not assignable to type 'number'.
- [Line 151](../src/integrations/checkout-integration.ts#L151) - TS2345: Argument of type '{ id: string; type: PaymentMethod; last4: string; expiryMonth: number; expiryYear: number; }' is not assignable to parameter of type 'PaymentMethod'.
  Types of property 'type' are incompatible.
    Type 'PaymentMethod' is not assignable to type '"credit_card" | "paypal" | "debit_card" | "stripe"'.
      Type '"apple_pay"' is not assignable to type '"credit_card" | "paypal" | "debit_card" | "stripe"'.
- [Line 171](../src/integrations/checkout-integration.ts#L171) - TS2322: Type 'number' is not assignable to type 'Shipment'.
- [Line 207](../src/integrations/checkout-integration.ts#L207) - TS2322: Type 'ShippingRate&#91;&#93;' is not assignable to type '{ carrier: string; cost: number; days: number; }&#91;&#93;'.
  Property 'days' is missing in type 'ShippingRate' but required in type '{ carrier: string; cost: number; days: number; }'.

### [src/integrations/dashboard-integration.ts](../src/integrations/dashboard-integration.ts) (2)

- [Line 28](../src/integrations/dashboard-integration.ts#L28) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 107](../src/integrations/dashboard-integration.ts#L107) - TS2322: Type 'DashboardData | null' is not assignable to type 'string'.
  Type 'null' is not assignable to type 'string'.

### [src/integrations/reporting-integration.ts](../src/integrations/reporting-integration.ts) (4)

- [Line 4](../src/integrations/reporting-integration.ts#L4) - TS2724: '"../features/reports/report-viewer"' has no exported member named 'reportViewer'. Did you mean 'ReportViewer'?
- [Line 35](../src/integrations/reporting-integration.ts#L35) - TS7006: Parameter 'reportType' implicitly has an 'any' type.
- [Line 103](../src/integrations/reporting-integration.ts#L103) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 145](../src/integrations/reporting-integration.ts#L145) - TS2322: Type 'ReportData&#91;&#93;' is not assignable to type 'number'.

### [src/models/address.ts](../src/models/address.ts) (3)

- [Line 23](../src/models/address.ts#L23) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 43](../src/models/address.ts#L43) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 112](../src/models/address.ts#L112) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/models/analytics.ts](../src/models/analytics.ts) (2)

- [Line 21](../src/models/analytics.ts#L21) - TS7006: Parameter 'eventName' implicitly has an 'any' type.
- [Line 45](../src/models/analytics.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/category.ts](../src/models/category.ts) (2)

- [Line 15](../src/models/category.ts#L15) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 41](../src/models/category.ts#L41) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/comment.ts](../src/models/comment.ts) (3)

- [Line 28](../src/models/comment.ts#L28) - TS7006: Parameter 'content' implicitly has an 'any' type.
- [Line 50](../src/models/comment.ts#L50) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 86](../src/models/comment.ts#L86) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/dashboard.ts](../src/models/dashboard.ts) (2)

- [Line 25](../src/models/dashboard.ts#L25) - TS7006: Parameter 'metrics' implicitly has an 'any' type.
- [Line 45](../src/models/dashboard.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/invoice.ts](../src/models/invoice.ts) (3)

- [Line 36](../src/models/invoice.ts#L36) - TS7006: Parameter 'item' implicitly has an 'any' type.
- [Line 46](../src/models/invoice.ts#L46) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 82](../src/models/invoice.ts#L82) - TS2322: Type 'string' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.

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

### [src/models/payment.ts](../src/models/payment.ts) (3)

- [Line 47](../src/models/payment.ts#L47) - TS7006: Parameter 'orderId' implicitly has an 'any' type.
- [Line 64](../src/models/payment.ts#L64) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 93](../src/models/payment.ts#L93) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/permission.ts](../src/models/permission.ts) (2)

- [Line 27](../src/models/permission.ts#L27) - TS7006: Parameter 'name' implicitly has an 'any' type.
- [Line 60](../src/models/permission.ts#L60) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.

### [src/models/product.ts](../src/models/product.ts) (4)

- [Line 24](../src/models/product.ts#L24) - TS7006: Parameter 'product' implicitly has an 'any' type.
- [Line 48](../src/models/product.ts#L48) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 104](../src/models/product.ts#L104) - TS2322: Type 'string' is not assignable to type 'number'.
- [Line 105](../src/models/product.ts#L105) - TS2322: Type 'number' is not assignable to type 'string'.

### [src/models/review.ts](../src/models/review.ts) (3)

- [Line 28](../src/models/review.ts#L28) - TS7006: Parameter 'userId' implicitly has an 'any' type.
- [Line 49](../src/models/review.ts#L49) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 91](../src/models/review.ts#L91) - TS2322: Type 'number' is not assignable to type 'string'.

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

### [src/models/shipment.ts](../src/models/shipment.ts) (3)

- [Line 50](../src/models/shipment.ts#L50) - TS7006: Parameter 'orderId' implicitly has an 'any' type.
- [Line 68](../src/models/shipment.ts#L68) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 112](../src/models/shipment.ts#L112) - TS2322: Type 'string' is not assignable to type 'number'.

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

### [src/services/inventory-service.ts](../src/services/inventory-service.ts) (4)

- [Line 26](../src/services/inventory-service.ts#L26) - TS7006: Parameter 'productId' implicitly has an 'any' type.
- [Line 97](../src/services/inventory-service.ts#L97) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 103](../src/services/inventory-service.ts#L103) - TS2339: Property 'sku' does not exist on type 'Product'.
- [Line 153](../src/services/inventory-service.ts#L153) - TS2769: No overload matches this call.
  Overload 1 of 2, '(predicate: (value: InventoryItem, index: number, array: InventoryItem&#91;&#93;) =&gt; value is T, thisArg?: any): T&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: InventoryItem, index: number, array: InventoryItem&#91;&#93;) =&gt; value is T'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'InventoryItem' is not assignable to type 'T'.
          'InventoryItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'InventoryItem'.
  Overload 2 of 2, '(predicate: (value: InventoryItem, index: number, array: InventoryItem&#91;&#93;) =&gt; unknown, thisArg?: any): InventoryItem&#91;&#93;', gave the following error.
    Argument of type '(item: T) =&gt; boolean' is not assignable to parameter of type '(value: InventoryItem, index: number, array: InventoryItem&#91;&#93;) =&gt; unknown'.
      Types of parameters 'item' and 'value' are incompatible.
        Type 'InventoryItem' is not assignable to type 'T'.
          'InventoryItem' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'InventoryItem'.

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

### [src/services/payment-service.ts](../src/services/payment-service.ts) (3)

- [Line 24](../src/services/payment-service.ts#L24) - TS7006: Parameter 'orderId' implicitly has an 'any' type.
- [Line 44](../src/services/payment-service.ts#L44) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 91](../src/services/payment-service.ts#L91) - TS2322: Type 'boolean' is not assignable to type 'string'.

### [src/services/product-service.ts](../src/services/product-service.ts) (5)

- [Line 8](../src/services/product-service.ts#L8) - TS7006: Parameter 'productId' implicitly has an 'any' type.
- [Line 22](../src/services/product-service.ts#L22) - TS7006: Parameter 'productData' implicitly has an 'any' type.
- [Line 35](../src/services/product-service.ts#L35) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 74](../src/services/product-service.ts#L74) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 75](../src/services/product-service.ts#L75) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/services/reporting-service.ts](../src/services/reporting-service.ts) (3)

- [Line 32](../src/services/reporting-service.ts#L32) - TS7006: Parameter 'startDate' implicitly has an 'any' type.
- [Line 60](../src/services/reporting-service.ts#L60) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 106](../src/services/reporting-service.ts#L106) - TS2322: Type 'ReportData' is not assignable to type 'number'.

### [src/services/shipping-service.ts](../src/services/shipping-service.ts) (4)

- [Line 30](../src/services/shipping-service.ts#L30) - TS7006: Parameter 'order' implicitly has an 'any' type.
- [Line 51](../src/services/shipping-service.ts#L51) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 96](../src/services/shipping-service.ts#L96) - TS2741: Property 'items' is missing in type '{ id: string; orderId: number; carrier: string; trackingNumber: string; status: "pending"; createdAt: Date; updatedAt: Date; estimatedDelivery: Date; }' but required in type 'Shipment'.
- [Line 107](../src/services/shipping-service.ts#L107) - TS2322: Type 'Shipment' is not assignable to type 'number'.

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

### [src/utils/color-utils.ts](../src/utils/color-utils.ts) (6)

- [Line 16](../src/utils/color-utils.ts#L16) - TS7006: Parameter 'hex' implicitly has an 'any' type.
- [Line 45](../src/utils/color-utils.ts#L45) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 119](../src/utils/color-utils.ts#L119) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 125](../src/utils/color-utils.ts#L125) - TS2365: Operator '&lt;' cannot be applied to types 'string' and 'number'.
- [Line 196](../src/utils/color-utils.ts#L196) - TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
- [Line 197](../src/utils/color-utils.ts#L197) - TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

### [src/utils/crypto-utils.ts](../src/utils/crypto-utils.ts) (3)

- [Line 4](../src/utils/crypto-utils.ts#L4) - TS7006: Parameter 'password' implicitly has an 'any' type.
- [Line 30](../src/utils/crypto-utils.ts#L30) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 57](../src/utils/crypto-utils.ts#L57) - TS2322: Type 'string' is not assignable to type 'number'.

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

### [src/utils/file-utils.ts](../src/utils/file-utils.ts) (6)

- [Line 17](../src/utils/file-utils.ts#L17) - TS7006: Parameter 'file' implicitly has an 'any' type.
- [Line 46](../src/utils/file-utils.ts#L46) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 82](../src/utils/file-utils.ts#L82) - TS2322: Type 'number' is not assignable to type 'string'.
- [Line 111](../src/utils/file-utils.ts#L111) - TS2304: Cannot find name 'FileReader'.
- [Line 127](../src/utils/file-utils.ts#L127) - TS2304: Cannot find name 'FileReader'.
- [Line 143](../src/utils/file-utils.ts#L143) - TS2304: Cannot find name 'FileReader'.

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

### [src/utils/url-utils.ts](../src/utils/url-utils.ts) (3)

- [Line 4](../src/utils/url-utils.ts#L4) - TS7006: Parameter 'url' implicitly has an 'any' type.
- [Line 25](../src/utils/url-utils.ts#L25) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 59](../src/utils/url-utils.ts#L59) - TS2322: Type 'string' is not assignable to type 'number'.

### [src/utils/validation-utils.ts](../src/utils/validation-utils.ts) (4)

- [Line 4](../src/utils/validation-utils.ts#L4) - TS7006: Parameter 'value' implicitly has an 'any' type.
- [Line 21](../src/utils/validation-utils.ts#L21) - TS2366: Function lacks ending return statement and return type does not include 'undefined'.
- [Line 48](../src/utils/validation-utils.ts#L48) - TS7006: Parameter 'min' implicitly has an 'any' type.
- [Line 59](../src/utils/validation-utils.ts#L59) - TS2322: Type 'boolean' is not assignable to type 'number'.
