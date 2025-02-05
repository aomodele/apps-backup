Power Apps - Single-Screen Canvas App

Overview

The JoinerEnrolmentApp is a single-screen Canvas app developed using Power Apps. It facilitates the creation and management of new joiners' records in a Dataverse table named NewJoiners. The app provides an intuitive interface for entering and managing new joiner details.

Features

Dataverse Table Creation:

Table Name: NewJoiners

Fields:

FullName (Text): Full name of the new joiner.

Email (Text): Email address of the new joiner.

PhoneNumber (Text): Contact number of the new joiner.

Department (Choice): Dropdown selection of departments (HR, IT, Sales, Marketing, Operations).

StartDate (Date): Start date of the new joiner.

Status (Choice): Dropdown selection for status (Pending, Approved, Rejected).

Canvas App Development:

Name: JoinerEnrolmentApp

Components:
A welcome screen with text "New Joiner? Enter your details" and a button to show container with form
Input form for new joiner details.(Pop-up screen with form)

Submit button to save data to the Dataverse table.

Clear button to reset the form fields.

Confirmation message displayed on successful submission.(Pop-up screen notifying the submission was successful)

UI Considerations:

A professional and user-friendly layout.

Field validation:

Required fields.

Email format validation.(On the onsuccess property of the form, a configuration was made to to notify user "All fields are required")

Simple approval mechanism for admins to update the Status field in the Dataverse table.

React Landing Page

Overview

A React-based landing page was developed to display the JoinerEnrolmentApp in an iframe after login. The page simulates a login process and provides an embedded experience of the Power Apps application.

Features

React App:

Component: LoginPage.js

Includes a login form with fields for:

Email

Password

Login button: Simulates user login (no authentication logic).

Power Apps Embedding:

The JoinerEnrolmentApp is embedded using an iframe.

Iframe URL format:

https://apps.powerapps.com/play/ceb9f3dd-54d9-4ad0-9926-91a07636e761

Iframe dimensions: 80% width and height of the page.

Styling:

Minimalistic and responsive design using Tailwind CSS.

Bonus Features (Optional):

Persist iframe visibility using session state.

Enhanced UI/UX with additional styling and responsiveness.

Instructions for Deployment

Power Apps

Create the NewJoiners table in Dataverse with the specified fields.

Design the JoinerEnrolmentApp:

Add input fields corresponding to the Dataverse table columns.

Implement validation rules.

Add Submit and Clear buttons with the respective functionality.

React App

Install dependencies:

npm install

Start the development server:

npm start

Update the iframe URL with the Power Apps embed URL:

const iframeSrc = "https://apps.powerapps.com/play/ceb9f3dd-54d9-4ad0-9926-91a07636e761";

Access the app at http://localhost:3000.

Future Enhancements

Add authentication logic to the React login form.

Extend the Power Apps approval mechanism with automated notifications.

Implement role-based access control for admin features.

Acknowledgments

Power Apps Documentation for guidance on Dataverse integration.

React Documentation for best practices in single-page application development.

Tailwind CSS for quick and elegant styling.