export interface CodingQuestion {
  question: string;
  hint: string;
}

export interface CodingCategory {
  name: string;
  icon: string;
  questions: CodingQuestion[];
}

export interface SubjectCodingData {
  subject: string;
  available: boolean;
  categories: CodingCategory[];
}

export const codingQuestions: SubjectCodingData[] = [
  {
    subject: "MAD 1",
    available: true,
    categories: [
      {
        name: "Database & Model (SQLAlchemy)",
        icon: "database",
        questions: [
          { question: "Add a new field (e.g., salary) in your model.", hint: "Add a column to the model and run a migration or update the database schema." },
          { question: "Add a new table to your database.", hint: "Create a new db.Model class with the required columns." },
          { question: "Create a relationship between two tables.", hint: "Use db.relationship() and a ForeignKey." },
          { question: "Make a field unique (e.g., username).", hint: "Add unique=True to the column and handle existing duplicates." },
          { question: "Add NOT NULL constraint to a field.", hint: "Set nullable=False in the model and ensure existing rows satisfy the constraint." },
        ],
      },
      {
        name: "Flask Routes & Backend",
        icon: "route",
        questions: [
          { question: "Create a new route (e.g., /hello).", hint: "Use @app.route() and return a response." },
          { question: "Create a form submission route.", hint: "Use the POST method and read values from request.form." },
          { question: "Redirect after form submission.", hint: "Use redirect() with url_for()." },
          { question: "Fetch data from database and display it.", hint: "Query using the ORM and pass the results to a template." },
          { question: "Delete a record from the database.", hint: "Use db.session.delete() followed by db.session.commit()." },
        ],
      },
      {
        name: "Jinja2 Templates",
        icon: "file-code",
        questions: [
          { question: "Display data from backend in HTML.", hint: "Use {{ variable }} in the template." },
          { question: "Loop through data in a template.", hint: "Use a {% for %} loop." },
          { question: "Add conditional rendering.", hint: "Use {% if %} statements." },
          { question: "Extend a base template.", hint: "Use {% extends %} and {% block %}." },
          { question: "Add dynamic links in a template.", hint: "Use url_for() inside href." },
        ],
      },
      {
        name: "Forms & Validation",
        icon: "shield-check",
        questions: [
          { question: "Create a form to take user input.", hint: "Use an HTML form with the POST method." },
          { question: "Validate form data (e.g., empty fields).", hint: "Check the submitted values in the Flask route before processing." },
          { question: "Show error messages in the UI.", hint: "Pass an error variable or use Flask flash messages." },
          { question: "Restrict input (e.g., username length).", hint: "Validate on the backend before saving." },
          { question: "Prevent duplicate entries.", hint: "Query the database before inserting and enforce uniqueness where appropriate." },
        ],
      },
      {
        name: "UI / Bootstrap / CSS",
        icon: "palette",
        questions: [
          { question: "Change navbar color.", hint: "Modify the Bootstrap class or the relevant CSS rule." },
          { question: "Add a button using Bootstrap.", hint: "Use Bootstrap button classes such as btn and btn-primary." },
          { question: "Center a form on the page.", hint: "Use the Bootstrap grid or flex utility classes." },
          { question: "Change table styling.", hint: "Use Bootstrap table classes or custom CSS." },
          { question: "Highlight rows conditionally.", hint: "Apply CSS classes conditionally using Jinja." },
        ],
      },
      {
        name: "Most Real Lab Questions",
        icon: "flame",
        questions: [
          { question: "Add a new column and show it in the UI.", hint: "Update the model/schema, fetch the value, and add it to the template." },
          { question: "Add a button to delete a record.", hint: "Create a delete route and submit a form to it." },
          { question: "Add edit functionality for a record.", hint: "Fetch the record, validate updates, commit, and show the updated values." },
          { question: "Show only logged-in user's data.", hint: "Filter the query using the authenticated user's ID." },
          { question: "Add a new page and link it in the navbar.", hint: "Create a route and template, then add a url_for() link." },
        ],
      },
    ],
  },
  {
    subject: "MAD 2",
    available: true,
    categories: [
      {
        name: "Flask Routes, APIs & Authentication",
        icon: "route",
        questions: [
          { question: "Write a login route in notepad.", hint: "Read credentials, find the user, verify a hashed password, and return a token or an appropriate error. Never store plain-text passwords." },
          { question: "Write a signup/register route.", hint: "Read username, email, and password; check for an existing account, hash the password, save the user, and return a response." },
          { question: "Write an API route that takes two integers and returns their sum plus a hello message.", hint: "Read the integers from path/query parameters or JSON, add them, and return the sum and greeting with jsonify()." },
          { question: "Write a Hello World Flask route.", hint: "Define @app.route('/') and return the string Hello World." },
          { question: "Write a route to fetch all students, doctors, or users and their details.", hint: "Query Model.query.all(), serialize the selected fields into dictionaries, and return jsonify()." },
          { question: "Write a route to fetch all blacklisted or deactivated users, staff, or companies.", hint: "Filter by the relevant status, such as is_active=False, then serialize the results." },
          { question: "Write a route to fetch shortlisted, rejected, approved, or unapproved records.", hint: "Filter the status column for the requested value and return the matching records." },
          { question: "Write a route that takes role as a URL parameter and returns all usernames with that role.", hint: "Use a dynamic route such as /users/<role>, query by role, and return the usernames." },
          { question: "Write a route to check whether a number is even or odd.", hint: "Read the number, check number % 2 === 0, and return even or odd as a JSON message." },
          { question: "Write a route that returns the current timestamp, then add caching.", hint: "Return datetime.now() or an ISO timestamp; add a configured cache decorator such as @cache.cached(timeout=...)." },
          { question: "Write a POST endpoint that returns the index where a substring starts; test it with Postman.", hint: "Read the string and substring from JSON, use find(), and return the index in JSON. find() returns -1 if absent." },
          { question: "Add a welcome message when a user logs in or a name is searched.", hint: "After successful login/search, build a message such as f'Welcome {name}' and return it to the frontend." },
          { question: "Change the Flask server port from 5000 to 8000.", hint: "Set app.run(port=8000) in the development entry point and restart the server." },
          { question: "Create a route for DOB input that returns age.", hint: "Parse the date of birth, subtract the birth year from today's year, and adjust if the birthday has not occurred yet this year." },
        ],
      },
      {
        name: "SQLAlchemy & Database Changes",
        icon: "database",
        questions: [
          { question: "Write a SQLAlchemy query to find a user by ID, doctors in a department, treks by staff name, or ratings greater than 3.", hint: "Use a primary-key lookup for IDs, filter_by() for equality, and filter(Model.rating > 3) for comparisons." },
          { question: "Add a new column to a model (e.g., a unique, non-null email).", hint: "Add db.Column(db.String(...), unique=True, nullable=False), then apply a migration or update the schema and handle existing rows." },
          { question: "Make a name field unique and case-insensitive (e.g., MAD 1 and mad 1 must conflict).", hint: "Normalize names with strip().casefold() before comparing, or enforce a database-level normalized unique key." },
          { question: "Prevent double booking for the same patient, doctor, and slot.", hint: "Check for an existing matching booking before insert; also consider a database unique constraint to prevent race-condition duplicates." },
          { question: "Add a deleted checkbox filter to admin search.", hint: "Bind the checkbox with v-model and apply the deleted/status filter in the backend query or a computed frontend list." },
        ],
      },
      {
        name: "JavaScript & Vue Fundamentals",
        icon: "git-branch",
        questions: [
          { question: "Write v-for, v-if, and v-else in a Vue template.", hint: "Use v-for to iterate over an array; put v-else immediately after the corresponding v-if/v-else-if element." },
          { question: "Write a Vue component with a button that prints Hi or Hello when clicked.", hint: "Bind @click to a method and call console.log() inside that method." },
          { question: "Write a Vue counter button that increments on click.", hint: "Initialize count to 0, increment it in the click handler, and render count in the template." },
          { question: "Write a Vue toggle button that switches between Hello and Goodbye.", hint: "Toggle a boolean on click and render the text with v-if/v-else or a conditional expression." },
          { question: "Write JavaScript for the square/cube of a number, sum of three numbers, or concatenating names.", hint: "Write a function accepting the inputs, perform the requested arithmetic or string concatenation, and return the result." },
          { question: "Filter users with score greater than 15 from an array.", hint: "Use array.filter(user => user.score > 15) to create a new filtered array." },
          { question: "Add a default value to a form field.", hint: "Initialize the component's data value and bind the input with v-model." },
          { question: "Show a login button 10 times using a loop and hide it when another button is clicked using v-if.", hint: "Use v-for='n in 10' and a boolean visibility flag controlled by a click handler." },
          { question: "Create a component with an input and button that reads an integer from the URL and prints it to the console on click.", hint: "Read the route parameter/query, convert it to a number if needed, and use @click to log it." },
          { question: "Show a parent component's user list with v-for and pass each user to a child using props; style scores green or red.", hint: "Bind each user as a prop and use a conditional class based on the score." },
          { question: "Show child-to-parent communication using emit.", hint: "Call this.$emit('eventName', data) in the child and listen with @eventName='handlerMethod' in the parent." },
        ],
      },
      {
        name: "Vue Router, Frontend & UI Changes",
        icon: "palette",
        questions: [
          { question: "Create a new Vue page, attach it to the router, and connect it to the backend.", hint: "Create a .vue component, register its path/component in router.js, and call the API when the component loads if needed." },
          { question: "Make a frontend button fetch a message from /api/hello and display it.", hint: "Call fetch() or axios.get() on click, store the response in reactive data, and render the message." },
          { question: "Move the navbar from top to bottom, right, or middle.", hint: "Adjust the navbar's CSS positioning or flex alignment while keeping its links functional." },
          { question: "Change a button, background, sidebar, or navbar color; or make all text blue.", hint: "Find the relevant CSS selector or Vue component style and update the color/background properties." },
          { question: "Change the background to red and all text to blue.", hint: "Update the page background and text color in the relevant CSS selectors, checking contrast and readability." },
          { question: "Move the navbar to the middle or bottom of the page.", hint: "Use flexbox alignment or positioning properties, and verify the navbar still behaves correctly on smaller screens." },
          { question: "Add a button to the dashboard that fetches data and redirects.", hint: "Fetch data in the click handler and navigate using this.$router.push() after success." },
          { question: "Move the register/login button to the top-right corner without breaking its function.", hint: "Adjust its container layout with flexbox or positioning; leave the click handler and route unchanged." },
          { question: "Redirect a user directly to the dashboard after registration instead of the login page.", hint: "After successful registration, establish the required session/token and navigate with Vue Router." },
          { question: "Add a dropdown to a form and print the submitted value in the backend terminal.", hint: "Bind a select with v-model, send the selected value to Flask, and print it in the route." },
          { question: "Add a new admin tab/page, such as placed students showing name and company.", hint: "Create a Vue component and router entry, add an API returning the records, and display them in a table." },
          { question: "Create Vue routes for /users and /users/:id, including invalid-ID handling.", hint: "Define list and dynamic detail routes, navigate with the user ID, and show a not-found message if the record does not exist." },
        ],
      },
      {
        name: "Validation, Search & Business Rules",
        icon: "shield-check",
        questions: [
          { question: "Add frontend validation for a password of 8–20 characters with at least one number, or a digits-only pincode.", hint: "Check length and use a regular expression for digits; show a clear validation error before submission." },
          { question: "Prevent a duplicate booking or duplicate drive application.", hint: "Query for an existing matching record before creating another and return an error if it exists." },
          { question: "Prevent a placed/selected student from applying to other drives.", hint: "Check the student's placement/selection status on the backend and reject new applications when the rule applies." },
          { question: "Add an email search filter that ignores everything after @.", hint: "Split the email at @ and compare/filter using the username part before the at sign." },
          { question: "Change booking status to Pending until the admin accepts it, then Booked.", hint: "Set Pending as the default status; let the authorized admin action update it to Booked and display the current status." },
          { question: "Prevent company registration if the pending-approval count is greater than 1.", hint: "Count pending companies on the backend and reject registration when the count exceeds the specified threshold." },
          { question: "Add drive-name search to existing student/company search filters.", hint: "Add a drive-name input and combine its condition with existing query filters." },
          { question: "Reject trek/lot creation with more than 30 slots or negative pricing.", hint: "Validate slot count <= 30 and price >= 0 on the backend before saving; return an error for invalid values." },
          { question: "Validate password length on both frontend and backend; reject passwords shorter than 8 characters.", hint: "Show a frontend error before submit, and repeat the validation in Flask because client-side checks can be bypassed." },
          { question: "Add a cancel-appointment feature for the doctor, including frontend and backend changes.", hint: "Create an authorized endpoint that sets the appointment status to cancelled; call it from the UI and refresh the displayed status." },
          { question: "Show only cancelled, booked, or confirmed bookings.", hint: "Filter by status using a Vue computed property or a backend SQLAlchemy filter, then render the matching records." },
          { question: "Display the vehicle number for an occupied parking spot.", hint: "Include vehicle_number in the API response and display it in the relevant frontend table/card." },
        ],
      },
      {
        name: "Celery, Scheduling & Background Jobs",
        icon: "database",
        questions: [
          { question: "Change Celery beat/crontab timing to run in one minute and demonstrate the email arriving.", hint: "Update the schedule to the next minute, restart Celery beat and the worker, and verify the email in MailHog." },
          { question: "Write a Celery task, a Flask route to trigger it, and a Vue button to call it.", hint: "Define a @celery.task function, trigger it with task.delay() in Flask, return the task ID, and call the endpoint from Vue." },
          { question: "Rename the Vue app and schedule a Celery email for 30 seconds (trick question: crontab minimum is one minute).", hint: "Change the displayed app title/configuration as appropriate. Crontab has minute-level granularity; use a countdown/ETA for a 30-second one-off task if supported." },
          { question: "Change Celery crontab to the current time and demonstrate the email live.", hint: "Set the schedule for the next upcoming minute, restart beat/worker if required, and check MailHog." },
          { question: "Create a Celery task to fetch appointments from the past five days and an endpoint to trigger it.", hint: "Calculate the cutoff datetime, query appointments in that range, and expose a Flask route that calls task.delay() and returns its task ID." },
        ],
      },
      {
        name: "Fetch, API Testing & Practical Tasks",
        icon: "search",
        questions: [
          { question: "Test any API endpoint using Postman or Thunder Client.", hint: "Choose the HTTP method and URL, add JSON headers/body when required, send the request, and inspect the status code and response." },
          { question: "Write a fetch request, including one that deletes a record, without looking at your code.", hint: "Use fetch(url) for GET or fetch(url, { method: 'DELETE' }) for deletion; check the response and update the UI after success." },
          { question: "Calculate a parking fee per full hour without if statements.", hint: "Calculate elapsed minutes, use Math.ceil(minutes / 60) to round up to a full hour, and multiply by the hourly rate." },
        ],
      },
    ],
  },
];
