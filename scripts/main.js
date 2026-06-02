const weddingDate = new Date('2026-10-31T12:30:00+01:00');

const translations = {
  es: {
    nav: {
      date: 'Fecha',
      details: 'FAQ',
      location: 'Lugar',
      schedule: 'Horario',
    },
    hero: {
      title: 'LÉNA & NICOLE',
      quote: 'Hay encuentros que parecen casualidad, hasta que descubres que eran serendipia.',
      cta: 'Confirmar asistencia',
    },
    date: {
      title: 'Nos vemos en otoño',
      text:
        'Será una celebración tranquila, bonita y muy nuestra: hojas doradas, detalles burdeos, buena mesa y ganas de compartir el día con la gente que queremos.',
      full: 'Sábado, 31 de octubre de 2026',
      rugby:
        'Ese día jugamos el partido más bonito: todas las personas que queremos en el mismo equipo.',
    },
    countdown: {
      title: 'Cuenta atrás',
      days: 'días',
      hours: 'horas',
      minutes: 'min',
      seconds: 'seg',
    },
    faq: {
      title: 'Preguntas frecuentes',
      dateTitle: 'Fecha',
      dateText: 'Sábado, 31 de octubre de 2026.',
      timeTitle: 'Hora',
      timeText: 'La ceremonia empezará a las 12:30. Recomendamos llegar con un poco de margen.',
      dressTitle: 'Dress code',
      dressText: 'Elegante y cómodo. Si te apetece, puedes añadir un guiño otoñal o burdeos.',
      halloweenText:
        'Por la noche habrá Halloween After Party. El disfraz es opcional, la actitud no.',
      kidsTitle: 'Niños',
      kidsText: 'Estamos preparando los detalles finales. Actualizaremos esta sección más adelante.',
      giftTitle: 'Regalo',
      giftText:
        'Lo importante es que vengas. Si más adelante añadimos alguna indicación, aparecerá aquí.',
    },
    location: {
      title: 'Cómo llegar',
      addressLabel: 'Dirección',
      address: 'Molino Galán, Alborache, Valencia',
      text:
        'El lugar está en Alborache, rodeado de naturaleza y muy cerca de Valencia. Más adelante añadiremos indicaciones precisas de llegada, transporte y aparcamiento.',
      map: 'Abrir en Google Maps',
    },
    accommodation: {
      title: 'Alojamiento',
      text:
        'Plazas limitadas, unas 60 aproximadamente. Tendrán prioridad las personas invitadas de Francia y quienes vengan de fuera de Valencia.',
    },
    schedule: {
      title: 'Horario provisional',
      ceremonyTitle: 'Ceremonia',
      ceremonyText: 'El primer silbato del día, con emoción y pañuelos cerca.',
      cocktailTitle: 'Cóctel',
      cocktailText: 'Brindis, abrazos y algo rico para empezar la celebración.',
      dinnerTitle: 'Cena',
      dinnerText: 'Mesa larga, conversación fácil y detalles de temporada.',
      partyText: 'Disfraz opcional para quien quiera rematar la noche con un poco de magia.',
    },
    rsvp: {
      title: 'Confirmación de asistencia',
      text:
        'Aquí irá el formulario de Google Forms para confirmar asistencia, alergias, alojamiento y otros detalles importantes.',
      button: 'Formulario próximamente',
    },
    footer: {
      text: 'Léna & Nicole · 31 de octubre de 2026 · Con cariño y un toque burdeos',
    },
  },
  fr: {
    nav: {
      date: 'Date',
      details: 'FAQ',
      location: 'Lieu',
      schedule: 'Programme',
    },
    hero: {
      title: 'LÉNA & NICOLE',
      quote:
        "Certaines rencontres ressemblent au hasard, jusqu'à ce qu'on comprenne que c'était de la sérendipité.",
      cta: 'Confirmer ma présence',
    },
    date: {
      title: 'Rendez-vous en automne',
      text:
        "Une célébration douce, élégante et très personnelle : feuilles dorées, détails bordeaux, belle table et l'envie de partager ce jour avec celles et ceux qu'on aime.",
      full: 'Samedi 31 octobre 2026',
      rugby:
        "Ce jour-là, nous jouons le plus beau match : toutes les personnes qu'on aime dans la même équipe.",
    },
    countdown: {
      title: 'Compte à rebours',
      days: 'jours',
      hours: 'heures',
      minutes: 'min',
      seconds: 'sec',
    },
    faq: {
      title: 'Questions fréquentes',
      dateTitle: 'Date',
      dateText: 'Samedi 31 octobre 2026.',
      timeTitle: 'Heure',
      timeText:
        "La cérémonie commencera à 12h30. Nous vous conseillons d'arriver un peu en avance.",
      dressTitle: 'Dress code',
      dressText: "Élégant et confortable. Un clin d'oeil automnal ou bordeaux est le bienvenu.",
      halloweenText:
        "Le soir, place à la Halloween After Party. Le déguisement est optionnel, l'envie de danser beaucoup moins.",
      kidsTitle: 'Enfants',
      kidsText:
        'Nous préparons encore les derniers détails. Cette section sera mise à jour plus tard.',
      giftTitle: 'Cadeau',
      giftText:
        "Le plus important est votre présence. Si nous ajoutons une indication, elle apparaîtra ici.",
    },
    location: {
      title: 'Comment arriver',
      addressLabel: 'Adresse',
      address: 'Molino Galán, Alborache, Valence',
      text:
        "Le lieu se trouve à Alborache, entouré de nature et proche de Valence. Nous ajouterons bientôt les indications précises d'accès, de transport et de stationnement.",
      map: 'Ouvrir dans Google Maps',
    },
    accommodation: {
      title: 'Hébergement',
      text:
        "Places limitées, environ 60. Priorité aux invitées et invités venant de France et de l'extérieur de Valence.",
    },
    schedule: {
      title: 'Programme provisoire',
      ceremonyTitle: 'Cérémonie',
      ceremonyText: 'Le premier coup de sifflet de la journée, avec émotion garantie.',
      cocktailTitle: 'Cocktail',
      cocktailText: 'Toasts, retrouvailles et de quoi commencer la fête en beauté.',
      dinnerTitle: 'Dîner',
      dinnerText: 'Une belle table, des conversations faciles et des détails de saison.',
      partyText: 'Déguisement optionnel pour terminer la soirée avec une touche de magie.',
    },
    rsvp: {
      title: 'Confirmation de présence',
      text:
        "Le formulaire Google Forms sera intégré ici pour confirmer la présence, les allergies, l'hébergement et les informations importantes.",
      button: 'Formulaire à venir',
    },
    footer: {
      text: 'Léna & Nicole · 31 octobre 2026 · Avec amour et une touche bordeaux',
    },
  },
};

function getNestedValue(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getNestedValue(translations[language], element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.classList.toggle('active', button.dataset.language === language);
  });
}

function updateCountdown() {
  const distance = Math.max(weddingDate.getTime() - Date.now(), 0);
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);
  const seconds = Math.floor((distance % 60_000) / 1_000);

  document.querySelector('#days').textContent = String(days).padStart(2, '0');
  document.querySelector('#hours').textContent = String(hours).padStart(2, '0');
  document.querySelector('#minutes').textContent = String(minutes).padStart(2, '0');
  document.querySelector('#seconds').textContent = String(seconds).padStart(2, '0');
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

setLanguage('es');
updateCountdown();
window.setInterval(updateCountdown, 1000);
