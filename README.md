# 🌐 Omegle-Like Chat Platform (with Extra Features)

An anonymous real-time chat platform that randomly pairs users for text and/or video conversations. This version is built with **Next.js** and includes several additional features like topic matching, friend reconnects, and moderation.

---

## 📌 Table of Contents

- [Features](#features)
- [User Flow](#user-flow)
- [Technical Architecture](#technical-architecture)
- [Milestone Planning](#milestone-planning)
- [Tech Stack](#tech-stack)
- [Security & Privacy](#security--privacy)

---

## ✨ Features

### Core Features
- Anonymous 1-on-1 chat (Text & Video)
- Random user pairing
- Skip/Next user
- Disconnect functionality

### Additional Features
- Topic-based matching
- Anonymous user nicknames
- Language preference support
- Report and block users
- Add friend / reconnect later
- Moderation AI for safe chatting
- Admin dashboard for monitoring
- Dark/light mode support

---

## 🧭 User Flow

### 1. Landing Page
- Welcome message
- "Start Chatting" button
- Optional inputs:
  - Chat Mode: Text / Video
  - Topics / Interests
  - Language
  - (Optional) Nickname
- Terms of Service checkbox

### 2. Matchmaking
- Connect to available peer
  - Match based on:
    - Availability
    - Topics
    - Language
- Show "Looking for a partner..." screen

### 3. Chat Room
- Text or video container
- UI Controls:
  - Skip / Next
  - Disconnect
  - Report
  - Add Friend
- Chat indicators:
  - Partner typing...
  - Connection quality
  - Video status

### 4. Post-Chat
- Rate or report user (optional)
- Option to reconnect with someone
- Option to go back to main screen

---

## 🏗️ Technical Architecture

### Frontend (Next.js + Tailwind CSS)
- Pages:
  - `/` → Landing
  - `/chat` → Chat Room
  - `/admin` → Admin Panel (protected)
- State Management: Zustand / Context API
- Routing: App Router or Pages Router

### Real-Time Communication
- **WebSockets** (via `socket.io`)
- **WebRTC** for video (via PeerJS or native)

### Backend (API Routes in Next.js or Node/Express microservice)
- Matchmaking queue logic
- Session & peer management
- Abuse reporting & moderation hooks
- User reconnect logic (if Add Friend used)

### Database
- **Redis** (for fast user matchmaking queue)
- **MongoDB** or **PostgreSQL** for:
  - Reports
  - User data (optional)
  - Friends / history

---

## 🔐 Security & Privacy

- E2E encryption for video (WebRTC)
- IP obfuscation using TURN/STUN servers
- Temporary chat sessions
- Optional anonymous nicknames
- Moderation AI for flagged content
- Rate limiting + IP ban system
- GDPR & data privacy compliance

---

## 📆 Milestone Planning

| Phase       | Goals                                            | Timeline     |
|-------------|--------------------------------------------------|--------------|
| Week 1–2    | Setup, UI wireframes, stack decisions            | ✅            |
| Week 3–4    | Landing page + basic anonymous text chat         |              |
| Week 5–6    | Matchmaking logic + skip/disconnect flow         |              |
| Week 7–8    | Add WebRTC for video chat                        |              |
| Week 9–10   | Add topics, language preference, reporting       |              |
| Week 11–12  | Admin dashboard + friend reconnect logic         |              |
| Week 13     | Testing, bugfixes, security, and deployment      |              |

---

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- Tailwind CSS
- Redux (for state)
- Socket.io-client
- WebRTC APIs or PeerJS

### Backend
- API routes (Next.js) or Express microservice
- Socket.io server
- WebRTC signaling server
- MongoDB + Redis
- Prisma (if using PostgreSQL)

### DevOps & Deployment
- Vercel (frontend)
- Fly.io / Railway / Render (backend)
- GitHub Actions (CI/CD)

---

## ⚠️ Notes

- Anonymous chats must be treated with high security/privacy.
- Consider rate-limiting + CAPTCHA for bot protection.
- Add server moderation or monitoring tools to prevent misuse.
- Optionally integrate OpenAI moderation API or similar for text safety.

---

## ✅ Next Steps

- [ ] Finalize project structure
- [ ] Design UI mockups
- [ ] Set up Redis queue for matchmaking
- [ ] Build chat flow and test Socket.io
- [ ] Implement video via WebRTC
- [ ] Add reporting/moderation backend
- [ ] Deploy MVP and test with users

---

## 💬 Contact / Questions

For design ideas, security audits, or implementation help, keep a backlog or ticket system in place.

---

