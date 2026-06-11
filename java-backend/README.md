# Coding-Seekho Backend

Spring Boot REST API for the Coding-Seekho platform — handles user authentication, coding problem management, code submissions, and progress tracking.

---

## Tech Stack

- **Java 17**
- **Spring Boot 4.0.1**
- **Spring Data JPA / Hibernate**
- **Spring Security** with JWT authentication
- **MySQL** database
- **Spring Mail** for email verification
- **Maven** build tool

---

## Project Structure

```
java-backend/
├── src/main/java/com/example/
│   ├── configuration/    # Security, CORS, JWT config
│   ├── controllers/      # REST endpoints
│   ├── demo/             # Entry point
│   ├── models/           # JPA entities
│   ├── repositories/     # Data access layer
│   ├── services/         # Business logic
│   └── util/             # Utilities
├── src/main/resources/
│   └── application.properties
├── Dockerfile
└── pom.xml
```

---

## Running Locally

```bash
# With Maven wrapper
./mvnw spring-boot:run -Dspring-boot.run.profiles=local

# Or build and run JAR
./mvnw clean package -DskipTests
java -jar target/CodingSeekho-0.0.1-SNAPSHOT.jar
```

### Prerequisites

- Java 17
- MySQL server running on port 3306

---

## API Endpoints

### Authentication
| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| POST   | `/api/auth/register` | Register new user          |
| POST   | `/api/auth/login`    | Login and get JWT token    |
| POST   | `/api/auth/verify`   | Verify email with OTP      |

### Problems
| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| GET    | `/api/problems`      | List all problems          |
| GET    | `/api/problems/{id}` | Get problem by ID          |
| POST   | `/api/problems`      | Create a new problem (admin)|

### Submissions
| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/submissions`     | Submit code for evaluation |
| GET    | `/api/submissions`     | Get user submissions       |

### User
| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| GET    | `/api/users/profile`   | Get current user profile   |
| PUT    | `/api/users/profile`   | Update user profile        |

### Health
| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| GET    | `/`                  | Root health check          |
| GET    | `/api/health`        | API health endpoint        |

---

## Environment Variables

| Variable                     | Required | Default                                | Description                |
|------------------------------|----------|----------------------------------------|----------------------------|
| `SPRING_DATASOURCE_URL`      | Yes      | `jdbc:mysql://localhost:3306/Codingseekhoapp?useSSL=true&requireSSL=true` | JDBC URL |
| `SPRING_DATASOURCE_USERNAME` | Yes      | `root`                                 | DB username                |
| `SPRING_DATASOURCE_PASSWORD` | Yes      | `root`                                 | DB password                |
| `JWT_SECRET`                 | Yes      | —                                      | JWT signing secret         |
| `SPRING_MAIL_USERNAME`       | No       | —                                      | Gmail address              |
| `SPRING_MAIL_PASSWORD`       | No       | —                                      | Gmail app password         |
| `IMAGE_UPLOAD_DIR`           | No       | `/tmp/images`                          | Upload directory           |

---

## Docker

```bash
# Build image
docker build -t coding-seekho-backend .

# Run container
docker run -p 8080:8080 \
  -e SPRING_DATASOURCE_URL="jdbc:mysql://host:3306/db" \
  -e SPRING_DATASOURCE_USERNAME="user" \
  -e SPRING_DATASOURCE_PASSWORD="pass" \
  -e JWT_SECRET="secret" \
  coding-seekho-backend
```
