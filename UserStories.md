# MillDuell - User Stories

> **Legend:** MUST = core feature | SHOULD = important but secondary | NICE = nice-to-have

---

## 1. User Management

### US-1.1: Registration [MUST]
**As a** visitor,
**I want to** register with username, email, and password,
**so that** I can play the game.

**Acceptance Criteria:**
- Username and email must be unique
- Password min. 8 characters
- Clear error messages on invalid input

---

### US-1.2: Login & Logout [MUST]
**As a** player,
**I want to** log in and log out,
**so that** I can securely access my account.

**Acceptance Criteria:**
- Login with email and password
- Successful login redirects to dashboard
- Logout ends the session and redirects to login page

---

### US-1.3: Forgot Password [SHOULD]
**As a** player,
**I want to** reset my password via email,
**so that** I can regain access if I forget it.

**Acceptance Criteria:**
- "Passwort vergessen?" link on login page triggers a reset email
- Player can set a new password via the link

---

### US-1.4: My Data (Profile Settings) [SHOULD]
**As a** player,
**I want to** view and edit my account data (username, email, password),
**so that** I can keep my profile up to date.

**Acceptance Criteria:**
- Accessible via "Meine Daten" in the profile section
- Player can change username, email, and password

---

## 2. Dashboard

### US-2.1: Dashboard Overview [MUST]
**As a** player,
**I want to** see a dashboard with my current games, options to start a new game, and my profile section,
**so that** I have a central hub for all actions.

**Acceptance Criteria:**
- Shows list of current/active games with opponent names
- "YOUR TURN" badge on games where it's the player's turn
- Online status indicator (green dot) on opponents who are online
- Navigation to: New Game, Statistics, Friends, My Data
- "Wie funktioniert MillDuell?" help button at the bottom

---

## 3. Game Creation [MUST]

### US-3.1: Start a New Game [MUST]
**As a** player,
**I want to** create a new game by choosing a specific opponent and my stone color,
**so that** I can start playing.

**Acceptance Criteria:**
- Player selects an opponent via search, recent opponents, or friends list (see US-3.2)
- Player chooses their stone color (white/black) via dropdown
- "Spiel starten" button creates the game
- The game appears in the opponent's "Aktuelle Partien" list
- Game starts when the opponent opens it

---

### US-3.2: Find Opponent [MUST]
**As a** player,
**I want to** find an opponent via search, recent opponents, or friends list,
**so that** I can quickly start a game.

**Acceptance Criteria:**
- "Gegner suchen": search for players by username
- "Letzte Gegner": list of recently played opponents
- "Freunde": list of added friends

---

### US-3.3: Invite via Link / QR Code [NICE]
**As a** player,
**I want to** invite someone via a shareable link or QR code,
**so that** I can play with someone who isn't in my friends list.

**Acceptance Criteria:**
- A unique invite link/QR code is generated for the game
- Recipient can join the game directly via the link

---

## 4. Gameplay

### US-4.1: Placing Phase (Setzphase) [MUST]
**As a** player,
**I want to** place my 9 stones on empty board positions, alternating turns,
**so that** I can set up my position.

**Acceptance Criteria:**
- White begins; players alternate placing one stone per turn
- Only empty intersections (24 total) are valid targets
- Phase ends when all 18 stones are placed

---

### US-4.2: Moving Phase (Zugphase) [MUST]
**As a** player,
**I want to** move my stones to adjacent empty positions,
**so that** I can form mills.

**Acceptance Criteria:**
- A stone can only move to a directly connected, empty intersection
- Players alternate turns
- Valid targets are highlighted when selecting a stone

---

### US-4.3: Flying Phase (Sprungphase) [MUST]
**As a** player with only 3 stones left,
**I want to** move any stone to any empty position,
**so that** I still have a chance to win.

**Acceptance Criteria:**
- Activates when a player has exactly 3 stones on the board
- Stone can jump to any empty position (not just adjacent)

---

### US-4.4: Mill Detection & Stone Removal [MUST]
**As a** player,
**I want** the game to detect when I form a mill (3 in a row) and let me remove an opponent's stone,
**so that** I can reduce my opponent's pieces.

**Acceptance Criteria:**
- Mill = 3 same-color stones on a connected straight line (horizontal or vertical)
- After forming a mill, player must remove one opponent stone
- Cannot remove a stone that is part of a mill, unless all opponent stones are in mills
- If one move creates two mills, only one stone is removed
- Works in all three phases (placing, moving, flying)

---

### US-4.5: Game End [MUST]
**As a** player,
**I want** the game to end and show the result when a win or draw condition is reached,
**so that** the outcome is clear.

**Acceptance Criteria:**
- **Loss:** Player has fewer than 3 stones, or cannot make a legal move
- **Draw:** No mill formed within 20 consecutive moves
- Result screen shows winner/loser/draw
- Result is saved to both players' statistics

---

### US-4.6: Game Info Panel [MUST]
**As a** player,
**I want to** see the current game state (phase, turn, stone counts) during the game,
**so that** I always know what's happening.

**Acceptance Criteria:**
- Displays: color assignment, stones in hand, remaining stones, current phase (setzen/ziehen/springen), whose turn it is
- Status message: "Du bist am Zug!" or "Dein Gegner ist am Zug."
- Stone reserves shown visually at the bottom

---

## 5. Real-Time Communication

### US-5.1: Live Game Updates [MUST]
**As a** player,
**I want to** see my opponent's moves in real time without refreshing,
**so that** the game feels responsive.

**Acceptance Criteria:**
- Moves appear on the opponent's board immediately
- Game state is persisted on the server (resumable after disconnect)

---

## 6. Statistics, Level & Leaderboard

### US-6.1: My Statistics & Level [MUST]
**As a** player,
**I want to** see my stats (games played, wins, losses, draws) and my current level,
**so that** I can track my progress.

**Acceptance Criteria:**
- Shows: Gespielte Partien, Gewonnene, Verlorene, Unentschiedene Partien
- Level calculated from wins, displayed with a mill illustration (Handmühle / Wassermühle / Steinmühle)

---

### US-6.2: Leaderboard [MUST]
**As a** player,
**I want to** see a global ranking of players,
**so that** I can compare myself to others.

**Acceptance Criteria:**
- Ranked list showing position, avatar, and username
- Accessible from the dashboard via "Statistik"

---

## 7. Social Features

### US-7.1: Friends List [SHOULD]
**As a** player,
**I want to** add and view friends,
**so that** I can easily start games with people I know.

**Acceptance Criteria:**
- Add friends by username
- View friends list from dashboard and when creating a new game
- See online status of friends

---

## 8. Help

### US-8.1: Rules & Help Page [MUST]
**As a** player,
**I want to** access the game rules from the dashboard and during a game,
**so that** I understand how to play.

**Acceptance Criteria:**
- "Wie funktioniert MillDuell?" button on dashboard opens rules page
- Rules cover all three phases, mill formation, and end conditions
