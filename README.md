# Beauty Analytics Dashboard

A modern, multilingual web system for cosmetic store analytics based on Big Data technologies.

## 🌟 Overview

An analytical platform for monitoring, analyzing, and visualizing cosmetic product sales in real-time. The system helps store managers analyze sales statistics, popular products, customer activity, profits, seasonal trends, and warehouse data.

## 🌐 Supported Languages

- **Қазақша** (default)
- **Русский**
- **English**

Language switcher in top navigation bar.

## 🎨 Design System

### Colors
- Light beige
- Soft cream
- Pale pink
- Light gray
- Warm pastel colors

### UI Style
- Minimalistic modern design
- Soft light theme
- Rounded cards
- Smooth hover animations
- Responsive design (mobile & desktop)

## 📊 Main Features

### 1. Home Page
- Website introduction
- Big Data analytics overview
- Animated statistics cards
- Charts preview
- Popular cosmetic categories
- Quick access buttons

### 2. Dashboard Page
- Real-time statistics
- Total sales, monthly profit, daily orders
- Best-selling products
- Product categories
- Stock level monitoring
- Interactive charts (Line, Pie, Bar, Area)

### 3. Product Analytics
- Product search and filters
- Category analytics
- Product ratings
- Sales history
- Revenue statistics
- Stock analysis

### 4. Big Data Analytics Module
- Large dataset processing
- Sales prediction
- Trend analysis
- AI recommendation system
- Customer behavior analysis

### 5. Reports Page
- Export to PDF
- Export to Excel
- Monthly/Product/Sales/Revenue reports

### 6. Admin Panel
- Add/edit/delete products
- User management
- Dataset uploads
- Analytics monitoring
- Report management

## 🏗️ Project Structure

```
analytics-dashboard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (routes)/
│   │   ├── dashboard/page.tsx
│   │   ├── products/page.tsx
│   │   ├── analytics/page.tsx
│   │   ├── reports/page.tsx
│   │   └── admin/page.tsx
│   └── api/
├── components/
│   ├── Navigation/
│   ├── Dashboard/
│   ├── Charts/
│   ├── Common/
│   └── Admin/
├── styles/
│   └── globals.css
├── public/
├── config/
│   └── i18n.config.ts
├── server/
│   ├── index.js
│   ├── routes/
│   └── models/
└── package.json
```

## 🛠️ Technologies

### Frontend
- React.js
- Next.js 14
- Tailwind CSS
- Recharts (charting)
- Framer Motion (animations)
- i18next (multilingual support)

### Backend
- Node.js
- Express.js
- PostgreSQL/MongoDB

### Big Data
- Apache Spark (optional)
- Data processing pipeline

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📈 Key Statistics Tracked

- Most popular lipstick brands
- Skincare product demand
- Seasonal sales growth
- Customer activity by month
- Revenue comparison
- Product categories: Skincare, Makeup, Perfume, Haircare, Korean cosmetics

## 📱 Additional Features

- Dark mode toggle
- Real-time analytics updates
- Interactive charts
- Advanced search system
- Push notifications
- AI-generated recommendations
- Mobile responsive layout

## 🎓 Project Information

Created as a diploma project showcasing:
- Modern web development practices
- Big Data analytics concepts
- Business intelligence systems
- Professional UI/UX design

## 📝 License

Educational project

---

**Status**: In Development 🚧