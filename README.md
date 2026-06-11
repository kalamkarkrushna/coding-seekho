# Coding-Seekho

Coding-Seekho is a full-stack educational platform designed for computer science students to practice coding problems, track their progress, and prepare for technical interviews. The platform features a Java Spring Boot backend with a React frontend, providing a hands-on learning experience with real-world coding challenges.

---

## Project Structure

```
Coding-Seekho/
│
├── java-backend/       # Spring Boot REST API (Java 17)
├── frontend/           # React + Vite UI
└── README.md           # Project documentation
```

---

## Features

- Coding problem repository with multiple difficulty levels
- Code submission and auto-evaluation
- User authentication with JWT
- Progress tracking and statistics
- Email notifications for account verification
- RESTful API architecture

---

## Tech Stack

| Layer    | Technology                         |
|----------|------------------------------------|
| Backend  | Java 17, Spring Boot, Hibernate    |
| Frontend | React 19, Vite 7, JavaScript       |
| Database | MySQL (Aiven cloud-hosted)         |
| Auth     | JWT (JSON Web Tokens)              |
| Email    | SMTP (Gmail)                       |
| Deploy   | Render (Docker backend + Static frontend) |

---

## Getting Started

### Prerequisites

- Java 17
- Node.js 18+
- MySQL (or Aiven cloud MySQL)

### Clone the repository

```bash
git clone https://github.com/kalamkarkrushna/coding-seekho.git
```

### Backend Setup

```bash
cd java-backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables (Backend)

| Variable                     | Description                |
|------------------------------|----------------------------|
| `SPRING_DATASOURCE_URL`      | MySQL JDBC connection URL  |
| `SPRING_DATASOURCE_USERNAME` | Database username          |
| `SPRING_DATASOURCE_PASSWORD` | Database password          |
| `JWT_SECRET`                 | JWT signing secret         |
| `SPRING_MAIL_HOST`           | SMTP host                  |
| `SPRING_MAIL_PORT`           | SMTP port                  |
| `SPRING_MAIL_USERNAME`       | Email username             |
| `SPRING_MAIL_PASSWORD`       | Email app password         |
| `IMAGE_UPLOAD_DIR`           | Image upload directory     |

### API Base URL (Frontend)

Configure in `.env`:

```env
VITE_API_URL=http://localhost:8080
```

---

## API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/auth/register`  | User registration     |
| POST   | `/api/auth/login`     | User login            |
| GET    | `/api/problems`       | List coding problems  |
| GET    | `/api/problems/{id}`  | Get problem details   |
| POST   | `/api/submissions`    | Submit code solution  |
| GET    | `/api/users/profile`  | Get user profile      |

---

## Deployment

The project is deployed on Render:
- **Backend**: Docker container on Render (free tier, Oregon region)
- **Frontend**: Static site on Render with CDN
- **Database**: Aiven MySQL (free tier, Singapore region, DigitalOcean)

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

MIT License
