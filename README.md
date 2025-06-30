# Collab Document Editor Backend


COMPANY NAME:CODTECH IT SOLUTIONS

"NAME":VEMULAPATI SATHWICK

"INTERN ID"::CT04DN1654

"DOMAIN":FULL STACK WEB DEVELOPMENT

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTOSH



This is the backend for the Collab Document Editor project. It is built using Node.js and Express, and it connects to a MongoDB or PostgreSQL database for data storage.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd collab-doc-editor/backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   Update the database connection settings in `src/utils/db.js` to match your MongoDB or PostgreSQL configuration.

4. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

### Document Operations

- **Create Document**
  - **Endpoint:** `POST /api/documents`
  - **Request Body:** `{ "title": "Document Title", "content": "Document Content", "author": "Author Name" }`
  - **Response:** Returns the created document.

- **Get Document**
  - **Endpoint:** `GET /api/documents/:id`
  - **Response:** Returns the document with the specified ID.

- **Update Document**
  - **Endpoint:** `PUT /api/documents/:id`
  - **Request Body:** `{ "title": "Updated Title", "content": "Updated Content" }`
  - **Response:** Returns the updated document.

- **Delete Document**
  - **Endpoint:** `DELETE /api/documents/:id`
  - **Response:** Returns a success message.

## Folder Structure

- **src/**: Contains the source code for the backend.
  - **app.js**: Entry point of the application.
  - **controllers/**: Contains the logic for handling requests.
  - **models/**: Defines the data models.
  - **routes/**: Defines the API routes.
  - **utils/**: Contains utility functions, including database connection logic.

## License

This project is licensed under the MIT License.
