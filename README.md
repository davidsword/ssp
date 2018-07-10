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

-   ~700kb, 60ms load time

**BENCHMARKS**

-   (tbd)

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

- [ ] Consider splitting css for Optimize CSS Delivery
- [ ] Responsive
- [ ] IE / Edge support, check Opera, Chrome, Firefox
- [ ] 100/100 on PageSpeed.
- [ ] A on GTMetrics.
