export const mostAsked = {
    MAD1: {
        FLASK: [
            "Can you explain what Flask is and why you chose it for your project?",
            "What is the purpose of Flask(__name__)?",
            "Why do we use if __name__ == \"__main__\" in Flask applications?",
            "Can you explain how routing works in your Flask app?",
            "What does @app.route() do internally?",
            "What is the difference between redirect() and url_for()?",
            "Can a Flask route return different types of responses?",
            "How does data flow from frontend to backend in your application?"
        ],
        JINJA_TEMPLATES: [
            "Which templating engine are you using in your project?",
            "What is Jinja2 and why is it used?",
            "Can you explain template inheritance with an example?",
            "What problem does template inheritance solve?",
            "Which keywords are used in template inheritance?",
            "How are variables passed from Flask to HTML templates?",
            "Can Jinja handle conditional rendering (like booleans)?"
        ],
        HTTP_REST: [
            "What is HTTP and how does it work?",
            "What is HTTPS and how is it different from HTTP?",
            "Why is HTTPS considered secure?",
            "What do you mean by stateless protocol?",
            "Can you explain different HTTP methods used in your app?",
            "What is the difference between GET and POST requests?",
            "When would you use PUT instead of POST?",
            "What is the difference between PUT and PATCH?",
            "Can GET requests modify data?",
            "Can PUT be used to create resources?"
        ],
        REST_APIS: [
            "What is a REST API?",
            "What makes an API RESTful?",
            "Why are REST APIs stateless?",
            "What are the constraints of REST architecture?",
            "Can you show me the APIs you have implemented?",
            "Can you create a simple API endpoint right now?"
        ],
        STATUS_CODES: [
            "What are HTTP status codes?",
            "What does status code 200 represent?",
            "What is a 400 error?",
            "What does 404 mean?",
            "When do we use 500-series errors?"
        ],
        DATABASE_ORM: {
            ORM: [
                "What is ORM and why do we use it?",
                "Which ORM are you using and why?",
                "What are the advantages and disadvantages of ORM?",
                "Is SQLAlchemy a class or a function?",
                "What is db.Model in your code?"
            ],
            MODELS_RELATIONSHIPS: [
                "How have you designed your database schema?",
                "Can you explain the relationships between your tables?",
                "What is db.relationship()?",
                "What is backref and why is it used?",
                "What is the difference between backref and back_populates?",
                "What is cascade delete and where have you used it?",
                "What is lazy loading in SQLAlchemy?",
                "What does uselist parameter do?"
            ],
            KEYS_CONSTRAINTS: [
                "What is a primary key?",
                "What is a foreign key?",
                "What is the difference between primary key and unique key?",
                "Can a foreign key be non-unique?",
                "What does NOT NULL constraint do?",
                "What are different types of constraints in SQL?"
            ],
            DATABASE_CONCEPTS: [
                "What is normalization?",
                "Can you explain 1NF, 2NF, and 3NF?",
                "What is the difference between structured and unstructured databases?",
                "Why did you choose SQLite for your project?",
                "How is SQLite different from MySQL?",
                "Can you explain your database schema in detail?",
                "Is your database normalized? How?"
            ]
        },
        MVC: [
            "What is MVC architecture?",
            "How have you implemented MVC in your project?",
            "Which part of your code represents Model, View, and Controller?",
            "Can you show MVC mapping in your code?",
            "What is the difference between client-server and distributed architecture?",
            "What is 2-tier vs 3-tier architecture?"
        ],
        FRONTEND: {
            HTML: [
                "What is the difference between id and class?",
                "What is the difference between id and name in forms?",
                "What is DOM and how does it work?",
                "Is DOM handled on client side or server side?",
                "How do you access an element using JavaScript?",
                "What is metadata in HTML?"
            ],
            CSS: [
                "What are the different types of CSS?",
                "What is CSS precedence order?",
                "Why does inline CSS have higher priority?",
                "What symbols are used for id and class selectors?",
                "What is the difference between padding and cell spacing?",
                "How would you center a div?",
                "How do you apply hover effects in CSS?"
            ],
            BOOTSTRAP: [
                "What is Bootstrap and why did you use it?",
                "What is a Bootstrap class?",
                "What is CDN and why do we use it?"
            ]
        },
        SECURITY: {
            AUTH: [
                "What is authentication?",
                "What is authorization?",
                "What is the difference between them?",
                "How have you implemented login in your app?",
                "What is RBAC?",
                "How have you implemented RBAC?"
            ],
            SESSION_COOKIES: [
                "What is a session?",
                "What is a cookie?",
                "What is the difference between session and cookie?",
                "Where are sessions stored?",
                "What happens if a user closes the browser after login?"
            ],
            SECURITY_CORE: [
                "What is password hashing?",
                "How did you implement password hashing?",
                "What is JWT?",
                "What is the difference between session-based and token-based authentication?",
                "What is CSRF?",
                "What is SQL injection?",
                "How do you prevent SQL injection?"
            ]
        },
        GIT: [
            "What is Git?",
            "What is a version control system?",
            "Is Git centralized or distributed?",
            "Why do we use Git?",
            "What are branches?",
            "What is merging?"
        ],
        PYTHON: [
            "What is the difference between list and tuple?",
            "What is mutable vs immutable?",
            "What is a lambda function?",
            "What is a decorator?",
            "What is exception handling?",
            "What is try-except?",
            "What is OOP?",
            "What is inheritance?"
        ],

        LIVE_CODING: [
            "Can you restrict username to 10 characters?",
            "Can you add password validation rules?",
            "How would you ensure username uniqueness?",
            "Can you store all usernames in uppercase?",
            "Move the navbar to the bottom of the page.",
            "Change background color dynamically.",
            "Add a reset button to the login form.",
            "Add age verification before accessing content.",
            "Display number of search results.",
            "Change your chart from bar to pie.",
            "Reduce stock after purchase.",
            "Add discount logic for orders.",
            "Change the port number of your Flask app."
        ]
    },
    MAD2: {
    JAVASCRIPT: {
        BASICS: [
            "What is JavaScript and why is it important in web development?",
            "Is JavaScript synchronous or asynchronous by default?",
            "What is the difference between interpreted and compiled languages?"
        ],
        VARIABLES: [
            "Difference between var, let, and const?",
            "What is block scope vs function scope?",
            "Can you reassign a const variable?"
        ],
        FUNCTIONS: [
            "What are arrow functions?",
            "Difference between normal function and arrow function?",
            "What is this keyword in JavaScript?"
        ],
        ASYNC_JS: [
            "What is asynchronous programming?",
            "What is a Promise?",
            "What are states of a Promise?",
            "Difference between Promise and async/await?",
            "What is callback hell?"
        ]
    },

    AJAX_API: [
        "What is AJAX?",
        "How does AJAX work internally?",
        "What is fetch API?",
        "Difference between fetch and axios?",
        "How do you handle API errors in frontend?",
        "What is JSON?",
        "Difference between JSON and JavaScript object?"
    ],

    FRONTEND_ARCHITECTURE: [
        "What is SPA (Single Page Application)?",
        "Advantages of SPA?",
        "Disadvantages of SPA?",
        "What is client-side rendering vs server-side rendering?",
        "What is lazy loading?",
        "How do you optimize frontend performance?"
    ],

    VUEJS: {
        BASICS: [
            "What is VueJS?",
            "Why did you choose Vue over React/Angular?",
            "What is Vue instance?"
        ],
        DIRECTIVES: [
            "What is v-if vs v-show?",
            "What is v-for?",
            "What is v-bind?",
            "What is v-model?"
        ],
        COMPONENTS: [
            "What is a component in Vue?",
            "How do components communicate?",
            "What are props?",
            "What is event emission?"
        ],
        LIFECYCLE: [
            "What are lifecycle hooks?",
            "Explain created() vs mounted()",
            "When should you call APIs in Vue lifecycle?"
        ]
    },

    STATE_MANAGEMENT: [
        "What is state management?",
        "What is Vuex?",
        "What are state, mutations, actions?",
        "Why do we use Vuex instead of local state?",
        "Difference between props and Vuex?"
    ],

    API_AUTH: [
        "How does frontend communicate with backend APIs?",
        "What is JWT?",
        "How is JWT stored in frontend?",
        "What is Authorization header?",
        "Difference between token-based and session-based authentication?",
        "How do you protect APIs?",
        "What is CORS and why is it needed?"
    ],

    ASYNC_JOBS: [
        "What are asynchronous jobs?",
        "Why do we need async jobs?",
        "What is Celery?",
        "What is a worker?",
        "What is a queue system?",
        "When should we use async jobs instead of synchronous?"
    ],

    REDIS: [
        "What is Redis?",
        "Why is Redis fast?",
        "What are use cases of Redis?",
        "Difference between Redis and database?",
        "How is Redis used with Celery?"
    ],

    MESSAGING_WEBHOOKS: [
        "What are webhooks?",
        "How do webhooks work?",
        "Difference between webhook and API?",
        "When should you use webhooks?",
        "What is event-driven architecture?",
        "What is message queue?"
    ],

    PERFORMANCE: [
        "How do you improve frontend performance?",
        "What is caching?",
        "Types of caching?",
        "What is CDN?",
        "What is load balancing?",
        "Horizontal vs vertical scaling?",
        "What is debouncing and throttling?"
    ],

    ADVANCED: [
        "What happens if API takes too long to respond?",
        "How do you handle loading states in frontend?",
        "What happens if token expires?",
        "How do you handle multiple API calls?",
        "What is race condition?",
        "What is memory leak in frontend?",
        "How to prevent excessive API calls?"
    ],

    DEPLOYMENT: [
        "What is WSGI?",
        "What is Celery?",
        "What is Redis?",
        "What is caching?",
        "What is load balancing?",
        "What is horizontal vs vertical scaling?",
        "Can we modify DB schema in production?"
    ]
    }
};