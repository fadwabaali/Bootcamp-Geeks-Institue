-- Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).
SELECT f.film_id, f.title, f.rating
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
AND r.rental_id IS NULL;

-- Create a new table which will represent a waiting list
CREATE TABLE waiting_list (
    wait_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES film(film_id) ON DELETE CASCADE,
    customer_id INT REFERENCES customer(customer_id) ON DELETE CASCADE,
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Retrieve the number of people waiting for each children’s
SELECT f.title, COUNT(wl.customer_id) AS waiting_count
FROM waiting_list wl
JOIN film f ON wl.film_id = f.film_id
GROUP BY f.title
ORDER BY waiting_count DESC;

INSERT INTO waiting_list (film_id, customer_id) VALUES
(1, 5), 
(2, 6), 
(1, 7);  

SELECT * FROM waiting_list;
SELECT f.title, COUNT(*) AS waiting_count 
FROM waiting_list wl
JOIN film f ON wl.film_id = f.film_id
GROUP BY f.title;
