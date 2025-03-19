-- Create users table (Bonus)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Create product_orders table (Each order belongs to a user)
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create items table (Each item belongs to one order)
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE,
    product_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0)
);

CREATE FUNCTION get_order_total(order_id_param INT) 
RETURNS DECIMAL(10,2) AS $$
DECLARE 
    total_price DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(quantity * price), 0)
    INTO total_price
    FROM items
    WHERE order_id = order_id_param;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;


CREATE FUNCTION get_user_order_total(user_id_param INT, order_id_param INT) 
RETURNS DECIMAL(10,2) AS $$
DECLARE 
    total_price DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(i.quantity * i.price), 0)
    INTO total_price
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.user_id = user_id_param AND po.order_id = order_id_param;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

-- Insert users
INSERT INTO users (first_name, last_name, email) 
VALUES ('Alice', 'Smith', 'alice@example.com'),
       ('Bob', 'Johnson', 'bob@example.com');

-- Insert orders
INSERT INTO product_orders (user_id) VALUES (1), (2);

-- Insert items for orders
INSERT INTO items (order_id, product_name, quantity, price) 
VALUES (1, 'Laptop', 1, 1200.00),
       (1, 'Mouse', 2, 25.50),
       (2, 'Keyboard', 1, 45.99);

SELECT get_order_total(1);

SELECT get_user_order_total(1, 1);
