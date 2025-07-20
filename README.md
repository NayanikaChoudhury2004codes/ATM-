# E-Commerce Website

A full-stack e-commerce website built with React TypeScript frontend and Node.js/Express backend.

## Features

### Frontend (React TypeScript)
- 🏠 **Modern Home Page** with hero section, categories, and featured products
- 🛍️ **Product Catalog** with search, filtering, and pagination
- 🔍 **Product Detail Pages** with images, descriptions, and reviews
- 🛒 **Shopping Cart** with quantity management
- 💳 **Checkout Process** with shipping and payment forms
- 👤 **User Authentication** (login/register)
- 📱 **Responsive Design** with Tailwind CSS
- 🎨 **Beautiful UI/UX** with modern design patterns

### Backend (Node.js/Express)
- 🔐 **JWT Authentication** with bcrypt password hashing
- 🛍️ **Product Management** with search and filtering
- 🛒 **Cart Operations** (add, update, remove items)
- 📦 **Order Processing** with order history
- 🗂️ **RESTful API** with proper error handling
- 🔒 **Secure Endpoints** with authentication middleware

## Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Axios for HTTP requests
- Tailwind CSS for styling
- Context API for state management

### Backend
- Node.js with Express
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
- In-memory storage (easily replaceable with MongoDB)

## Project Structure

```
workspace/
├── ecommerce-frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── contexts/            # React contexts
│   │   ├── pages/               # Page components
│   │   └── App.tsx              # Main app component
│   ├── public/                  # Static assets
│   └── package.json
│
├── ecommerce-backend/           # Node.js backend
│   ├── server.js               # Main server file
│   ├── .env                    # Environment variables
│   └── package.json
│
└── README.md                   # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or use existing workspace)

2. **Install Backend Dependencies**
   ```bash
   cd ecommerce-backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ecommerce-frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd ecommerce-backend
   npm run dev
   # Server will run on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd ecommerce-frontend
   npm start
   # App will run on http://localhost:3000
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get product by ID
- `GET /api/categories` - Get all categories

### Cart (Protected)
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart

### Orders (Protected)
- `POST /api/orders` - Place an order
- `GET /api/orders` - Get user's order history

## Features Demo

### 1. Browse Products
- Visit the home page to see featured products
- Navigate to the products page for full catalog
- Use search and filters to find specific items

### 2. User Registration & Login
- Create a new account on the register page
- Login with your credentials
- Access protected features like cart and checkout

### 3. Shopping Cart
- Add products to your cart from product pages
- View and manage cart items
- Proceed to checkout when ready

### 4. Checkout Process
- Fill in shipping information
- Enter payment details (demo only)
- Complete your order

### 5. Order Management
- View order history in your profile
- See order confirmation after purchase

## Sample Products

The application comes with 6 sample products across different categories:
- Electronics (Headphones, Fitness Watch, Bluetooth Speaker)
- Clothing (Organic Cotton T-Shirt)
- Photography (Professional Camera Lens)
- Home (Minimalist Desk Lamp)

## Environment Configuration

### Backend (.env)
```
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

## Development Notes

### Authentication
- Uses JWT tokens stored in localStorage
- Passwords are hashed with bcrypt
- Protected routes require valid authentication

### Data Storage
- Currently uses in-memory storage for demo purposes
- Can easily be replaced with MongoDB or other databases
- User data and cart persist during session

### Styling
- Built with Tailwind CSS for modern, responsive design
- Custom component classes for consistency
- Mobile-first responsive approach

## Production Deployment

### Backend Deployment
1. Set environment variables
2. Configure CORS for your frontend domain
3. Set up proper database (MongoDB, PostgreSQL, etc.)
4. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or AWS S3
3. Update API base URL for production

## Security Considerations

### Implemented
- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS configuration

### For Production
- Rate limiting
- HTTPS enforcement
- Environment variable security
- Database security measures
- Payment processing integration (Stripe, PayPal)

## Future Enhancements

- Real database integration (MongoDB/PostgreSQL)
- Payment gateway integration
- Email notifications
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Inventory management
- Order tracking
- Advanced search with Elasticsearch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository or contact the development team.

---

**Happy Shopping! 🛍️**
