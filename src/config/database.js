import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


// export const pool = new Pool({
//     user: "django",
//     password: "password1",
//     host: "localhost",
//     port: 5432,
//     database: "pern1toolkit"
// });
