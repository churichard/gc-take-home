# Running locally

## Start frontend

1. `cd frontend`
2. Copy `.env-example` into `.env`.
3. Install dependencies: `yarn`
4. Run server: `yarn start`

## Start backend

1. `cd backend`
2. Copy `.env-example` into `.env` and update `DATABASE_URL` to point to your local database.
3. Install dependencies: `npm install`
4. Run server: `npm start`

## Start postgres database

1. Start your postgres service: `sudo service postgresql start`
2. In `backend`, run `npx prisma migrate dev` to run migrations.
3. If the data has not been seeded already, you can seed it by running `npx prisma db seed`.

The app should be running at https://localhost:3000.
