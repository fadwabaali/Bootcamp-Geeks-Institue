-- -- create items table
CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	price INTEGER NOT NULL
)

-- -- create customers table
CREATE TABLE customers (
	id Serial  PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR (100) NOT NULLSELECT * FROM items;SELECT * FROM items;
)
-- -- insert data
INSERT INTO items(name,price)
VALUES ('Small Desk',100),
	   ('Large desk',300),
	   ('Fan',80);

-- -- insert data
INSERT INTO customers(first_name,last_name)
VALUES ('Greg','Jones'),
       ('Sandra','Jones'),
	   ('Scott','Scott'),
	   ('Trevor','Green'),
	   ('Melanie','Johnson');

-- select all
SELECT * FROM items;
SELECT * FROM customers;

-- All the items with a price above 80 (80 not included).
SELECT * FROM items
WHERE price > 80

-- All the items with a price below 300. (300 included)
SELECT * FROM items
WHERE price <= 300

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers
WHERE last_name = 'Smith' 
-- no one have this last name!!!

-- All customers whose last name is ‘Jones’
SELECT * FROM customers
WHERE last_name = 'Jones'

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers
WHERE NOT first_name = 'Scott'