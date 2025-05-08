# Next.js 15 Starter

A modern, feature-rich [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This starter template includes the latest Next.js 15 features and a comprehensive UI component library to help you build beautiful, performant web applications.

## ✨ Features

- ⚡️ **Next.js 15** with App Router for modern React applications
- 🎨 **Tailwind CSS** for utility-first styling
- 🌙 **Dark mode** support with next-themes
- 🎯 **TypeScript** for enhanced type safety and developer experience
- 📱 **Responsive design** for all screen sizes
- 🎭 **Radix UI** components for accessible UI primitives
- 🌐 **Internationalization** with intlayer for multi-language support
- 📝 **Form handling** with react-hook-form and zod validation
- 🎨 **Beautiful UI components** with shadcn/ui
- 🔍 **ESLint** for code quality and consistency
- 🚀 **Turbopack** support for faster development experience
- 🔐 **Authentication** with better-auth for secure user management
- 💾 **Database** with Drizzle ORM and Neon serverless PostgreSQL
- 🔄 **Type-safe database queries** with Drizzle's type system

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-15-starter.git
cd nextjs-15-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. For faster development with Turbopack:
```bash
npm run dev:turbopack
# or
yarn dev:turbopack
# or
pnpm dev:turbopack
# or
bun dev:turbopack
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── src/
│   ├── app/              # App router pages and layouts
│   ├── components/       # Reusable UI components
│   ├── lib/             # Utility functions and shared logic
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── types/           # TypeScript type definitions
│   ├── db/              # Database schema and migrations
│   │   ├── schema/      # Drizzle schema definitions
│   │   └── migrations/  # Database migrations
│   └── auth/            # Authentication configuration
├── public/              # Static assets
├── .env.example        # Example environment variables
├── .eslintrc.json      # ESLint configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:turbopack` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🛠️ Technology Stack

- [Next.js 15](https://nextjs.org/docs) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/docs) - Unstyled, accessible components
- [TypeScript](https://www.typescriptlang.org/docs) - Type-safe JavaScript
- [React Hook Form](https://react-hook-form.com/docs) - Form handling
- [Zod](https://zod.dev) - Schema validation
- [shadcn/ui](https://ui.shadcn.com) - Re-usable components
- [better-auth](https://github.com/nextauthjs/next-auth) - Authentication system
- [Drizzle ORM](https://orm.drizzle.team) - TypeScript ORM
- [Neon](https://neon.tech) - Serverless PostgreSQL database

## 🌐 Internationalization

This project uses intlayer for internationalization. To add new languages:

1. Create a new language file in `src/i18n/locales/`
2. Add the language to the supported languages list
3. Update the language switcher component

## 🎨 Customization

### Theme Customization

1. Modify `tailwind.config.js` for custom colors and theme settings
2. Update `src/styles/globals.css` for global styles
3. Customize components in `src/components/ui/`

### Adding New Components

1. Use shadcn/ui CLI to add new components:
```bash
npx shadcn-ui@latest add [component-name]
```

2. Create custom components in `src/components/`

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org)
- [Vercel](https://vercel.com)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 🔐 Authentication Setup

This project uses better-auth for authentication. To set up authentication:

1. Configure your environment variables:
```env
AUTH_SECRET=your-secret-key
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

2. Add authentication providers in `src/auth/auth.config.ts`
3. Use the auth hooks in your components:
```typescript
import { useSession } from "next-auth/react"
```

## 💾 Database Setup

The project uses Drizzle ORM with Neon serverless PostgreSQL:

1. Set up your Neon database and get the connection string
2. Add the database URL to your environment variables:
```env
DATABASE_URL=your-neon-connection-string
```

3. Generate and run migrations:
```bash
npm run db:generate
npm run db:push
```

4. Use Drizzle in your application:
```typescript
import { db } from "@/db"
import { users } from "@/db/schema"

// Example query
const allUsers = await db.select().from(users)
```
