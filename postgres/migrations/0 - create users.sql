--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Debian 12.8-1.pgdg100+1)
-- Dumped by pg_dump version 12.8 (Debian 12.8-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: auth; Owner: -
--

CREATE SCHEMA auth AUTHORIZATION postgres;


CREATE TABLE auth.users (
    id serial PRIMARY KEY,
    first_name character varying(256) NOT NULL,
    last_name character varying(256) NOT NULL,
    email character varying(512) NOT NULL UNIQUE,
    encrypted_password character varying(512) NOT NULL UNIQUE
);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: -
--

COPY auth.users (id, first_name, last_name, email, encrypted_password) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

