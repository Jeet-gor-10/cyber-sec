# Express API

A simple Node.js web service built with Express.js.

## Features
- Root endpoint (`/`) returns a welcome message.
- API endpoint (`/api/greet`) returns a JSON greeting.
- Runs on a configurable port (default: **3000**).

## Installation

### Prerequisites
- **Node.js** installed (Download: [Node.js](https://nodejs.org/))

### Steps
1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the server**
   ```sh
   node app.js
   ```
   or with **nodemon** (if installed):
   ```sh
   nodemon app.js
   ```

## API Endpoints

### 1. Root Endpoint
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```text
  Welcome to the Express API
  ```

### 2. Greeting API
- **URL:** `/api/greet`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "message": "Hello, this is a simple Node.js web service!"
  }
  ```

## Configuration
- The server runs on **PORT 3000** by default.
- To change the port, set an environment variable before running:
  ```sh
  PORT=5000 node app.js
  ```
