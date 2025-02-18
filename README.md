### Setting Up the Database and Application

1. **Log into MySQL:**
   - Open your MySQL editor and run the `azuraDB.sql` script. This will create the necessary database, table, and required stored procedures on your local MySQL instance.

2. **Configure the `.env` File:**
   - Inside the application folder, locate the `.env` file.
   - Open the `.env` file and update your local database password in the following section:
     ```
     DB_PASSWORD="UPDATE_YOUR_DB_PASSWORD_HERE"
     ```

3. **Install Dependencies:**
   - Open your terminal, navigate to the project folder, and run the following command to install all the required packages:
     ```bash
     npm install
     ```

4. **Start the Application:**
   - Once the dependencies are installed, start the application by running:
     ```bash
     node server.js
     ```

The application should now be up and running on your local machine.
