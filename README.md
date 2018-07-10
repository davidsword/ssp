# SSP - Modern Front-End Dev Skill Challenge

This is my take on a creative code challenge to develop a splash screen. The challenge instructions were minimal: provided with business-card-level details, a black and white logo, and an eps a vector with hipster forest graphics (aka: complete creative freedom) - make a simple splash page. After three sit downs, this is what I created:

🚀 https://io.davidsword.ca/ssp/

## Break Down

Here's a list of the features, tools, practices, standards, and techniques used:

**TOOLING**

-   npm
-   gulp

**CSS**

-   CSS Reseting
-   SASS
-   Dynamic parallax with transform
-   BEM naming convention
-   Using native system font
-   Alphabetized CSS declarations

**OPTIMIZATION**

-   617KB, 1.0s load time
-   `gulp-imagemin` for png, jpg, svg

**BENCHMARKS**

-   [91/100](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fio.davidsword.ca%2Fssp%2F&tab=desktop) Google PageSpeed
- [A 99%](https://gtmetrix.com/reports/io.davidsword.ca/u7Eoy3ID) GTMetrix

**INTEGRATION**

-   Schema.org tags
-   OpenGraph Tags
-   Twitter Cards
-   Proper favicons for all devices
-   `.webmanifest` & other graphical progressive web-app data

**JAVASCRIPT**

-   ES6 converted to ES5 with Babel
-   Componentized `.js` files, npm import, compiled with Webpack
    -   Handler for Email form
	-   Vanilla "waypoints" for scroll instruction icon

**HOSTING**

-   Served with ⚡http2
-   `mod_expire` browser cache
-   `mod_deflate` compression

### TODO

- [ ] Responsive
- [ ] Consider splitting css for Optimize CSS Delivery
- [ ] IE / Edge support, check Opera, Chrome, Firefox
