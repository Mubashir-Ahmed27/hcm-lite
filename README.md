# HCM Lite

An empty-by-default, role-based Human Capital Management system built for the Saylani hackathon. It supports Admin, HR, and Employee roles with server-enforced data scoping.

## Run locally

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and a strong `JWT_SECRET`.
2. Run `npm install`, then `npm run dev`.
3. Open `http://localhost:5173`; the first page creates the only initial Admin and company.

## Commands

`npm run typecheck` · `npm test` · `npm run build`

## Deployment

Deploy the API using `render.yaml`, set the server environment variables, and deploy `client` on Vercel with `VITE_API_URL` set to the Render API URL. Use MongoDB Atlas M0 for `MONGODB_URI`.

## Demo flow

Create the Admin, add a department and employee, log in as the employee with the temporary password, change it, check in/out, request leave, then return as HR/Admin to manage operations and generate payroll.
