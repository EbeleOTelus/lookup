DROP TABLE IF EXISTS users; 


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password VARCHAR(255) NOT NULL
);
