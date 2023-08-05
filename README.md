<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Photo gallery][product-screenshot]

This is a photo gallery built with [Create React App](https://create-react-app.dev/) and the [Pexel API](https://www.pexels.com/api/) <br /> 
<a href="https://photo-book-07311106.netlify.app/">View Demo</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Clone this repo locally

```sh
git clone https://github.com/sdolmo/photo-book.git

```

### Prerequisites

This application runs with the following node and npm versions

- node

  ```sh
  v20.1.0
  ```

- npm
  ```sh
  v9.6.6
  ```

### Installation

1. Get a free API Key at [Pexel](https://www.pexels.com/onboarding)

2. Install NPM packages
   ```sh
   npm install
   ```
3. Make a copy of the `.env.sample` file and rename it `.env`
4. Enter your API Key in `.env`
   ```js
   REACT_APP_PEXEL_API_KEY = {ENTER YOUR API};
   ```
5. Start application
   ```sh
   npm start
   ```

Open http://localhost:3000 in your browser to see the result

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sylvia Dolmo - sylviadolmo@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./src/assets/images/pexel-proj.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
