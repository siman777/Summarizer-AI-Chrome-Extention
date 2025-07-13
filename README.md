# 🧠 AI Summary for Articles – Chrome Extension

![Chrome Extension](https://img.shields.io/badge/Platform-Chrome-yellow?logo=googlechrome)
![Gemini API](https://img.shields.io/badge/AI-Gemini-blueviolet?logo=google)
![License](https://img.shields.io/badge/license-MIT-green)

**AI Summary for Articles** is a Chrome extension that summarizes any web article into brief, detailed, or bullet-point formats using the Gemini API. This project demonstrates how to build a modern, user-friendly Chrome extension that integrates AI, content scripts, and secure key storage.

---

## 🚀 Features

- 📄 **Summarize Articles** – Brief, detailed, or bullet-point formats
- 🤖 **Gemini API Integration** – Tailored prompts for summary types
- 🧩 **Content Script Architecture** – Clean separation of popup, content, and background scripts
- 🔐 **Secure API Key Storage** – Via `chrome.storage.sync`
- 📰 **DOM Text Extraction** – From `<article>` or `<p>` tags
- 📋 **Copy to Clipboard** – For sharing summaries
- 🎨 **Modern UI** – Dropdowns, spinners, styled popup
- 🛠 **Manifest V3 Compliance** – Uses service workers
- 🌐 **Easy Deployment** – Load unpacked or publish on Web Store

---

## 📂 Folder Structure

```
ai-summary-extension/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── options.html
├── options.js
├── styles.css
├── assets/
```

---

## 🧠 How It Works

1. **User loads a webpage** with an article
2. **Popup launched** via extension icon
3. **Content script extracts text** from the page DOM
4. Text sent to **Gemini API** based on selected format
5. **Summary displayed** in the popup with copy option

---

## 📦 Tech Stack

| Tech             | Use Case |
|------------------|----------|
| **Chrome Extensions API** | Permissions, scripts, storage |
| **Gemini API**    | Summarization |
| **JavaScript (ES6)** | Async logic, event handling |
| **HTML + CSS**    | Popup and options UI |
| **Chrome Storage Sync** | Save and retrieve API key securely |

---

## 🛠 Getting Started

1. Clone this repository  
```bash
git clone https://github.com/your-username/ai-summary-extension.git
```

2. Go to Chrome > Extensions > Load Unpacked  
   Select the project folder

3. Set your **Gemini API key** in `Options` page

4. Visit an article and click the extension icon

5. Choose summary type and click "Generate Summary"

---

## 🔐 Permissions (Manifest V3)

```json
"permissions": ["storage", "scripting", "activeTab"],
"host_permissions": ["<all_urls>"],
"action": { "default_popup": "popup.html" }
```

---

## 📋 To Do & Ideas

- [ ] Add support for PDF summarization
- [ ] Theme switcher (dark/light)
- [ ] Toggle between Gemini and OpenAI APIs
- [ ] Save summary history
- [ ] Context-menu summarization


## 👨‍💻 Author

**Siman D Ranjan Raj**  
Chrome Extension & Full Stack Developer  
[LinkedIn](www.linkedin.com/in/simanraj)

---

## 📄 License

This project is licensed under the MIT License.
