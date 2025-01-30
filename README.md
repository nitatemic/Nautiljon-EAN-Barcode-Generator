# Nautiljon EAN Barcode Generator

![Version](https://img.shields.io/badge/version-1.1-blue)
![License](https://img.shields.io/badge/license-GPL%20v3.0-green)

## 📜 Description

This userscript automatically generates a barcode next to the EAN (ISBN) code on manga volume pages on [Nautiljon](https://www.nautiljon.com/). It extracts the EAN from the `itemprop="isbn"` attribute and uses [JsBarcode](https://github.com/lindell/JsBarcode) to render the barcode.


---

## 🚀 Features

- Automatically detects and extracts the EAN code on supported pages.
- Dynamically generates a barcode using the EAN code.
- Lightweight and fast.

---

## 🛠️ Installation

1. Install a userscript manager for your browser:
   - [ViolentMonkey](https://violentmonkey.github.io/)(Recommended)
   - [Tampermonkey](https://www.tampermonkey.net/) 
   - [Greasemonkey](https://www.greasespot.net/)
   - ~~[AdGuard](https://adguard.com/fr/welcome.html)~~(Not working)

3. Click on the link below to install the script:
   - [Install the Script](https://github.com/nitatemic/Nautiljon-EAN-Barcode-Generator/raw/main/nautiljon-barcode-generator.user.js)

4. Visit a manga volume page on Nautiljon (e.g., [Rent-a-Girlfriend Volume 3](https://www.nautiljon.com/mangas/world-s+end+harem/volume-1,28363.html](https://www.nautiljon.com/mangas/rent-a-girlfriend/volume-3,36568.html)) to see it in action!

---

## 📄 How It Works

1. The script scans the page for the EAN code within the `itemprop="isbn"` attribute.
2. It generates a barcode using the `JsBarcode` library.
3. The barcode is displayed directly below the EAN code on the page.

---

## 🖥️ Development

### Prerequisites
- Basic knowledge of userscripts.
- A userscript manager (e.g., Tampermonkey).

### Modify the Script
1. Clone the repository:
   ```bash
   git clone https://github.com/VotreNom/nautiljon-barcode-script.git
   cd nautiljon-barcode-script
