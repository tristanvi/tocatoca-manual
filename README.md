# TocaToca Manual

Astro Starlight documentation site for the TocaToca user manual.

German is the source language and lives in `src/content/docs/de/`. Placeholder folders already exist for English, Spanish, French, and Italian:

- `src/content/docs/en/`
- `src/content/docs/es/`
- `src/content/docs/fr/`
- `src/content/docs/it/`

## Commands

```sh
npm install
npm run dev
npm run build
```

This project is currently pinned to Astro 5 / Starlight 0.37 so it runs on the local Node 20 environment. When the deployment/runtime environment is on Node 22.12 or newer, upgrade Astro and Starlight to the current releases.

## Add a German Page

1. Create a new `.mdx` file under the matching German section folder, for example:

   `src/content/docs/de/musik-finden/neue-seite.mdx`

2. Add frontmatter:

   ```mdx
   ---
   title: Neue Seite
   description: Kurze Beschreibung fur Suche und Vorschau.
   ---
   ```

3. Add the page to `astro.config.mjs` in the Starlight `sidebar` array.

Keep the tone simple, practical, and non-technical. Do not mention Navidrome or document disabled features such as downloads, server settings, admin functions, sharing, transcoding, or technical configuration.

## Add a Screenshot

Place screenshots in:

```text
public/images/manual/
```

Recommended naming pattern:

```text
de-section-topic.png
en-section-topic.png
```

Use images in MDX like this:

```mdx
![Beschreibung des Screenshots](/images/manual/de-suche.png)
```

## Add a Video

For small local videos, place files in:

```text
public/videos/
```

Embed local videos with HTML:

```mdx
<video controls src="/videos/de-erste-musik-abspielen.mp4" title="Erste Musik abspielen" />
```

For larger or frequently updated videos, prefer an external hosting service and embed the public player URL in MDX. Keep video captions short and user-focused.

## Add a Translation

1. Copy the German page into the matching language folder.
2. Keep the same relative path where possible.
3. Translate the title, description, headings, and body text.
4. Update screenshot names if the UI language or browser differs.
5. Add localized labels to `astro.config.mjs` where needed.

Example:

```text
src/content/docs/de/musik-finden/suche-verwenden.mdx
src/content/docs/en/musik-finden/suche-verwenden.mdx
```

The current sidebar points to German source pages. When a translated section is ready, update the sidebar structure or split it by locale as needed.
