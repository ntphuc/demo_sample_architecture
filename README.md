# 📒 React Native Expo Notes CRUD App

A simple **Notes** app built with **React Native (Expo)**, **Redux Toolkit**, and **Supabase**.

You can **create**, **view**, and **delete** notes.

---

## ✨ Features

- Create new notes
- View list of existing notes
- Delete notes
- Persist data using Supabase backend
- State management with Redux Toolkit
- Clean and scalable project structure

---

## 🏛 Project Architecture

- **UI Layer**: Screens and reusable components
- **State Management Layer**: Redux slices and global store
- **Service Layer**: API services connecting to Supabase

---

## 🛠 Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Supabase](https://supabase.com/)
- [React Navigation](https://reactnavigation.org/)

---

## 📂 Folder Structure

```
/src
  /features
    /notes
      - NoteScreen.tsx
      - NoteCard.tsx
      - noteSlice.ts
      - noteService.ts
      - types.tsx
  /navigation
    - AppNavigator.tsx
  /redux
    - store.ts
    - rootReducer.ts
  /services
    - supabaseClient.ts
  /components
  /constants
  /utils
App.tsx
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/notes-crud-app.git
   cd notes-crud-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

---

## 📜 License

This project is licensed under the MIT License.
