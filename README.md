# React Form Authentication App

This project is a simple React app demonstrating user authentication (login, registration, dashboard) using Firebase Auth and React Router.

## Features

- User registration with email and password
- User login with email and password
- Password visibility toggle
- Form validation with react-hook-form and yup
- Dashboard page (protected)
- Persistent login (browser local storage)

## Tech Stack

- React
- Vite
- Firebase Auth
- React Router DOM
- React Hook Form
- Yup
- Tailwind CSS (for styling)

## Getting Started

### 1. Clone the repository

```
git clone <repo-url>
cd form
```

### 2. Install dependencies

```
npm install
```

### 3. Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Email/Password authentication
- Copy your Firebase config and update `src/firebase.js`

### 4. Run the app

```
npm run dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Folder Structure

- `src/pages/` — Contains page components (login, register, dashboard)
- `src/firebase.js` — Firebase configuration
- `src/App.jsx` — Main app component

## License

MIT
