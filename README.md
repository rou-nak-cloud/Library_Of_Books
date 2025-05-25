

# 📚 BookShelf — A Modern Book Discovery Frontend

A beautifully crafted frontend application for book lovers to explore, discover their favorite reads. Built using **React**, **React Hooks**, **Tailwind CSS**, and **DaisyUI** for rapid UI development and a smooth user experience.

---

## 🔥 Features

- 🧭 Smooth navigation with **React Router**
- 🎨 Elegant and customizable UI powered by **DaisyUI + Tailwind CSS**
- 📱 Responsive design for mobile and desktop
- 🌙 Light/Dark mode toggle (via DaisyUI)

---

## 🚀 Tech Stack

| Tech           | Description                             |
|----------------|-----------------------------------------|
| ⚛️ React        | Component-based frontend framework      |
| 🎣 React Hooks | State and lifecycle management          |
| 💨 Tailwind CSS| Utility-first CSS framework             |
| 🌼 DaisyUI     | UI components built on Tailwind         |
| 🛣 React Router| Client-side routing                     |

---

## 📸 Some Frontend Screenshots

![Book Heaven (Dark version) Screenshot 1](Frontend/Screenshots/dark-home.png)
![Book Heaven (Dark version) Screenshot 4](Frontend/Screenshots/dark-books.png)
![Book Heaven (Light version) Screenshot 2](Frontend/Screenshots/light-home.png)
![Book Heaven (Mobile view) Screenshot 3](Frontend/Screenshots/mobile-view.png)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bookshelf-frontend.git
cd bookshelf-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
# 📚 Library Books Backend API

This is a Node.js + Express backend API for managing a digital library system. It supports full user authentication (login/logout) and allows users to retrieve book data stored in MongoDB.

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **bcryptjs** for password hashing
- **dotenv** for environment variable management

---

## 📁 Features

- ✅ User Signup & Login
- ✅ Logout 
- ✅ Protected routes for accessing books
- ✅ Books stored as a JSON schema in MongoDB
- ✅ Filtering books by category or price

---

## 📦 API Endpoints

### Auth Routes

| Method | Endpoint     | Description           |
|--------|--------------|-----------------------|
| POST   | `/signup`  | Register a new user   |
| POST   | `/login`     | Login user            |
| POST   | `/logout`    | Logout user           |

### Book Routes

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| GET    | `/books`       | Get all books              |

---

```bash
# install dependencies
npm install

npm run dev
```

