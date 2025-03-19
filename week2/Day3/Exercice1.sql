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