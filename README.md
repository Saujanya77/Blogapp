#Blog Site Project
<h1>Introduction</h1>
<p>Welcome to the Blog Site project! This application is a full-stack blogging platform developed using the MERN stack (MongoDB, Express.js, React, and Node.js). The project allows users to create, update, and manage blog posts. This README provides an overview of the project, its features, setup instructions, and usage guidelines.</p>

<h1>Project Overview</h1>
<p>The Blog Site is designed to offer a user-friendly interface for blogging. It features a robust backend to handle data storage and processing, and a responsive frontend for an intuitive user experience. The project is organized into two main folders: frontend and backend.</p>

<h1>Key Features</h1><br>
<b>User Authentication</b>: Secure login and registration system.<br>
<b>CRUD Operations</b>: Create, read, update, and delete blog posts.<br>
<b>Responsive Design</b>: Mobile-friendly and cross-browser compatible.<br>

The backend server will run on http://localhost:1000

The frontend will be available at http://localhost:3000.

<h3>Backend Setup</h3>
    <ol>
        <li>Navigate to the <code>backend</code> folder:
            <pre><code>cd backend</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Create a <code>.env</code> file in the <code>backend</code> directory and add your environment variables:
            <pre><code>PORT=1000
MONGO_URI=&lt;your-mongodb-connection-string&gt;
JWT_SECRET=&lt;your-jwt-secret&gt;</code></pre>
        </li>
        <li>Start the server:
            <pre><code>npm start</code></pre>
            The backend server will run on <code>http://localhost:1000</code>.
        </li>
    </ol>

<h3>Frontend Setup</h3>
    <ol>
        <li>Navigate to the <code>frontend</code> folder:
            <pre><code>cd frontend</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm start</code></pre>
            The frontend will be available at <code>http://localhost:3000</code>.
        </li>
    </ol>
