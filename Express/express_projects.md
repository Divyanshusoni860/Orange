# Express.js Intermediate & Advanced Projects

A curated list of **5 Express.js projects** to build strong backend skills — covering intermediate and advanced concepts.

---

## 1. Auth API with JWT & Role-Based Access

**Goal:**  
Build an authentication system with sign-up, login, protected routes, and roles (admin/user).

**Key Topics Covered:**
- **JWT** → Create and verify tokens
- **Middleware** → For route protection
- **Role-based access control (RBAC)** → Limit endpoints by role
- **Environment variables (`dotenv`)** → Store secrets securely
- **Password hashing (`bcrypt`)** → Securely store passwords

**Extra Challenge:**  
Add **refresh tokens** and **token expiration handling**.

---

## 2. File Upload & Image Processing Service

**Goal:**  
Allow users to upload images, resize them, and serve them via Express.

**Key Topics Covered:**
- **File uploads (`multer`)** → Handling `multipart/form-data`
- **Static file serving** → Serve uploaded files via `/uploads` route
- **Image processing (`sharp` or `jimp`)** → Resize, compress, watermark
- **Error handling middleware** → Centralized error responses
- **File validation** → MIME type checks, size limits

**Extra Challenge:**  
Store uploaded files in **AWS S3** instead of locally.

---

## 3. REST API with CRUD & Pagination

**Goal:**  
Build a REST API for blog posts with Create, Read, Update, Delete, and pagination for large datasets.

**Key Topics Covered:**
- **CRUD routes** (`GET`, `POST`, `PUT`, `DELETE`)
- **Route parameters** (`req.params`) and **query parameters** (`req.query`)
- **Pagination & filtering** → Limit & skip results
- **HTTP status codes** → Proper success/error codes
- **Custom error classes** → More maintainable error handling

**Extra Challenge:**  
Add **sorting** and **search** using query params.

---

## 4. Real-Time Chat API with WebSockets

**Goal:**  
Build a chat backend using Express and Socket.IO.

**Key Topics Covered:**
- **Socket.IO** → Real-time bidirectional communication
- **Namespaces & rooms** → Separate chat channels
- **Event emitters** → Send and receive events between server & client
- **Express integration with WebSocket server**
- **Connection lifecycle** → Join, leave, disconnect events

**Extra Challenge:**  
Save chat history in memory or in a simple file.

---

## 5. Rate-Limited Weather Proxy API

**Goal:**  
Create a proxy server that calls a weather API (like OpenWeather), caches results, and applies request limits.

**Key Topics Covered:**
- **API proxying** (`axios` or `node-fetch`) → Forwarding requests
- **Caching** (`node-cache` or Redis) → Store results for performance
- **Rate limiting** (`express-rate-limit`) → Prevent abuse
- **Middleware chaining** → Multiple middlewares in a route
- **Async error handling** (`try/catch` + `next`)

**Extra Challenge:**  
Log all requests with **Morgan** and store them in a log file.

---