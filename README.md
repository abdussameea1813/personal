# Abdussameea's Personal Portfolio Website

This repository hosts my personal portfolio website, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. It showcases my projects, skills, and provides a way to get in touch. The site is fully responsive and optimized for a smooth user experience.

---

## 🚀 Live Demo

Check out the live version of my portfolio here:
**[https://abdussameea1813.github.io/personal/](https://abdussameea1813.github.io/personal/)**

---

## ✨ Features

* **About Me Section:** A detailed overview of my background, experience, and passion for software development.
* **Skills & Technologies:** A comprehensive list of my technical proficiencies, categorized for clarity.
* **Featured Projects:** Highlights of key projects with descriptions, technologies used, and links to live demos and GitHub repositories.
* **Contact Section:** Easy ways to connect, including email, GitHub, and LinkedIn.
* **Responsive Design:** Optimized for seamless viewing across all devices (desktops, tablets, and mobile phones).
* **Dark/Light Mode Toggle:** User-friendly theme switching for personalized Browse.
* **Animations:** Subtle scroll-based animations for an engaging experience.

---

## 🛠️ Technologies Used

This project is built using a modern web development stack:

* **Framework:** [Next.js 15](https://nextjs.org/) (with App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Components:** [Shadcn UI](https://ui.shadcn.com/) (built on Radix UI)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## ⚙️ Setup and Local Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/abdussameea1813/personal.git](https://github.com/abdussameea1813/personal.git)
    cd personal
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Build for production (optional, but good for local testing):**
    ```bash
    npm run build
    # or
    # yarn build
    ```
    This command will generate the static export files in the `out/` directory.

---

## 🚀 CI/CD with GitHub Actions

This repository utilizes **GitHub Actions** to implement a Continuous Integration (CI) and Continuous Deployment (CD) pipeline.

* **Automated Linting:** Every push to the `main` branch automatically runs ESLint to maintain code quality and catch errors early.
* **Automated Build:** After successful linting, the Next.js project is automatically built into static files, ready for deployment.
* **Automated Deployment:** The built static site is then automatically deployed to [GitHub Pages](https://pages.github.com/) whenever changes are pushed to `main`. This ensures that the live version of the portfolio is always up-to-date with the latest code.

The CI/CD workflow is defined in `.github/workflows/ci-cd-pipeline.yml`.

---

## 📞 Contact

Feel free to reach out if you have any questions or opportunities!

* **Email:** abdussameea1@gmail.com
* **GitHub:** [abdussameea1813](https://github.com/abdussameea1813)
* **LinkedIn:** [Abdussameea Patel](https://linkedin.com/in/abdussameea-patel)

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---
