export interface QA {
  question: string;
  answer: string;
}

export interface QACategory {
  name: string;
  icon: string;
  questions: QA[];
}

export interface SubjectQAData {
  subject: string;
  categories: QACategory[];
}

export const mostAskedQA: SubjectQAData[] = [
  {
    subject: "MAD1",
    categories: [
      {
        name: "Flask",
        icon: "server",
        questions: [
          {
            question: "Can you explain what Flask is and why you chose it for your project?",
            answer: "Flask is a micro web framework for Python that is lightweight and easy to setup. I chose it because it is flexible, allows for quick development, and doesn't force a strict project structure.",
          },
          {
            question: "What is the purpose of Flask(__name__)?",
            answer: "It helps Flask determine the root path of the application so it can accurately locate resources like templates and static files relative to the main script.",
          },
          {
            question: 'Why do we use if __name__ == "__main__" in Flask applications?',
            answer: "It ensures that the development server only runs if the script is executed directly as the main program, preventing the server from starting automatically if the file is imported elsewhere.",
          },
          {
            question: "Can you explain how routing works in your Flask app?",
            answer: "Routing maps specific URLs to Python functions using the @app.route() decorator. When a user visits a URL, Flask executes the associated function and returns the result.",
          },
          {
            question: "What does @app.route() do internally?",
            answer: "Internally, it registers a URL rule in the application's URL map, connecting the path string to the view function so the dispatcher knows what to call.",
          },
          {
            question: "What is the difference between redirect() and url_for()?",
            answer: "redirect() sends the browser to a specific URL or path, while url_for() dynamically generates a URL for a specific function name, which is safer if paths change later.",
          },
          {
            question: "Can a Flask route return different types of responses?",
            answer: "Yes, it can return HTML strings, rendered templates via render_template(), JSON data using jsonify(), or even custom Response objects with specific status codes.",
          },
          {
            question: "How does data flow from frontend to backend in your application?",
            answer: "The frontend sends data via HTTP requests (like POST forms or AJAX). The backend captures this using request.form or request.json, processes it, and sends a response back.",
          },
        ],
      },
      {
        name: "Jinja Templates",
        icon: "file-code",
        questions: [
          {
            question: "Which templating engine are you using in your project?",
            answer: "I am using Jinja2, which is the default templating engine that comes bundled with Flask.",
          },
          {
            question: "What is Jinja2 and why is it used?",
            answer: "Jinja2 is a tool that lets us embed Python-like logic (loops, conditionals, variables) directly into HTML to create dynamic web pages rather than static ones.",
          },
          {
            question: "Can you explain template inheritance with an example?",
            answer: 'It allows a child page to "inherit" a common layout from a base file. For example, index.html extends layout.html to reuse the same navbar and footer.',
          },
          {
            question: "What problem does template inheritance solve?",
            answer: "It solves the problem of code duplication. Instead of copying the navbar to every page, you write it once in a base file and update it everywhere at once.",
          },
          {
            question: "Which keywords are used in template inheritance?",
            answer: "The main keywords are {% extends %} to link to the base template and {% block %} to define specific sections that the child template will fill.",
          },
          {
            question: "How are variables passed from Flask to HTML templates?",
            answer: "Variables are passed as keyword arguments within the render_template() function, such as render_template('index.html', name=user_name).",
          },
          {
            question: "Can Jinja handle conditional rendering (like booleans)?",
            answer: "Yes, it uses {% if %} and {% else %} tags to show or hide HTML elements based on the truth value of a variable passed from Python.",
          },
        ],
      },
      {
        name: "HTTP & REST",
        icon: "globe",
        questions: [
          {
            question: "What is HTTP and how does it work?",
            answer: "HTTP is the protocol used for transferring data on the web. It works on a request-response model where a client (browser) asks for data and a server sends it back.",
          },
          {
            question: "What is HTTPS and how is it different from HTTP?",
            answer: "HTTPS is the secure version of HTTP. The main difference is that HTTPS uses SSL/TLS encryption to protect the data being transmitted from being intercepted.",
          },
          {
            question: "Why is HTTPS considered secure?",
            answer: "It is secure because it encrypts the data between the client and server and verifies the server's identity through digital certificates.",
          },
          {
            question: "What do you mean by stateless protocol?",
            answer: "Stateless means the server does not remember any information about previous requests. Each request is treated as brand new and must contain all necessary info.",
          },
          {
            question: "Can you explain different HTTP methods used in your app?",
            answer: "I used GET to fetch data, POST to submit forms or create data, PUT to update existing records, and DELETE to remove them.",
          },
          {
            question: "What is the difference between GET and POST requests?",
            answer: "GET sends data through the URL and is used for fetching data, while POST sends data in the request body and is used for sensitive or large data submissions.",
          },
          {
            question: "When would you use PUT instead of POST?",
            answer: "Use PUT when you want to replace an existing resource entirely or ensure that repeating the same request multiple times doesn't create duplicate entries.",
          },
          {
            question: "What is the difference between PUT and PATCH?",
            answer: "PUT replaces the entire resource with new data, whereas PATCH is used for partial updates, changing only the specific fields you provide.",
          },
          {
            question: "Can GET requests modify data?",
            answer: 'Technically they can, but they shouldn\'t. According to HTTP standards, GET is a "safe" method meant only for retrieving information without changing state.',
          },
          {
            question: "Can PUT be used to create resources?",
            answer: "Yes, if the client knows the exact URI of the resource they want to create, PUT can be used to create it if it doesn't already exist.",
          },
        ],
      },
      {
        name: "REST APIs",
        icon: "webhook",
        questions: [
          {
            question: "What is a REST API?",
            answer: "It is a standardized way for systems to communicate over HTTP using resources (URLs) and standard methods like GET and POST.",
          },
          {
            question: "What makes an API RESTful?",
            answer: "An API is RESTful if it follows specific constraints like being stateless, using a client-server architecture, and having a uniform interface.",
          },
          {
            question: "Why are REST APIs stateless?",
            answer: "They are stateless to improve scalability. The server doesn't have to store session data, making it easier to handle many users across multiple servers.",
          },
          {
            question: "What are the constraints of REST architecture?",
            answer: "The key constraints are: Statelessness, Client-Server separation, Cacheability, Uniform Interface, Layered System, and optionally Code on Demand.",
          },
          {
            question: "Can you show me the APIs you have implemented?",
            answer: '(Point to your code) "Here are my endpoints like /api/tasks for fetching all items and /api/user/login for authentication."',
          },
          {
            question: "Can you create a simple API endpoint right now?",
            answer: "(Write briefly) @app.route('/hello') def hello(): return {\"message\": \"Hello World\"}, 200",
          },
        ],
      },
      {
        name: "Status Codes",
        icon: "hash",
        questions: [
          {
            question: "What are HTTP status codes?",
            answer: "They are 3-digit numbers issued by a server in response to a client's request to indicate whether the request was successful or failed.",
          },
          {
            question: "What does status code 200 represent?",
            answer: 'It stands for "OK," meaning the request was successful and the server has returned the requested data.',
          },
          {
            question: "What is a 400 error?",
            answer: 'It is a "Bad Request" error, meaning the server could not understand the request due to invalid syntax or input from the client\'s side.',
          },
          {
            question: "What does 404 mean?",
            answer: 'It stands for "Not Found," indicating that the server could not find the specific resource or page that the user requested.',
          },
          {
            question: "When do we use 500-series errors?",
            answer: "These are used when the server encounters an unexpected condition or a crash while trying to process a valid request.",
          },
        ],
      },
      {
        name: "ORM",
        icon: "database",
        questions: [
          {
            question: "What is ORM and why do we use it?",
            answer: "Object-Relational Mapping allows us to interact with a database using Python classes and objects instead of writing raw SQL queries.",
          },
          {
            question: "Which ORM are you using and why?",
            answer: "I am using SQLAlchemy because it integrates perfectly with Flask and simplifies database operations through its high-level API.",
          },
          {
            question: "What are the advantages and disadvantages of ORM?",
            answer: "Advantages include cleaner code and SQL injection protection. A disadvantage is that it can be slower than raw SQL for very complex queries.",
          },
          {
            question: "Is SQLAlchemy a class or a function?",
            answer: "SQLAlchemy is a library/toolkit. In code, the db instance is an object created from the SQLAlchemy class.",
          },
          {
            question: "What is db.Model in your code?",
            answer: "It is a base class provided by SQLAlchemy. All my database table classes inherit from it so the ORM can track them as tables.",
          },
        ],
      },
      {
        name: "Models & Relationships",
        icon: "link",
        questions: [
          {
            question: "How have you designed your database schema?",
            answer: "I designed it by identifying my main entities (like Users and Posts) and creating tables for them with appropriate columns and primary keys.",
          },
          {
            question: "Can you explain the relationships between your tables?",
            answer: "I have used One-to-Many relationships, for example, one User can have many Tasks, linked by the User's ID as a foreign key.",
          },
          {
            question: "What is db.relationship()?",
            answer: "It is a helper in SQLAlchemy that defines a link between two models so we can easily access related data as if it were a list or object.",
          },
          {
            question: "What is backref and why is it used?",
            answer: 'backref is a shortcut that automatically adds a relationship to the "other" table, allowing reverse access from the child back to the parent.',
          },
          {
            question: "What is the difference between backref and back_populates?",
            answer: "backref creates the relationship in both tables with one line, while back_populates is more explicit and requires a line in both table definitions.",
          },
          {
            question: "What is cascade delete and where have you used it?",
            answer: "It ensures that if a parent record is deleted, all its related child records are deleted automatically. I used it to delete a user's tasks when the user is deleted.",
          },
          {
            question: "What is lazy loading in SQLAlchemy?",
            answer: "It determines when the related data is loaded from the DB. lazy='select' loads it only when you access the property, saving memory and time.",
          },
          {
            question: "What does uselist parameter do?",
            answer: "When set to False, it tells SQLAlchemy that the relationship is One-to-One instead of One-to-Many, returning a single object instead of a list.",
          },
        ],
      },
      {
        name: "Keys & Constraints",
        icon: "key-round",
        questions: [
          {
            question: "What is a primary key?",
            answer: "A primary key is a unique identifier for each record in a table; it cannot be null and ensures that every row can be specifically found.",
          },
          {
            question: "What is a foreign key?",
            answer: "A foreign key is a column in one table that points to the primary key of another table, creating a link or relationship between them.",
          },
          {
            question: "What is the difference between primary key and unique key?",
            answer: "A table can only have one primary key (cannot be null), but it can have multiple unique keys (which might allow a single null value).",
          },
          {
            question: "Can a foreign key be non-unique?",
            answer: "Yes, in a One-to-Many relationship, many records in the child table can share the same foreign key pointing to one parent record.",
          },
          {
            question: "What does NOT NULL constraint do?",
            answer: "It ensures that a column must always have a value and cannot be left empty when a new record is created or updated.",
          },
          {
            question: "What are different types of constraints in SQL?",
            answer: "Common constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, and CHECK constraints to validate data ranges.",
          },
        ],
      },
      {
        name: "Database Concepts",
        icon: "hard-drive",
        questions: [
          {
            question: "What is normalization?",
            answer: "It is the process of organizing database tables to reduce data redundancy and ensure that data dependencies make logical sense.",
          },
          {
            question: "Can you explain 1NF, 2NF, and 3NF?",
            answer: "1NF removes duplicate columns; 2NF ensures all columns depend on the primary key; 3NF ensures columns depend only on the primary key and nothing else.",
          },
          {
            question: "What is the difference between structured and unstructured databases?",
            answer: "Structured (SQL) use fixed tables and schemas, while unstructured (NoSQL) like MongoDB use flexible, document-like formats.",
          },
          {
            question: "Why did you choose SQLite for your project?",
            answer: "I chose it because it is file-based and requires no separate server, making it perfect for development and small to medium projects.",
          },
          {
            question: "How is SQLite different from MySQL?",
            answer: "SQLite is a local file-based database, while MySQL is a powerful server-based database that can handle many more simultaneous connections.",
          },
          {
            question: "Can you explain your database schema in detail?",
            answer: '(Briefly describe your tables) "I have a User table for login info and a Data table for user content, connected by a user_id foreign key."',
          },
          {
            question: "Is your database normalized? How?",
            answer: "Yes, I have separated different entities into their own tables and removed repeating groups to ensure data integrity and minimize storage.",
          },
        ],
      },
      {
        name: "MVC",
        icon: "layers",
        questions: [
          {
            question: "What is MVC architecture?",
            answer: "It is a design pattern that separates an app into three parts: Model (data), View (UI), and Controller (logic).",
          },
          {
            question: "How have you implemented MVC in your project?",
            answer: "I used SQLAlchemy for the Models, Jinja2 templates for the Views, and Flask route functions as the Controllers.",
          },
          {
            question: "Which part of your code represents Model, View, and Controller?",
            answer: "models.py is the Model, the templates folder contains the Views, and app.py or routes.py acts as the Controller.",
          },
          {
            question: "Can you show MVC mapping in your code?",
            answer: '(Point to code) "The route function (Controller) fetches data from a class (Model) and passes it to render_template (View)."',
          },
          {
            question: "What is the difference between client-server and distributed architecture?",
            answer: "Client-server has one central server serving many clients, while distributed architecture shares the workload across multiple independent computers.",
          },
          {
            question: "What is 2-tier vs 3-tier architecture?",
            answer: "2-tier is just a Client and a Database. 3-tier adds an Application Server in the middle to handle business logic and security.",
          },
        ],
      },
      {
        name: "HTML",
        icon: "code",
        questions: [
          {
            question: "What is the difference between id and class?",
            answer: "id is a unique identifier used for one specific element, while class is used to group and style multiple elements at once.",
          },
          {
            question: "What is the difference between id and name in forms?",
            answer: "id is used to identify the element for CSS and JavaScript, while name is the key sent to the server when the form is submitted.",
          },
          {
            question: "What is DOM and how does it work?",
            answer: "The Document Object Model is a tree-like representation of the HTML page that allows JavaScript to dynamically access and change the content.",
          },
          {
            question: "Is DOM handled on client side or server side?",
            answer: "The DOM is handled entirely on the client side (the web browser).",
          },
          {
            question: "How do you access an element using JavaScript?",
            answer: "You can use methods like document.getElementById(), document.getElementsByClassName(), or document.querySelector().",
          },
          {
            question: "What is metadata in HTML?",
            answer: "Metadata is data about the HTML document (like the title, character set, or description) located in the <head> section and not displayed on the page.",
          },
        ],
      },
      {
        name: "CSS",
        icon: "palette",
        questions: [
          {
            question: "What are the different types of CSS?",
            answer: "There are three types: Inline (in the HTML tag), Internal (in <style> tags), and External (in a separate .css file).",
          },
          {
            question: "What is CSS precedence order?",
            answer: "Inline CSS has the highest priority, followed by Internal and External CSS. The most specific rule usually wins.",
          },
          {
            question: "Why does inline CSS have higher priority?",
            answer: "Because it is applied directly to the element itself, the browser assumes it is a more specific instruction than a general stylesheet.",
          },
          {
            question: "What symbols are used for id and class selectors?",
            answer: "The # (hash) symbol is used for id selectors, and the . (dot) symbol is used for class selectors.",
          },
          {
            question: "What is the difference between padding and cell spacing?",
            answer: "Padding is the space between the content and the border inside an element; cell spacing is the space between different table cells.",
          },
          {
            question: "How would you center a div?",
            answer: "You can use margin: auto; with a fixed width, or use Flexbox with display: flex; justify-content: center;.",
          },
          {
            question: "How do you apply hover effects in CSS?",
            answer: "You use the :hover pseudo-class, for example: button:hover { background-color: blue; }.",
          },
        ],
      },
      {
        name: "Bootstrap",
        icon: "layout",
        questions: [
          {
            question: "What is Bootstrap and why did you use it?",
            answer: "Bootstrap is a CSS framework that provides pre-built components and a grid system. I used it to make my site responsive and look professional quickly.",
          },
          {
            question: "What is a Bootstrap class?",
            answer: "A Bootstrap class is a pre-defined CSS class (like btn-primary or container) that applies specific styles or layouts instantly to an HTML element.",
          },
          {
            question: "What is CDN and why do we use it?",
            answer: "A Content Delivery Network is a system of servers that delivers files. We use it to load Bootstrap faster from a server physically closer to the user.",
          },
        ],
      },
      {
        name: "Authentication",
        icon: "user-check",
        questions: [
          {
            question: "What is authentication?",
            answer: "Authentication is the process of verifying who a user is, usually by checking their username and password.",
          },
          {
            question: "What is authorization?",
            answer: "Authorization is the process of verifying what a user is allowed to do, such as checking if they have admin permissions.",
          },
          {
            question: "What is the difference between them?",
            answer: "Authentication confirms your identity; Authorization determines your access rights or permissions after your identity is confirmed.",
          },
          {
            question: "How have you implemented login in your app?",
            answer: "I used Flask-Login to manage user sessions. I verify the password hash in the database and then use login_user() to track the session.",
          },
          {
            question: "What is RBAC?",
            answer: "Role-Based Access Control is a method of restricting system access to authorized users based on their assigned roles (like Admin, Editor, or User).",
          },
          {
            question: "How have you implemented RBAC?",
            answer: "I added a 'role' column to my User table and used custom decorators in Flask to check if a user has the required role before accessing a route.",
          },
        ],
      },
      {
        name: "Sessions & Cookies",
        icon: "cookie",
        questions: [
          {
            question: "What is a session?",
            answer: "A session is a way to store information about a user across multiple requests on the server side to keep them logged in.",
          },
          {
            question: "What is a cookie?",
            answer: "A cookie is a small piece of data stored on the user's browser by the server to remember them for future visits.",
          },
          {
            question: "What is the difference between session and cookie?",
            answer: "Sessions are stored on the server (more secure), while cookies are stored on the user's computer in the browser.",
          },
          {
            question: "Where are sessions stored?",
            answer: "In standard Flask, sessions are stored as cryptographically signed cookies on the client's browser, but they can be stored on the server using extensions.",
          },
          {
            question: "What happens if a user closes the browser after login?",
            answer: 'If it\'s a "session cookie," it is deleted and the user is logged out. If it\'s a "persistent cookie," they will stay logged in until it expires.',
          },
        ],
      },
      {
        name: "Security Core",
        icon: "shield",
        questions: [
          {
            question: "What is password hashing?",
            answer: "Hashing is a one-way mathematical process that turns a password into a string of random characters so the actual password is never stored.",
          },
          {
            question: "How did you implement password hashing?",
            answer: "I used the werkzeug.security library to generate hashes using generate_password_hash and verify them using check_password_hash.",
          },
          {
            question: "What is JWT?",
            answer: "JSON Web Token is a compact, URL-safe way of representing claims between two parties, often used for stateless authentication in APIs.",
          },
          {
            question: "What is the difference between session-based and token-based authentication?",
            answer: "Session-based auth stores data on the server, while token-based auth (like JWT) stores all info in the token on the client side.",
          },
          {
            question: "What is CSRF?",
            answer: "Cross-Site Request Forgery is an attack that tricks a logged-in user into performing unwanted actions on a web app without their knowledge.",
          },
          {
            question: "What is SQL injection?",
            answer: "It is an attack where malicious SQL code is inserted into input fields to manipulate the database.",
          },
          {
            question: "How do you prevent SQL injection?",
            answer: "I prevent it by using an ORM like SQLAlchemy, which uses parameterized queries that automatically sanitize user inputs.",
          },
        ],
      },
      {
        name: "Git",
        icon: "git-branch",
        questions: [
          {
            question: "What is Git?",
            answer: "Git is a version control system that tracks changes in your source code during software development.",
          },
          {
            question: "What is a version control system?",
            answer: "It is a system that records changes to a file or set of files over time so that you can recall specific versions later.",
          },
          {
            question: "Is Git centralized or distributed?",
            answer: "Git is a distributed system, meaning every developer has a full copy of the project history on their own machine.",
          },
          {
            question: "Why do we use Git?",
            answer: "We use it to collaborate with others, experiment with new features without breaking the main code, and maintain a history of all changes.",
          },
          {
            question: "What are branches?",
            answer: "Branches are independent lines of development that allow you to work on different features or fixes at the same time without interfering with each other.",
          },
          {
            question: "What is merging?",
            answer: "Merging is the process of taking the changes from one branch and integrating them into another, usually bringing feature code into the main branch.",
          },
        ],
      },
      {
        name: "Python",
        icon: "terminal",
        questions: [
          {
            question: "What is the difference between list and tuple?",
            answer: "Lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed). Lists use [] and tuples use ().",
          },
          {
            question: "What is mutable vs immutable?",
            answer: "Mutable objects can be modified (like adding items to a list), while immutable objects cannot be changed once they are created (like strings or tuples).",
          },
          {
            question: "What is a lambda function?",
            answer: "A lambda function is a small, anonymous function defined without a name that can have any number of arguments but only one expression.",
          },
          {
            question: "What is a decorator?",
            answer: "A decorator is a function that takes another function and extends its behavior without explicitly modifying its source code.",
          },
          {
            question: "What is exception handling?",
            answer: "It is a process to handle runtime errors so that the program doesn't crash, allowing it to continue or fail gracefully.",
          },
          {
            question: "What is try-except?",
            answer: "It is the syntax used for exception handling; code in the try block is tested for errors, and the except block handles the error if one occurs.",
          },
          {
            question: "What is OOP?",
            answer: 'Object-Oriented Programming is a programming style based on the concept of "objects," which contain data and methods that work on that data.',
          },
          {
            question: "What is inheritance?",
            answer: "Inheritance allows a class (child) to acquire the properties and methods of another class (parent), promoting code reuse.",
          },
        ],
      },
      {
        name: "Deployment",
        icon: "rocket",
        questions: [
          {
            question: "What is WSGI?",
            answer: "Web Server Gateway Interface is a standard that allows Python web applications to communicate with web servers like Nginx or Apache.",
          },
          {
            question: "What is Celery?",
            answer: "Celery is an asynchronous task queue that handles running heavy or time-consuming tasks in the background.",
          },
          {
            question: "What is Redis?",
            answer: 'Redis is an in-memory data store used as a database, cache, or message broker, often used as the "middleman" for Celery.',
          },
          {
            question: "What is caching?",
            answer: "Caching is the process of storing copies of data in a temporary storage location so that future requests for that data can be served faster.",
          },
          {
            question: "What is load balancing?",
            answer: "It is the process of distributing incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.",
          },
          {
            question: "What is horizontal vs vertical scaling?",
            answer: "Horizontal scaling is adding more servers to your pool, while vertical scaling is adding more power (CPU/RAM) to your existing server.",
          },
          {
            question: "Can we modify DB schema in production?",
            answer: "Yes, but it should be done using migration tools like Flask-Migrate to update the database structure without losing existing data.",
          },
        ],
      },
    ],
  },
  {
    subject: "MAD2",
    categories: [
      {
        name: "JS Basics",
        icon: "code",
        questions: [
          {
            question: "What is JavaScript and why is it important in web development?",
            answer: "JavaScript is a scripting language that runs in the browser. It is important because it adds interactivity and dynamic behavior to static HTML pages.",
          },
          {
            question: "Is JavaScript synchronous or asynchronous by default?",
            answer: "JavaScript is synchronous and single-threaded by default, meaning it executes one line of code at a time in order.",
          },
          {
            question: "What is the difference between interpreted and compiled languages?",
            answer: "Interpreted languages (like JS) run code line-by-line via an interpreter, while compiled languages are translated into machine code before execution.",
          },
        ],
      },
      {
        name: "Variables",
        icon: "braces",
        questions: [
          {
            question: "Difference between var, let, and const?",
            answer: "var is function-scoped and older; let and const are block-scoped. const cannot be reassigned after its initial value is set.",
          },
          {
            question: "What is block scope vs function scope?",
            answer: "Function scope means a variable is accessible anywhere in the function. Block scope means it's only accessible within the {} curly braces where it's defined.",
          },
          {
            question: "Can you reassign a const variable?",
            answer: "No, you cannot reassign a const variable. However, if it's an object or array, you can still modify the contents inside it.",
          },
        ],
      },
      {
        name: "Functions",
        icon: "parentheses",
        questions: [
          {
            question: "What are arrow functions?",
            answer: "Arrow functions are a shorter syntax for writing functions using =>. They are often used for anonymous functions and callbacks.",
          },
          {
            question: "Difference between normal function and arrow function?",
            answer: "Normal functions have their own this context, while arrow functions inherit this from the surrounding parent scope.",
          },
          {
            question: "What is this keyword in JavaScript?",
            answer: "The this keyword refers to the object that is currently executing the function or the context in which the function was called.",
          },
        ],
      },
      {
        name: "Async JavaScript",
        icon: "timer",
        questions: [
          {
            question: "What is asynchronous programming?",
            answer: "It allows the program to start a long-running task (like an API call) and continue running other code without waiting for that task to finish.",
          },
          {
            question: "What is a Promise?",
            answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.",
          },
          {
            question: "What are states of a Promise?",
            answer: "The three states are: Pending (waiting), Fulfilled (success), and Rejected (failed).",
          },
          {
            question: "Difference between Promise and async/await?",
            answer: "Promises use .then() and .catch() syntax, while async/await is a cleaner, more readable way to handle Promises that looks like synchronous code.",
          },
          {
            question: "What is callback hell?",
            answer: "Callback hell occurs when multiple asynchronous operations are nested inside each other, making the code very difficult to read and maintain.",
          },
        ],
      },
      {
        name: "AJAX & API",
        icon: "globe",
        questions: [
          {
            question: "What is AJAX?",
            answer: "Asynchronous JavaScript and XML allows a web page to update parts of the page by requesting data from a server without refreshing the whole page.",
          },
          {
            question: "How does AJAX work internally?",
            answer: "It uses the browser's XMLHttpRequest object or fetch() to send background requests to the server and updates the DOM when data arrives.",
          },
          {
            question: "What is fetch API?",
            answer: "The Fetch API is a modern, built-in JavaScript interface for making network requests, replacing the older and more complex AJAX methods.",
          },
          {
            question: "Difference between fetch and axios?",
            answer: "fetch is built into browsers but requires more manual setup; axios is a library that handles JSON automatically and has better error handling.",
          },
          {
            question: "How do you handle API errors in frontend?",
            answer: "I use .catch() in Promises or try-catch blocks in async/await to capture network failures or non-200 status codes.",
          },
          {
            question: "What is JSON?",
            answer: "JavaScript Object Notation is a lightweight data format used for exchanging data between a server and a web application.",
          },
          {
            question: "Difference between JSON and JavaScript object?",
            answer: "JSON is a string-based data format used for transmission; a JavaScript object is a data structure residing in the browser's memory.",
          },
        ],
      },
      {
        name: "Frontend Architecture",
        icon: "layout",
        questions: [
          {
            question: "What is SPA (Single Page Application)?",
            answer: "An SPA is a web app that loads a single HTML page and dynamically updates content as the user interacts, without full page reloads.",
          },
          {
            question: "Advantages of SPA?",
            answer: "It provides a smoother user experience, faster transitions between views, and reduces server load by only fetching data, not full pages.",
          },
          {
            question: "Disadvantages of SPA?",
            answer: "Disadvantages include slower initial load times, potential SEO challenges, and higher memory usage on the client's browser.",
          },
          {
            question: "What is client-side rendering vs server-side rendering?",
            answer: "In CSR, the browser builds the HTML using JavaScript; in SSR, the server sends a fully pre-built HTML page to the browser.",
          },
          {
            question: "What is lazy loading?",
            answer: "Lazy loading is a performance technique that delays the loading of non-critical resources (like images or components) until they are actually needed.",
          },
          {
            question: "How do you optimize frontend performance?",
            answer: "I use techniques like minifying code, lazy loading, caching API responses, and reducing the number of HTTP requests.",
          },
        ],
      },
      {
        name: "Vue Basics",
        icon: "monitor",
        questions: [
          {
            question: "What is VueJS?",
            answer: "VueJS is a progressive JavaScript framework used for building user interfaces and single-page applications using a component-based model.",
          },
          {
            question: "Why did you choose Vue over React/Angular?",
            answer: "I chose Vue because it has a gentler learning curve, clear documentation, and a very simple way of handling data binding.",
          },
          {
            question: "What is Vue instance?",
            answer: "The Vue instance is the root of every Vue application; it connects the data, methods, and templates to a specific HTML element.",
          },
        ],
      },
      {
        name: "Vue Directives",
        icon: "compass",
        questions: [
          {
            question: "What is v-if vs v-show?",
            answer: "v-if conditionally renders an element by adding or removing it from the DOM; v-show only toggles the CSS display property.",
          },
          {
            question: "What is v-for?",
            answer: "It is a directive used to loop through an array or object to render a list of items dynamically.",
          },
          {
            question: "What is v-bind?",
            answer: "v-bind is used to reactively bind an HTML attribute (like src, href, or class) to a piece of data in the Vue instance.",
          },
          {
            question: "What is v-model?",
            answer: "It creates a two-way data binding between a form input and a data variable, so changes in one automatically update the other.",
          },
        ],
      },
      {
        name: "Vue Components",
        icon: "boxes",
        questions: [
          {
            question: "What is a component in Vue?",
            answer: "A component is a reusable, self-contained unit of the UI that has its own template, data, and logic.",
          },
          {
            question: "How do components communicate?",
            answer: "Parent components send data to children via props, and children communicate back to parents by emitting events.",
          },
          {
            question: "What are props?",
            answer: "Props are custom attributes passed from a parent component down to a child component to share data.",
          },
          {
            question: "What is event emission?",
            answer: "It is the way a child component tells its parent that something happened (like a button click) using the $emit method.",
          },
        ],
      },
      {
        name: "Vue Lifecycle",
        icon: "refresh-cw",
        questions: [
          {
            question: "What are lifecycle hooks?",
            answer: "They are special functions that Vue runs at specific stages of a component's life, such as when it is created, mounted, or destroyed.",
          },
          {
            question: "Explain created() vs mounted()",
            answer: "created() runs after the data is reactive but before the HTML is visible; mounted() runs after the component has been added to the DOM.",
          },
          {
            question: "When should you call APIs in Vue lifecycle?",
            answer: "It is best to call APIs in created() or mounted() so the data is fetched as soon as the component is initialized.",
          },
        ],
      },
      {
        name: "State Management",
        icon: "database",
        questions: [
          {
            question: "What is state management?",
            answer: "It is a way to manage and share data (state) across many different components in a predictable way.",
          },
          {
            question: "What is Vuex?",
            answer: 'Vuex is the official state management library for Vue that acts as a centralized "store" for all components in an app.',
          },
          {
            question: "What are state, mutations, actions?",
            answer: "State holds the data; Mutations are synchronous functions that change the state; Actions handle asynchronous logic before committing mutations.",
          },
          {
            question: "Why do we use Vuex instead of local state?",
            answer: "We use Vuex when data needs to be shared by many unrelated components, preventing the mess of passing props through multiple levels.",
          },
          {
            question: "Difference between props and Vuex?",
            answer: "Props are for direct parent-to-child data sharing; Vuex is for global data sharing accessible by any component in the app.",
          },
        ],
      },
      {
        name: "API & Auth",
        icon: "key-round",
        questions: [
          {
            question: "How does frontend communicate with backend APIs?",
            answer: "The frontend uses fetch or axios to send HTTP requests to the backend server's URL endpoints.",
          },
          {
            question: "What is JWT?",
            answer: "JSON Web Token is a secure, encrypted string used to prove a user's identity to the server without needing to store sessions.",
          },
          {
            question: "How is JWT stored in frontend?",
            answer: "It is typically stored in localStorage, sessionStorage, or a secure cookie so it can be retrieved for future requests.",
          },
          {
            question: "What is Authorization header?",
            answer: "It is a part of the HTTP request where the JWT is sent (usually as Bearer <token>) so the server can authorize the user.",
          },
          {
            question: "Difference between token-based and session-based authentication?",
            answer: "Session-based auth relies on a server-side record, while token-based (JWT) auth is stateless and carries all user info within the token itself.",
          },
          {
            question: "How do you protect APIs?",
            answer: "By using middleware on the backend that checks for a valid token or session before allowing the request to proceed to the data.",
          },
          {
            question: "What is CORS and why is it needed?",
            answer: "Cross-Origin Resource Sharing is a security feature that allows or blocks requests from a different domain than where the API is hosted.",
          },
        ],
      },
      {
        name: "Async Jobs",
        icon: "clock",
        questions: [
          {
            question: "What are asynchronous jobs?",
            answer: "These are tasks that run in the background (like sending an email or generating a report) so the user doesn't have to wait.",
          },
          {
            question: "Why do we need async jobs?",
            answer: "To prevent the web server from freezing or timing out when performing heavy tasks that take a long time to complete.",
          },
          {
            question: "What is Celery?",
            answer: "Celery is a task queue system for Python that handles the scheduling and execution of background jobs.",
          },
          {
            question: "What is a worker?",
            answer: "A worker is a separate process that stays active to listen for and execute the tasks that are sent to the queue.",
          },
          {
            question: "What is a queue system?",
            answer: "A queue system (like Redis) holds the list of tasks waiting to be processed by workers in the order they were received.",
          },
          {
            question: "When should we use async jobs instead of synchronous?",
            answer: "Use them for tasks like batch processing, scheduled reminders, or any operation that takes more than a second or two to finish.",
          },
        ],
      },
      {
        name: "Redis",
        icon: "zap",
        questions: [
          {
            question: "What is Redis?",
            answer: "Redis is an extremely fast, in-memory data structure store used as a database, cache, or message broker.",
          },
          {
            question: "Why is Redis fast?",
            answer: "It is fast because it stores all data in RAM (memory) rather than on a hard drive, allowing for nearly instant data access.",
          },
          {
            question: "What are use cases of Redis?",
            answer: "Use cases include caching frequently used data, storing session information, and acting as a message broker for Celery.",
          },
          {
            question: "Difference between Redis and database?",
            answer: "Redis is mainly for temporary, fast data in memory, while a traditional database (like SQLite) is for permanent, long-term storage on disk.",
          },
          {
            question: "How is Redis used with Celery?",
            answer: "Redis acts as the \"broker\" or middleman that carries the task messages from the Flask app to the Celery workers.",
          },
        ],
      },
      {
        name: "Webhooks & Messaging",
        icon: "bell",
        questions: [
          {
            question: "What are webhooks?",
            answer: "A webhook is a way for one server to send real-time data to another application as soon as a specific event occurs.",
          },
          {
            question: "How do webhooks work?",
            answer: "The source server sends an HTTP POST request to a pre-defined URL in your application whenever an event (like a payment) happens.",
          },
          {
            question: "Difference between webhook and API?",
            answer: 'In an API, you "pull" data by asking for it; in a webhook, the data is "pushed" to you automatically by the server.',
          },
          {
            question: "When should you use webhooks?",
            answer: "Use them for real-time notifications from third-party services like payment gateways (Stripe) or version control (GitHub).",
          },
          {
            question: "What is event-driven architecture?",
            answer: "It is a design where the flow of the program is triggered by events such as user actions, sensor outputs, or messages from other services.",
          },
          {
            question: "What is message queue?",
            answer: "A message queue is a buffer that stores messages temporarily between different parts of a system until they can be processed.",
          },
        ],
      },
      {
        name: "Performance",
        icon: "gauge",
        questions: [
          {
            question: "How do you improve frontend performance?",
            answer: "I use code splitting, compress images, use browser caching, and minimize the amount of data sent in API responses.",
          },
          {
            question: "What is caching?",
            answer: "Caching is saving copies of data in a high-speed storage layer so that future requests for the same data are served much faster.",
          },
          {
            question: "Types of caching?",
            answer: "Common types include Browser caching (client-side), Server-side caching (Redis), and Content Delivery Network (CDN) caching.",
          },
          {
            question: "What is CDN?",
            answer: "A Content Delivery Network is a global group of servers that serve web content to users based on their geographic location to reduce lag.",
          },
          {
            question: "What is load balancing?",
            answer: "It is the practice of spreading incoming web traffic across multiple servers so that no single server crashes from too much load.",
          },
          {
            question: "Horizontal vs vertical scaling?",
            answer: "Horizontal scaling is adding more servers; vertical scaling is making your current server stronger by adding more RAM or CPU.",
          },
          {
            question: "What is debouncing and throttling?",
            answer: "They are techniques to limit how often a function executes (like search) to prevent excessive API calls and improve performance.",
          },
        ],
      },
      {
        name: "Advanced",
        icon: "brain",
        questions: [
          {
            question: "What happens if API takes too long to respond?",
            answer: "The frontend should show a loading indicator and eventually time out with an error message so the user isn't left guessing.",
          },
          {
            question: "How do you handle loading states in frontend?",
            answer: 'I use a boolean "loading" variable that shows a spinner or progress bar while the API request is in progress.',
          },
          {
            question: "What happens if token expires?",
            answer: "The backend returns a 401 error, and the frontend should then clear the local storage and redirect the user to the login page.",
          },
          {
            question: "How do you handle multiple API calls?",
            answer: "I use Promise.all() to run multiple requests at the same time and wait for all of them to finish before updating the UI.",
          },
          {
            question: "What is race condition?",
            answer: "A race condition occurs when the order of asynchronous events causes a bug, like an old API response overwriting a newer one.",
          },
          {
            question: "What is memory leak in frontend?",
            answer: "A memory leak happens when a script keeps holding onto memory that it no longer needs, eventually slowing down or crashing the browser.",
          },
          {
            question: "How to prevent excessive API calls?",
            answer: "I use debouncing on search inputs, cache results where possible, and ensure components don't re-fetch data unnecessarily.",
          },
        ],
      },
    ],
  },
];
