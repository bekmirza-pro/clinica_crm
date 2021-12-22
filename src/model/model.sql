CREATE DATABASE crm_clinica;

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name varchar(100) not null unique,
    email varchar(150) not null,
    password varchar(50) not null,
    is_admin boolean DEFAULT false
);

CREATE TABLE clinics(
    clinic_id serial PRIMARY KEY,
    clinica_name varchar(100) not null unique
);

CREATE TABLE disease_trends(
    dis_tend_id serial PRIMARY KEY,
    dis_tend_name varchar(100) not null unique,
    clinica_id int REFERENCES clinics(clinic_id)
);

CREATE TABLE ocherds(
    ocherd_id serial PRIMARY KEY,
    users_name varchar(100) not null unique,
    dise_tend_id int REFERENCES disease_trends(dis_tend_id)
);