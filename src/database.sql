CREATE DATABASE pern1toolkit;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE players(
    id uuid DEFAULT uuid_generate_v4(),
    first VARCHAR(255),
    last VARCHAR(255),
    age INTEGER,
    info TEXT,
    PRIMARY KEY (id)
);


