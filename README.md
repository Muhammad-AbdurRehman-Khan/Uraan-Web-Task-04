# Urraan Online Training - Task 04: Keefer Law Firm UI Conversion

## 📌 Project Overview
This project contains the complete HTML5 and CSS3 solution for **Task 04**, converting the reference mock-up design (`design.jpg`) for **Keefer Law Firm PLC** into a clean, pixel-accurate, semantic, and fully responsive web application.

---

## 🎨 Design & Layout Architecture

### 1. 🏛️ Header Section
- **Brand Identity**: Features the high-resolution Keefer Law Firm PLC logo (`images/logo.png`) on the left.
- **Direct Contact Box**: 
  - Call banner: `CALL OUR OFFICES NOW!` (Crimson bold text)
  - Primary telephone line: `540.433.6906` (Heavy charcoal bold typography)
  - Subtext: `Get Your Questions Answered Fast`

### 2. 🧭 Main Navigation Bar
- **Branded Gradient**: Styled using deep burgundy/crimson gradients (`images/menu_bg.gif`).
- **Navigation Items**:
  - `HOME`, `BIOGRAPHY`, `BLOG`, `AREAS WE SERVE`, `LIBRARY`, `CONTACT`
- **Responsive Mobile Menu**: Integrates `images/responsive_menu_icon.png` with smooth collapsible accordion functionality on screens $\le 640\text{px}$.

### 3. 🛡️ Hero Section & Case Evaluation Form
- **Left Column (Guarantee Banner)**:
  - High-impact graphic banner (`images/gurantee_banner.gif`) showcasing:
    - *Over 30 Years of Experience Defending DUI, DWI, Reckless Driving & Traffic Tickets*
    - *30 Years Gold Medal Seal*
    - *Protecting Your FREEDOM And Your Right To Drive*
    - Interactive hotspot button linking directly to law office details.
- **Right Column (Interactive Case Evaluation Form)**:
  - Authentic gradient background (`images/form_bg.jpg`).
  - Crimson header tab: `QUESTIONS?` with headline `Have a Question About Your Case?`
  - Angled red stamp: `images/confidential.png`.
  - Input fields for **Name**, **Email**, and **Phone** with inset borders.
  - Case narrative textarea with placeholder: `Tell us about your case here...`
  - Bottom bar with `100% Privacy Guaranteed` and submission button `Ask Us About Your Case ▶`.
  - Client-side validation with instant response feedback.

### 4. ⚡ Middle 3-Column Feature Cards
- **Column 1: DUI Case Evaluation**
  - Title: `CHARGED WITH DUI?` & `FREE CASE EVALUATION`
  - Descriptive legal advice text
  - Graphic checklist clipboard (`images/paste_board.gif`)
  - Red call-to-action button: `CLICK HERE ▶`
- **Column 2: Law Blog & Case Results (Dual Box)**
  - Top: `LAW BLOG` with traffic law briefing, laptop graphic (`images/pic1.gif`), and action button.
  - Bottom: `CASE RESULTS` with court gavel graphic (`images/order_icon.gif`) and action button.
- **Column 3: Certificates & Credentials**
  - Industry badges: **Avvo Rating 10 Superb** (`images/avo_rating_large.gif`) & **National College for DUI Defense** (`images/national_college_large.gif`).
  - Headline: `CERTIFICATES & CREDENTIALS` with 30-year track record notice.
  - Action button: `LEARN MORE ▶`.

### 5. 📖 Main 3-Column Content & Sidebar Section
- **Left Column (Practice Areas)**:
  - 4 Styled Practice Cards with left red gradient stripe, metallic gradient fill, and white typography:
    1. `DUI & DWI`
    2. `RECKLESS DRIVING`
    3. `SPEEDING TICKETS`
    4. `TRAFFIC VIOLATIONS`
  - Horizontal shadow divider (`images/lf_bt_hr_shadow.png`).
  - `LEARN MORE ABOUT` section with clean typography and topic navigation.
- **Center Column (Main Article)**:
  - Main heading: `<H1>PAGE TITLE HERE` matching mock-up typography.
  - 2 Clean, well-spaced paragraphs of legal copy formatted with balanced line-height.
- **Right Column (Sidebar Widgets & Social)**:
  - `CLIENT TESTIMONIALS` card with divider and action button.
  - `DOWNLOAD FREE REPORTS` card with divider and action button.
  - `CONTACT OUR OFFICES` card with divider and action button.
  - Centered legal credentials badges.
  - `FOLLOW US` section with Facebook, Google+, Twitter, and LinkedIn social icons.

### 6. 📜 Footer Section
- Deep charcoal/black footer with red accent top border.
- Copyright statement, Virginia legal notice, and navigation links.

---

## 🛠️ Key Technical Highlights
- **Semantic HTML5**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<form>`, `<label>`, `<input>`, `<textarea>`, and `<footer>`.
- **Pure Vanilla CSS3**: 1000px centered desktop canvas, custom CSS variables, flexbox and grid layouts, metallic gradients, and responsive media queries.
- **Interactive Evaluation Toolbar**:
  - **Live Web Page**: Full interactive web experience.
  - **Side-by-Side View**: Compares the live implementation directly against `images/design.jpg`.
  - **Overlay Mockup**: Renders a semi-transparent overlay of the original mock-up with an opacity slider for pixel-perfection validation.
- **Mobile Responsive Design**: Fluid layouts and collapsible touch menus for tablets and smartphones.

---

## 📁 File Structure
```
Task 04/
├── images/
│   ├── avo_rating_large.gif        # Avvo Rating 10 Superb badge
│   ├── bullet_red.gif              # Red arrow bullet icon
│   ├── bullet_white.gif            # White arrow bullet icon
│   ├── bullet_white_lrg.png        # Large white arrow icon
│   ├── confidential.png            # Confidential rubber stamp graphic
│   ├── design.jpg                  # Reference design mock-up
│   ├── fb_icon.gif                 # Facebook social icon
│   ├── form_bg.jpg                 # Case form background texture
│   ├── ft_bg.png                   # Footer background texture
│   ├── google_icon.gif             # Google social icon
│   ├── gurantee_banner.gif         # 30-year guarantee hero banner
│   ├── hr_shadow.png               # Horizontal shadow divider
│   ├── lf_bt_hr_shadow.png         # Left sidebar shadow divider
│   ├── linked_icon.gif             # LinkedIn social icon
│   ├── logo.png                    # Keefer Law Firm PLC brand logo
│   ├── menu_bg.gif                 # Burgundy navigation bar background
│   ├── national_college_large.gif  # NCDD member badge
│   ├── national_college_small.gif  # NCDD small badge
│   ├── order_icon.gif              # Law book with gavel graphic
│   ├── paste_board.gif             # Clipboard checklist graphic
│   ├── pic1.gif                    # Laptop graphic for Law Blog
│   ├── pra_bg_red.gif              # Practice area red vertical accent
│   ├── responsive_menu_icon.png    # Mobile hamburger toggle icon
│   └── twitter_icon.gif            # Twitter social icon
├── index.html                      # Semantic HTML5 web page
├── style.css                       # Complete responsive CSS stylesheet
├── script.js                       # Interactive controller & view switcher
└── README.md                       # Project documentation
```

---

## 🚀 How to View Locally
1. Open the `Task 04` directory in **VS Code** or your browser.
2. Open `index.html` with **Live Server** (or double-click `index.html` to open in any web browser).
3. Use the top preview toolbar to switch between **Live Web Page**, **Side-by-Side View**, or **Overlay Mockup**.
