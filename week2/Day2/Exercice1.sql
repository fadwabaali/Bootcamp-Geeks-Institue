-- 🌟 Exercise 1 : Items and customers

-- All items, ordered by price (lowest to highest)
SELECT * FROM items 
ORDER BY price ASC;

-- tems with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * FROM items 
WHERE price >= 80 
ORDER BY price DESC;

-- The first 3 customers in alphabetical
SELECT first_name, last_name 
FROM customers 
ORDER BY first_name ASC 
LIMIT 3;

-- All last names (no other columns!), in reverse

SELECT last_name 
FROM customers 
ORDER BY last_name DESC;

-- 🌟 Exercise 2 : dvdrental database

SELECT * FROM customer

-- Display first_name and last_name as "full_name"
SELECT CONCAT(first_name, ' ', last_name) AS full_name 
FROM customer;

-- Select all unique create_date values from the customer table
SELECT DISTINCT create_date 
FROM customer;

--  Get all customer details in descending order by first_name
SELECT * 
FROM customer 
ORDER BY first_name DESC;

-- Get film ID, title, description, year of release, and rental rate ordered by rental rate (ascending)
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

--  Get the address and phone number of customers living in the Texas district
SELECT address, phone 
FROM address
WHERE district = 'Texas';

--  Retrieve all movie details where the movie ID is either 15 or 150
SELECT * 
FROM film
WHERE film_id IN (15, 150);

-- Check if your favorite movie exists in the database
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Intersteral';

-- Get all movies starting with the first two letters of your favorite movie

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'In%';

-- Find the 10 cheapest movies

SELECT film_id, title, description, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- Find the next 10 cheapest movies

SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

-- Bonus: Find the next 10 cheapest movies without using LIMIT

SELECT film_id, title, rental_rate
FROM (
    SELECT film_id, title, rental_rate, 
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num
    FROM film
) AS ranked_films
WHERE row_num BETWEEN 11 AND 20;

-- Join the data in the customers table

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;

-- Get all movies that are not in invento

SELECT film_id, title
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- Find which city is in which country

SELECT city, country
FROM city
JOIN country ON city.country_id = country.country_id;

-- Bonus: Get customer ID, names, amount, and payment date ordered by the ID of the staff member who sold the DVD

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id ASC;
