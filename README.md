# Portfolio App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Building for Production](#building-for-production)
- [Docker Support](#docker-support)
- [Authors](#authors)
- [Acknowledgements](#acknowledgments)

---

## Introduction

A modern, responsive portfolio application built with React, TypeScript, and Vite. This application showcases infomation, skills, and projects with a beautiful, responsive user interface.

---

## Features

- Responsive design for all devices
- Interactive project showcase
- Smooth animations and transitions
- Contact form with email integration
- Social media integration
- SEO optimized
- Performance optimized

---

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **Icons:** React Icons
- **Form Handling:** React Hook Form
- **Email Integration:** EmailJS

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Santos2175/my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make a `.env` file with the variables inside that of `.env.example`

   ```bash
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

---

## Docker Support

The project includes Docker configuration for containerized deployment:

```bash
# Build the Docker image
docker build -t portfolio-app .

# Run the container
docker run -p 5173:5173 portfolio-app
```

---

## Authors

- Santosh Gurung

---

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animation library by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)
