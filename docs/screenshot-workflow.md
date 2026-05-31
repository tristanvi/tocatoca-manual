# Screenshot Workflow

This workflow keeps the TocaToca documentation image library maintainable by one person. The goal is to capture screenshots in a repeatable way, store them predictably, optimize them once, and replace them cleanly when the UI changes.

Use `docs/screenshots-needed.md` as the master shot list.

## Naming Conventions

Use stable, uppercase category IDs followed by a three-digit number and a short lowercase description.

```text
LOGIN-001-login-screen.webp
SEARCH-001-search-page.webp
ARTIST-001-artist-song-list.webp
COLLECTIONS-005-collection-detail.webp
PLAYER-002-player-controls.webp
MOBILE-004-mobile-song-list.webp
```

Rules:

- Keep the ID stable forever.
- Use `.webp` for processed screenshots.
- Use lowercase words after the ID.
- Separate words with hyphens.
- Do not include dates in filenames.
- Do not rename a screenshot when replacing the same UI state.
- Add a suffix only when the same screenshot needs a variant:

```text
PLAYER-002-player-controls-desktop.webp
PLAYER-002-player-controls-mobile.webp
```

## Folder Structure

Store public documentation images under:

```text
public/images/manual/
```

Recommended structure:

```text
public/images/manual/
  de/
    desktop/
    mobile/
    raw/
  en/
    desktop/
    mobile/
    raw/
  shared/
    desktop/
    mobile/
```

Use `de/` for the German source manual screenshots. Use `shared/` only for screenshots that contain no language-specific UI text.

Examples:

```text
public/images/manual/de/desktop/LOGIN-001-login-screen.webp
public/images/manual/de/mobile/MOBILE-004-mobile-song-list.webp
public/images/manual/de/raw/LOGIN-001-login-screen.png
```

Raw files are optional, but useful when an image needs cropping, annotation, or re-export later.

## Browser Size Standards

Use the same viewport sizes every time unless a page needs a special capture.

Desktop:

```text
1440 x 1000
```

Narrow desktop / tablet check:

```text
1024 x 900
```

Mobile:

```text
390 x 844
```

Large mobile:

```text
430 x 932
```

Capture at normal browser zoom:

```text
100%
```

Avoid full-page screenshots for most manual images. Prefer viewport screenshots that show the exact UI area users need.

## Desktop Screenshot Standards

Before capture:

- Use a clean test account.
- Use a predictable catalog state.
- Close unrelated browser tabs and popovers.
- Set browser zoom to 100%.
- Use the desktop viewport size `1440 x 1000`.
- Start from a known URL or route.
- Make sure no loading spinner is visible.
- Make sure the player is either intentionally visible or intentionally hidden.

Capture rules:

- Show enough surrounding UI for orientation.
- Do not crop so tightly that users lose context.
- Prefer one clear concept per screenshot.
- Use real TocaToca content when possible.
- Avoid exposing private user data, email addresses, tokens, or billing details.
- If a page contains long lists, use the top visible part of the list.
- If highlighting is needed, add annotations during processing, not inside the app.

Desktop screenshots should usually be used for:

- Login and account flows
- Collections overview
- Collection detail
- Song lists
- Artist-linked song lists
- Playlist management
- Player controls

## Mobile Screenshot Standards

Before capture:

- Use the mobile viewport size `390 x 844`.
- Test the drawer, player, and song lists separately.
- Keep the capture focused on one action or state.
- Prefer portrait orientation.

Capture rules:

- Show the top navigation or drawer when explaining navigation.
- Show the bottom player when explaining playback.
- Avoid screenshots where the keyboard covers the important content unless the keyboard is part of the workflow.
- Capture mobile tap-to-play behavior with the Play button clearly visible.
- Do not reuse desktop screenshots for mobile instructions.

Mobile screenshots should usually be used for:

- Mobile navigation drawer
- Mobile start page
- Mobile song list
- Mobile player
- Mobile add-to-playlist flow
- Mobile login persistence troubleshooting

## Capture Workflow

Use this routine for each screenshot batch:

1. Open `docs/screenshots-needed.md`.
2. Pick a section, for example `Player`.
3. Capture all `Critical` screenshots in that section first.
4. Save raw captures to `public/images/manual/de/raw/`.
5. Process and export final `.webp` files to `desktop/` or `mobile/`.
6. Update the screenshot checklist:
   - mark `captured`
   - mark `processed`
   - mark `inserted into documentation` after the image is used in an MDX page
7. Run `npm run build` after inserting screenshots into documentation.

Recommended capture order:

1. Login
2. Collections
3. Song Lists
4. Artists
5. Player
6. Queue
7. Favorites
8. Playlists
9. Mobile
10. Error States
11. Account
12. Search

## Image Optimization

Final documentation screenshots should be `.webp`.

Recommended quality:

```text
80-86
```

Recommended max width:

```text
Desktop: 1600 px
Mobile: 900 px
```

Keep retina captures if text becomes blurry after resizing, but avoid unnecessarily large files.

Suggested command with ImageMagick:

```sh
magick input.png -resize '1600x1600>' -strip -quality 84 output.webp
```

Suggested command for mobile:

```sh
magick input.png -resize '900x1600>' -strip -quality 84 output.webp
```

After optimization:

- Check that text remains readable.
- Check that important buttons are not cropped.
- Check dark and light UI edges for compression artifacts.
- Keep file sizes reasonable. Most screenshots should be under 300 KB when possible.

## Annotation Standards

Use annotations sparingly.

Good annotations:

- A thin outline around a search field
- A small arrow pointing to a button
- A short label such as `Play`

Avoid:

- Large text blocks inside screenshots
- Heavy colored overlays
- Multiple competing arrows
- Explanations that belong in the manual text

When an annotation is needed, keep an unannotated raw file and export the final annotated `.webp`.

## Inserting Screenshots Into MDX

Use absolute public paths from the `public` folder:

```mdx
![Login-Bildschirm von TocaToca](/images/manual/de/desktop/LOGIN-001-login-screen.webp)
```

Keep alt text short and descriptive.

Good:

```mdx
![TocaToca-Suche mit Ergebnisliste](/images/manual/de/desktop/SEARCH-002-song-search.webp)
```

Avoid:

```mdx
![Screenshot](/images/manual/de/desktop/SEARCH-002-song-search.webp)
```

## Replacement Workflow

When the UI changes, replace screenshots by ID instead of creating new names.

Steps:

1. Find the affected screenshot in `docs/screenshots-needed.md`.
2. Capture the same state again with the same viewport size.
3. Save the new raw file using the same ID.
4. Export the optimized `.webp` using the same final filename.
5. Replace the old final file.
6. Open every MDX page that uses the image and confirm the surrounding text still matches.
7. Run `npm run build`.
8. If the screenshot meaning changed, update its purpose in `docs/screenshots-needed.md`.

Only create a new screenshot ID when the UI state is genuinely new.

## UI Change Review

Before a release or manual update, review these high-impact screenshots:

- `LOGIN-001-login-screen.webp`
- `COLLECTIONS-001-start-page.webp`
- `COLLECTIONS-005-collection-detail.webp`
- `SONGLISTS-001-all-songs-list.webp`
- `ARTISTS-004-artist-song-list.webp`
- `PLAYER-001-first-playback.webp`
- `PLAYER-002-player-controls.webp`
- `PLAYLISTS-004-add-to-playlist-dialog.webp`
- `MOBILE-002-mobile-navigation-drawer.webp`
- `MOBILE-005-mobile-player.webp`

If these still match the product, most of the manual usually remains visually trustworthy.

## Maintenance Checklist

For every documentation sprint:

- [ ] Review `docs/screenshots-needed.md`.
- [ ] Capture missing `Critical` screenshots first.
- [ ] Process raw images to `.webp`.
- [ ] Insert images into matching MDX pages.
- [ ] Confirm alt text is useful.
- [ ] Run `npm run build`.
- [ ] Replace outdated images using the same IDs.
- [ ] Keep raw files only when they are useful for future edits.

## Practical Rules

- One screenshot should answer one user question.
- Capture real workflows, not decorative states.
- Prefer stable UI states over animations or hover-only moments.
- Keep filenames boring and predictable.
- Keep German screenshots as the source set until translated manuals need localized images.
- When in doubt, capture less and explain more in text.
