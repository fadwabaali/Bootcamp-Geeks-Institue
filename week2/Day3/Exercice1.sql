-- 🌟 Exercise 1: DVD Rental

-- Get a list of all the languages, from the language table.
SELECT * FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

SELECT title, description, language.name FROM film
    JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name

SELECT title, description, language.name 
FROM language
LEFT JOIN film ON film.language_id = language.language_id;


-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Barbie'),
('cindrella'),
('bella');

-- Create a new table called customer_review with the following columns : review_id, film_id, language_id, title, score, review_text, last_update. Add
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY, 
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,  
    language_id INT REFERENCES language(language_id) ON DELETE CASCADE,  
    title VARCHAR(255) NOT NULL,  
    score INT,  
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Automatically set to current timestamp
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Movie', 9, 'Loved every moment!'),
(2, 2, 'Great Family Movie', 8, 'Perfect for kids and adults.');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE id = 1;

-- Explain why the review is still in the customer_review table.

-- Since we defined ON DELETE CASCADE, all reviews linked to film_id = 1 are automatically deleted from customer_review.

-- 🌟 Exercise 2 : DVD Rental

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE new_film
SET language_id = 2 
WHERE name = 'barbie';

UPDATE new_film
SET language_id = 3 
WHERE name = 'cindrella';

DROP TABLE customer_review; 

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


SELECT f.title, f.rental_rate
FROM film f
INNER JOIN inventory i ON f.film_id = i.film_id
INNER JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT DISTINCT a.first_name, a.last_name, f.title
FROM film f
INNER JOIN film_actor f_a ON f.film_id = f_a.film_id
INNER JOIN actor a ON f_a.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe' 
AND f.description ILIKE '%sumo wrestler%';


SELECT title, rating, length
FROM film
WHERE rating = 'R' AND length < 60;


SELECT DISTINCT f.title
FROM customer c
INNER JOIN rental r ON c.customer_id = r.customer_id
INNER JOIN inventory i ON r.inventory_id = i.inventory_id
INNER JOIN film f ON i.film_id = f.film_id
INNER JOIN payment p ON c.customer_id = p.customer_id
WHERE r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND c.first_name = 'Matthew'
AND c.last_name = 'Mahan'  AND p.amount > 4.00;


SELECT f.film_id, f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;