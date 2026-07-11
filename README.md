# FanFest 2026

A dark-themed creator/event landing page built with the MERN stack. FanFest 2026 is India's biggest creator festival bringing together content creators, influencers, brands, gamers, artists and thousands of passionate fans under one roof for three days of panels, activations, live streams, and unforgettable fan experiences.

## Tech Stack

**Client (Frontend)**
- React + Vite (JavaScript)
- Tailwind CSS v3.4.13
- React Router DOM
- Framer Motion
- Axios

**Server (Backend)**
- Node.js + Express
- MongoDB (Mongoose ODM)
- CORS
- Dotenv

## Folder Structure

```
/client           -> React app built with Vite
  /src
    /components   -> Reusable components (Navbar, Footer, Hero, About, Features, Perks, Eligibility, Timeline, FAQ, ApplyForm)
    /pages        -> Route pages (Home, Apply)
    /styles       -> Global CSS with Tailwind directives
  .env.example    -> VITE_API_URL placeholder
/server           -> Node.js + Express + MongoDB API
  /config         -> Database connection (db.js)
  /controllers    -> Application controller
  /models         -> Mongoose Application model
  /routes         -> API routes (applications.js)
  .env.example    -> PORT, MONGODB_URI, CLIENT_ORIGIN placeholders
```

## Local Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd FanFest
```

2. Install dependencies in both folders:
```bash
cd client
npm install

cd ../server
npm install
```

3. Set up environment variables:
```bash
# Copy .env.example to .env in both folders
cp client/.env.example client/.env
cp server/.env.example server/.env

# Edit the .env files:
# client/.env: Set VITE_API_URL to your backend URL
# server/.env: Set MONGODB_URI to your MongoDB connection string and CLIENT_ORIGIN to your frontend URL
```

4. Ensure MongoDB is running (local or Atlas):
   - For local MongoDB: `mongod`
   - For Atlas: Use your connection string in MONGODB_URI

5. Run the development servers:
```bash
# Terminal 1 - Server
cd server
npm run dev

# Terminal 2 - Client
cd client
npm run dev
```

The client will be available at http://localhost:5173 and the server at http://localhost:5000.

## Building for Production

```bash
# Build the client
cd client
npm run build

# The built files will be in client/dist
```

## Deployment Notes

**Client Deployment (Vercel/Netlify)**
- Deploy the `client` folder
- Set environment variable: `VITE_API_URL` = your deployed backend URL

**Server Deployment (Render/Railway)**
- Deploy the `server` folder
- Set environment variables:
  - `MONGODB_URI` = your MongoDB Atlas connection string
  - `CLIENT_ORIGIN` = your deployed frontend URL
  - `PORT` = port (default: 5000)