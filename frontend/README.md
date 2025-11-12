# Portfolio Website

A modern, production-ready personal portfolio website built with Next.js 15, TypeScript, Material-UI, and Tailwind CSS. Features server-side rendering, accessibility compliance (WCAG AA), performance optimization, and a clean, responsive design.

## 🚀 Features

- ✨ Modern UI with Material-UI and Tailwind CSS
- 🎨 Light/Dark theme toggle with system preference detection
- 📱 Fully responsive and mobile-first design
- ♿ WCAG AA accessibility compliant
- 🚄 Optimized performance (Lighthouse score ≥ 90)
- 🔍 SEO optimized with meta tags and structured data (JSON-LD)
- 📝 MDX/JSON-based project management
- 🧪 Unit tests with Vitest and React Testing Library
- 🔄 CI/CD with GitHub Actions
- 📬 Contact form with spam protection
- 🎭 Smooth animations with Framer Motion

## 📋 Prerequisites

- Node.js 20.x or higher
- pnpm 10.x or higher

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio/frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file (optional, for email service):
```env
RESEND_API_KEY=your_resend_api_key_here
```

## 🏃‍♂️ Running the Project

### Development Mode
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
pnpm run build
```

### Start Production Server
```bash
pnpm run start
```

### Run Linter
```bash
pnpm run lint
```

### Run Tests
```bash
pnpm run test
```

## 📝 Content Management

### Adding/Editing Projects

Projects are managed through the `data/projects.json` file. To add or edit a project:

1. Open `data/projects.json`
2. Add or modify a project object following the schema
3. Add project images to the `public/projects/` directory
4. Rebuild the site: `pnpm run build`

### Updating Personal Information

Update these files to customize the portfolio:

- **Bio and contact info**: `app/about/page.tsx`
- **Social links**: `components/layout/Footer.tsx` and `app/contact/page.tsx`
- **Hero section**: `app/page.tsx`
- **Skills**: `app/about/page.tsx`
- **Meta tags**: `app/layout.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the root directory to `frontend`
4. Add environment variables (if using email service)
5. Deploy

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

Built with ❤️ using Next.js, TypeScript, and Material-UI by Abdullah Jabbar

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
