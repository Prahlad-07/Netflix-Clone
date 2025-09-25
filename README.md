# Netflix Clone - React Learning Project

A Netflix-inspired streaming platform clone built with React for learning purposes. This project demonstrates modern React development practices, component architecture, and integration with external APIs.

![Netflix Clone](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)
![TMDB API](https://img.shields.io/badge/TMDB-API-01B4E4)

## 🎯 Learning Objectives

This project was created to master key React concepts:

- ✅ **Component Architecture** - Building reusable and maintainable components
- ✅ **React Hooks** - useState, useEffect, useRef, and custom hooks
- ✅ **React Router** - Client-side routing and navigation
- ✅ **API Integration** - Fetching and displaying data from external APIs
- ✅ **State Management** - Managing application state effectively
- ✅ **Event Handling** - User interactions and form submissions
- ✅ **Conditional Rendering** - Dynamic UI based on application state
- ✅ **Firebase Authentication** - User registration and login
- ✅ **Responsive Design** - Mobile-first approach with CSS

## 🚀 Features

### Core Features
- **User Authentication** - Sign up, sign in, and sign out functionality
- **Movie Browsing** - Browse movies by categories (Now Playing, Popular, Upcoming, Top Rated)
- **Video Player** - Watch movie trailers and videos
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dynamic Navigation** - Scroll-based navigation styling
- **Search Integration** - Ready for search functionality implementation

### Technical Features
- **Component-based Architecture** - Modular and reusable components
- **Error Handling** - Comprehensive error states and user feedback
- **Loading States** - Smooth user experience with loading indicators
- **Lazy Loading** - Optimized image loading for better performance
- **Protected Routes** - Authentication-based route protection

## 🛠️ Technologies Used

### Frontend
- **React 18+** - Core library for building user interfaces
- **React Router DOM** - Client-side routing
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Styling and animations
- **HTML5** - Semantic markup

### Backend & APIs
- **Firebase Authentication** - User authentication service
- **TMDB API** - Movie database for content
- **YouTube API** - Video streaming integration

### Tools & Services
- **Create React App** - Project bootstrapping
- **Git** - Version control
- **VS Code** - Development environment

## 📁 Project Structure

```
netflix-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/                 # Images and icons
│   │   ├── logo.png
│   │   ├── hero_banner.jpg
│   │   └── ...
│   ├── components/             # Reusable components
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── TitleCards/
│   │   │   ├── TitleCard.js
│   │   │   └── TitleCard.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── pages/                  # Main page components
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Login/
│   │   │   ├── Login.js
│   │   │   └── Login.css
│   │   └── Player/
│   │       ├── Player.js
│   │       └── Player.css
│   ├── firebase.js             # Firebase configuration
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   └── index.js                # Application entry point
├── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- TMDB API account

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup
Create a `.env` file in the root directory:
```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

# TMDB API Configuration
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### Step 4: Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication with Email/Password
4. Copy your config keys to the `.env` file

### Step 5: TMDB API Setup
1. Go to [TMDB](https://www.themoviedb.org/settings/api)
2. Create an account and request an API key
3. Copy your API key to the `.env` file

### Step 6: Start the Development Server
```bash
npm start
```

Visit `http://localhost:3000` to see your Netflix clone in action!

## 📚 Key Learning Concepts Demonstrated

### 1. React Hooks Usage
```javascript
// useState for state management
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);

// useEffect for side effects
useEffect(() => {
  fetchMovies();
}, [category]);

// useRef for DOM manipulation
const navRef = useRef();
```

### 2. Component Composition
```javascript
// Reusable TitleCard component
<TitleCard title="Popular Movies" category="popular" />
<TitleCard title="Upcoming" category="upcoming" />
```

### 3. React Router Implementation
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/player/:id" element={<Player />} />
</Routes>
```

### 4. API Integration Patterns
```javascript
const fetchMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${category}`, options);
    const data = await response.json();
    setMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
```

### 5. Event Handling
```javascript
const handleScroll = () => {
  if (window.scrollY >= 80) {
    navRef.current.classList.add('nav-dark');
  } else {
    navRef.current.classList.remove('nav-dark');
  }
};
```

## 🎨 Component Breakdown

### Navbar Component
- **Purpose**: Navigation and user interactions
- **Features**: Scroll-based styling, dropdown menus, routing
- **Learning Focus**: useEffect, useRef, event listeners

### TitleCard Component
- **Purpose**: Display movie collections
- **Features**: Horizontal scrolling, lazy loading, error handling
- **Learning Focus**: Props handling, API integration, conditional rendering

### Player Component
- **Purpose**: Video playback interface
- **Features**: YouTube embed, error states, navigation
- **Learning Focus**: useParams, error boundaries, media integration

### Login Component
- **Purpose**: User authentication
- **Features**: Form validation, Firebase auth, state management
- **Learning Focus**: Form handling, async operations, error handling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

This is a learning project, but contributions are welcome! Here's how you can help:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues & Future Improvements

### Current Limitations
- [ ] Search functionality not implemented
- [ ] User profiles not fully developed
- [ ] My List feature incomplete
- [ ] Mobile responsiveness needs improvement

### Planned Enhancements
- [ ] Implement Redux for state management
- [ ] Add more movie details pages
- [ ] Integrate recommendation system
- [ ] Add offline functionality with service workers
- [ ] Implement unit and integration tests

## 📖 Learning Resources

Resources that helped build this project:
- [React Documentation](https://reactjs.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TMDB API Documentation](https://developers.themoviedb.org/3)

