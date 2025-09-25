Secure Programming Review - Assignment 3 (Code Alpha Training)

This project is part of my third task during Code Alpha Training, where I conducted a security-focused code review of a simple JavaScript login and commenting system.

Project :

Basic login function with pre-programmed credentials

Post comment function injects input directly into the DOM

⚠️ Issues Identified

Storing pre-programmed passwords and plain text

Vulnerable to XSS (cross-site scripting) due to unvalidated input

Static Analysis Results:

Errors: 2

Warnings: 0

Issues: The login and post comment functions are defined but not used

✅ Recommendations

Use encrypted passwords (e.g., bcrypt)

Avoid entering pre-programmed credentials (use environment variables instead)

Perform and invalidate user input before rendering

🎥 Demo

The attached video demonstrates the project's results in action.
