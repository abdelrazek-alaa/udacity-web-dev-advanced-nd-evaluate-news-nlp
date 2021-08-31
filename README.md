# Evaluate a News Article with Natural Language Processing

This web app allows users to run Natural Language Processing (NLP) on articles or blogs. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.

## technologies used

- HTML / Sass
- JavaScript
- Node/Express
- Webpack
- meaningcloud API
- Jest
- Google Workbox plugin ( Service Workers )

### Quick Start

To get this project up and running locally on your computer:

1. Set up a Nodejs development environment.
1. Sign up for API key at www.meaningcloud.com
1. Create new .env file and fill with your API key
1. Once you have node setup, enter the following commands:

```
  npm install
  npm run build-prod
  npm run start

```

1. Open a browser at http://localhost:8081/
