Quiz Management System (QMS)

A full-stack web application designed for managing quizzes with two user roles: Faculty and Student. Built using Django REST Framework on the backend and React.js on the frontend, this system handles everything from quiz creation and submission to grading and analytics.

🚀 Tech Stack
Backend: Django, Django REST Framework, PostgreSQL, JWT (SimpleJWT)
Frontend: React.js, Axios, React Router, Context API
Others: Python Dotenv for secure credentials, Basic CSS for styling

🎯 What This Project Does
This system allows faculty to create quizzes, add questions (both MCQ and subjective), and track student submissions. Students can log in, attempt quizzes with a timer, and view their results. Faculty can also grade subjective answers and export results.

👥 User Roles

👩‍🏫 Faculty
1. Register/Login securely
2. Create, edit, or delete quizzes
3. Add MCQs and subjective questions
4. View all student submissions
5. Grade answers manually if needed
6. View top-scoring students per quiz

👨‍🎓 Student
1. Register/Login
2. View all available quizzes
3. Attempt quizzes (with timer)
4. Auto-grade MCQs instantly
5. View results after submission

🧠 Project Structure
Quiz_Management_System/
├── config/             # Django project settings
├── quiz/               # Django app: models, views, serializers
├── quiz-frontend/      # React app for user interface
├── manage.py
├── requirements.txt    # Backend dependencies
├── .env                # (Not pushed) Secure secrets
├── .gitignore
├── README.md

🛠️ How to Set Up Locally and Run....

Step 1: Clone the Project
git clone https://github.com/anvithas2005/Quiz_Management_System.git 
cd Quiz_Management_System

Step 2: Set Up Backend (Django)
python -m venv anvi
anvi\Scripts\activate (for windows)
pip install -r requirements.txt

Step 3: Add Environment Variables

Create a .env file in the root (Quiz_Management_System/) and add:

DB_NAME=quiz_db
DB_USER=postgres
DB_PASSWORD=your_password_here
SECRET_KEY=your_django_secret_key_here

Step 4: Run Migrations and Start Backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

✅ Your Django API is running at: http://localhost:8000

Step 5: Set Up Frontend (React)
cd quiz-frontend
npm install
npm start

✅ React frontend will run at: http://localhost:3000


🔐 How JWT Authentication Works

• This project uses JWT (JSON Web Tokens) for secure, stateless user authentication. Here’s how it works:
• When a user logs in, the backend issues a JWT token that contains the user's ID and role (student or faculty).
• This token is saved in the browser's local storage and attached to every request using Axios interceptors.
• Based on the decoded token, the frontend performs role-based routing — sending faculty to the faculty dashboard and students to the quiz list.
• On logout, the token is removed from local storage, revoking access.
• The system is protected from unauthorized access by checking tokens in Django using SimpleJWT middleware and permissions.

🔒 This approach makes the system scalable, secure, and easy to extend for mobile or third-party clients.


📦 .env Example (For Setup)

DB_NAME=quiz_db
DB_USER=postgres
DB_PASSWORD=my_password
SECRET_KEY=my_secret_key

🛑 Do not push .env to GitHub. Already ignored in .gitignore 

Thanks for checking out this project! 