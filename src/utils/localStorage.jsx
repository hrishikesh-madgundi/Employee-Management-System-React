const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Build Login Page",
          "description": "Create and style the login page for the app.",
          "date": "2025-04-20",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Setup GitHub Repo",
          "description": "Initialize project repo and invite team.",
          "date": "2025-04-10",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Write Unit Tests",
          "description": "Add test cases for API routes.",
          "date": "2025-04-15",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design Landing Page",
          "description": "Create mockup designs for landing screen.",
          "date": "2025-04-20",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix CSS bugs",
          "description": "Resolve layout shifting issue on mobile.",
          "date": "2025-04-18",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Database Optimization",
          "description": "Optimize MongoDB queries for dashboard.",
          "date": "2025-04-15",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create User Schema",
          "description": "Define user schema using Mongoose.",
          "date": "2025-04-12",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Build API for Notes",
          "description": "Implement create/read/update/delete for notes.",
          "date": "2025-04-20",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Integrate Redux",
          "description": "Use Redux to manage state across components.",
          "date": "2025-04-14",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Fix Token Expiry Issue",
          "description": "Resolve JWT token auto-expiry bug.",
          "date": "2025-04-16",
          "category": "Security"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Setup CI/CD",
          "description": "Configure GitHub Actions for deployment.",
          "date": "2025-04-20",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create Notification System",
          "description": "Implement push notification service.",
          "date": "2025-04-11",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Bug Fix: Logout Issue",
          "description": "Fix session clearing bug on logout.",
          "date": "2025-04-16",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Write API Docs",
          "description": "Document all API endpoints.",
          "date": "2025-04-12",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Add Dark Mode",
          "description": "Add theme toggle and save user preference.",
          "date": "2025-04-20",
          "category": "Frontend"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Build Dashboard UI",
          "description": "Create dashboard layout with charts.",
          "date": "2025-04-20",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Data Cleanup Script",
          "description": "Write script to clean old records.",
          "date": "2025-04-15",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Test Payment Integration",
          "description": "Test Razorpay integration with sandbox.",
          "date": "2025-04-13",
          "category": "Testing"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  } 

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
  
    console.log(employees, admin)
} 
  