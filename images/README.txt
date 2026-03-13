=============================================
  SHARMAJI & SONS – IMAGES FOLDER GUIDE
=============================================

You can use ANY image format: .jpg, .jpeg, .png, or .webp
Just make sure the filename (including extension) matches what is written
in index.html. The default names below use .jpg — if your photo is a .png
or .webp, either rename it to .jpg or update the matching line in index.html.

  Format comparison:
    .jpg   → most common, works everywhere, good for photos
    .png   → larger file, good if image has transparency
    .webp  → best file size + quality, works in all modern browsers (recommended)

----------------------------------------------
REQUIRED IMAGES
----------------------------------------------

1. hero-bg.jpg  (or hero-bg.png / hero-bg.webp — update index.html to match)
   Used as: Full-width background for the Hero section
   Size: At least 1920 x 1080 px (landscape / wide)
   Suggestions:
     - A wide shot of a turmeric or spice farm (Kerala / Rajasthan)
     - Colourful spice sacks at a port / warehouse
     - Overhead flat-lay of multiple spices
   Free sources: Unsplash (unsplash.com), Pexels (pexels.com)
   Search terms: "turmeric farm India", "spice market India", "Indian spices overhead"

2. turmeric.jpg  (or .png / .webp)
   Used as: Product card photo for Organic Turmeric Powder
   Size: At least 600 x 500 px
   Suggestions:
     - Close-up of turmeric powder in a bowl or on a surface
     - Whole turmeric roots alongside the powder
   Search terms: "turmeric powder bowl", "organic turmeric"

3. cardamom.jpg  (or .png / .webp)
   Used as: Product card photo for Green Cardamom
   Size: At least 600 x 500 px
   Suggestions:
     - Green cardamom pods in a pile or rustic bowl
     - Close-up showing texture and colour
   Search terms: "green cardamom pods", "cardamom Kerala"

4. pepper.jpg  (or .png / .webp)
   Used as: Product card photo for Black Pepper
   Size: At least 600 x 500 px
   Suggestions:
     - Black peppercorns in a bowl or spilled on a surface
   Search terms: "black pepper Malabar", "black peppercorns"

----------------------------------------------
HOW TO USE A DIFFERENT FORMAT
----------------------------------------------
If your file is called, for example, "turmeric.png" instead of "turmeric.jpg",
open index.html and find the line that says:

    <img src="images/turmeric.jpg" ...>

Change it to:

    <img src="images/turmeric.png" ...>

Do the same for any other image you want to swap the format of.

----------------------------------------------
OPTIONAL – SHIPMENT PROOF PHOTOS
----------------------------------------------
Add real photos from your shipments to the Trust section.
Replace the placeholder cards in index.html with <img> tags pointing to these files.
Any format works here too (.jpg, .png, .webp).

  shipment-1.jpg  → Packed spice bags at the farm or warehouse
  shipment-2.jpg  → Goods loaded or at the port (Chennai/Kochi)
  shipment-3.jpg  → Shipping documents / tracking screen

----------------------------------------------
TIPS
----------------------------------------------
- Compress images before uploading using: https://squoosh.app
  (converts to .webp and reduces file size significantly)
- Aim for file sizes under 200 KB per image.
- Use descriptive alt text in index.html (already set for the main product images).

=============================================
