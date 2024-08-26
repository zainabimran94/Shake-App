# Cafe App

A dynamic, responsive web application built with Nuxt 3 Composition API, Nitro, Drizzle ORM, and Neon Console. The app includes a shopping cart feature and a fun milkshake customization game.

Demo: https://cafe-app-tan.vercel.app/

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Feedback](#feedback)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Acknowledgments](#acknowledgments)

## Introduction
Cafe App is a responsive and dynamic web application where users can browse through items, add them to a cart, and manage their cart with options to update or delete items. Additionally, users can enjoy a small milkshake game where they can create a customized milkshake from a variety of ingredients.

## Features
- **Responsive Design:** Works seamlessly across devices.
- **Cart Management:** Add, update, and delete items from the cart, with data fetched from the backend.
- **Milkshake Game:** Customize your milkshake with a variety of ingredients.

## Installation
To get started with this project, follow the instructions below:

1. Clone the repository:
    ```bash
    git clone https://github.com/zainabimran94/Shake-App.git
    cd cafe-app
    ```

2. Install the following dependencies:
    "@neondatabase/serverless": "^0.9.4",
    "@nuxt/ui": "^2.17.0",
    "@types/pg": "^8.11.6",
    "animejs": "^3.2.2",
    "bcrypt": "^5.1.1",
    "drizzle-orm": "^0.33.0",
    "nuxt": "^3.12.4",
    "nuxt-aos": "^1.2.5",
    "pg": "^8.12.0",
    "uuid": "^10.0.0",
    "vue": "latest"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.24.0",
    "esbuild": "^0.23.0",
    "esbuild-register": "^3.6.0",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.9",
    "ts-node": "^10.9.2",
    "tsx": "^4.17.0",
    "typescript": "^5.5.4"
  }

3. Create a `.env` file in the root directory and add the necessary environment variables:
    ```bash
    touch .env
    ```

    Example:
    ```bash
    DATABASE_URL=your_database_url
    SECRET_KEY=your_secret_key
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
- Navigate through the cafe menu and add items to your cart.
- Manage your cart by updating item quantities or removing items.
- Enjoy the milkshake customization game.

## Feedback
We'd love to hear your thoughts and suggestions! Feel free to file an issue or reach out on Twitter.

## Contributors
This project was developed by [Zainab](https://github.com/zainabimran94). Contributions are welcome!

## Build Process
To build and run the project:

1. Install dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm run dev
    ```

3. Build the project for production:
    ```bash
    npm run build
    npm run start
    ```

## Acknowledgments
Special thanks to the contributors of the following packages used in this project:

- [Nuxt](https://nuxt.com)
- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
- [Neon Console](https://neon.tech)
- [Anime.js](https://animejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License
This project is licensed under the MIT License.
