# TocaToca UI Terminology

This glossary records current user-visible wording in the TocaToca web player and the terms the manual should use. It is based on the current UI label sources in `navidrome-tt-stream/ui/src`, with disabled listener-facing features excluded.

Use this file as the authority for future manual pages, screenshot captions, and translation cleanup.

## Rules for Documentation

- Use simple listener-facing terms.
- Use `Sammlung` / `Sammlungen` in German documentation for the UI area currently labeled `Albums`.
- Use `collection` / `collections` in English documentation for the same concept.
- Use `Titel` in German documentation for songs/tracks/TTunes.
- Use `recording` or `song` in English documentation depending on context. Prefer `recording` for historical catalogue explanations and `song` for UI actions.
- Do not introduce technical wording in the manual.

## Main Navigation

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Albums | Side navigation | Sammlungen | Collections | no | Current UI label conflicts with manual language. Document as `Sammlungen`; consider UI rename later. |
| Artists | Side navigation | Kuenstler | Artists | yes | Manual should explain that names can include people, orchestras, and other contributors. |
| TTunes | Side navigation / song resource name | Titel | Songs / Recordings | no | UI-specific term. Manual should avoid making users learn it. |
| Favorites | Side navigation | Favoriten | Favorites | yes | UI uses US spelling for menu, but fields use `Favourite`. See inconsistencies. |
| Most Played | Side navigation under songs | Meist gehoert | Most played | yes | Mention only if documenting this list. |
| Playlists | Side navigation | Playlists | Playlists | yes | Keep term. |
| Shared Playlists | Side navigation when visible | Geteilte Playlists | Shared playlists | yes | Only document if visible for normal users. |
| Library selector | Side navigation top area | Katalogauswahl | Catalog selector | no | UI text changes by state, not a fixed label. Use `Katalog` in documentation. |
| All Libraries (%{count}) | Library selector chip | Alle Kataloge | All catalogs | no | UI says libraries; manual should say catalogues/catalogs. |
| % selected of % total Libraries | Library selector chip | Ausgewaehlte Kataloge | Selected catalogs | no | Avoid `Libraries` in user docs. |
| Select Libraries | Library selector popover | Kataloge auswaehlen | Select catalogs | no | Visible only when multiple catalogs are available. |
| None | Library selector chip | Kein Katalog ausgewaehlt | No catalog selected | no | UI wording is terse. |

## Page Titles and Resource Names

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Tunes | Collections/list title via TocaToca theme override | Sammlungen | Collections | no | Theme override maps the album resource to `Tune/Tunes`, which conflicts with navigation `Albums`. |
| Tune | Single collection/resource title via TocaToca theme override | Sammlung | Collection | no | Use only in UI reference if users see it exactly. |
| Compilation / Compilations | Base album resource label | Sammlung / Sammlungen | Collection / Collections | no | Appears in base labels; likely inconsistent fallback. |
| Tango Artist / Tango Artists | Base artist resource label | Kuenstler | Artist / Artists | no | Theme override changes this to `Artist/Artists`; manual should use normal wording. |
| Artist / Artists | Artist page title via TocaToca theme override | Kuenstler | Artists | yes | Good enough for UI; docs can clarify broad meaning. |
| TTune / TTunes | Song page/resource title | Titel | Songs / Recordings | no | Manual should not use `TTune` as a concept. |
| Playlist / Playlists | Playlist pages | Playlist / Playlists | Playlist / Playlists | yes | Keep. |
| Personal | Personal settings page | Persoenliche Einstellungen | Personal settings | no | UI label is short; manual should be clearer. |
| Settings | User menu tooltip | Einstellungen | Settings | yes | In normal user flow this opens the account/user menu. |
| About | User menu | Info | About | yes | Keep for direct UI instructions. |

## Login / Authentication

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Hi-Res Tango Streaming | Login card / page title | TocaToca | TocaToca | no | Current branding is inconsistent with TocaToca manual. |
| Username | Login form | E-Mail-Adresse / Benutzername | Email address / username | partially | Use the exact UI term when pointing at the field; otherwise describe account email if auth flow uses email. |
| Password | Login form | Passwort | Password | yes | Keep. |
| Sign in | Login button | Einloggen | Sign in | yes | Keep as UI reference. |
| Authentication failed, please retry | Login error notification | Anmeldung fehlgeschlagen | Sign-in failed | no | Manual should explain calmly, not quote unless needed. |
| Please login to continue | Auth check notification | Bitte einloggen | Please sign in | no | Manual should use `einloggen` / `sign in`. |
| Logout | User menu / logout button | Ausloggen | Sign out | partially | UI says `Logout`; docs can say `Ausloggen` / `sign out`. |
| Profile | User menu accessibility label | Profil | Profile | yes | May appear as tooltip/ARIA label. |

## Search and Filters

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Search | Search/filter action | Suche | Search | yes | Generic React-admin label. |
| Add filter | Filter controls | Filter hinzufuegen | Add filter | yes | Use only when documenting filter panel. |
| Remove this filter | Active filter controls | Filter entfernen | Remove filter | yes | Keep for UI instructions. |
| Clear value | Search/filter input | Eingabe loeschen | Clear value | yes | Mostly accessibility/tooltip text. |
| Artist | Song and collection filters | Kuenstler | Artist | yes | Keep. |
| Album Artist | Song filter / fields | Kuenstler der Sammlung | Collection artist | no | Avoid `Album Artist` in docs except when quoting UI. |
| Composer | Song filter | Komponist | Composer | yes | Keep. |
| Lyricist | Song filter | Texter | Lyricist | yes | Keep. |
| Genre | Song and collection filters | Genre | Genre | yes | Keep. |
| Recording Decade | Song filter | Aufnahmejahrzehnt | Recording decade | yes | Keep concept. |
| Mood | Song and collection filters | Stimmung | Mood | yes | Keep. |
| Year | Song and collection filters | Jahr | Year | yes | Keep. |
| Label | Collection filter/field | Label | Label | yes | Historical catalogue context. |
| Grouping | Collection filter/field | Gruppierung | Grouping | yes | Consider explaining only if used by catalog. |
| Media | Collection filter/field | Medium | Medium | no | UI says `Media`; German docs should say `Medium`. |
| Type | Collection filter/field | Typ | Type | yes | Keep. |
| Favourite | Field/filter label | Favorit | Favorite | no | British spelling in field; menu uses `Favorites`. |
| -- None -- | Empty filter choice | Keine Auswahl | None | no | UI placeholder; docs should describe meaning. |
| No results found | Empty search result | Keine Ergebnisse gefunden | No results found | yes | Keep. |

## Artists

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Name | Artists table | Name | Name | yes | Keep. |
| Role | Artists filter | Rolle | Role | yes | Keep if documenting role filter. |
| Album Artist | Artist role filter | Kuenstler der Sammlung | Collection artist | no | Avoid `Album` in docs where possible. |
| Artist | Artist role filter | Kuenstler | Artist | yes | Keep. |
| Composer | Artist role filter | Komponist | Composer | yes | Keep. |
| Conductor | Artist role filter | Dirigent | Conductor | yes | Keep. |
| Lyricist | Artist role filter | Texter | Lyricist | yes | Keep. |
| Arranger | Artist role filter | Arrangeur | Arranger | yes | Keep. |
| Performer | Artist role filter | Mitwirkender | Performer | partially | Use when the UI shows it; docs can say `Mitwirkende`. |
| Album Count | Artists table | Anzahl Sammlungen | Collections | no | UI should ideally avoid `Album`. |
| Song Count | Artists table | Anzahl Titel | Songs / Recordings | no | Docs should say `Titel`. |
| Plays | Artists table / song and collection tables | Wiedergaben | Plays | yes | Keep. |
| Top Songs | Artist actions, if shown | Beliebte Titel | Top songs | partially | Use only if action is visible. |
| Shuffle | Artist/collection/playlist actions | Zufaellig abspielen | Shuffle | yes | Keep UI term in direct instructions. |

## Collections

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Album | Song field / column | Sammlung | Collection | no | Key inconsistency. Manual should say `Sammlung`. |
| Albums | Navigation | Sammlungen | Collections | no | Key inconsistency. |
| All | Collection list type | Alle Sammlungen | All collections | yes | Keep if documenting default view. |
| Random | Collection list type | Zufall | Random | yes | Not currently visible in simplified collection list unless enabled. |
| Recently Added | Collection list type/default view option | Kuerzlich hinzugefuegt | Recently added | yes | May appear in Personal default view. |
| Recently Played | Collection list type/default view option | Kuerzlich gehoert | Recently played | yes | May appear in Personal default view. |
| Most Played | Collection list type/default view option | Meist gehoert | Most played | yes | Also appears for songs in sidebar. |
| Favourites | Collection list type | Favoriten | Favorites | no | British spelling; docs use normal German/English spelling. |
| Top Rated | Collection list type | Bestbewertet | Top rated | yes | Only document if ratings are visible. |
| Play | Collection action | Abspielen | Play | yes | Keep. |
| Play Next | Collection action | Als Naechstes abspielen | Play next | yes | Keep. |
| Play Later | Collection action | Spaeter abspielen / Zur Warteschlange hinzufuegen | Play later / Add to queue | partially | UI text is friendly; docs should explain queue behavior. |
| Add to Playlist | Collection action | Zur Playlist hinzufuegen | Add to playlist | yes | Keep. |
| Shuffle | Collection action | Zufaellig abspielen | Shuffle | yes | Keep. |
| Get Info | Collection/song action | Informationen anzeigen | Get info | yes | Keep as UI reference; docs can say `Informationen`. |
| Layout | Collection toolbar menu | Ansicht | Layout | partially | Manual should describe grid/list view. |
| Grid | Layout menu | Raster | Grid | yes | Keep. |
| Table | Layout menu | Tabelle | Table | yes | Keep. |
| Columns To Display | Column menu | Angezeigte Spalten | Columns to display | yes | Keep concept; capitalization inconsistent. |

## Song Lists

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Title | Song list column | Titel | Title | yes | Keep. |
| Time | Song list duration column | Dauer | Duration | no | UI says `Time`; docs should say `Dauer`. |
| # | Song/playlist track number column | Nummer | Number | yes | Use sparingly in docs. |
| Plays | Song list column | Wiedergaben | Plays | yes | Keep. |
| Last Played | Song list optional column | Zuletzt gehoert | Last played | yes | Keep. |
| Date added | Song/collection optional column | Hinzugefuegt am | Date added | yes | Keep. |
| Rating | Song/collection optional column | Bewertung | Rating | yes | Only document if visible. |
| Quality | Song list optional column | Qualitaet | Quality | yes | Avoid technical detail unless user-visible. |
| BPM | Song list optional column | BPM | BPM | yes | Optional. |
| Comment | Song/playlist field | Kommentar | Comment | yes | Keep. |
| Additional participants | Song info | Weitere Mitwirkende | Additional participants | yes | Useful for historical recordings. |
| Additional Tags | Song info | Weitere Tags | Additional tags | partially | Avoid over-documenting technical metadata. |
| Play Now | Song row action / bulk action | Jetzt abspielen | Play now | yes | Keep. |
| Play Next | Song row action / bulk action | Als Naechstes abspielen | Play next | yes | Keep. |
| Play Later | Song row action / bulk action | Spaeter abspielen / Zur Warteschlange hinzufuegen | Play later / Add to queue | partially | Manual should connect this to queue. |
| Add to Playlist | Song row action / bulk action | Zur Playlist hinzufuegen | Add to playlist | yes | Keep. |
| Show in Playlist | Song row action | In Playlist anzeigen | Show in playlist | yes | Only visible when the song is already in playlists. |
| Get Info | Song row action | Informationen anzeigen | Get info | yes | Keep as direct UI term. |
| Shuffle All | Song list toolbar | Alle zufaellig abspielen | Shuffle all | yes | Keep. |
| 1 item selected / items selected | Bulk action toolbar | Ausgewaehlt | Selected | partially | Manual can describe selected-song actions without quoting full label. |
| Missing | Optional status/filter | Nicht verfuegbar | Missing / unavailable | no | Use user-facing `nicht verfuegbar`, not internal-sounding `missing`. |

## Favorites

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Favorites | Side navigation | Favoriten | Favorites | yes | Keep. |
| Favourite | Field/filter label | Favorit | Favorite | no | Inconsistent spelling with `Favorites`. |
| Add this track to favourites | Hotkey help | Als Favorit markieren | Add to favorites | no | Uses `track` and British spelling. |
| heart icon / love | Song rows and player toolbar | Favorit-Symbol | Favorite icon | no | UI uses icon, not text; docs should name the icon. |

## Playlists

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Playlists | Navigation / page title | Playlists | Playlists | yes | Keep. |
| Shared Playlists | Navigation section | Geteilte Playlists | Shared playlists | yes | Only if visible to user. |
| Name | Playlist forms | Name | Name | yes | Keep. |
| Duration | Playlist list | Dauer | Duration | yes | Keep. |
| Owner | Playlist list | Besitzer | Owner | yes | Only if visible. |
| Public | Playlist list/forms where visible | Oeffentlich | Public | yes | Only if visible for current user role. |
| Songs | Playlist list | Titel | Songs | no | German docs should say `Titel`. |
| Create | Playlist list action | Erstellen | Create | yes | Keep. |
| Create Playlist | Create page title | Playlist erstellen | Create playlist | yes | Generated as `Create %{name}`. |
| Edit | Playlist action | Bearbeiten | Edit | yes | Keep. |
| Delete | Playlist action | Loeschen | Delete | yes | Use only for playlist management docs. |
| Save | Playlist form / save queue dialog | Speichern | Save | yes | Keep. |
| Cancel | Dialogs | Abbrechen | Cancel | yes | Keep. |
| Add | Dialogs | Hinzufuegen | Add | yes | Keep. |
| Remove | Playlist track bulk action | Entfernen | Remove | yes | Keep. |
| Select a playlist: | Add-to-playlist dialog title | Playlist auswaehlen | Select a playlist | yes | Keep. |
| Search playlists or type to create new... | Add-to-playlist dialog placeholder | Playlist suchen oder neue Playlist eingeben | Search playlists or type to create new | yes | Keep concept, simplify punctuation in docs. |
| Create "%{name}" | Add-to-playlist dialog | "%{name}" erstellen | Create "%{name}" | yes | Keep. |
| Press Enter to create new playlist | Add-to-playlist empty state | Enter druecken, um eine neue Playlist zu erstellen | Press Enter to create new playlist | yes | Keep. |
| Remove from selection | Selected playlist chip | Aus Auswahl entfernen | Remove from selection | yes | Keep. |
| No playlists found | Add-to-playlist dialog empty search | Keine Playlists gefunden | No playlists found | yes | Keep. |
| No playlists available | Add-to-playlist dialog empty list | Keine Playlists vorhanden | No playlists available | yes | Keep. |
| Add duplicated songs | Duplicate warning title | Doppelte Titel hinzufuegen | Add duplicate songs | no | Current text says `duplicated songs`; docs should use `duplicate`. |
| There are duplicates being added to the playlist. Would you like to add the duplicates or skip them? | Duplicate warning body | Einige Titel sind bereits in der Playlist. | Some songs are already in the playlist. | no | Current wording is awkward; document the decision simply. |
| Skip | Duplicate warning button | Ueberspringen | Skip | yes | Keep. |
| Save Queue to Playlist | Save queue dialog title/action | Warteschlange als Playlist speichern | Save queue as playlist | no | UI says `to`; docs should say `as`. |

## Queue

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Play Queue | Player queue panel | Warteschlange | Play queue / Queue | partially | German docs should use `Warteschlange`. |
| Play Later | Song/collection/playlist action | Spaeter abspielen | Play later | yes | Explain that this adds to the queue. |
| Play Next | Song/collection/playlist action | Als Naechstes abspielen | Play next | yes | Keep. |
| Save Queue to Playlist | Player toolbar / dialog | Warteschlange als Playlist speichern | Save queue as playlist | no | See playlist note. |
| Delete audio lists | Player queue control | Warteschlange leeren | Clear queue | no | Current player-library label is awkward. |
| Click to delete %{name} | Player queue item control | Aus Warteschlange entfernen | Remove from queue | no | Docs should not quote this. |
| Nothing playing | Now playing panel empty state | Keine Wiedergabe | Nothing playing | yes | Admin panel may show this; player empty text differs. |
| No music | Player empty text | Keine Musik | No music | yes | Keep only if visible. |

## Player Controls

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Open | Player control | Oeffnen | Open | yes | Player label. |
| Close | Player/dialog control | Schliessen | Close | yes | Keep. |
| Click to play | Player play control | Abspielen | Play | no | Docs should say `Play` / `Abspielen`. |
| Click to pause | Player pause control | Pausieren | Pause | no | Docs should say `Pause` / `Pausieren`. |
| Next track | Player control | Naechster Titel | Next track | yes | Docs may say `naechster Titel`. |
| Previous track | Player control | Vorheriger Titel | Previous track | yes | Docs may say `vorheriger Titel`. |
| Volume | Player control | Lautstaerke | Volume | yes | Keep. |
| Minimize | Player control | Minimieren | Minimize | yes | Keep. |
| Destroy | Player close/clear control | Player schliessen / Warteschlange leeren | Close player / Clear queue | no | `Destroy` is not user-friendly. |
| Toggle lyrics | Player control | Liedtext ein-/ausblenden | Toggle lyrics | partially | Only document if visible/useful. |
| No lyrics | Player lyrics empty state | Kein Liedtext | No lyrics | yes | Optional. |
| In order | Player play mode | Der Reihe nach | In order | yes | Keep. |
| Repeat | Player play mode | Wiederholen | Repeat | yes | Keep. |
| Repeat One | Player play mode | Einen Titel wiederholen | Repeat one | yes | Keep. |
| Shuffle | Player play mode | Zufaellig | Shuffle | yes | Keep. |
| Now Playing | Now-playing panel | Laeuft gerade | Now playing | yes | Mostly admin/overlay surface; use only if visible. |

## User Menu and Personal Settings

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Personal | User menu entry | Persoenliche Einstellungen | Personal settings | no | UI term is short. |
| Theme | Personal settings | Design | Theme | yes | Keep if documenting settings. |
| Language | Personal settings | Sprache | Language | yes | Keep. |
| Default View | Personal settings | Standardansicht | Default view | yes | Keep. |
| Desktop Notifications | Personal settings, if visible | Desktop-Benachrichtigungen | Desktop notifications | yes | Disabled for normal TocaToca deployment unless visible. |
| About | User menu entry/dialog | Info | About | yes | Keep. |
| Version | About dialog | Version | Version | yes | Keep. |
| Home page | About dialog link | Homepage | Home page | yes | Optional. |
| Source code | About dialog link | Quellcode | Source code | yes | Usually not useful in listener manual. |

## Generic Actions and Messages

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Go Back | Generic action | Zurueck | Go back | yes | Keep. |
| Refresh | Generic action | Neu laden | Refresh | yes | Manual often says `Seite neu laden`. |
| Show | Generic action | Anzeigen | Show | yes | Keep. |
| Sort | Generic action | Sortieren | Sort | yes | Keep. |
| Expand | Generic action | Erweitern | Expand | yes | Keep. |
| Unselect | Generic action | Auswahl aufheben | Unselect | yes | Keep. |
| Yes | Generic dialog | Ja | Yes | yes | Keep. |
| No | Generic dialog | Nein | No | yes | Keep. |
| Required | Form validation | Erforderlich | Required | yes | Keep. |
| Loading | Page state | Laedt | Loading | yes | Keep. |
| Something went wrong | Error page/notification | Etwas ist schiefgelaufen | Something went wrong | yes | Manual should explain next steps. |
| Server communication error | Error notification | Verbindungsfehler | Communication error | no | Avoid `server` in user docs. |
| Your session has ended, please reconnect. | Session notification | Sitzung beendet, bitte erneut einloggen | Session ended; sign in again | no | Manual should use simpler wording. |
| New version available! Please refresh this window. | Update notification | Neue Version verfuegbar, Seite neu laden | New version available; refresh | yes | Keep meaning. |

## Inconsistencies to Track

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Albums | Side navigation | Sammlungen | Collections | no | Main terminology mismatch. |
| Tune / Tunes | Collection resource title via theme | Sammlung / Sammlungen | Collection / Collections | no | Conflicts with `Albums` and `TTunes`. |
| TTune / TTunes | Song resource title | Titel | Songs / Recordings | no | User-facing docs should avoid this UI-specific term. |
| Compilation / Compilations | Base album resource fallback | Sammlung / Sammlungen | Collection / Collections | no | May appear if theme override fails or in some generated labels. |
| Favorite / Favourite / Favourites | Menu, fields, list labels | Favorit / Favoriten | Favorite / Favorites | no | Mixed US/British spelling. Standardize docs as `Favoriten` / `Favorites`. |
| Hi-Res Tango Streaming | Login and document title | TocaToca | TocaToca | no | Branding mismatch. |
| Navidrome Hotkeys | Help dialog title | Tastenkombinationen | Keyboard shortcuts | no | Legacy product name can appear in hotkey help. Do not use in manual. |
| Thanks for installing Navidrome! | First-time setup screen | Not documented | Not documented | no | First-time/admin setup, not normal listener flow. |
| Destroy | Player control label | Player schliessen / Warteschlange leeren | Close player / Clear queue | no | Not user-friendly. |
| Delete audio lists | Player control label | Warteschlange leeren | Clear queue | no | Not natural for users. |
| Save Queue to Playlist | Player toolbar/dialog | Warteschlange als Playlist speichern | Save queue as playlist | no | Wording should be improved in docs. |
| Add duplicated songs | Duplicate playlist dialog | Doppelte Titel hinzufuegen | Add duplicate songs | no | Current English wording is awkward. |
| Server communication error | Error notification | Verbindungsfehler | Communication error | no | Avoid infrastructure term in user docs. |

## Disabled or Out-of-Scope Labels Seen in Source

These labels exist in source files or base translations but should not be documented for normal TocaToca users unless they become visible in the product.

| Current UI text | Screen where it appears | German documentation term | English documentation term | Keep as-is? | Notes |
|---|---|---|---|---|---|
| Download | Disabled action/source label | Not documented | Not documented | no | Downloads are disabled for TocaToca listener experience. |
| Share | Disabled action/source label | Not documented | Not documented | no | Sharing is not part of the simplified manual scope. |
| Transcoding | Admin/source label | Not documented | Not documented | no | Technical setting; do not document. |
| Library / Libraries | Admin/source and selector label | Katalog only where selector is visible | Catalog only where selector is visible | no | Avoid `library` unless quoting UI. |
| User / Users | Admin/user management | Not documented | Not documented | no | Normal users use external account access. |
| Missing Files | Admin/source label | Not documented | Not documented | no | Do not document admin maintenance screens. |
| Radio | Hidden sidebar resource | Not documented | Not documented | no | Hidden from current user navigation. |
| Last.fm / ListenBrainz | Personal settings/source labels | Not documented | Not documented | no | Disabled in current TocaToca deployment. |
| ReplayGain | Personal/admin settings/source label | Not documented | Not documented | no | Technical audio setting; not normal user docs. |
