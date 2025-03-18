SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- Q1: 0

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab 
    WHERE id = 5
)

-- Q2: 3

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab
)

-- Q3: 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id 
    FROM SecondTab 
    WHERE id IS NOT NULL
)

-- Q4: 3