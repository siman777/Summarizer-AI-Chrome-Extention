# Summarizer AI - Chrome Extension

Summarizer AI is a simple and powerful Chrome extension that uses AI to summarize web page content, helping you understand key information quickly without reading everything.

## 🚀 Features

- 🔍 One-click content summarization
- 🤖 Powered by AI
- 🌐 Works on most websites
- 🧠 Saves you time and effort

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/siman777/Summarizer-AI-Chrome-Extention.git
2.Open Chrome and go to:
chrome://extensions/

3.Enable Developer Mode (top right)

4.Click "Load unpacked" and select the project folder

5.The extension should now appear in your Chrome toolbar

📦 Project Structure
```bash
Summarizer-AI-Chrome-Extension/
├── manifest.json       # Chrome extension configuration
├── popup.html          # Popup UI
├── popup.js            # Handles popup logic
├── background.js       # Background script for extension events
├── content.js          # Injected script to read page content
└── style.css           # Styles for the popup

🧠 How It Works
The extension reads visible text from the current web page, sends it to an AI model (like OpenAI’s GPT), and displays a summarized version in the popup.

📄 License
MIT License. Free to use and modify.

🙋‍♂️ Author
Made with ❤️ by Siman
