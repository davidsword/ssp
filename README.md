# SSP - Modern Front-End Dev Skill Challenge

This is my take on a creative code challenge to develop a splash screen. The challenge instructions were minimal: provided with business-card-level details, a logo, and some hipster-forest graphics, build a simple splash page. After three sit downs, this is what I built:

🚀 https://io.davidsword.ca/ssp/

## Break Down

This challenge is more than just what you build, it's how. Here's a list of the features, tools, practices, standards, and techniques used:

**TOOLING**

-   npm
-   gulp

**CSS**

-   SASS
-   BEM naming convention
-   Alphabetized CSS declarations
-   Dynamic parallax effect with transform
-   Used native system font
-   Support on all modern browsers
-   Browser Reseting
-   Responsive

**JAVASCRIPT**

-   Used ES6, converted to ES5 with Babel
-   Componentized `.js` files
-   Used `npm` modules
-   Compiled with Webpack
-   Minified

**OPTIMIZATION**

-   628KB, 0.9s load time
-   `gulp-imagemin` for png, jpg, svg

**INTEGRATION**

-   Schema.org tags
-   OpenGraph Tags
-   Twitter Cards
-   Analytics
-   Proper favicons for all devices
-   `.webmanifest` & other progressive-web-app-related data

**HOSTING**

-   SSL
-   Served with ⚡http2
-   `mod_expire` browser cache
-   `mod_deflate` compression

**BENCHMARKS**

- [A 99%](https://gtmetrix.com/reports/io.davidsword.ca/9moOYY25) GTMetrix
-   [91/100](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fio.davidsword.ca%2Fssp%2F&tab=desktop) Google PageSpeed


## TODO

- [ ] Consider splitting CSS for optimized delivery
- [ ] Add support for non-modern browsers (>2y old)
- [ ] Use `body` instead of `.prllx` for scrolling on mobile
