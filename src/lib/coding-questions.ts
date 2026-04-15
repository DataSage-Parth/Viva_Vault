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
          {
            question: "Add a new field (e.g., salary) in your model.",
            hint: "Add column in model and run migration.",
          },
          {
            question: "Add a new table to your database.",
            hint: "Create new db.Model class.",
          },
          {
            question: "Create a relationship between two tables.",
            hint: "Use db.relationship() and ForeignKey.",
          },
          {
            question: "Make a field unique (e.g., username).",
            hint: "Add unique=True in column.",
          },
          {
            question: "Add NOT NULL constraint to a field.",
            hint: "Use nullable=False in model.",
          },
        ],
      },
      {
        name: "Flask Routes & Backend",
        icon: "route",
        questions: [
          {
            question: "Create a new route (e.g., /hello).",
            hint: "Use @app.route() and return response.",
          },
          {
            question: "Create a form submission route.",
            hint: "Use POST method and request.form.",
          },
          {
            question: "Redirect after form submission.",
            hint: "Use redirect() with url_for().",
          },
          {
            question: "Fetch data from database and display.",
            hint: "Query using ORM and pass to template.",
          },
          {
            question: "Delete a record from database.",
            hint: "Use db.session.delete() and commit().",
          },
        ],
      },
      {
        name: "Jinja2 Templates",
        icon: "file-code",
        questions: [
          {
            question: "Display data from backend in HTML.",
            hint: "Use {{ variable }} in template.",
          },
          {
            question: "Loop through data in template.",
            hint: "Use {% for %} loop.",
          },
          {
            question: "Add conditional rendering.",
            hint: "Use {% if %} statements.",
          },
          {
            question: "Extend a base template.",
            hint: "Use {% extends %} and {% block %}.",
          },
          {
            question: "Add dynamic links in template.",
            hint: "Use url_for() inside href.",
          },
        ],
      },
      {
        name: "Forms & Validation",
        icon: "shield-check",
        questions: [
          {
            question: "Create a form to take user input.",
            hint: "Use HTML form with POST method.",
          },
          {
            question: "Validate form data (e.g., empty fields).",
            hint: "Check conditions in Flask route.",
          },
          {
            question: "Show error messages in UI.",
            hint: "Pass error variable to template.",
          },
          {
            question: "Restrict input (e.g., username length).",
            hint: "Validate in backend before saving.",
          },
          {
            question: "Prevent duplicate entries.",
            hint: "Check DB before insert.",
          },
        ],
      },
      {
        name: "UI / Bootstrap / CSS",
        icon: "palette",
        questions: [
          {
            question: "Change navbar color.",
            hint: "Modify Bootstrap class or CSS.",
          },
          {
            question: "Add a button using Bootstrap.",
            hint: "Use btn classes.",
          },
          {
            question: "Center a form on page.",
            hint: "Use Bootstrap grid or flex.",
          },
          {
            question: "Change table styling.",
            hint: "Use table classes or custom CSS.",
          },
          {
            question: "Highlight rows conditionally.",
            hint: "Use Jinja with CSS classes.",
          },
        ],
      },
      {
        name: "Most Real Lab Questions",
        icon: "flame",
        questions: [
          {
            question: "Add a new column and show it in UI.",
            hint: "Update model + template.",
          },
          {
            question: "Add a button to delete a record.",
            hint: "Create route + form action.",
          },
          {
            question: "Add edit functionality for a record.",
            hint: "Fetch, update, commit.",
          },
          {
            question: "Show only logged-in user data.",
            hint: "Filter query using session.",
          },
          {
            question: "Add a new page and link it in navbar.",
            hint: "Create route + update template.",
          },
        ],
      },
    ],
  },
  {
    subject: "MAD 2",
    available: false,
    categories: [],
  },
];
