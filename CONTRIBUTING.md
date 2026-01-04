# Contributing to tmdb-ts

Thank you for your interest in contributing to tmdb-ts! This document provides guidelines and instructions for contributing.

## Prerequisites

- Node.js 20.0.0 or higher
- npm (comes with Node.js)
- Git

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/blakejoy/tmdb-ts.git
   cd tmdb-ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Code Style

This project uses ESLint and Prettier for code formatting and linting:

- **Run linter:** `npm run lint`
- **Auto-fix linting issues:** `npm run lint:fix`
- **Format code:** `npm run format`

Code style is enforced automatically via pre-commit hooks.

### Building

Compile TypeScript to JavaScript:

```bash
npm run compile
```

This will:
- Remove the existing `dist` folder
- Compile TypeScript files to CommonJS
- Generate type definition files (.d.ts)

### Project Structure

```
src/
├── api.ts              # Main API handler
├── tmdb.ts             # Main TMDB class
├── index.ts            # Entry point
├── common/             # Constants and shared code
├── endpoints/          # API endpoint implementations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Making Changes

1. **Write clean, readable code** that follows the existing code style
2. **Update type definitions** if you modify function signatures
3. **Keep commits atomic** - one logical change per commit
4. **Write meaningful commit messages** following this format:
   ```
   <type>: <short description>

   <optional longer description>
   ```

   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Submitting Changes

1. **Ensure your code passes linting**
   ```bash
   npm run lint
   ```

2. **Compile successfully**
   ```bash
   npm run compile
   ```

3. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template with details about your changes
   - Link any related issues

## Pull Request Guidelines

- **Title:** Clear and descriptive
- **Description:** Explain what changes you made and why
- **Testing:** Describe how you tested your changes
- **Breaking Changes:** Clearly note any breaking changes
- **Documentation:** Update README or docs if needed

## Code Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be included in the next release

## Reporting Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) to create a new issue. Include:

- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node version, OS, etc.)

## Suggesting Features

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) to propose new features. Include:

- Clear description of the feature
- Use case and benefits
- Any implementation ideas

## Questions?

If you have questions about contributing, feel free to:
- Open a discussion on GitHub
- Create an issue
- Contact the maintainer at blake@bjoynes.com

## License

By contributing to tmdb-ts, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
