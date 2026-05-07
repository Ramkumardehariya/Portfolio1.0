# Portfolio 2.0 - Ramkumar Dehariya

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This personal portfolio showcases my projects, skills, and professional experience as a Full Stack Developer.

## 🌟 Live Demo

[Portfolio 2.0 - Live Site](https://portfolio2-0-eight-alpha.vercel.app/)

## 📸 Screenshots

![Portfolio Preview](./assets/project/Portfolio.png)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic sections with hover effects and transitions
- **Contact Form**: Functional contact form with Formspree integration
- **Social Links**: Quick access to all professional social profiles
- **Project Showcase**: Beautiful card-based project display with live links
- **Skills Display**: Animated skills marquee with technology icons
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 17** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS (Animate On Scroll)** - Scroll animations
- **React Router DOM** - Client-side routing
- **React Fast Marquee** - Marquee component for skills

### UI Components & Libraries
- **Material-UI** - React components
- **Styled Components** - CSS-in-JS styling
- **Aceternity UI** - Modern UI components
- **React Vertical Timeline** - Timeline component
- **React Particles** - Particle effects
- **React Toastify** - Notification system

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
Portfolio2.0-master/
├── public/
│   ├── index.html          # Main HTML template
│   └── Images/             # Static images and assets
├── src/
│   ├── components/         # React components
│   │   ├── About/          # About section
│   │   ├── CodingProfile/  # Coding profiles section
│   │   ├── Contact/        # Contact form section
│   │   ├── Education/      # Education timeline
│   │   ├── Experience/     # Work experience
│   │   ├── Footer/         # Footer component
│   │   ├── Form/           # Contact form
│   │   ├── Header/         # Navigation header
│   │   ├── Hero/           # Hero section
│   │   ├── Main/           # Main layout
│   │   ├── Project/        # Projects showcase
│   │   └── Skills/         # Skills marquee
│   ├── assets/             # Images, icons, and illustrations
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   └── index.tsx           # Entry point
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Sections

### 1. Hero Section
- Personal introduction with animated text
- Professional title and description
- Social media links (LinkedIn, GitHub, Instagram, WhatsApp, Email)
- Call-to-action button to contact section

### 2. About Section
- Professional summary and background
- Technical skills showcase with icons
- Personal photo and introduction

### 3. Skills Section
- Animated marquee displaying technical skills
- Technology icons for visual appeal
- Comprehensive skill set including:
  - **Languages**: C, C++, Python, PHP, JavaScript, TypeScript
  - **Frontend**: HTML, CSS, React, Vue, Bootstrap, Tailwind
  - **Backend**: Node.js, Express.js
  - **Databases**: MongoDB, MySQL
  - **Tools**: Git, Figma, Ionic

### 4. Projects Section
- Featured projects with live demos
- Project cards with 3D effects
- Technology stack for each project
- Direct links to live applications

#### Featured Projects:
1. **StudyNotion** - MERN-based online education platform
2. **Crypto Tracker** - Real-time cryptocurrency price tracker
3. **Music Player** - Modern Spotify-like music app
4. **Top Course** - Online course aggregator
5. **Heliverse Clone** - Website replica
6. **Testimonial Slider** - Dynamic testimonial component
7. **Random GIF Generator** - Giphy API integration
8. **Portfolio 2.0** - This portfolio website
9. **Razorpay Clone** - Payment gateway UI replica

### 5. Experience Section
- Professional work history
- Timeline-based display
- Company and role details

### 6. Education Section
- Academic background
- Timeline visualization
- Institution details

### 7. Contact Section
- Functional contact form
- Formspree integration
- Direct contact options
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ramkumardehariya/Portfolio2.0-master.git
   cd Portfolio2.0-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The build will be created in the `build` folder.

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `src/components/Hero/Hero.tsx` - Name, title, social links
- `src/components/About/About.tsx` - About text and photo
- `src/components/Contact/Contact.tsx` - Contact information

### Projects
Modify projects in `src/components/Project/Project.tsx`:
- Update project titles, descriptions, and tech stacks
- Replace project screenshots in `src/assets/project/`
- Update live demo links

### Skills
Add or modify skills in `src/components/Skills/Skills.tsx`:
- Update the `skillsData` array
- Add corresponding SVG icons to `src/assets/svg/skills/`

### Styling
- Modify Tailwind configuration in `tailwind.config.js`
- Update global styles in `src/styles/global.ts`
- Component-specific styles are in their respective `styles.ts` files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920x1080 and above
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 768px

## 🌐 Deployment

The portfolio is deployed on Vercel:
- **Live URL**: https://portfolio2-0-eight-alpha.vercel.app/
- **Repository**: https://github.com/Ramkumardehariya/Portfolio2.0-master

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Connect to Vercel**
   - Import your GitHub repository
   - Configure build settings
   - Deploy automatically on push

## 🤝 Contributing

Feel free to fork this repository and create your own portfolio. If you find any issues or have suggestions for improvements:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ramkumar Dehariya**
- Full Stack Developer
- Email: ramkumardehariya26@gmail.com
- LinkedIn: [linkedin.com/in/ramkumar-dehariya-16a242218](https://www.linkedin.com/in/ramkumar-dehariya-16a242218/)
- GitHub: [github.com/Ramkumardehariya](https://github.com/Ramkumardehariya)
- Portfolio: [portfolio2-0-eight-alpha.vercel.app](https://portfolio2-0-eight-alpha.vercel.app/)

## 🙏 Acknowledgments

- **Aceternity UI** for modern UI components
- **Framer Motion** for smooth animations
- **AOS** for scroll animations
- **Tailwind CSS** for utility-first styling
- **React** for the component-based architecture
- **Vercel** for hosting and deployment

## 📞 Contact

- **Email**: ramkumardehariya26@gmail.com
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/ramkumar-dehariya-16a242218/)
- **GitHub**: [Follow me](https://github.com/Ramkumardehariya)
- **WhatsApp**: [+917489629277](https://api.whatsapp.com/send/?phone=%2B917489629277&text=Hello+Ramkumar)
- **Instagram**: [@rammehramehra](https://www.instagram.com/rammehramehra/)

---

⭐ If you like this portfolio, please give it a star on GitHub!
