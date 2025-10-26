# Pokemon TCG Collection Tracker

A full-stack web application for managing and tracking Pokemon Trading Card Game collections. Built with vanilla JavaScript, Express.js, and a RESTful API architecture.

## Project Overview

This application provides Pokemon TCG enthusiasts with a comprehensive platform to catalog their card collections, browse different sets, and manage their inventory. The project demonstrates modern web development practices with a clean separation between frontend and backend services.

## Key Features

- **Interactive Set Browser**: Explore Pokemon TCG sets including Base Set, Jungle, and Fossil expansions
- **Personal Collection Management**: Add, view, and remove cards from your personal collection
- **Dynamic Card Display**: Visual card gallery with hover effects and interactive elements
- **RESTful API**: Full CRUD operations for card management
- **Responsive Design**: Clean, user-friendly interface that works across devices
- **Real-time Updates**: Instant UI updates when adding or removing cards
- **Data Persistence**: JSON-based storage with automatic file synchronization

## Technical Stack

**Frontend:**
- Vanilla JavaScript (ES6+)
- HTML5 & CSS3
- Fetch API for HTTP requests
- Dynamic DOM manipulation

**Backend:**
- Node.js with Express.js
- RESTful API design
- JSON file-based data storage
- CORS enabled for cross-origin requests

**Development Tools:**
- Nodemon for development server
- Modular code architecture
- Error handling and validation

## API Endpoints

### Cards Management
- `GET /cards` - Retrieve all available cards
- `GET /cards/:id` - Get specific card by ID
- `POST /cards` - Add new card to database
- `PUT /cards/:id` - Update existing card
- `DELETE /cards/:id` - Remove card from database

### Personal Collection
- `GET /myCards` - Get user's personal collection
- `POST /myCards` - Add card to personal collection
- `DELETE /myCards/:id` - Remove card from collection

## Project Structure

```
├── frontend/
│   ├── index.html          # Landing page
│   ├── sets.html           # Set browser
│   ├── cards.html          # Personal collection
│   ├── *.js               # Frontend logic
│   └── images/            # Card and set images
├── pokemon-backend/
│   ├── index.js           # Express server
│   ├── cards.json         # Card database
│   ├── myCards.json       # User collection
│   └── package.json       # Dependencies
└── sets.json              # Set metadata
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd pokemon-tcg-tracker
   ```

2. **Install backend dependencies**
   ```bash
   cd pokemon-backend
   npm install
   ```

3. **Start the backend server**
   ```bash
   node index.js
   ```

4. **Open the frontend**
   - Open `index.html` in your browser
   - Navigate through sets and manage your collection

## Development Highlights

- **Clean Architecture**: Separation of concerns with distinct frontend and backend layers
- **User Experience**: Intuitive interface with visual feedback and smooth interactions
- **Data Management**: Efficient JSON-based storage with real-time synchronization
- **Error Handling**: Robust error handling for API requests and user interactions
- **Scalable Design**: Modular code structure that supports easy feature additions

## UI/UX Features

- Hover effects on cards and navigation elements
- Visual feedback for user actions
- Responsive card grid layout
- Interactive remove buttons with confirmation
- Clean, Pokemon-themed design aesthetic

## Technical Decisions

- **Vanilla JavaScript**: Demonstrates core JavaScript proficiency without framework dependencies
- **Express.js**: Lightweight, fast backend framework perfect for RESTful APIs
- **JSON Storage**: Simple yet effective data persistence for demonstration purposes
- **Modular Design**: Each page has dedicated JavaScript files for maintainability

