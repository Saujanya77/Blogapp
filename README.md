

 <h1>Simple Blog App</h1>

<h2>Introduction</h2>
    <p>Welcome to the Simple Blog App! This is a beginner-level blog application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, update, and view blog posts. This README provides an overview of the project, its features, and setup instructions.</p>

 <h2>Features</h2>
    <ul>
        <li><strong>Create Blog Posts:</strong> Users can create new blog posts.</li>
        <li><strong>Update Blog Posts:</strong> Users can update existing blog posts.</li>
        <li><strong>View Blog Posts:</strong> Users can view a list of blog posts.</li>
    </ul>

<h2>Folder Structure</h2>
    <p>The project is organized into two main folders:</p>
    <ul>
        <li><code>frontend</code>: Contains the client-side code with React, including components, pages, and styles.</li>
        <li><code>backend</code>: Contains the server-side code with Node.js and Express.js, including API endpoints and database models.</li>
    </ul>

<h2>Setup Instructions</h2>
    <h3>Frontend Setup</h3>
    <ol>
        <li>Navigate to the <code>frontend</code> folder:</li>
        <pre><code>cd frontend</code></pre>
        <li>Install dependencies using npm or yarn:</li>
        <pre><code>npm install</code></pre>
        <li>Start the development server:</li>
        <pre><code>npm start</code></pre>
        <li>The application will be available at <code>http://localhost:3000</code>.</li>
    </ol>

<h3>Backend Setup</h3>
    <ol>
        <li>Navigate to the <code>backend</code> folder:</li>
        <pre><code>cd backend</code></pre>
        <li>Install dependencies using npm:</li>
        <pre><code>npm install</code></pre>
        <li>Create a <code>.env</code> file with your environment variables:</li>
        <pre><code>PORT=1000
MONGO_URI=&lt;your-mongodb-connection-string&gt;
JWT_SECRET=&lt;your-jwt-secret&gt;</code></pre>
        <li>Start the server:</li>
        <pre><code>npm start</code></pre>
        <li>The backend server will run on <code>http://localhost:1000</code>.</li>
    </ol>

<h2>Usage</h2>

<h3>Creating a Blog Post</h3>
    <ol>
        <li>Open the application in your browser.</li>
        <li>Go to the "Write Blogs" page.</li>
        <li>Fill out the form with the title and content of your blog post, and submit it to create a new blog post.</li>
    </ol>

<h3>Updating a Blog Post</h3>
    <ol>
        <li>Navigate to the "All Blogs" page to view your blog posts.</li>
        <li>Click on the Blog you want to update and click on the "Edit" button next to a blog post you want to update.</li>
        <li>Modify the blog post content and save the changes.</li>
    </ol>

<h3>Viewing Blog Posts</h3>
    <ol>
        <li>Go to the "Home" page or "All Blogs" to see a list of all blog posts.</li>
        <li>Click on a blog post title to view its details.</li>
    </ol>

    

</body>
</html>
