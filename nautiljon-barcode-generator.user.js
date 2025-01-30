// ==UserScript==
// @name         Nautiljon EAN Barcode Generator
// @namespace    https://github.com/nitatemic
// @version      1.1
// @description  Automatically generates a barcode next to the EAN (ISBN) code on manga volume pages on Nautiljon. The script extracts the EAN from the "itemprop='isbn'" attribute and uses JsBarcode to render the barcode visually.
// @author       Nitatemic
// @match        https://www.nautiljon.com/mangas/*
// @require      https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js
// @grant        none
// @homepageURL  https://github.com/nitatemic/Nautiljon-EAN-Barcode-Generator
// @supportURL   https://github.com/nitatemic/Nautiljon-EAN-Barcode-Generator/issues
// @updateURL    https://github.com/nitatemic/Nautiljon-EAN-Barcode-Generator/raw/main/nautiljon-barcode-generator.user.js
// @downloadURL  https://github.com/nitatemic/Nautiljon-EAN-Barcode-Generator/raw/main/nautiljon-barcode-generator.user.js
// ==/UserScript==

(function () {
    'use strict';

    // Fonction pour ajouter le code-barres
    function addBarcode() {
        // Recherche l'élément contenant l'attribut itemprop="isbn"
        const isbnElement = document.querySelector('[itemprop="isbn"]');
        if (!isbnElement) return; // Si aucun EAN n'est trouvé, on arrête

        // Récupère le code EAN
        const eanCode = isbnElement.textContent.trim();
        if (!eanCode) return; // Vérifie que le code EAN existe

        // Crée un conteneur pour le code-barres
        const barcodeContainer = document.createElement('div');
        barcodeContainer.style.marginTop = '10px'; // Espacement visuel

        // Crée un élément canvas pour le code-barres
        const canvas = document.createElement('canvas');
        barcodeContainer.appendChild(canvas);

        // Insère le conteneur après l'élément EAN
        isbnElement.parentNode.appendChild(barcodeContainer);

        // Génère le code-barres
        JsBarcode(canvas, eanCode, {
            format: 'EAN13',
            displayValue: true,
            fontSize: 16,
            margin: 10,
        });
    }

    // Exécute la fonction après le chargement de la page
    window.addEventListener('load', addBarcode);
})();
