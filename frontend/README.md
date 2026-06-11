# Coding-Seekho Frontend

React-based user interface for the Coding-Seekho platform — a coding practice and learning application.

---

## Tech Stack

- **React 19**
- **Vite 7** (build tool)
- **JavaScript** (ES6+)
- **Axios** (HTTP client)
- **React Router** (client-side routing)

---

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` by default.

---

## Build for Production

```bash
npm run build
```

Output is written to `dist/`.

---

## Environment Variables

| Variable          | Required | Default | Description                          |
|-------------------|----------|---------|--------------------------------------|
| `VITE_API_URL`    | No       | `''`    | Base URL for the backend API         |

Set in `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

In production, this points to the deployed backend URL.

---

## Project Structure

```
frontend/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route-level page components
│   ├── services/      # API client and service functions
│   ├── styles/        # CSS files
│   ├── App.jsx        # Root app component
│   └── main.jsx       # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Scripts

| Command             | Description                    |
|---------------------|--------------------------------|
| `npm run dev`       | Start development server       |
| `npm run build`     | Build for production           |
| `npm run preview`   | Preview production build       |
| `npm run lint`      | Run ESLint                     |
