# Harry's Blog

A personal blog website built with Next.js + React + Tailwind + MDX

<img src="./public/Images/kemiao.jpg" alt="赞美愚者" height="280" width="280"/>

## 📌 About

This is a personal ~~website~~ blog I created to share tech-related posts and personal thoughts as I continue my journey of learning and life. It will be continuously updated with new features and UI improvements in the future.

## 🛠️ Stuff I used

- **MDX**
- **React**
- **Vercel**
- **Next.js**
- **Tailwind**
- **Material UI**
- **framer-motion**

## 🚩 Features

- **GitHub API**: Fetches GitHub repositories API to display the top 5 starred projects.
- **Dark/Light Mode**: Implements seamless theme switching using `next-themes`.
- **Blogs**: Utilizes MDX to process `.mdx` files and create a blog system.
- **Tag Cloud**: Generates a tag cloud by extracting tags from blog metadata.
- **Comments**: Integrates a comment system powered by `Giscus`.
- **Animations**: Implements smooth UI transitions and effects using `Framer Motion`.  

<br>

# How to Run

## 🚀 Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🪄 Steps to Run

### 1. Clone the Repository

Use `git` to clone the project to your local machine:
```bash
git clone https://github.com/HarrryHe/Harry-Blog.git
cd Harry-Blog
```

### 2. Install Dependencies

Install the required dependencies using `npm` or `yarn`
```bash
npm install
```
or
```bash
yarn install
```

### 3. Start the Development Server

Run the following command to start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and visit
```
http://localhost:3000
```

### 4. Customize Your Blog

Once you've started the development server, feel free to make this blog your own. You can:
- Modify existing components or add new ones.
- Customize the styles and layouts to suit your preferences.
- Update content, features, or designs to align with your personal information.

## 💭 Giscus Setting

### 1. Install Dependencies

Make sure you already ran `npm install` or `yarn install`. If not, you need to run 
```bash
# Change npm with the package manager you use 
npm i @giscus/react
```

### 2. Open the Discussions section in your GitHub repository settings:

Go to your repository settings on GitHub, and enable discussions.  

### 3. Add Giscus into your project

Import the Giscus component:

```bash
import Giscus from '@giscus/react';
```

Add the component to your page (sample):

```bash
<Giscus
      id="comments"
      repo="giscus/giscus-component"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
```

See more in 
[Github Giscus Documentation](https://github.com/giscus/giscus-component)

## 🏠 Build for Production

To create an optimized production build, run:

```bash
npm run build
```
or
```bash
yarn build
```

You can then start the production server using:
```bash
npm run start
```
or
```bash
yarn start
```

## ❤️ Contribution

Contributions are welcome! Fork the repository, make your changes, and open a pull request. Please keep your changes focused and well-documented. Thank you for your support! 🎉






