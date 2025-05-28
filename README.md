
# 🌌 StarWars Starships Explorer

StarWars Starships Explorer is a responsive React web app to explore starships from the Star Wars universe using the [SWAPI](https://swapi.py4e.com) API.

## 🚀 Live Demo
👉 [star-wars-react-zeta.vercel.app](https://star-wars-react-zeta.vercel.app/)

---

## 🛠️ Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Scss
- React Router DOM
- Firebase Authentication
- SWAPI  (Star Wars API)
- React Context API
- CSS Modules + clsx 

---

## 🧪 Example credentials

You can log in with:

```
Email: test@mail.com
Password: 123456
```

or sign up with a new user

---

## 🧰 Installation

```bash
git clone https://github.com/papercri/it-academy-s7-star-wars-react.git
cd it-academy-s7-star-wars-react
npm install
npm run dev
```

---

## 🔐 Firebase Setup

To configure Firebase for this project:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
2. In the project settings, go to **Project Overview > Web > Add App** to register your web app and get the Firebase config.
3. In your project root, create a `.env` file with the following content (replace with your own values):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. In `src/firebase.ts`, set up Firebase using the environment variables:

```ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
```

---
## 📁 Project Structure

```
src/
├── api/             # Api hooks
├── assets/styles    # General Stylesheets, mixins and variables
├── components/      # Reusable components
├── pages/           # Route-based pages (Home, Login, Register)
├── hooks/           # Reusable hooks
├── context/         # React Context for auth
├── types/           # Interfaces and types for typescript
├── utils/           # Reusables utils and JS
├── App.tsx
└── main.tsx
```

---

## 📦 Dependencies

- `react`, `react-router-dom`
- `firebase`
- `tailwindcss`, `postcss`, `autoprefixer`
- `vite`, `typescript`

---


## ✨ Features

- 🔐 **Authentication** with Firebase (email/password)
- 🌌 **Starships Listing** from SWAPI
- 🎬 **Films** associated with starships
- 👨‍🚀 **Pilots** listing with images
- 🔎 **"Show more"** pagination to load more ships
- 📱 **Responsive design**, dark-themed with Star Wars aesthetics
- ⚙️ **React Context API** for user session management

---

## 📷 Screenshots

### Home

![Home](/public/images/screenshots/home.png)


### Sign In

![Sign In](/public/images/screenshots/signin.png)

### Sign Up

![Sign Up](/public/images/screenshots/signup.png)

### Starships List

![Starships List](/public/images/screenshots/starships.png)

### Starship Page

![Starships Page](/public/images/screenshots/card.png)

### Pilots and Films

![Pilots and Films](/public/images/screenshots/pilotsAndFilms.png)


---
