# portfolio-site

Going to try and replicate this design
https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE

TailwindCSS PostCSS Setup

```bash
npm install tailwindcss@compat postcss@^7 autoprefixer@^9
```

Then add file `postcss.config.js`

```js
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer
  ]
};
```

Then add file `tailwind.config.js`

```js
module.exports = { 
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/views/**/*.vue',
      'src/pages/**/*.vue',
    ]
  }
};
```


## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
