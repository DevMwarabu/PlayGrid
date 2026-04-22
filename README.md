# 🎮 GameForge Arena | PlayGrid

A premium, high-fidelity gaming ecosystem built for competitive players and gaming station administrators. GameForge Arena centralizes tournaments, leaderboards, and community highlights into a seamless, cinematic experience.

## 🚀 Key Features

### 🌐 Frontend (Next.js 16)
- **Cinematic Experience**: Immersive full-screen video backgrounds with dynamic gradient overlays.
- **Dynamic Brackets**: Integrated tournament system with live status updates and registration flows.
- **Hall of Legends**: Tiered leaderboard system (Gold, Silver, Bronze) with XP tracking and skill-based rankings.
- **Community Clips**: Video-first media section for discovering and sharing legendary plays.
- **Warrior Dashboard**: Personal player profiles with achievement tracking, winnings, and match history.
- **Responsive Design**: Mobile-first architecture with a dedicated navigation system for small screens.

### 🛡️ Backend (Laravel 12 & FilamentPHP)
- **Centralized Admin**: Comprehensive dashboard for managing users, tournaments, matches, and media.
- **API Architecture**: Robust REST API for seamless frontend integration and data flow.
- **Role-Based Access**: Granular permissions for tournament organizers and system admins.
- **Real-time Engine**: Built-in support for live status updates and notification broadcasting.

## 🛠️ Technology Stack
- **Frontend**: React, Next.js, Tailwind CSS, Framer Motion, Zustand, Lucide Icons.
- **Backend**: Laravel 12, FilamentPHP, MySQL.
- **Aesthetics**: Dark gaming theme, glassmorphism, neon accents, and modern typography (Orbitron).

## 📥 Getting Started

### Prerequisites
- PHP 8.2+
- Node.js 20+
- MySQL/PostgreSQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevMwarabu/PlayGrid.git
   cd PlayGrid
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate --seed
   php artisan serve
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 🛡️ Admin Access
Access the management portal at `http://localhost:8000/admin`.
- **User**: `admin@admin.com`
- **Password**: `password`

## 📄 License
This project is proprietary. All rights reserved.
