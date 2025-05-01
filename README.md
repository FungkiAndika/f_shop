# FShop

FShop is a simple e-commerce application built using React. This application includes key features such as product search, product listing, product categories, and currency conversion based on the user's location.

## Features

### 1. **Navigation**
- A navbar with navigation to the main page and contact page.
- Built using `react-router-dom`.

### 2. **Product Search**
- The `SearchBar` component allows users to search for products by name, description, category, tag, or brand.
- The search feature dynamically provides suggestions based on user input.

### 3. **Product Listing**
- The `ListProduct` component displays a list of products with information such as images, titles, and prices.
- Product prices are converted to the user's local currency based on their location.

### 4. **Product Categories**
- The main page displays product categories that users can select.
- Each category has a unique SVG icon.

### 5. **Currency Conversion**
- Product prices are converted to the user's local currency using a currency conversion API.
- The user's location is determined using a country API.

### 6. **Responsive Design**
- A responsive design optimized for various screen sizes using CSS and media queries.