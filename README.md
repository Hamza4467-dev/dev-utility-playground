# Dev Utility Playground

A collection of 15 small Angular utilities solving real-world developer problems. Each utility includes live demos and interactive code examples, making it a perfect showcase for Angular skills, reusable components, directives, services, and pipes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

---

## 🔹 Features / Utilities

### Directives
- **Scroll-to-Top**: Smooth scrolling back to the top of the page.
- **Disable-on-Click**: Prevents double submissions by disabling buttons after click.
- **Auto-Focus**: Automatically focuses an input element on initialization.
- **Role-Based View**: Conditionally renders elements based on user roles.
- **Debounced Input**: Limits the rate at which an input event triggers.

### Components
- **Empty State**: A reusable placeholder for empty data sets.
- **Status Badge**: Visual indicators for different states (Success, Warning, Error).
- **Skeleton Loader**: UI placeholders for loading states.
- **Confirm Action**: A modal or inline confirmation for destructive actions.
- **Read More**: Truncates long text with a toggle to expand.

### Services / Pipes
- **Logger Service**: A centralized logging utility.
- **Error Translator**: Maps technical errors to human-readable messages.
- **Date Formatter Pipe**: Custom formatting for date strings.
- **Copy to Clipboard**: Service to programmatically copy text.
- **Network Status Indicator**: Detects and displays online/offline status.

---

## 💻 Getting Started

### Development Server
Run the dev server:
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding
Generate new Angular artifacts:
```bash
ng generate component component-name
# Or for other types:
ng generate directive|pipe|service|class|guard|interface|enum|module
```

---

## 📦 Build & Test

### Build
Build the project for production:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Unit Tests
Run unit tests via [Karma](https://karma-runner.github.io):
```bash
ng test
```

### End-to-End Tests
Run end-to-end tests via a platform of your choice:
```bash
ng e2e
```
*Note: You need to first add a package that implements end-to-end testing capabilities.*

---

## 📌 Project Purpose
- **Showcase Angular Best Practices**: Demonstrates clean implementation of components, directives, services, and pipes.
- **Interactive Solutions**: Provides real-world examples of common development problems.
- **Reusable Library**: Serves as a utility playground for future projects or portfolio demonstrations.

---

## 📖 Further Help
To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.