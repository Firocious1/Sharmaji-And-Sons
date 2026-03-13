# Sharmaji & Sons – Website Setup Guide

## File Structure

```
Sharmaji & Sons/
├── index.html        ← Main website (open this in your browser)
├── css/style.css     ← All styles
├── js/main.js        ← Animations, form logic, nav behaviour
├── images/           ← Add your photos here (see README.txt inside)
│   └── README.txt    ← Photo requirements and naming guide
└── SETUP.md          ← This file
```

---

## Step 1 – Add Your Photos

See `images/README.txt` for full details. Any format works: `.jpg`, `.png`, or `.webp`.
The default filenames in `index.html` use `.jpg` — if your file has a different extension,
either rename it to `.jpg` or update the matching `<img src="...">` line in `index.html`.

Required photos (default names):
- `images/hero-bg.jpg` – Hero background (spice farm or port)
- `images/turmeric.jpg` – Turmeric product photo
- `images/cardamom.jpg` – Cardamom product photo
- `images/pepper.jpg` – Black pepper product photo

Recommended: convert to `.webp` using https://squoosh.app — best quality at smallest file size.

---

## Step 2 – Set Up Formspree (Contact Form)

1. Go to https://formspree.io and create a free account.
2. Click **New Form** → name it "Sharmaji & Sons Sample Request".
3. Copy the form endpoint — it looks like: `https://formspree.io/f/abcdefgh`
4. Open `index.html`, find line ~319:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID (e.g., `abcdefgh`).
6. Every time someone submits the form, Formspree emails you instantly. Free tier = 50 submissions/month.

---

## Step 3 – Update Your Contact Details

Search `index.html` for `919876543210` and replace with your actual WhatsApp number (country code + number, no spaces or dashes).

Search for `hello@sharmajiasons.com` and replace with your real email.

---

## Step 4 – Set Up Tawk.to Live Chat (Optional but Recommended)

1. Go to https://www.tawk.to and sign up free.
2. Create a new property → name it "Sharmaji & Sons".
3. Copy the embed JavaScript snippet they give you.
4. Open `index.html`, find the comment block near the bottom (lines ~463–480).
5. Delete the comment block and paste your Tawk.to script in its place.

---

## Step 5 – Host the Website

**Option A – Netlify (recommended, free):**
1. Go to https://netlify.com → sign up free.
2. Drag and drop the entire `Sharmaji & Sons` folder onto the Netlify deploy page.
3. Your site goes live instantly with a URL like `https://sharmajiasons.netlify.app`.
4. You can set a custom domain (e.g., `www.sharmajiasons.com`) later.

**Option B – GitHub Pages (free):**
1. Create a GitHub account and a new repository.
2. Upload all files, then go to Settings → Pages → set source to `main` branch.

**Option C – cPanel Hosting:**
Upload all files into the `public_html` folder via File Manager or FTP.

---

## Step 6 – Replace Placeholder Testimonials

In `index.html`, find the testimonial section (around line 245) and replace:
- "Anna M., Berlin" with a real customer quote when you have one.
- "James R., Melbourne" with another real quote.

---

## Checklist Before Going Live

- [ ] Hero background photo added
- [ ] All 3 product photos added
- [ ] Formspree form ID updated
- [ ] WhatsApp number updated
- [ ] Email address updated
- [ ] Tawk.to script added (optional)
- [ ] Tested on mobile (open in browser on your phone)
- [ ] Real testimonials added (once you have them)
