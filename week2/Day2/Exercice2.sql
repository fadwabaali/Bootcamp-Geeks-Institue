SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;


SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120  -- Movies under 2 hours (120 minutes)
  AND rental_rate < 3.00
ORDER BY title ASC;  -- Sort alphabetically

SELECT * FROM customer

UPDATE customer
SET first_name = 'Fadwa', last_name = 'Aitbaali',email = 'fadwa@GMAIL.com',  
    address_id = 1, active = 1
WHERE customer_id = 1;

UPDATE address
SET address = '123 bernoussi, Casablanca', postal_code = '20000', city_id = 1
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 1);

-- Exercise 2: students table

UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name IN ('Marc', 'Lea') AND last_name = 'Benichou';

SELECT * FROM students

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';

-- Add the math_grade column to the students table:
ALTER TABLE students
ADD COLUMN math_grade INT;
-- Add 80 to the student which id is 1.

UPDATE students
SET math_grade = 80
WHERE id = 1;

-- Add 90 to the students which have ids of 2 or 4.

UPDATE students
SET math_grade = 90
WHERE id IN (2, 4);

--  Add 40 to the student with id 6
UPDATE students
SET math_grade = 40
WHERE id = 6;

-- Count how many students have a grade bigger than 83

SELECT COUNT(*) FROM students WHERE math_grade > 83;

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1980-10-03', 70);

SELECT SUM(math_grade) AS total_grades
FROM students;

-- Exercise 3 : Items and customers
CREATE TABLE purchases(
	id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  item_id INTEGER REFERENCES items(id),
  quantity INTEGER NOT NULL
);

INSERT INTO purchases (customer_id, item_id, quantity)
  VALUES (3, 3, 1), (5,2,10), (1,1,2);

SELECT * FROM purchases;

SELECT p.id, p.customer_id, p.item_id, p.quantity_purchased, c.first_name, c.last_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id;

SELECT p.id, p.item_id, p.quantity_purchased
FROM purchases p
WHERE p.customer_id = 5;

SELECT p.id, p.customer_id, p.quantity_purchased
FROM purchases p
WHERE p.item_id IN (SELECT id FROM items WHERE item_name IN ('Large Desk', 'Small Desk'));

SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;
