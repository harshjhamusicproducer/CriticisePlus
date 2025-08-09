# Microservices Monorepo

A modern microservices application built with React, Node.js, PostgreSQL, and Prisma in a monorepo structure.

## Architecture

```
apps/
├── frontend/          # React frontend application
└── auth-service/      # Authentication microservice
packages/              # Shared packages (future)
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up the database:**
   
   Create a PostgreSQL database and update the connection string in `apps/auth-service/.env`:
   ```bash
   cd apps/auth-service
   cp .env.example .env
   # Edit .env with your database URL and JWT secret
   ```

3. **Initialize the database:**
   ```bash
   cd apps/auth-service
   npm run db:push
   npm run db:generate
   ```

4. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Auth Service: http://localhost:3001

## Services

### Frontend (React)
- Modern React application with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- JWT authentication
- Responsive design

### Auth Service (Node.js)
- Express.js REST API
- Prisma ORM with PostgreSQL
- JWT authentication
- Input validation with Zod
- CORS and security headers
- Error handling middleware

## Features

- ✅ User registration and login
- ✅ JWT token authentication
- ✅ Protected routes
- ✅ User profile management
- ✅ Responsive design
- ✅ Modern UI/UX
- ✅ Type safety throughout
- ✅ Error handling and validation

## Development

### Frontend Development
```bash
cd apps/frontend
npm run dev
```

### Auth Service Development
```bash
cd apps/auth-service
npm run dev
```

### Database Management
```bash
cd apps/auth-service
npm run db:studio    # Open Prisma Studio
npm run db:migrate   # Run migrations
npm run db:push      # Push schema changes
```

## Production Deployment

1. **Build the applications:**
   ```bash
   npm run build
   ```

2. **Set environment variables:**
   - `DATABASE_URL`: PostgreSQL connection string
   - `JWT_SECRET`: Secret key for JWT tokens
   - `NODE_ENV`: Set to "production"

3. **Run migrations:**
   ```bash
   cd apps/auth-service
   npm run db:migrate
   ```

4. **Start the services:**
   ```bash
   # Frontend (build artifacts served by your web server)
   # Auth service
   cd apps/auth-service
   npm start
   ```

## Adding New Microservices

1. Create a new directory in `apps/`
2. Initialize with `package.json`
3. Add to root `package.json` scripts
4. Update the monorepo documentation

## API Documentation

### Authentication Endpoints

**POST /api/auth/register**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**POST /api/auth/login**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**GET /api/auth/me**
Requires Authorization header: `Bearer <token>`

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, React Router
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: JWT
- **Validation**: Zod
- **Development**: Vite, tsx, concurrently

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details