/* ============================================================
   data.js — Données de tous les thèmes et exercices
   Les images utilisent Unsplash (libres de droit, gratuites)
   via leur API source (pas de clé requise).
   ============================================================ */

const THEMES = [
  /* -------------------------------------------------------
     THÈME 1 : ANIMAUX (thème de base)
  ------------------------------------------------------- */
  {
    id: 'animaux',
    label: '🐾 Animaux',
    description: 'Chats, chiens, oiseaux… Des amis à quatre pattes pour débuter en douceur.',
    banner: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80',
    levels: [
      {
        id: 'debutant',
        name: 'Débutant',
        icon: '🌱',
        info: 'Mots courts, 3 à 5 lettres',
        exercises: [
          { word: 'chat',   hint: 'Il ronronne et adore les câlins',   img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80', caption: 'Un adorable chat' },
          { word: 'chien',  hint: 'Le meilleur ami de l\'homme',        img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80', caption: 'Un chien joyeux' },
          { word: 'lapin',  hint: 'Il a de grandes oreilles',           img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&q=80', caption: 'Un lapin blanc' },
          { word: 'oiseau', hint: 'Il vole et chante le matin',         img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&q=80', caption: 'Un oiseau coloré' },
          { word: 'vache',  hint: 'Elle nous donne le lait',            img: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=500&q=80', caption: 'Une vache dans le pré' },
          { word: 'canard', hint: 'Il nage sur les étangs',             img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&q=80', caption: 'Un canard sur l\'eau' },
          { word: 'poule',  hint: 'Elle pond des œufs',                 img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&q=80', caption: 'Une poule à la ferme' },
          { word: 'cochon', hint: 'Il adore se rouler dans la boue',    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&q=80', caption: 'Un cochon rose' },
        ]
      },
      {
        id: 'intermediaire',
        name: 'Intermédiaire',
        icon: '🌿',
        info: 'Mots de 6 à 9 lettres',
        exercises: [
          { word: 'papillon',  hint: 'Il butine les fleurs',              img: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=500&q=80', caption: 'Un beau papillon' },
          { word: 'tortoise',  hint: 'Il marche lentement mais sûrement', img: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&q=80', caption: 'Une tortue sage' },
          { word: 'écureuil', hint: 'Il stocke des noisettes',            img: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=500&q=80', caption: 'Un écureuil agile' },
          { word: 'hirondelle',hint: 'Elle annonce le printemps',         img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&q=80', caption: 'Une hirondelle' },
          { word: 'renard',    hint: 'Il est rusé et roux',               img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&q=80', caption: 'Un renard roux' },
          { word: 'herisson',  hint: 'Il est couvert de piquants',        img: 'https://images.unsplash.com/photo-1503006971-2b4f79e65741?w=500&q=80', caption: 'Un hérisson' },
        ]
      },
      {
        id: 'avance',
        name: 'Avancé',
        icon: '🌳',
        info: 'Phrases courtes',
        exercises: [
          { word: 'le chat dort au soleil',    hint: 'L\'endroit préféré d\'un matou',   img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80', caption: 'Un chat au repos' },
          { word: 'le chien court dans le parc',hint: 'Un moment de liberté',            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80', caption: 'Un chien en balade' },
          { word: 'les oiseaux chantent',      hint: 'La musique de la nature',          img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&q=80', caption: 'Des oiseaux dans la nature' },
          { word: 'le renard est dans la foret',hint: 'Un animal sauvage et discret',    img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&q=80', caption: 'Un renard en forêt' },
        ]
      }
    ]
  },

  /* -------------------------------------------------------
     THÈME 2 : TOUR DE FRANCE / CYCLISME
  ------------------------------------------------------- */
  {
    id: 'tdf',
    label: '🚴 Tour de France',
    description: 'Coureurs mythiques, maillots légendaires, cols épiques… Vive le vélo !',
    banner: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80',
    levels: [
      {
        id: 'debutant',
        name: 'Débutant',
        icon: '🌱',
        info: 'Mots du cyclisme, 3 à 6 lettres',
        exercises: [
          { word: 'velo',   hint: 'On le pédale pour avancer',          img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80', caption: 'Un vélo de course' },
          { word: 'maillot',hint: 'Ce que porte le coureur',            img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80', caption: 'Un maillot jaune' },
          { word: 'peloton',hint: 'Le grand groupe de coureurs',        img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'Le peloton en course' },
          { word: 'sprint', hint: 'La course finale vers l\'arrivée',   img: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=500&q=80', caption: 'Un sprint final' },
          { word: 'col',    hint: 'Le passage en haute montagne',       img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'Un col de montagne' },
          { word: 'etape',  hint: 'Une journée de course',              img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'Le départ d\'une étape' },
          { word: 'casque', hint: 'Il protège la tête du coureur',      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', caption: 'Un casque de cycliste' },
          { word: 'roue',   hint: 'Elle tourne sur le bitume',          img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80', caption: 'La roue d\'un vélo' },
        ]
      },
      {
        id: 'intermediaire',
        name: 'Intermédiaire',
        icon: '🌿',
        info: 'Coureurs et lieux mythiques',
        exercises: [
          { word: 'Merckx',    hint: 'Le Cannibale belge, 5 fois vainqueur',   img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'Eddy Merckx, légende' },
          { word: 'Hinault',   hint: 'Le Blaireau breton, 5 victoires',        img: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=500&q=80', caption: 'Bernard Hinault en course' },
          { word: 'Alpe',      hint: 'L\'Alpe d\'Huez, montée mythique',       img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'L\'Alpe d\'Huez' },
          { word: 'Ventoux',   hint: 'Le géant de Provence',                   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'Le Mont Ventoux' },
          { word: 'Indurain',  hint: 'Miguel, 5 tours consécutifs',            img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'Miguel Indurain' },
          { word: 'Contador',  hint: 'Alberto, le couteau suisse espagnol',    img: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=500&q=80', caption: 'Alberto Contador' },
          { word: 'Pantani',   hint: 'Le Pirate, grimpeur magnifique',         img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'Marco Pantani dans les cols' },
          { word: 'Pyrenees',  hint: 'La grande chaîne de montagnes du sud',   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'Les Pyrénées' },
        ]
      },
      {
        id: 'avance',
        name: 'Avancé',
        icon: '🌳',
        info: 'Phrases sur le Tour',
        exercises: [
          { word: 'le maillot jaune est convoite',    hint: 'Le plus grand trophée du vélo',      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80', caption: 'Le maillot jaune' },
          { word: 'Merckx a gagne cinq tours',        hint: 'Le record du Cannibale',             img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'Un champion légendaire' },
          { word: 'la montagne selectionne les champions', hint: 'Les cols révèlent les meilleurs', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', caption: 'L\'ascension d\'un col' },
          { word: 'Paris accueille les coureurs',     hint: 'L\'arrivée sur les Champs-Élysées',  img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&q=80', caption: 'L\'arrivée à Paris' },
        ]
      }
    ]
  },

  /* -------------------------------------------------------
     THÈME 3 : BRICOLAGE
  ------------------------------------------------------- */
  {
    id: 'bricolage',
    label: '🔧 Bricolage',
    description: 'Outils, matériaux, techniques… Pour les amoureux du travail bien fait.',
    banner: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80',
    levels: [
      {
        id: 'debutant',
        name: 'Débutant',
        icon: '🌱',
        info: 'Outils courants, 3 à 6 lettres',
        exercises: [
          { word: 'marteau', hint: 'On l\'utilise pour enfoncer des clous',    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80', caption: 'Un marteau' },
          { word: 'vis',     hint: 'Elle se fixe en tournant',                 img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'Des vis' },
          { word: 'clou',    hint: 'Il se plante avec un marteau',             img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80', caption: 'Des clous' },
          { word: 'scie',    hint: 'Elle sert à couper le bois',               img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&q=80', caption: 'Une scie' },
          { word: 'pinceau', hint: 'On l\'utilise pour peindre',               img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80', caption: 'Un pinceau' },
          { word: 'niveau',  hint: 'Il vérifie si c\'est bien horizontal',     img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'Un niveau à bulle' },
          { word: 'perceuse',hint: 'Elle fait des trous dans les murs',        img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=500&q=80', caption: 'Une perceuse' },
          { word: 'colle',   hint: 'Elle sert à assembler les matériaux',      img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'De la colle' },
        ]
      },
      {
        id: 'intermediaire',
        name: 'Intermédiaire',
        icon: '🌿',
        info: 'Matériaux et techniques',
        exercises: [
          { word: 'tournevis',  hint: 'Il serre et desserre les vis',            img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'Un tournevis' },
          { word: 'parquet',    hint: 'Le revêtement en bois du sol',            img: 'https://images.unsplash.com/photo-1562182384-08115de5ee97?w=500&q=80', caption: 'Un parquet en bois' },
          { word: 'chevilles',  hint: 'On les met dans le mur avant la vis',     img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'Des chevilles murales' },
          { word: 'plomberie',  hint: 'Les tuyaux d\'eau de la maison',          img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=500&q=80', caption: 'Des tuyaux de plomberie' },
          { word: 'carrelage',  hint: 'Les carreaux de la salle de bain',        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80', caption: 'Du carrelage' },
          { word: 'enduit',     hint: 'On en passe sur les murs avant de peindre', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80', caption: 'De l\'enduit' },
          { word: 'isolation',  hint: 'Elle garde la chaleur dans la maison',    img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'L\'isolation d\'un mur' },
          { word: 'etabli',     hint: 'Le plan de travail du bricoleur',         img: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=500&q=80', caption: 'Un établi de menuisier' },
        ]
      },
      {
        id: 'avance',
        name: 'Avancé',
        icon: '🌳',
        info: 'Phrases de bricolage',
        exercises: [
          { word: 'je pose le parquet',            hint: 'Un travail de sol',                     img: 'https://images.unsplash.com/photo-1562182384-08115de5ee97?w=500&q=80', caption: 'La pose du parquet' },
          { word: 'le mur est bien perce',         hint: 'Après le travail de la perceuse',       img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=500&q=80', caption: 'Un mur percé' },
          { word: 'la vis est bien serree',        hint: 'Un bon bricolage, c\'est solide',       img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80', caption: 'Une vis bien serrée' },
          { word: 'je peins le mur en blanc',      hint: 'La peinture transforme la pièce',      img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80', caption: 'Peinture en cours' },
        ]
      }
    ]
  }
];
