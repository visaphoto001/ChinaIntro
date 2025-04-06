# China Introduction Website

A modern, responsive website showcasing various aspects of Chinese culture, history, geography, and cuisine. This website is built using HTML, CSS, and JavaScript, and is hosted on GitHub Pages.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Interactive navigation
- Sections covering:
  - Chinese Culture
  - History
  - Geography
  - Cuisine

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Setup and Deployment

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ChinaIntro.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ChinaIntro
   ```

3. To deploy on GitHub Pages:
   - Go to your repository's Settings
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select the branch you want to deploy (usually `main` or `master`)
   - Your site will be published at `https://yourusername.github.io/ChinaIntro`

## Local Development

To run this website locally, you have two options:

### Option 1: Using Python's Built-in Server (Recommended)
1. Make sure you have Python 3 installed on your system
2. Navigate to the project directory:
   ```bash
   cd ChinaIntro
   ```
3. Run the local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and visit `http://localhost:8000`
5. To stop the server, press `Ctrl+C` in the terminal

### Option 2: Direct File Opening
1. Simply open the `index.html` file in your web browser
   - Note: Some features might not work correctly due to browser security restrictions when opening files directly

The Python server method is recommended as it:
- Properly serves all static files (HTML, CSS, JavaScript)
- Handles MIME types correctly
- Avoids potential CORS issues
- Better simulates a real web hosting environment

## Analytics Setup

To track website visitors using Google Analytics:

1. Create a Google Analytics account:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account
   - Click "Start measuring"
   - Follow the setup wizard to create a new property

2. Get your Measurement ID:
   - In Google Analytics, go to Admin → Data Streams → Web
   - Create a new stream or select an existing one
   - Copy your Measurement ID (starts with "G-")

3. Update the tracking code:
   - Replace `G-XXXXXXXXXX` in `index.html` with your actual Measurement ID
   - The tracking code is already added in the `<head>` section of the HTML file

4. Verify tracking:
   - Deploy your website
   - Visit your website
   - Check Google Analytics Real-Time reports to confirm tracking is working

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 