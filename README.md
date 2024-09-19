# Cafe App
The Cafe App is a dynamic and interactive web application where users can explore a virtual cafe menu, manage their orders, and enjoy a fun milkshake customization game. Built using Nuxt 3 Composition API, Nitro, Drizzle ORM, and Neon Console, this app is designed to deliver a seamless, responsive, and enjoyable user experience. The app integrates backend functionality to support cart management and a unique mini-game to customize milkshakes.

## Demo
Check out the live version of the Cafe App: Cafe App Demo

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Feedback](#feedback)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Acknowledgments](#acknowledgments)
- [License](#license)

### Introduction
The Cafe App allows users to simulate a cafe shopping experience, complete with browsing a menu, adding items to a cart, and managing their orders. Alongside this, the app features a fun and interactive milkshake customization game, where users can experiment with different ingredients to create their ideal milkshake.

The app is a demonstration of how modern web technologies can be combined to create dynamic, user-friendly applications with interactive elements. Whether users are managing their cafe orders or playing the milkshake game, the app provides a clean, responsive interface that works across all devices.

## Key Features
Responsive Design: The app is fully responsive and adjusts seamlessly across different devices, whether desktop, tablet, or mobile.

### Cart Management:
Browse the cafe menu and add items to the cart.
Update item quantities or delete items from the cart with real-time feedback.
All data is fetched and stored in the backend, ensuring cart persistence.
### Milkshake Customization Game:
Customize your own virtual milkshake by selecting ingredients.
Experiment with different combinations to create the perfect milkshake.
Enjoy a playful mini-game experience that adds fun and engagement to the app.

## Technology Stack
### Frontend:
 > Nuxt 3: A Vue 3-based framework for building modern web applications with server-side rendering, static generation, and more.
 > Composition API: Utilized for writing reusable and modular components.
 > Tailwind CSS: A utility-first CSS framework for styling the app with ease and flexibility.
 > Anime.js: Used for smooth animations within the milkshake game, enhancing user interaction.
### Backend:
 > Nitro: The server engine of Nuxt 3, enabling fast and optimized server-side rendering and API functionality.
 > Drizzle ORM: A type-safe and lightweight ORM for interacting with the app's database.
 > Neon Console: Provides a scalable PostgreSQL database for managing user orders and milkshake customizations.
### Other Tools:
 > bcrypt: Used for securely hashing user credentials and managing authentication.
 > UUID: For generating unique identifiers for user orders and other backend records.

## Installation
To set up the project locally, follow these steps:

### Clone the Repository:
git clone https://github.com/zainabimran94/Shake-App.git
cd cafe-app

> Install Dependencies: Ensure you have all required dependencies installed for both development and production environments:
  ### npm install
> Environment Setup: Create a .env file in the root directory and add the necessary environment variables:
   ### touch .env
> Start Development Server: Run the app in development mode:
  ### npm run dev
  
## Usage
Once the app is running, you can explore the following features:

1: Cafe Menu: Browse through various items on the cafe's menu and add them to your cart.
2: Cart Management: Manage your orders by updating item quantities or removing them entirely.
3: Milkshake Customization Game: Play a fun mini-game where you can create your own custom milkshake by choosing from different ingredients.

## Acknowledgments
Special thanks to the following technologies and packages used to build this project:

Nuxt 3: The foundation of this modern web app.
Drizzle ORM: For seamless database interactions.
Neon Console: Scalable database management.
Anime.js: For providing delightful animations.
Tailwind CSS: For rapid and responsive design.
## License
This project is licensed under the MIT License. See the LICENSE file for more details.
