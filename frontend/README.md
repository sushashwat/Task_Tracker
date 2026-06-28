# 📋 Task Tracker

A full-stack MERN task management app to manage your daily tasks efficiently.

---

## ✨ Features

- 📝 Create, edit, and delete tasks
- 🔄 Update task status — Pending, In Progress, Completed
- 🔍 Search tasks by title
- 📊 Dashboard with task stats
- 🗂️ Filter tasks by status
- 🕒 Sort tasks by Newest or Oldest
- 🔔 Toast notifications for all actions

---

## 🛠️ Tech Stack

**Frontend**
- React 19
- Axios
- React Toastify
- React Icons
- Vite

**Backend**
- Node.js
- Express 5
- MongoDB + Mongoose
- CORS
- dotenv

---

## 📁 Project Structure

```
Task_Tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── FilterBar.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   └── package.json
└── backend/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── taskController.js
    ├── models/
    │   └── Task.js
    ├── routes/
    │   └── taskRoutes.js
    ├── server.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Task_Tracker.git
cd Task_Tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/TaskTracker?retryWrites=true&w=majority
```

Start the backend:

```bash
npm start
# or for development
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`
Backend runs at `http://localhost:4000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🌐 Deployment

**Frontend** → [Vercel](https://vercel.com)
- Root directory: `frontend`
- Framework: Vite
- Add env variable: `VITE_API_URL=https://your-backend.onrender.com/api`

**Backend** → [Render](https://render.com)
- Root directory: `backend`
- Build command: `npm install`
- Start command: `node server.js`
- Add env variables: `MONGO_URI`, `PORT`

---

## 📄 License

This project is licensed under the ISC License.