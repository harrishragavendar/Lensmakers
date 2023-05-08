# Lensmakers 😎 - Your one stop destination for all kinds of eyewear 👓

# An e-commerce website exclusively for Eyewear built using MEAN stack (MongoDB, ExpressJS, Angular and Node.JS).

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:harrishragavendar/lensmakers.git
$ cd lensmakers
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/lensmakers  
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ cd backend
$ npm install --force
$ npm start
```

### 4. Run Frontend
open new terminal
```
$ cd frontend
$ npm install --force
$ npm start
```
### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 18 sample products, an admin user and a normal user

### 6. Admin Login

- Run http://localhost:4200/login
- Enter admin email and password and click login
- Admin Credentials: E-Mail: admin@admin Password: admin

### 7. User Login

- Run http://localhost:4200/login
- Enter user email and password and click login
- User Credentials: E-Mail: user@user Password: user