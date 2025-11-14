# Oblinne - Pakistani Legal Services Platform

## Overview

Oblinne is a web application that connects clients with qualified lawyers in Pakistan. The platform enables users to browse lawyers by specialty and location, view detailed lawyer profiles, and book consultations. The application features a modern, responsive interface with support for both English and Urdu languages, themed with Pakistani colors (green and blue).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built as a **Single Page Application (SPA)** using modern React patterns:

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state, React hooks for local state
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom Pakistani-themed color scheme
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Design Decisions**:
- Chose Wouter over React Router for its minimal bundle size and simplicity
- Radix UI provides accessible, unstyled primitives allowing full design control
- TanStack Query handles API caching and synchronization, eliminating need for complex state management
- Component structure follows atomic design with reusable UI components in `client/src/components/ui/`

### Backend Architecture

The backend follows a **REST API pattern** with Express.js:

- **Framework**: Express.js on Node.js
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Storage Layer**: Abstracted through `IStorage` interface with in-memory implementation
- **Build System**: esbuild for production bundling, tsx for development

**Design Decisions**:
- Storage abstraction (`IStorage` interface) allows easy migration from in-memory to database implementation
- Middleware pattern for logging, error handling, and JSON parsing
- Development uses Vite middleware for hot module replacement
- Production serves pre-built static files from `dist/public`

### Data Storage

**Current Implementation**: In-memory storage via `MemStorage` class

**Database Schema** (defined in `shared/schema.ts` using Drizzle ORM):
- **users**: User authentication (username, password)
- **lawyers**: Lawyer profiles with bio, specialties, ratings, availability
- **specializations**: Legal practice areas (family law, corporate, criminal, etc.)
- **bookings**: Consultation appointments linking lawyers and clients
- **reviews**: Client reviews for lawyers

**Design Decisions**:
- Drizzle ORM with PostgreSQL dialect for type-safe database operations
- Schema-first approach with Zod validation generated from Drizzle schemas
- JSON columns for complex data (languages, specialties, availability schedules)
- Migration support via drizzle-kit

**Note**: The application is configured for PostgreSQL (via `@neondatabase/serverless`) but currently uses in-memory storage. Migration to actual database requires:
1. Setting `DATABASE_URL` environment variable
2. Running `npm run db:push` to create tables
3. Updating `server/storage.ts` to use database instead of in-memory storage

### Build and Development Workflow

**Development Mode**:
- Vite dev server for frontend with HMR
- tsx for hot-reloading Node.js backend
- Concurrent frontend/backend development on single port

**Production Build**:
1. Vite builds React SPA to `dist/public`
2. esbuild bundles Express server to `dist/index.js`
3. Server serves static files and API endpoints

**Design Decisions**:
- Vite's fast HMR improves development experience
- esbuild provides fast production builds with ESM output
- Monorepo structure with shared code in `shared/` directory

## External Dependencies

### Third-Party Services

**Database**: 
- Neon Serverless Postgres (via `@neondatabase/serverless`)
- Connection pooling for serverless environments
- Environment variable: `DATABASE_URL`

### UI Libraries

- **Radix UI**: Comprehensive suite of accessible UI primitives (accordions, dialogs, dropdowns, etc.)
- **shadcn/ui**: Pre-styled components built on Radix UI with Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

### Development Tools

- **Replit Integration**: 
  - `@replit/vite-plugin-runtime-error-modal` for error overlay
  - `@replit/vite-plugin-cartographer` for development tooling
- **TypeScript**: Full type safety across client, server, and shared code
- **Tailwind CSS**: Utility-first styling with custom configuration

### Form and Data Validation

- **React Hook Form**: Performant form state management
- **Zod**: Runtime type validation for forms and API data
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### API and State Management

- **TanStack React Query**: Server state management with caching, refetching, and background updates
- **date-fns**: Date manipulation and formatting utilities

### Session Management

- **connect-pg-simple**: PostgreSQL session store for Express (currently unused, ready for authentication implementation)