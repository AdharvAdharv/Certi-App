# Certificate App

Certificate App is a web application that allows users to **issue certificates, view certificates, and sign up** for an account. Built using **React, Tailwind CSS, Node.js (Express.js), and Docker**, it provides a seamless experience for certificate management.

## 🚀 Features

- **User Authentication** – Sign up and log in to access the platform.
- **Issue Certificates** – Generate and issue digital certificates.
- **View Certificates** – Retrieve and verify issued certificates.
- **Responsive UI** – Modern and user-friendly design with Tailwind CSS.
- **Backend API** – Built with Express.js for efficient handling of requests.
- **Dockerized Deployment** – Easily deploy the app using Docker.

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB 
- **Containerization:** Docker

## 📦 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **Docker** (for containerized deployment)
- **MongoDB** (if not using a Dockerized database)
## 📦 Installation & Setup  

Follow these steps to set up the project on your local machine.  

### 1️⃣ Clone the Repository  
First, clone the repository and navigate into the project directory:  

```sh
git clone https://github.com/your-username/certificate-app.git  
cd certificate-app
```

2️⃣ Install Dependencies
Now, install the required dependencies for both the frontend and backend.

✅ Install Frontend Dependencies
```sh

cd client  
npm install
```
This command will install all necessary packages for the React frontend.
✅ Install Backend Dependencies
```sh

cd ../server  
npm install
```
This will install all required dependencies for the Node.js (Express.js) backend.

3️⃣ Run the Application
After installing dependencies, start the frontend and backend servers.

▶ Start Backend Server
```sh

cd server  
npm start
```
This will start the Express.js backend server.

▶ Start Frontend Server
```sh

cd ../client  
npm start
```
This will launch the React frontend in your browser.

4️⃣ Run with Docker
To run the application using Docker, make sure Docker and Docker Compose are installed, then execute:

```sh

docker-compose up -d
```
This will start the frontend, backend, and database in separate containers.
