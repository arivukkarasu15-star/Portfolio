# Arivukkarasu K — Python Full Stack Developer Portfolio

Personal portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**.

No frameworks. No build tools. No dependencies.

---

## ⚡ How to Run

### Option 1: Python Local Server (Recommended)

```powershell
python -m http.server 3000
```

Then open: **[http://localhost:3000](http://localhost:3000)**

### Option 2: Open Directly

Double-click `index.html` to open it in any web browser.

---

## 📁 Project Structure

```
Portfolio/
├── index.html            # Main HTML5 structure and all sections
├── css/
│   └── style.css         # CSS3 styling, dark theme, responsive layout
├── js/
│   ├── data.js           # ⭐ Edit all portfolio content here
│   └── main.js           # Vanilla JS — navbar, modals, filters, form
├── assets/
│   ├── profile.jpg       # Profile photo
│   ├── resume.pdf        # Downloadable resume PDF
│   ├── favicon.svg       # Browser tab icon
│   └── og-preview.png    # Social media link preview card
└── README.md
```

---

## 🛠 How to Update Content

All personal details, skills, projects, and career history live in one file:

👉 **`js/data.js`**

| What to update | Where |
|---|---|
| Name, email, links | `portfolioData.personalInfo` |
| About Me paragraphs | `portfolioData.about` |
| Skills | `portfolioData.skills` |
| Projects | `portfolioData.projects` |
| Work experience | `portfolioData.experience` |
| Education | `portfolioData.education` |
| Certificates | `portfolioData.certificates` |

Replace `assets/resume.pdf` with your latest resume PDF to update the download link.

---

## 🌐 Deployment

### GitHub Pages (Free)

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, root folder `/`.
4. Click **Save**. Live at `https://<your-username>.github.io/<repo-name>/`.

### Netlify

Drag and drop this folder into [Netlify Drop](https://app.netlify.com/drop). No build command needed.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Custom Properties) |
| Scripting | Vanilla JavaScript (ES6+) |
| Server (local) | Python `http.server` |
