# Movie Review Application Backend

This repository contains the backend code for the Movie Review Application, built using Spring Boot and MongoDB.

## Setup Instructions

### 1. Set Up MongoDB Atlas

1. **Create a MongoDB Atlas Account**: If you don't already have one, sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Create a Cluster**: Follow the instructions to set up a new cluster.
3. **Create a Database**: In your cluster, create a new database called `movies`.
4. **Get the Connection String**:
   - Navigate to the **Database** tab in your cluster.
   - Click on **Connect** and then **Connect with MongoDB Compass**.
   - Copy the connection string provided.

### 2. Configure MongoDB Connection

1. **Open MongoDB Compass**.
2. **Connect to the Cluster**: Paste the connection string from MongoDB Atlas into MongoDB Compass.
3. **Replace `<password>`**: In the connection string, replace `<password>` with your database user's password.
4. **Connect**: Click **Connect** to ensure that you can access your MongoDB database.

### 3. Create a .env File

1. **Create a .env file in the root directory of your project with the following variables**:
   - MONGO_DATABASE=your_database_name
   - MONGO_USER=your_mongo_userdirectory.
   - MONGO_PASSWORD=your_mongo_password
   - MONGO_CLUSTER=your_mongo_cluster_url
  
### 4. Configure Spring Boot to ensure application.properties has defined variables

1. **Open application.properties**:
   - Navigate to src/main/resources/application.properties.
2. **Ensure application.properties has defined variables**
   
### 5. Run the Application

1. **Open IntelliJ IDEA**:
   - Import the project if necessary.
   - Open the `MoviesApplication.java` file located in the `src/main/java/dev/fswad/movies` directory.

2. **Run the Application**:
   - Right-click on `MoviesApplication.java`.
   - Select **Run 'MoviesApplication'**.

   This will start the Spring Boot application and expose it on `http://localhost:8080`.

### 6. Test the Backend

1. **Open Postman**:
   - Download and install [Postman](https://www.postman.com/) if you haven't already.

2. **Test Endpoints**:
   - Use Postman to send requests to your backend API.
   - Example endpoints:
     - `POST http://localhost:8080/api/v1/reviews` to create a review.
     - `GET http://localhost:8080/api/v1/movies/{imdbId}` to retrieve movie details.
