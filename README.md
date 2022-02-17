# Instagram Clone by CWF

🚀 Project build with Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check my [demo](https://cwfgram.vercel.app/).

### Features

- Story Slider
- Post list
- Image Slider within post
- Avatar and username hover pop up
- Switch user (pc version)
- Suggest user list
- Post Comment
- Reply and Like others comment
- Placeholder post for loading effect
- Double layer Modal

---

### Pregress Log
<details>
  <summary>12 Feb 2022</summary>
  
  - Initialize project with NextJs stater
  - Complete story slider
  - Start building post
</details>

---
<details>
  <summary>13 Feb 2022</summary>

- Complete basic UI of post
- Complete user panel in PC version
- Add basic SEO
- Deploy to vercel 
</details>

---
<details>
  <summary>14 Feb 2022</summary>
  
- Complete comment section in PC version

</details>

---
<details>
  <summary>15 Feb 2022</summary>
  
- Placeholder post for loading effect
- Add more option modal on top of the post modal (double layer modal)

</details>

---

<details>
  <summary>16 Feb 2022</summary>
  
- Add userStore 
- Complete delete comment function

</details>

---

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/cwf96991/IGClone.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CWF](https://cwf96991.github.io/) 

<!--
[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz) 
-->
