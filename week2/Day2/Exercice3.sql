SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC, last_name ASC
LIMIT 2 OFFSET (SELECT COUNT(*) FROM customers) - 2;

DELETE FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott');

SELECT * FROM customers
WHERE first_name = 'Scott';

SELECT p.*, c.first_name, c.last_name
FROM purchases AS p
LEFT JOIN customers AS c ON p.customer_id = c.id;

SELECT p.*, c.first_name, c.last_name
FROM purchases AS p
INNER JOIN customers AS c ON p.customer_id = c.id
WHERE c.first_name != 'Scott';
SELECT * FROM customers;
SELECT * FROM purchases;
