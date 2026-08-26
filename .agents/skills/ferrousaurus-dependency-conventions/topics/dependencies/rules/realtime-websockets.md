---
title: Real-time / WebSockets
tags: real-time, websockets, SSE, socket.io
---

## Real-time / WebSockets

### Go-To

- **Server-Sent Events (SSE)** — For simple real-time data push (notifications, activity feeds, live updates). SSE uses standard HTTP, works through proxies and firewalls, and requires no special server setup. Prefer SSE when the communication is primarily server-to-client.
- **Socket.IO** — When full-duplex real-time communication is needed (chat, collaborative editing, live dashboards). Socket.IO provides automatic reconnection, room-based broadcasting, and fallback transports. Use when WebSocket features like bidirectional communication are required.

### Acceptable

- **ws** — When working with lower-level WebSocket needs and Socket.IO's abstractions are unnecessary. ws is a bare WebSocket server with no extra features. Use only when you need fine-grained control over the WebSocket connection lifecycle.

### Unacceptable

- **Liveblocks** — Proprietary, managed service for collaborative real-time. Liveblocks adds vendor dependency and cost for use cases that Socket.IO or SSE can handle self-hosted.
- **Ably** — Managed real-time messaging platform with vendor lock-in and per-message pricing. Self-hosted solutions (Socket.IO, SSE) provide more control at lower cost.
- **Pusher** — Managed WebSocket service with vendor dependency, per-message pricing, and limited customization. Not suitable for the self-hosted Coolify deployment model.

### Cross-References

- Related: [deployment-hosting.md](../../dependencies/rules/deployment-hosting.md), [api-layer.md](../../dependencies/rules/api-layer.md)
