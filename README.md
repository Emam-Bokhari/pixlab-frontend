# Pixlab Frontend

PixLab is a high-performance web application designed for professional-grade image processing, optimization, and transformation. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, it offers an intuitive suite of browser-based image manipulation tools including automated background removal, resolution upscaling, target-size file compression, and precision resizing.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture and Folder Structure](#project-architecture-and-folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [API Integration and Backend Contract](#api-integration-and-backend-contract)
- [Available Scripts](#available-scripts)
- [Design System and Styling](#design-system-and-styling)
- [Deployment Guidelines](#deployment-guidelines)
- [Security and Best Practices](#security-and-best-practices)
- [License](#license)

---

## Overview

PixLab Studio provides a cohesive studio experience for handling complex digital image tasks directly in the browser. Users can upload images, process them using dedicated machine learning and computer vision endpoints, preview live before-and-after results with split-screen sliders, inspect granular dimension and file-size statistics, and download optimized assets.

---

## Key Features

- Background Remover: Automatically isolates the main subject and removes image backgrounds with high edge accuracy. Supports transparent output or custom solid background color replacement.
- Image Upscaler: Enhances image resolution by 2x, 3x, or 4x scale factors while reconstructing textures and edge sharpness.
- Image Compressor: Compresses images to exact target file sizes in kilobytes (KB) with intelligent quality balancing and real-time reduction metrics.
- Image Resizer: Resizes pixel dimensions with configurable width and height controls, preserving or releasing aspect ratio constraints as needed.
- Interactive Studio Workspace:
  - Side-by-side and split-screen before/after slider comparison modes.
  - Granular telemetry including original vs. processed resolution, file size (KB/MB), format, and percentage savings or scaling factors.
  - One-click binary downloads and in-browser previews.
- Modern App Router Architecture: Server Components for static marketing pages (Home, About, Privacy, Terms) and Client Components for interactive tool workflows.
- Customer Support Integration: Built-in contact and support ticket submission integrated with backend messaging endpoints.

---

## Tech Stack

### Frontend Core
- Framework: Next.js 14 (App Router)
- Library: React 18
- Language: TypeScript 5

### Styling and UI Components
- CSS Framework: Tailwind CSS 3
- Typography: @tailwindcss/typography
- Animations: tailwindcss-animate
- Primitives: Radix UI (Dialog, Dropdown Menu, Label, Select, Slider, Slot, Tabs)
- Class Merging: clsx, tailwind-merge, class-variance-authority (CVA)
- Notifications: Sonner

### Backend Communication
- Native Fetch API with typed responses and error handling
- Multipart Form-Data image payload handling
- Stream and Blob conversion for direct file downloads

---

## Project Architecture and Folder Structure

The repository follows standard Next.js 14 App Router conventions, keeping route definitions, domain modules, reusable UI components, and API service layers cleanly decoupled.

```text
pixlab-template/
|-- .env.example                     # Environment configuration template
|-- components.json                  # Shadcn UI component configuration
|-- next.config.mjs                  # Next.js runtime configuration
|-- package.json                     # Project dependencies and script commands
|-- postcss.config.js                # PostCSS build pipeline configuration
|-- tailwind.config.ts               # Tailwind CSS theme and design tokens
|-- tsconfig.json                    # TypeScript compiler configuration
|-- public/                          # Static assets served from web root
|   |-- robots.txt                   # Search crawler directives
|   |-- sitemap.xml                  # Search index sitemap
|   |-- site.webmanifest             # Progressive Web App manifest
|   `-- assets/
|       |-- favicon.svg              # Browser favicon
|       |-- img/                     # Demo, benchmark, and showcase image assets
|       `-- logo/                    # Brand logos and vector graphics
`-- src/
    |-- app/                         # Next.js App Router root
    |   |-- globals.css              # Global styles, Tailwind base and theme variables
    |   |-- layout.tsx               # Root layout, Google Fonts (Inter, Plus Jakarta Sans), Toaster
    |   |-- not-found.tsx            # Custom 404 page handler
    |   `-- (WithCommonLayout)/      # Route group sharing global Navbar and Footer
    |       |-- layout.tsx           # Common layout container
    |       |-- (home)/              # Landing page route (/)
    |       |-- about/               # About page route (/about)
    |       |-- background-remover/  # Background removal tool route (/background-remover)
    |       |-- contact/             # Support and contact route (/contact)
    |       |-- image-compressor/    # Image compression tool route (/image-compressor)
    |       |-- image-resizer/       # Image resizing tool route (/image-resizer)
    |       |-- image-upscaler/      # Image upscaling tool route (/image-upscaler)
    |       |-- privacy/             # Privacy policy route (/privacy)
    |       `-- terms/               # Terms of service route (/terms)
    |-- components/                  # React component library
    |   |-- modules/                 # Page-level and feature-specific modules
    |   |   |-- About/               # About page layout and content blocks
    |   |   |-- BackgroundRemover/   # Background remover page orchestrator
    |   |   |-- Contact/             # Contact page form and submission logic
    |   |   |-- Home/                # Home sections (Banner, Slider, StudioTools, HowItWorks)
    |   |   |-- ImageCompressor/     # Compressor page orchestrator
    |   |   |-- ImageResizer/        # Resizer page orchestrator
    |   |   |-- ImageUpscaler/       # Upscaler page orchestrator
    |   |   |-- Privacy/             # Privacy page content
    |   |   |-- Terms/               # Terms page content
    |   |   `-- Tools/               # Shared tool modules (ToolHero, ToolStudio)
    |   |-- shared/                  # Common site-wide components
    |   |   |-- CtaSection.tsx       # Conversion Call-To-Action section
    |   |   |-- FAQSection.tsx       # Frequently asked questions accordion
    |   |   |-- Footer.tsx           # Global footer with link collections
    |   |   `-- Navbar.tsx           # Navigation bar with dropdown tools menu
    |   `-- ui/                      # Base UI primitives (Radix + Tailwind)
    |       |-- badge.tsx            # Badge component
    |       |-- button.tsx           # Button component with variants
    |       |-- card.tsx             # Card container components
    |       |-- dialog.tsx           # Modal dialog wrapper
    |       |-- dropdown-menu.tsx    # Accessible dropdown menu
    |       |-- input.tsx            # Form input element
    |       |-- select.tsx           # Form select element
    |       |-- slider.tsx           # Range slider component
    |       `-- tabs.tsx             # Tab switcher component
    |-- constants/                   # Application-wide constants
    |   `-- index.ts                 # Base API endpoint and configuration defaults
    |-- lib/                         # Utility helpers
    |   `-- utils.ts                 # Classname combiner (clsx and twMerge)
    |-- services/                    # API client layer for backend endpoints
    |   |-- index.ts                 # Service re-exports
    |   |-- BgRemove/                # Background removal API calls and download helpers
    |   |-- Reduce/                  # Image compression API calls and download helpers
    |   |-- Resize/                  # Image resizing API calls and download helpers
    |   |-- Support/                 # Support ticket API submission
    |   `-- Upscale/                 # Image upscaling API calls and download helpers
    `-- types/                       # Shared TypeScript definitions
        |-- common.ts                # API response wrappers and error interfaces
        |-- image.ts                 # Image dimension, metadata, and service schemas
        |-- index.ts                 # Type re-exports
        `-- support.ts               # Contact and support payload types
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js: version 18.17.0 or higher
- Package Manager: npm (v9+), yarn, or pnpm
- Git: for source code management

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <enter_your_repository_url_here>
   cd pixlab-frontend
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Environment Setup

The application communicates with a dedicated backend API service for image transformations and support ticketing. Do not hardcode live URLs or database credentials directly into the code or documentation.

1. Create a local environment file in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and configure your environment variables:

   ```env
   # Frontend Environment Variables
   NEXT_PUBLIC_BASE_API=enter_your_backend_api_url_here
   ```

Note on Environment Variables:
- `NEXT_PUBLIC_BASE_API`: Base URL of the image processing API server (e.g. `http://localhost:5000/api/v1` in local development).
- Ensure `.env` and `.env.local` files are listed in your `.gitignore` and never committed with sensitive production strings.

### Running the Application

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## API Integration and Backend Contract

PixLab Studio connects to backend microservices that handle heavy computing tasks. Each service provides two modes: JSON payload response (returning base64 image data and metadata) or binary stream download (returning a direct image blob).

| Endpoint | Method | Payload Type | Parameters | Direct Download |
|---|---|---|---|---|
| `/bg-remove` | POST | `multipart/form-data` | `image` (File), `bgColor` (optional string) | Supported (`?download=true`) |
| `/upscales` | POST | `multipart/form-data` | `image` (File), `scale` (number: 2, 3, 4) | Supported (`?download=true`) |
| `/reduce` | POST | `multipart/form-data` | `image` (File), `targetSizeKb` (number) | Supported (`?download=true`) |
| `/resize` | POST | `multipart/form-data` | `image` (File), `width` (number), `height` (number) | Supported (`?download=true`) |
| `/supports` | POST | `application/json` | `name`, `email`, `subject`, `message` | N/A |

### Backend CORS and Stats Headers Configuration

When requesting binary downloads (`?download=true`), the backend must expose custom telemetry headers so the frontend can display accurate transformation metrics:

```javascript
cors({
  exposedHeaders: [
    'X-Scale',
    'X-Original-Width',
    'X-Original-Height',
    'X-Original-Size-KB',
    'X-Upscaled-Width',
    'X-Upscaled-Height',
    'X-Upscaled-Size-KB',
    'X-Size-Increase-Percent',
    'X-Reduced-Width',
    'X-Reduced-Height',
    'X-Reduced-Size-KB',
    'X-Reduction-Percent',
    'X-Target-Size-KB',
    'X-Resized-Width',
    'X-Resized-Height',
    'X-Resized-Size-KB',
    'X-Background-Color'
  ]
})
```

---

## Available Scripts

The following npm scripts are defined in `package.json`:

| Command | Description |
|---|---|
| `npm run dev` | Runs the Next.js development server with hot-module reloading at `http://localhost:3000`. |
| `npm run build` | Compiles the TypeScript application and produces an optimized production build in `.next`. |
| `npm run start` | Boots the Next.js production server for built assets. |
| `npm run lint` | Runs ESLint analysis across TypeScript and React files to identify code quality issues. |

---

## Design System and Styling

PixLab Studio utilizes a custom color palette tailored for creative workspaces and photography tools:

| Token Name | Hex Code | Purpose |
|---|---|---|
| Ink | `#0B1B3A` | Primary brand dark, headings, deep contrast buttons |
| Gold | `#FFB81C` | Accent elements, focus rings, callouts, active indicators |
| Mist | `#F7F8FA` | Neutral light backgrounds and card fills |
| Line | `#DDE2EC` | Border dividers, outlines, split slider handles |
| Dim | `#5A6783` | Secondary text, muted captions, metadata labels |
| Tint | `#E8EDF7` | Soft highlight backgrounds, badges, hover accents |

### Typography
- Primary Headings: Plus Jakarta Sans
- Body and UI: Inter

---

## Deployment Guidelines

### Vercel (Recommended)
1. Push your repository to your Git provider (GitHub, GitLab, or Bitbucket).
2. Import the project into the Vercel dashboard.
3. Add the required environment variable (`NEXT_PUBLIC_BASE_API`) in Vercel Project Settings > Environment Variables.
4. Deploy the project. Vercel automatically detects Next.js build settings.

### Docker / Self-Hosted Node.js Server
1. Run `npm run build` to generate production output.
2. Start the production server with `npm run start` behind a reverse proxy (e.g., Nginx, Caddy, or Cloudflare Tunnel).
3. Ensure server process managers (such as PM2 or systemd) are configured for zero-downtime restarts.

---

## Security and Best Practices

- Secret Isolation: Never commit real database connection strings, API tokens, or server IPs to git repositories.
- Client-Side Validation: Images are validated for supported MIME types and size constraints before dispatching API calls.
- Privacy-Conscious Handling: User images are processed in-memory or ephemeral storage on the backend and discarded after processing.
- Error Handling: Centralized try-catch wrappers in the service layer with Sonner toast feedback for network disruptions or server timeouts.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
