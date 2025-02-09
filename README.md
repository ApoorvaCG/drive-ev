# EV Listings Web App

A **Next.js** web app for browsing and viewing available Electric Vehicles (EVs) with features like **search, filter, sorting, and pagination**. 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Features

- **EV Listings Page**
  - Fetches EV data from a mock JSON file
  - Displays EVs in a grid layout
  - Supports filtering, sorting, and pagination
  - Maintains state using URL query parameters for better UX
- **Search Functionality**
  - Users can search for EVs by brand name and model name
- **Filter & Sorting**
  - Filter by vehicle condition: New or Used
  - Sort by price: Low to High, High to Low
- **Pagination**
  - Dynamically updates the displayed EVs based on the selected page
- **Filtering state persistance**
  - Navigation maintains query parameters for back navigation
  - Helps in sharable links, and the selected filter/sort/page will be retained. 
- **Clear Filters Button**
  - Resets all filters, sorting, and pagination
- **Docker Support**
  - Includes a `Dockerfile` for easy containerized setup and run the project

**Project Setup with Docker Image**

Clone or fork the repository to get started
```bash
docker run -it -p 3000:3000 ghcr.io/apoorvacg/drive-ev:latest
```

**Project Setup with dependencies**

#### 1.Install dependencies

```bash
npm install
# or
yarn install
```

#### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

**Project Setup with Build Docker Container**

#### 1. Build the Image
```bash
docker build -t drive-ev
```

#### 2. Run the Container
```bash
docker run -p 3000:3000 drive-ev
```

- The app will be available at `http://localhost:3000`

## Running Tests

- The project uses **Jest** and **React Testing Library** for unit tests.

### Run Tests

```bash
npm test
# or
yarn test
```

## Future Enhancements

- **Theming** for Dark Mode
- **Integration testing** on filtering, sorting, searching and pagination 
- **CI Pipeline Integration** for e2e tests, typesafe, linting, build tasks
- **Vitual scrolling** of EV list for better UX
- **SEO-Friendly Routing** to have human readable slugs in URL

---
