SRI MUNESHWARA GROUP - WEBSITE FOLDER
=====================================

HOW TO OPEN
1. Open this folder in VS Code:  File > Open Folder
2. Install the "Live Server" extension, right-click index.html > "Open with Live Server"
   (or just double-click index.html to open it in your browser)

FOLDER GUIDE
index.html          the page text and layout (Home, Materials, About, Contact)
css/style.css       colours, fonts, sizes and design
js/main.js          phone number, language switch, page switching, photo viewer
js/translations.js  all Kannada text (each line matches a data-t="..." in index.html)
images/             all photos

COMMON CHANGES
- Phone number:   js/main.js -> lines  var PHONE  and  var DISPLAY  (Ctrl+F to find)
- Home banner photo: put a new photo in images/ and change the file name at the end of css/style.css
- Material photos: replace the files in images/ with the same file names
    rock-1.jpg ... rock-4.jpg  = Rock Size & Boulders page
    crusher-1.jpg, crusher-2.jpg = Crusher Material page
    crusher-plant.jpg = Crusher Material card and banner
- Change a word: edit it in index.html, then edit its Kannada line in js/translations.js

PUT IT ONLINE
Upload the whole folder (not just index.html) to Netlify, Cloudflare Pages or GitHub Pages.
The page needs internet for the fonts. Keep the folder structure exactly as it is.
