const weddingDate = new Date('2026-10-31T13:00:00+01:00');

const translations = {
  es: {
    nav: {
      story: 'Historia',
      details: 'FAQ',
      location: 'Lugar',
      schedule: 'Horario',
      future: 'Regalo',
      memories: 'Recuerdos',
      rsvp: 'RSVP',
    },
    hero: {
      title: 'LENA & NICOLE',
      quote: 'Hay encuentros que parecen casualidad, hasta que descubres que eran serendipia.',
      cta: 'Confirmar asistencia',
    },
    date: {
      title: 'Nuestra historia',
      subtitle: 'Cómo empezó todo',
      paragraphOne: 'Nos conocimos jugando una contra la otra en un campo de rugby.',
      paragraphTwo:
        'Lo que comenzó como un encuentro casual se convirtió en una historia llena de viajes, aventuras, risas y complicidad.',
      paragraphThree:
        'Dos años después queremos celebrar con vosotros el comienzo de nuestro próximo capítulo.',
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
      timeText: 'La ceremonia empezará a las 13:00. Recomendamos llegar con un poco de margen.',
      dressTitle: 'Dress code',
      dressText:
        'Elegante y cómodo. Si te apetece, puedes traer disfraz de Halloween para la fiesta final.',
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
      cocktailTitle: 'Aperitivos',
      cocktailText: 'Un rato para picar, brindar y arrancar la celebración con calma.',
      gameTitle: 'Leles game',
      gameText: 'Un momento de juego y risas para seguir celebrando juntas.',
      dinnerTitle: 'Cena',
      dinnerText: 'Mesa larga, conversación fácil y detalles de temporada.',
      partyText: 'Disfraz opcional para quien quiera rematar la noche con un poco de magia.',
    },
    future: {
      kicker: 'Regalo',
      title: 'Un brindis por el futuro',
      textOne: 'Vuestra presencia es nuestro mejor regalo.',
      textTwo: 'Si además queréis participar en nuestro próximo proyecto...',
      button: 'Descubrir',
    },
    memories: {
      kicker: 'Fotos y vídeos',
      title: 'Compartir recuerdos',
      text: 'Después de la boda podréis compartir aquí vuestras fotos y vídeos.',
      button: 'Subir a Google Drive',
    },
    rsvp: {
      title: 'Confirmación de asistencia',
      text:
        'Aquí irá el formulario de Google Forms para confirmar asistencia, alergias, alojamiento y otros detalles importantes.',
      button: 'Abrir formulario',
    },
    footer: {
      names: 'Lena & Nicole',
      date: '31 de octubre de 2026',
    },
  },
  fr: {
    nav: {
      story: 'Histoire',
      details: 'FAQ',
      location: 'Lieu',
      schedule: 'Programme',
      future: 'Cadeau',
      memories: 'Souvenirs',
      rsvp: 'RSVP',
    },
    hero: {
      title: 'LÉNA & NICOLE',
      quote:
        "Certaines rencontres ressemblent au hasard, jusqu'à ce qu'on comprenne que c'était de la sérendipité.",
      cta: 'Confirmer ma présence',
    },
    date: {
      title: 'Notre histoire',
      subtitle: 'Comment tout a commencé',
      paragraphOne:
        "Nous nous sommes rencontrées en jouant l'une contre l'autre sur un terrain de rugby.",
      paragraphTwo:
        "Ce qui a commencé comme une rencontre par hasard est devenu une histoire pleine de voyages, d'aventures, de rires et de complicité.",
      paragraphThree:
        'Deux ans plus tard, nous voulons célébrer avec vous le début de notre prochain chapitre.',
      full: 'Samedi 31 octobre 2026',
      rugby:
        "Ce jour-là, nous jouons le plus beau match : toutes les personnes que nous aimons dans la même équipe.",
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
        "La cérémonie commencera à 13h00. Nous vous conseillons d'arriver un peu en avance.",
      dressTitle: 'Dress code',
      dressText:
        "Élégant et confortable. Si vous en avez envie, vous pouvez apporter un déguisement d'Halloween pour la fête de fin de soirée.",
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
      cocktailTitle: 'Apéritifs',
      cocktailText: 'Un moment pour grignoter, trinquer et lancer la fête en douceur.',
      gameTitle: 'Leles game',
      gameText: 'Un moment de jeu et de rires pour continuer la fête ensemble.',
      dinnerTitle: 'Dîner',
      dinnerText: 'Une belle table, des conversations faciles et des détails de saison.',
      partyText: 'Déguisement optionnel pour terminer la soirée avec une touche de magie.',
    },
    future: {
      kicker: 'Cadeau',
      title: "Un toast à l'avenir",
      textOne: 'Votre présence est notre plus beau cadeau.',
      textTwo: 'Si vous souhaitez aussi participer à notre prochain projet...',
      button: 'Découvrir',
    },
    memories: {
      kicker: 'Photos et vidéos',
      title: 'Partager les souvenirs',
      text: 'Après le mariage, vous pourrez partager ici vos photos et vidéos.',
      button: 'Ajouter sur Google Drive',
    },
    rsvp: {
      title: 'Confirmation de présence',
      text:
        "Le formulaire Google Forms sera intégré ici pour confirmer la présence, les allergies, l'hébergement et les informations importantes.",
      button: 'Ouvrir le formulaire',
    },
    footer: {
      names: 'Léna & Nicole',
      date: '31 octobre 2026',
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

document.querySelector('.reveal-iban-button')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const iban = document.querySelector('#iban');

  iban.hidden = false;
  button.setAttribute('aria-expanded', 'true');
});

setLanguage('es');
updateCountdown();
window.setInterval(updateCountdown, 1000);
