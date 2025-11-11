# TinyUrlUI

This is a full-stack **Tiny URL** application built with:
- **Frontend:** Angular 20
- **Backend:** ASP.NET Core Web API
- **Database:** Azure SQL Database
- **Hosting:** Azure App Service (Frontend + Backend)
- **CI/CD:** GitHub Actions
- **Infrastructure:** Azure Resources (Web App, Azure SQL)

- ---

## Features

### Frontend (Angular)
- Submit a long URL to generate a short link.
- List public short URLs.
- Can Mark a URL as "Private" while submitting.
- Show total clicks per URL.
- Search and delete short URLs.
- Copy short URL to clipboard.

- ## Project Setup Instructions

1. Clone the repository:
   ```bash
   git clone (https://github.com/MuthuRagavanT/TinyUrl-UI.git)

2. npm install
3. ng serve
4. Once the server is running, open your browser and navigate to `http://localhost:4200/`.

- ## Deployment Details

- **Azure Service:** Azure Web App
- **URL:** https://tiny-url-ui.azurewebsites.net

- ## CI/CD Configuration

- Configured using GitHub Actions.
- Every push to main triggers: Angular build & deploy to tiny-url-ui.

- ## Author

- **Name:** Muthu Ragavan T
- **Email:** ragavant517@gmail.com
- **Project Title:** Tiny URL
