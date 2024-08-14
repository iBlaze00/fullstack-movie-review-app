# Movie Review Application Frontend

This directory contains the frontend code for the Movie Review Application, developed using React.js.

## Setup Instructions

### 1. Install Prerequisites

1. **Ensure Node.js and npm are Installed**:
   - Download and install [Node.js](https://nodejs.org/) which includes npm (Node Package Manager).

2. **Install Ngrok**:
   - Download and install [Ngrok](https://ngrok.com/download) for exposing local servers to the internet.

3. **Add Ngrok Extension in VS Code**:
   - Open VS Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Sidebar or pressing `Ctrl+Shift+X`.
   - Search for "Ngrok" and install the Ngrok extension.

### 2. Set Up Ngrok

1. **Open Ngrok**:
   - Open Ngrok (Make sure backend is running)
   - Enter `ngrok http 8080` in the Ngrok command input.

2. **Copy the Ngrok URL**:
   - Ngrok will generate a URL (e.g., `https://abc123.ngrok.io`). Copy this URL.

### 3. Configure Axios

1. **Open `axiosConfig.js`**:
   - Navigate to the `src` directory and open `axiosConfig.js` in VS Code.

2. **Set the Base URL**:
   - Replace the `baseURL` placeholder with the Ngrok URL you copied.

### 4. Run the Application 
1. **Open vscode terminal**:
   - npm start

   
