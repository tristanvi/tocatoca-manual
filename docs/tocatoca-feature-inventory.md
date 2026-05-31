# TocaToca Feature Inventory

This inventory is the master checklist for future user documentation. It lists only the screens and actions that normal TocaToca listeners can see and use in the web player.

Documentation status values:

- `not documented`: no useful user-facing manual page exists yet
- `partially documented`: mentioned or stubbed, but not complete
- `fully documented`: complete page exists with clear steps and media guidance

## Login / Authentication

- [ ] **Login screen**
  - Navigation location: automatic redirect from `https://play.tocatoca.com`; login handled through `https://auth.tocatoca.com`
  - Screen name: Login
  - User purpose: sign in before listening
  - Main actions: enter account details, submit login, return to the player
  - Related screens: Home screen, User menu, Login error state
  - Documentation status: partially documented

- [ ] **Magic link / access flow**
  - Navigation location: login flow via `https://auth.tocatoca.com`
  - Screen name: Access confirmation
  - User purpose: confirm access from an email link when required
  - Main actions: request link, open link in the same browser, continue to player
  - Related screens: Login screen, Account status, Login not kept
  - Documentation status: partially documented

- [ ] **Logout**
  - Navigation location: user menu
  - Screen name: Logout action
  - User purpose: end the current browser session
  - Main actions: open user menu, choose logout
  - Related screens: Login screen, User menu, Queue
  - Documentation status: partially documented

- [ ] **Login error notification**
  - Navigation location: login screen
  - Screen name: Login error
  - User purpose: understand why sign-in did not continue
  - Main actions: recheck account details, retry, request support if needed
  - Related screens: Login screen, Support contact
  - Documentation status: partially documented

## Home Screen

- [ ] **Start page / library overview**
  - Navigation location: first page after login; side navigation item for collections
  - Screen name: Collections overview
  - User purpose: start browsing available music
  - Main actions: open a collection, switch between grid/list display, use filters, search collections
  - Related screens: Collection detail, Search, Player controls
  - Documentation status: partially documented

- [ ] **Side navigation**
  - Navigation location: left side menu on desktop; drawer menu on mobile
  - Screen name: Main navigation
  - User purpose: move between collections, artists, song lists, favorites, most-played songs, and playlists
  - Main actions: open navigation item, expand/collapse menu, open a playlist directly
  - Related screens: Search, Artists, Collections, Song lists, Playlists
  - Documentation status: not documented

- [ ] **Library/catalog selector**
  - Navigation location: top of side navigation, when more than one catalog is available to the user
  - Screen name: Library selector
  - User purpose: limit browsing to one or more available catalogs
  - Main actions: open selector, choose catalog, clear or change selection
  - Related screens: Collections overview, Artists, Song lists, Search
  - Documentation status: not documented

## Search

- [ ] **Collection search**
  - Navigation location: collections overview filter/search field
  - Screen name: Search collections
  - User purpose: find a collection by name or related metadata
  - Main actions: type search term, refine filters, open result
  - Related screens: Collection detail, Artists, Song lists
  - Documentation status: partially documented

- [ ] **Song search**
  - Navigation location: song list search/filter area
  - Screen name: Search songs
  - User purpose: find a recording by title, artist, role, year, genre, decade, or mood
  - Main actions: type title search, add filters, clear filters, start a result
  - Related screens: Song lists, Artist links, Player controls
  - Documentation status: partially documented

- [ ] **Artist search**
  - Navigation location: artists screen search/filter area
  - Screen name: Search artists
  - User purpose: find names connected to recordings
  - Main actions: type artist name, choose role filter, open the matching song list
  - Related screens: Artists, Song lists, Artist links
  - Documentation status: partially documented

- [ ] **Playlist search**
  - Navigation location: playlists screen and add-to-playlist dialog
  - Screen name: Search playlists
  - User purpose: find an existing playlist when managing or adding songs
  - Main actions: type playlist name, choose playlist, create new playlist from typed name where available
  - Related screens: Playlists, Add to playlist dialog
  - Documentation status: not documented

## Artists

- [ ] **Artists overview**
  - Navigation location: side navigation > Artists
  - Screen name: Artists
  - User purpose: browse people, orchestras, and other names connected to available recordings
  - Main actions: search by name, filter by role, select an artist
  - Related screens: Song lists, Search, Collections
  - Documentation status: partially documented

- [ ] **Artist link from song or collection**
  - Navigation location: clickable artist name in a song list, collection detail, or now-playing information
  - Screen name: Artist-linked song list
  - User purpose: discover all available recordings connected to that artist
  - Main actions: click artist name, review filtered song list, start a title, add songs to playlist
  - Related screens: Song lists, Collection detail, Player controls
  - Documentation status: partially documented

- [ ] **Artist role filter**
  - Navigation location: artists screen filter area
  - Screen name: Artist role filter
  - User purpose: narrow names by how they are connected to recordings
  - Main actions: choose a role, review matching artists, open song list for a result
  - Related screens: Artists overview, Song search
  - Documentation status: not documented

## Albums / Collections

- [ ] **Collections overview**
  - Navigation location: side navigation > Albums/Collections
  - Screen name: Collections
  - User purpose: browse available groups of recordings
  - Main actions: search, filter, switch grid/list layout, open collection
  - Related screens: Collection detail, Search, Favorites
  - Documentation status: partially documented

- [ ] **Collection detail**
  - Navigation location: click a collection from the overview or from now-playing cover art
  - Screen name: Collection page
  - User purpose: see the recordings inside one collection
  - Main actions: play collection, shuffle collection, play next, play later, add songs to playlist, mark favorite where available
  - Related screens: Song lists, Player controls, Playlists
  - Documentation status: partially documented

- [ ] **Collection filters**
  - Navigation location: collections overview filter panel
  - Screen name: Collection filters
  - User purpose: narrow collections by artist, genre, label, grouping, mood, medium, type, year, or favorites
  - Main actions: open filters, select values, remove filters
  - Related screens: Collections overview, Search
  - Documentation status: not documented

- [ ] **Collection layout toggle**
  - Navigation location: collections overview toolbar
  - Screen name: Grid/list switch
  - User purpose: choose a visual browsing mode
  - Main actions: switch between grid and table layout
  - Related screens: Collections overview
  - Documentation status: not documented

## Song Lists

- [ ] **All songs list**
  - Navigation location: side navigation > Songs/TTunes
  - Screen name: Song list
  - User purpose: browse recordings directly
  - Main actions: search, filter, sort, start a song, use row actions, select multiple songs
  - Related screens: Search, Player controls, Favorites, Playlists
  - Documentation status: partially documented

- [ ] **Filtered song list**
  - Navigation location: search results, artist links, favorites, most-played songs, collection links
  - Screen name: Filtered songs
  - User purpose: work with a focused set of recordings
  - Main actions: start playback, add to queue, add to playlist, adjust visible columns on desktop
  - Related screens: Artists, Collections, Favorites, Playlists
  - Documentation status: partially documented

- [ ] **Song row actions menu**
  - Navigation location: three-dot menu beside a song
  - Screen name: Song actions
  - User purpose: choose what to do with one recording
  - Main actions: play now, play next, play later, add to playlist, show playlists containing the song, view info
  - Related screens: Queue, Playlists, Player controls
  - Documentation status: not documented

- [ ] **Song information dialog**
  - Navigation location: song row actions > info
  - Screen name: Song information
  - User purpose: view additional information about a recording
  - Main actions: open info, read details, close dialog
  - Related screens: Song lists, Collection detail
  - Documentation status: not documented

- [ ] **Bulk song actions**
  - Navigation location: song list selection toolbar
  - Screen name: Selected song actions
  - User purpose: apply playback or playlist actions to multiple recordings
  - Main actions: select songs, play now, play next, play later, add to playlist
  - Related screens: Song lists, Queue, Playlists
  - Documentation status: not documented

## Favorites

- [ ] **Favorite a song**
  - Navigation location: heart/favorite icon in song lists and player toolbar
  - Screen name: Favorite action
  - User purpose: save a recording for later
  - Main actions: mark favorite, remove favorite
  - Related screens: Favorites list, Player controls, Song lists
  - Documentation status: partially documented

- [ ] **Favorite songs list**
  - Navigation location: side navigation > Favorites
  - Screen name: Favorites
  - User purpose: return to saved recordings
  - Main actions: open favorites, play songs, remove favorite, add to playlist
  - Related screens: Song lists, Player controls, Playlists
  - Documentation status: partially documented

- [ ] **Favorite collections filter**
  - Navigation location: collections filters, when favorites are enabled
  - Screen name: Favorite collections
  - User purpose: find collections marked as favorites
  - Main actions: filter collections by favorite status, open collection
  - Related screens: Collections overview, Collection detail
  - Documentation status: not documented

## Playlists

- [ ] **Playlists overview**
  - Navigation location: side navigation > Playlists or playlist settings icon in playlist submenu
  - Screen name: Playlists
  - User purpose: view and manage personal playlists
  - Main actions: search playlists, open playlist, create playlist, edit writable playlist, delete writable playlist
  - Related screens: Playlist detail, Add to playlist dialog, Queue
  - Documentation status: partially documented

- [ ] **Playlist detail**
  - Navigation location: click a playlist from side navigation or playlists overview
  - Screen name: Playlist page
  - User purpose: listen to a saved set of recordings
  - Main actions: play playlist, shuffle playlist, play next, play later, reorder or remove tracks where allowed
  - Related screens: Player controls, Queue, Song lists
  - Documentation status: partially documented

- [ ] **Create playlist**
  - Navigation location: playlists overview create button; add-to-playlist dialog typed name; save queue dialog
  - Screen name: Create playlist
  - User purpose: make a new personal list of recordings
  - Main actions: enter playlist name, save playlist, add songs
  - Related screens: Playlists overview, Add to playlist dialog, Save queue dialog
  - Documentation status: partially documented

- [ ] **Add to playlist dialog**
  - Navigation location: song actions, collection actions, selected song actions
  - Screen name: Add to playlist
  - User purpose: add one or more recordings to an existing or new playlist
  - Main actions: search playlist, select playlist, create playlist, confirm add, handle duplicate warning
  - Related screens: Song lists, Collection detail, Playlist detail
  - Documentation status: not documented

- [ ] **Duplicate song warning**
  - Navigation location: add-to-playlist dialog when selected songs already exist in target playlist
  - Screen name: Duplicate song warning
  - User purpose: decide whether to add duplicates or skip them
  - Main actions: add duplicates, skip duplicates, cancel
  - Related screens: Add to playlist dialog, Playlist detail
  - Documentation status: not documented

- [ ] **Shared playlists section**
  - Navigation location: side navigation, shown only when playlists from another owner are visible
  - Screen name: Shared playlists
  - User purpose: listen to playlists available to the current user but not owned by them
  - Main actions: expand shared playlist section, open shared playlist, play songs
  - Related screens: Playlist detail, Player controls
  - Documentation status: not documented

## Queue

- [ ] **Play later / queue**
  - Navigation location: song actions, collection actions, playlist actions
  - Screen name: Queue
  - User purpose: decide what plays after the current song
  - Main actions: add to queue, play next, reorder queue in player, remove queued item where available
  - Related screens: Player controls, Song lists, Collection detail, Playlist detail
  - Documentation status: partially documented

- [ ] **Save queue as playlist**
  - Navigation location: player toolbar save icon
  - Screen name: Save queue
  - User purpose: turn the current listening queue into a playlist
  - Main actions: open save dialog, enter playlist name, save, open new playlist
  - Related screens: Queue, Playlists, Player controls
  - Documentation status: not documented

- [ ] **Clear queue / close player**
  - Navigation location: player close/destroy control; logout also clears queue
  - Screen name: Clear queue
  - User purpose: stop the current playback list and hide the player
  - Main actions: close player, confirm or allow queue to clear
  - Related screens: Player controls, Logout
  - Documentation status: not documented

## Player Controls

- [ ] **Player bar**
  - Navigation location: bottom player, appears after starting music
  - Screen name: Player
  - User purpose: control current playback
  - Main actions: play, pause, next, previous, seek, change volume, open queue
  - Related screens: Queue, Song lists, Collection detail
  - Documentation status: partially documented

- [ ] **Playback modes**
  - Navigation location: player controls
  - Screen name: Play mode
  - User purpose: change how the queue continues
  - Main actions: choose normal/repeat/shuffle mode where available
  - Related screens: Queue, Player bar
  - Documentation status: not documented

- [ ] **Now-playing title and cover**
  - Navigation location: player
  - Screen name: Now playing
  - User purpose: see what is currently playing
  - Main actions: read title/artist/collection, click cover to open collection where available
  - Related screens: Collection detail, Artist links, Queue
  - Documentation status: partially documented

- [ ] **Favorite from player**
  - Navigation location: player toolbar
  - Screen name: Player favorite
  - User purpose: save the currently playing song
  - Main actions: toggle favorite on/off
  - Related screens: Favorites, Song lists
  - Documentation status: partially documented

## User Menu

- [ ] **User menu**
  - Navigation location: top app bar avatar/profile button
  - Screen name: User menu
  - User purpose: access personal preferences, account action, about information, and logout
  - Main actions: open menu, choose personal settings, open about, logout
  - Related screens: Personal settings, Logout, About dialog
  - Documentation status: not documented

- [ ] **Personal settings**
  - Navigation location: user menu > personal settings
  - Screen name: Personal settings
  - User purpose: adjust personal display and listening preferences
  - Main actions: select theme, select language, choose default collection view
  - Related screens: User menu, Collections overview
  - Documentation status: not documented

- [ ] **About dialog**
  - Navigation location: user menu > About
  - Screen name: About
  - User purpose: see app/version information
  - Main actions: open dialog, read information, close dialog
  - Related screens: User menu
  - Documentation status: not documented

## Account Settings

- [ ] **Account access status**
  - Navigation location: outside the player through `https://auth.tocatoca.com`
  - Screen name: Account / subscription status
  - User purpose: understand whether listening access is active
  - Main actions: open account area, check status, return to player
  - Related screens: Login screen, Home screen, Error states
  - Documentation status: partially documented

- [ ] **Password or access method**
  - Navigation location: outside the player through `https://auth.tocatoca.com`
  - Screen name: Password / access
  - User purpose: regain or change access when needed
  - Main actions: request Magic Link, reset password where available, retry login
  - Related screens: Login screen, Login error state
  - Documentation status: partially documented

## Mobile-Specific Behavior

- [ ] **Mobile navigation drawer**
  - Navigation location: menu button on mobile
  - Screen name: Mobile navigation
  - User purpose: move between screens on a small display
  - Main actions: open drawer, choose section, close drawer
  - Related screens: Home screen, Search, Playlists
  - Documentation status: partially documented

- [ ] **Mobile song lists**
  - Navigation location: song lists on phone-sized screens
  - Screen name: Mobile song list
  - User purpose: start songs and use song actions from a compact list
  - Main actions: tap song, open row actions, favorite, add to playlist
  - Related screens: Song lists, Player controls
  - Documentation status: not documented

- [ ] **Mobile player**
  - Navigation location: bottom player on mobile
  - Screen name: Mobile player
  - User purpose: control playback on phone or tablet
  - Main actions: tap play/pause, open player, manage queue, use favorite/save buttons
  - Related screens: Queue, Player controls
  - Documentation status: partially documented

- [ ] **Mobile browser playback start**
  - Navigation location: first playback attempt on mobile
  - Screen name: Tap-to-play behavior
  - User purpose: understand why audio often starts only after a direct tap
  - Main actions: tap play directly, retry after page reload
  - Related screens: Player controls, Error states
  - Documentation status: partially documented

- [ ] **Mobile login persistence**
  - Navigation location: mobile browser session
  - Screen name: Login not kept
  - User purpose: stay signed in between visits where browser settings allow it
  - Main actions: allow cookies/site data, avoid private browsing, sign in again
  - Related screens: Login screen, Error states
  - Documentation status: partially documented

## Error States

- [ ] **No sound**
  - Navigation location: player after starting playback
  - Screen name: No sound
  - User purpose: fix silent playback
  - Main actions: check device volume, browser mute, player volume, reload page
  - Related screens: Player controls, Mobile playback start
  - Documentation status: partially documented

- [ ] **Music does not start**
  - Navigation location: player or song list
  - Screen name: Playback does not start
  - User purpose: recover when a title does not play
  - Main actions: retry play, reload page, check login/access, check connection
  - Related screens: Login screen, Player controls, Support contact
  - Documentation status: partially documented

- [ ] **Login not kept**
  - Navigation location: returning to player after previous login
  - Screen name: Session not kept
  - User purpose: understand why sign-in is requested again
  - Main actions: allow cookies, avoid private browsing, log in again
  - Related screens: Login screen, Mobile login persistence
  - Documentation status: partially documented

- [ ] **Network or communication error**
  - Navigation location: any screen when data cannot be loaded or an action fails
  - Screen name: Communication error
  - User purpose: know what to do when a request fails
  - Main actions: reload page, retry action, check internet connection, contact support
  - Related screens: Search, Song lists, Playlists, Player controls
  - Documentation status: not documented

- [ ] **Missing or unavailable recording**
  - Navigation location: song lists when a recording cannot be played
  - Screen name: Unavailable recording
  - User purpose: understand why an item is greyed out or cannot be selected
  - Main actions: choose another title, contact support if the issue seems wrong
  - Related screens: Song lists, Collection detail
  - Documentation status: not documented

- [ ] **Support contact**
  - Navigation location: manual/support path, not a player screen
  - Screen name: Support contact
  - User purpose: report a problem with enough useful detail
  - Main actions: describe issue, include account email, browser/device, song or page, screenshot where possible
  - Related screens: Error states, Login / Authentication
  - Documentation status: partially documented

## Empty States

- [ ] **No search results**
  - Navigation location: search/filter results
  - Screen name: No results found
  - User purpose: understand that the current search or filters returned nothing
  - Main actions: change search term, remove filters, try a shorter name
  - Related screens: Search, Artists, Collections, Song lists
  - Documentation status: not documented

- [ ] **No favorites yet**
  - Navigation location: Favorites list
  - Screen name: Empty favorites
  - User purpose: understand why the favorites page has no songs
  - Main actions: find a song, mark it as favorite, return to favorites
  - Related screens: Favorites, Song lists, Player controls
  - Documentation status: not documented

- [ ] **No playlists yet**
  - Navigation location: playlists overview or add-to-playlist dialog
  - Screen name: Empty playlists
  - User purpose: understand that no playlist exists yet
  - Main actions: create a playlist, add songs, save queue as playlist
  - Related screens: Playlists, Add to playlist dialog, Queue
  - Documentation status: not documented

- [ ] **Empty queue / nothing playing**
  - Navigation location: player area before playback starts or after queue is cleared
  - Screen name: Nothing playing
  - User purpose: understand that no music is currently queued
  - Main actions: open a collection or song list, start a title
  - Related screens: Home screen, Song lists, Player controls
  - Documentation status: partially documented

- [ ] **No accessible catalog**
  - Navigation location: home screen or library selector when the user has no available catalog
  - Screen name: No music available
  - User purpose: understand that access or assignment may be missing
  - Main actions: check account status, reload after access change, contact support
  - Related screens: Account access status, Support contact
  - Documentation status: not documented
