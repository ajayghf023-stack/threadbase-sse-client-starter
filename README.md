# Threadbase — SSE Client

A React + Express app where the server pushes notifications over SSE. The client
subscribes while a user is signed in and adds incoming events to notification state.

## Run it (two terminals)

```bash
# Terminal 1 — Express + SSE server (do NOT edit)
cd server
cp .env.example .env
npm install
npm start                   # http://localhost:3001

# Terminal 2 — React app
cd client
cp .env.development.example .env.development
npm install
npm run dev                 # http://localhost:5173
```

## Demo accounts (password: `password`)

| Email | Name | userId |
|---|---|---|
| `ada@threadbase.dev` | Ada | 1 |
| `linus@threadbase.dev` | Linus | 2 |

## SSE notification flow

The `useSSE` hook opens the authenticated event stream, parses incoming messages,
and closes the stream when the user or subscription changes. `AppShell` dispatches
each event to notification state using a stable callback.

During development, Vite proxies `/auth` and `/api` requests to
`http://localhost:3001`. If the API runs elsewhere, set `VITE_API_PROXY_TARGET`
in `client/.env.development`.

## Test it

After implementing:
1. Log in as Ada.
2. Open DevTools → Network → find `/api/notifications/stream` → EventStream tab.
3. In a new tab, `POST http://localhost:3001/api/notifications/test` with your Bearer token.
4. Watch the EventStream panel — a frame should appear and the bell badge should increment.
