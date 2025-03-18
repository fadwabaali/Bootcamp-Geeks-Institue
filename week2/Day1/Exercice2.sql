-- Create a new table students
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE
);

-- Insert multiple records
INSERT INTO students (first_name, last_name, birth_date) 
VALUES 
    ('Marc', 'Benichou', '1998-11-02'),
    ('Yoan', 'Cohen', '2010-12-03'),
    ('Lea', 'Benichou', '1987-07-27'),
    ('Amelia', 'Dux', '1996-04-07'),
    ('David', 'Grez', '2003-06-14'),
    ('Omer', 'Simpson', '1980-10-03');

-- Insert your own data
INSERT INTO students (first_name, last_name, birth_date) 
VALUES ('Fadwa', 'Aitbaali', '2006-06-09');


SELECT * FROM students;
SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students WHERE id = 2;

SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT first_name, last_name FROM students 
WHERE first_name ILIKE '%a%';  

SELECT first_name, last_name FROM students 
WHERE first_name ILIKE 'a%';

SELECT first_name, last_name FROM students 
WHERE first_name ILIKE '%a';

SELECT first_name, last_name FROM students 
WHERE first_name ILIKE '%a_';

SELECT first_name, last_name FROM students 
WHERE id IN (1, 3);

SELECT * FROM students 
WHERE birth_date >= '2000-01-01';

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY last_name 
LIMIT 4;

-- Fetch the details of the youngest student.
SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY birth_date DESC 
LIMIT 1;

-- Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date 
FROM students 
OFFSET 2 
LIMIT 3;
