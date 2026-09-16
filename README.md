# Thundey Track

Thundey Track is a responsive job application dashboard built to practice modern React development and REST API integration. It gives job seekers one place to review applications, update progress, and keep track of their next steps.

## Live demo

Try the deployed application at [thundey-tracker.vercel.app](https://thundey-tracker.vercel.app/).

## Features

- Fetches sample applications from a REST API
- Add applications with a reusable form
- Edit and delete application records
- Search by company or role
- Filter by application status
- Loading, error, and empty states
- Responsive dashboard layout with mobile navigation
- Accessible controls and Lucide React icons

## Built with

- React
- Vite
- Tailwind CSS
- Lucide React
- JSONPlaceholder REST API

## Getting started


## REST API practice

The project currently uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a practice API:

- `GET /posts?_limit=6` loads applications
- `POST /posts` creates an application
- `PATCH /posts/:id` updates an application
- `DELETE /posts/:id` deletes an application

JSONPlaceholder simulates write requests, so changes are visible during the current session but are not permanently saved after a refresh.

## Project structure

```text
src/
├── api/
│   └── applications.js       # REST API requests
├── components/
│   ├── ApplicationForm.jsx   # Add and edit form
│   ├── ApplicationsPanel.jsx # Search, filters, and cards
│   ├── DashboardHeader.jsx
│   ├── Sidebar.jsx
│   └── StatsCards.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## What I’m learning

This project is a practical frontend exercise in component design, React state, controlled forms, asynchronous requests, CRUD operations, responsive layouts, and handling real-world API states.
