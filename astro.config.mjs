import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://manual.tocatoca.com',
  integrations: [
    starlight({
      title: 'TocaToca Handbuch',
      description: 'Benutzerhandbuch für TocaToca.',
      customCss: ['./src/styles/tocatoca.css'],
      components: {
        Aside: './src/components/TocaAside.astro',
        Footer: './src/components/TocaFooter.astro',
        Hero: './src/components/TocaHero.astro',
        SiteTitle: './src/components/TocaSiteTitle.astro',
      },
      defaultLocale: 'de',
      locales: {
        de: {
          label: 'Deutsch',
          lang: 'de',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Espanol',
          lang: 'es',
        },
        fr: {
          label: 'Francais',
          lang: 'fr',
        },
        it: {
          label: 'Italiano',
          lang: 'it',
        },
      },
      sidebar: [
        {
          label: 'Erste Schritte',
          translations: {
            en: 'Getting Started',
            es: 'Primeros pasos',
            fr: 'Premiers pas',
            it: 'Primi passi',
          },
          items: [
            { label: 'Was ist TocaToca?', slug: 'erste-schritte/was-ist-tocatoca' },
            { label: 'Konto erstellen', slug: 'erste-schritte/konto-erstellen' },
            { label: 'Einloggen', slug: 'erste-schritte/einloggen' },
            { label: 'Abonnement aktivieren', slug: 'erste-schritte/abonnement-aktivieren' },
            { label: 'Erste Musik abspielen', slug: 'erste-schritte/erste-musik-abspielen' },
          ],
        },
        {
          label: 'Musik finden',
          translations: {
            en: 'Finding Music',
            es: 'Encontrar musica',
            fr: 'Trouver de la musique',
            it: 'Trovare musica',
          },
          items: [
            { label: 'Suche verwenden', slug: 'musik-finden/suche-verwenden' },
            { label: 'Nach Künstlern suchen', slug: 'musik-finden/nach-kuenstlern-suchen' },
            { label: 'Nach Alben/Sammlungen suchen', slug: 'musik-finden/nach-alben-sammlungen-suchen' },
            { label: 'Artist-Links verstehen', slug: 'musik-finden/artist-links-verstehen' },
            { label: 'Songlisten verwenden', slug: 'musik-finden/songlisten-verwenden' },
          ],
        },
        {
          label: 'Musik hören',
          translations: {
            en: 'Listening',
            es: 'Escuchar musica',
            fr: 'Ecouter',
            it: 'Ascoltare',
          },
          items: [
            { label: 'Player bedienen', slug: 'musik-hoeren/player-bedienen' },
            { label: 'Warteschlange', slug: 'musik-hoeren/warteschlange' },
            { label: 'Favoriten', slug: 'musik-hoeren/favoriten' },
            { label: 'Playlists', slug: 'musik-hoeren/playlists' },
          ],
        },
        {
          label: 'Nutzung auf Geräten',
          translations: {
            en: 'Using Devices',
            es: 'Uso en dispositivos',
            fr: 'Utilisation sur appareils',
            it: 'Uso sui dispositivi',
          },
          items: [
            { label: 'Desktop Browser', slug: 'nutzung-auf-geraeten/desktop-browser' },
            { label: 'iPhone / iPad', slug: 'nutzung-auf-geraeten/iphone-ipad' },
            { label: 'Android', slug: 'nutzung-auf-geraeten/android' },
            { label: 'Probleme mit mobilen Browsern', slug: 'nutzung-auf-geraeten/probleme-mit-mobilen-browsern' },
          ],
        },
        {
          label: 'Konto & Zugang',
          translations: {
            en: 'Account & Access',
            es: 'Cuenta y acceso',
            fr: 'Compte et acces',
            it: 'Account e accesso',
          },
          items: [
            { label: 'Login-Probleme', slug: 'konto-zugang/login-probleme' },
            { label: 'Abonnementstatus', slug: 'konto-zugang/abonnementstatus' },
            { label: 'Passwort / Magic Link / Zugang', slug: 'konto-zugang/passwort-magic-link-zugang' },
            { label: 'Ausloggen', slug: 'konto-zugang/ausloggen' },
          ],
        },
        {
          label: 'Fehlerbehebung',
          translations: {
            en: 'Troubleshooting',
            es: 'Solucion de problemas',
            fr: 'Depannage',
            it: 'Risoluzione problemi',
          },
          items: [
            { label: 'Kein Ton', slug: 'fehlerbehebung/kein-ton' },
            { label: 'Musik startet nicht', slug: 'fehlerbehebung/musik-startet-nicht' },
            { label: 'Login wird nicht gehalten', slug: 'fehlerbehebung/login-wird-nicht-gehalten' },
            { label: 'Seite neu laden', slug: 'fehlerbehebung/seite-neu-laden' },
            { label: 'Support kontaktieren', slug: 'fehlerbehebung/support-kontaktieren' },
          ],
        },
        {
          label: 'FAQ',
          translations: {
            en: 'FAQ',
            es: 'FAQ',
            fr: 'FAQ',
            it: 'FAQ',
          },
          items: [{ label: 'Häufige Fragen', slug: 'faq' }],
        },
      ],
    }),
  ],
});
