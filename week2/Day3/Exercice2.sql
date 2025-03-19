-- Exercise 1 : DVD Rentals

-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
SELECT rental_id, inventory_id, customer_id, rental_date
FROM rental
WHERE return_date IS NULL;

-- => by checking return_date IS NULL.

-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS outstanding_rentals
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

-- Get a list of all the Action films with Joe Swank
SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action' AND a.first_name = 'Joe' AND a.last_name = 'Swank';

-- Exercise 2 – Happy Halloween
-- Find All Stores and Their Locations

SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- Calculate Total Viewing Time in Each Store
SELECT s.store_id, SUM(f.length) AS total_viewing_minutes
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- List All Customers in Cities Where Stores Exist
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city IN (SELECT city FROM city WHERE city_id IN 
    (SELECT city_id FROM address WHERE address_id IN 
        (SELECT address_id FROM store)));

-- List All Customers in Countries Where Stores Exist
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country IN (SELECT country FROM country WHERE country_id IN 
    (SELECT country_id FROM city WHERE city_id IN 
        (SELECT city_id FROM address WHERE address_id IN 
            (SELECT address_id FROM store))));

-- Create a 'Safe List' of Movies
SELECT SUM(f.length) AS safe_list_minutes
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
AND f.title NOT ILIKE '%beast%' 
AND f.title NOT ILIKE '%monster%' 
AND f.title NOT ILIKE '%ghost%' 
AND f.title NOT ILIKE '%dead%' 
AND f.title NOT ILIKE '%zombie%' 
AND f.title NOT ILIKE '%undead%' 
AND f.description NOT ILIKE '%beast%' 
AND f.description NOT ILIKE '%monster%' 
AND f.description NOT ILIKE '%ghost%' 
AND f.description NOT ILIKE '%dead%' 
AND f.description NOT ILIKE '%zombie%' 
AND f.description NOT ILIKE '%undead%';

-- Convert Viewing Time to Hours & Days
--General
SELECT 
    SUM(f.length) AS total_minutes,
    SUM(f.length) / 60 AS total_hours,
    SUM(f.length) / 1440 AS total_days
FROM film f;

--Safe
SELECT 
    SUM(f.length) AS safe_minutes,
    SUM(f.length) / 60 AS safe_hours,
    SUM(f.length) / 1440 AS safe_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
AND f.title NOT ILIKE '%beast%' 
AND f.title NOT ILIKE '%monster%' 
AND f.title NOT ILIKE '%ghost%' 
AND f.title NOT ILIKE '%dead%' 
AND f.title NOT ILIKE '%zombie%' 
AND f.title NOT ILIKE '%undead%' 
AND f.description NOT ILIKE '%beast%' 
AND f.description NOT ILIKE '%monster%' 
AND f.description NOT ILIKE '%ghost%' 
AND f.description NOT ILIKE '%dead%' 
AND f.description NOT ILIKE '%zombie%' 
AND f.description NOT ILIKE '%undead%';
