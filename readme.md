Quiz Management System (QMS)

A full-stack web application for managing quizzes, developed using Django REST Framework and React.js. The system supports role-based access for Faculty and Students with features like quiz creation, submission, grading, and analytics.

🚀 Tech Stack

Backend:

Django 4.x

Django REST Framework

PostgreSQL

JWT Authentication (djangorestframework-simplejwt)

Python Dotenv for environment variables

Frontend:

React.js (with Hooks)

Axios

React Router DOM

Context API for Auth

Basic CSS

👥 Roles and Access

👩‍🏫 Faculty:

Register and Login

Create/Edit/Delete Quizzes

Add MCQ and Subjective Questions

View Submissions

Grade Subjective Answers

View Analytics (Top Scores)

👨‍🎓 Student:

Register and Login

View Available Quizzes

Attempt Quiz with Timer

Auto-graded MCQs

View Results after Submission

🧾 Project Structure

Quiz_Management_System/
├── config/              # Django project settings
├── quiz/                # Django app: models, views, urls, etc.
├── quiz-frontend/       # React app for the frontend
├── manage.py
├── requirements.txt
├── .env                 # Contains secret credentials (not uploaded)
├── .gitignore
├── README.md

⚙️ How to Setup and Run

🔧 Prerequisites:

Python 3.10+

Node.js 18+

PostgreSQL

✅ Step 1: Clone the Repository

git clone https://github.com/yourusername/quiz-management-system.git
cd quiz-management-system

🐍 Step 2: Set Up Backend (Django)

cd qms-anvi
python -m venv anvi
source anvi/bin/activate  # Windows: anvi\Scripts\activate
pip install -r requirements.txt

🔐 Step 3: Configure Environment Variables

Create a .env file inside qms-anvi/ with:

DB_NAME=quiz_db
DB_USER=postgres
DB_PASSWORD=your_postgres_password
SECRET_KEY=your_django_secret_key

Make sure your settings.py uses os.getenv() for credentials.

🧱 Step 4: Run Migrations and Start Server

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

Your backend will run on http://localhost:8000

💻 Step 5: Set Up Frontend (React)

cd quiz-frontend
npm install
npm start

React app will run on http://localhost:3000

🔐 Authentication Info

JWT authentication is used.

Tokens are stored in local storage.

Role-based redirects are implemented.

📊 Analytics

Endpoint: /api/analytics/top-scores/

Shows top score for each quiz (Faculty only)

📤 Optional: Export Grades (CSV)

Endpoint: /api/export/grades/

Downloads CSV of all quiz submissions

📁 Important Files

.env

DB_NAME=quiz_db
DB_USER=postgres
DB_PASSWORD=your_password
SECRET_KEY=django_secret_key

.gitignore

.env
anvi/
node_modules/
__pycache__/
*.pyc
*.log

✅ Features Summary

Feature

Student

Faculty

Register/Login

✅

✅

View Quizzes

✅

✅

Create/Edit Quizzes

❌

✅

Take Quiz

✅

❌

Auto Grade MCQs

✅

✅

Manual Grade Answers

❌

✅

View Results

✅

✅

Export to CSV

❌

✅

View Top Scores

❌

✅

📸 Screenshots (Add your own)

Login Page

Faculty Dashboard

Student Quiz Interface

Results Page

🧠 Best Practices Used

Environment variables for secrets

Git ignored virtualenv & sensitive files

Modular component structure (React)

Secure Django views with role permissions

