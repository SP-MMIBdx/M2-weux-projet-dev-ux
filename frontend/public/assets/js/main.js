// JavaScript principal de l'application

// Header commun à toutes les pages

async function loadHeader() {
  const header = document.getElementById("site-header");

  if (!header) {
    return;
  }

  try {
    const response = await fetch("includes/header.html");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const html = await response.text();
    header.innerHTML = html;
  } catch (error) {
    console.error("Impossible de charger l’en-tête commun.", error);
  }
}

loadHeader();