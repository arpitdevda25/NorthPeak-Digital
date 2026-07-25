# NorthPeak Digital - Single-Page Responsive Website

A modern, responsive, high-converting one-page website built for **NorthPeak Digital**, a fictional premier digital agency specializing in Web Development, UI/UX Design, SEO, Social Media Marketing, Shopify Development, and Branding.

---

## 🚀 Live Demo & Repository Setup

- **GitHub Repository Name**: `NorthPeak-Digital`
- **Deployment Platform**: Netlify or Vercel
- **Mandatory Footer**: Features `Built for Digital Heroes Training Task` linking to [https://digitalheroesco.com](https://digitalheroesco.com).

---

## 🛠️ Features & Highlights

1. **Hero Section**:
   - Company logo & title (`NorthPeak Digital`)
   - High-impact headline: *"Helping Businesses Grow Online"*
   - Subtitle description & primary/secondary CTA buttons
   - Visual dashboard graphic & live trust metrics (+60% Lead Boost, 99.4% Satisfaction)

2. **Services Section (6 Cards)**:
   - Web Development
   - UI/UX Design
   - SEO
   - Social Media Marketing
   - Shopify Development
   - Branding
   - Clean inline SVG icons, title, and detailed descriptions with hover micro-animations.

3. **Testimonials / Results Section (3 Cards)**:
   - 5-star ratings (★★★★★)
   - Real client quotes highlighting lead growth and ROI
   - Client avatars and company titles

4. **Pricing Section (3 Plans)**:
   - **Starter** ($299)
   - **Professional** ($799 - Featured plan badge)
   - **Enterprise** (Custom Pricing)
   - Interactive plan pre-selection that populates the contact form automatically.

5. **Contact Form & Client-Side Validation**:
   - Fields: Name, Email, Phone, Message
   - Real-time client-side validation for:
     - Non-empty field checks
     - Email regex format validation (`user@domain.com`)
     - Phone number format validation
   - Form submission feedback banner (success/error state handling)

6. **Responsive Layout**:
   - Fully optimized for:
     - **360 px** (Mobile phone)
     - **768 px** (Tablet)
     - **1440 px** (Desktop)
   - Accessible touch targets (minimum 48px height) and slide-out mobile drawer menu.

7. **Lighthouse Performance & Accessibility (90+)**:
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
   - Preconnected Google Fonts (`font-display: swap`)
   - WCAG AA compliant color contrast ratios (> 4.5:1)
   - Explicit `width` and `height` attributes on images to eliminate Cumulative Layout Shift (CLS)

---

## 📂 Folder Structure

```
NorthPeakDigital/
├── index.html          # Semantic HTML5 page structure
├── style.css           # Modern CSS system, custom properties, responsive media queries
├── script.js           # Navigation drawer, plan pre-fill, client-side validation logic
├── images/
│   ├── logo.png        # NorthPeak Digital brand logo
│   └── hero.jpg        # High-res hero dashboard visual
└── README.md           # Project documentation and deployment guide
```

---

## 📦 How to Push to GitHub & Deploy

### Step 1: Initialize Git and Push to GitHub

Run the following commands in your terminal inside the `NorthPeakDigital` directory:

```bash
# Initialize git repository
git init

# Add all project files
git add .

# Create initial commit
git commit -m "Initial commit: NorthPeak Digital responsive website"

# Rename branch to main
git branch -M main

# Add your GitHub remote repository (Replace USERNAME with your GitHub handle)
git remote add origin https://github.com/USERNAME/NorthPeak-Digital.git

# Push code to GitHub
git push -u origin main
```

---

### Step 2: Deploying to Vercel

1. Log into your [Vercel Account](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Import the `NorthPeak-Digital` repository from GitHub.
4. Keep framework preset as **Other** (Static HTML/CSS/JS).
5. Click **Deploy**. Your site will be live within seconds!

---

### Step 3: Deploying to Netlify

1. Log into your [Netlify Account](https://netlify.com).
2. Click **Add new site** -> **Import an existing project**.
3. Select **GitHub** and authorize access to `NorthPeak-Digital`.
4. Set publish directory to `.` (root).
5. Click **Deploy NorthPeak-Digital**.

---

## ⚡ Task B: Lighthouse Score Verification

To run a Lighthouse audit locally:
1. Open Chrome DevTools (`F12` or `Ctrl + Shift + I`).
2. Click on the **Lighthouse** tab.
3. Select **Mode**: Navigation, **Device**: Desktop or Mobile.
4. Check **Performance** and **Accessibility**.
5. Click **Analyze page load** / **Generate Report**.

*Target Performance & Accessibility: 90+*
