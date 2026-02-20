# ZenMeUp

## See the App!

[Visit ZenMeUp](https://zen-me-up-app-git-master-annas-projects-e892e751.vercel.app/programs)

## Description

**Guided meditation app with audio and relaxing sounds.**

- **Client Repsitory:** [ZenMeUp Client](https://github.com/abenedicti/zen-me-up-app)
- **Server Repository:** [ZenMeUp Server](https://github.com/abenedicti/zen-me-up-server)

---

## Technologies, Libraries & APIs used

- **Frontend:** React, CSS
- **HTTP Requests:** Axios
- **Animations & Loading:** React Spinners, Lottie
- **Other Tools:** npm

---

## Backlog Functionalities

- Light/Dark theme toggle
- Different kinds of meditation sessions
- Video format support
- Improved and minimalist design

---

## Client Structure

### User Stories

- **404 Page:** As a user I want to see a nice 404 page when I go to a page that doesn’t exist.
- **Homepage:** As a user I want to access the homepage to see what the app is about.
- **Programs Page:** As a user I want to view meditation programs.
- **Sessions Page:** As a user I want to view sessions of a specific program.
- **All Sessions Page:** As a user I want to see all available sessions.
- **Session Details Page:** As a user I want to see details of a session, including audio, video, and reflections.

### Client Routes

| React Router Routes (React App) | Path                            | Page           | Components                                                  | Behavior                                               |
| ------------------------------- | ------------------------------- | -------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| Home                            | `/`                             | HomePage       | Navbar, Footer                                              | Displays homepage with app info                        |
| Programs                        | `/programs`                     | Programs       | Navbar, Footer                                              | Lists all programs                                     |
| Program Sessions                | `/programs/:programId/sessions` | Sessions       | Navbar, Footer                                              | Lists sessions for selected program                    |
| All Sessions                    | `/sessions`                     | AllSessions    | Navbar, Footer                                              | Lists all sessions available                           |
| Session Details                 | `/sessions/:sessionId`          | SessionDetails | Navbar, Footer, VideoPlayer, SessionInfo, SessionReflection | Shows session details with audio/video and reflections |
| Not Found                       | `*`                             | NotFoundPage   | Navbar, Footer                                              | Displays 404 page                                      |

---

### Other Components

- Navbar
- Footer
- Search
- SessionInfo
- SessionReflection
- VideoPlayer

---

## Links

- **Deploy Link:** [ZenMeUp App](https://zen-me-up-app-git-master-annas-projects-e892e751.vercel.app/programs)
- **Slides:** _(to be added later)_

---

## Collaborators

- **Developer:** Annabelle Benedicti
