# Ocean

A full-stack web application enabling company-wide documentation management for 4+ cross-functional teams including leadership, recruiting, engineering, and partnerships. Tech Stack - TypeScript, React, Next.js, Prisma, and Convex. [Live Link](https://bit.ly/ocean-notes)<br/>
<br/>

<img src="./public/ocean.jpg" alt="genius-logo" width="300"><br/>

### Functionality
- Notion-style editor 📝 
- File upload, deletion, replacement 📄
- Infinite children documents 🌲
- Trash can & soft delete 🗑️

### Technologies Used

- TypeScript
- React
- Next.js
- Prisma
- Convex 
- EdgeStore 

### How to Run Locally

Step 1 - Clone the repository in a new directory:
```bash
git clone git@github.com:ZohaibManzoor00/Ocean.git
```

Step 2 - Create .env file in root directory with the following info:
```bash
# Clerk with Next.js. Docs (clerk.com/docs/quickstarts/nextjs)
NEXT_PUBLIC_CONVEX_URL=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Step 3 - Install Dependencies
```bash
npm i 
```

Step 4 - Setup Convex
```bash
npx convex dev
```

Step 5 - Run app locally
```bash
npm run dev
```
