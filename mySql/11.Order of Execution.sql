-- ORDER OF EXECUTION
-- ------------------------------------------------
-- SQL executes in the following logical order:

-- 1. FROM
-- 2. WHERE (if present)
-- 3. GROUP BY (if present)
-- 4. HAVING (if present)
-- 5. SELECT
-- 6. DISTINCT (if present)
-- 7. ORDER BY
-- 8. LIMIT (if present)

-- ----------------------------------------------
use practice830pm;

SELECT DISTINCT source_of_joining from students ORDER BY enrollment_date;  -- why
-- we are trying to sort by a column (enrollment_date) that is NOT in the SELECT list.
-- When using DISTINCT, you can’t ORDER BY a column that isn’t uniquely defined for the selected rows.

SELECT source_of_joining from students;   -- order of execusion

-- FROM (loading table)

-- SELECT (projecting source_of_joining)



SELECT source_of_joining,enrollment_date from students;   -- order of execusion

-- FROM (loading table)

-- SELECT (projecting source_of_joining,enrollment_date)

-- -------------------------------------------------------------------------------------------
-- lets look into below query step by step 

SELECT source_of_joining, enrollment_date FROM students order by enrollment_date;

-- FROM (loading table)
select * from students;

-- SELECT (projecting source_of_joining, enrollment_date)
SELECT source_of_joining, enrollment_date FROM students;

-- ORDER BY  (based on enrollment_date it will order by)
 SELECT source_of_joining, enrollment_date FROM students order by enrollment_date;

-- -----------------------------------------------------------------------

SELECT source_of_joining FROM students order by enrollment_date;

-- FROM (loading table)
select * from students;

-- SELECT (projecting source_of_joining, enrollment_date)
SELECT source_of_joining, enrollment_date FROM students; -- INTERNALLY it will work like this because order by clause want enrollment date


-- ORDER BY  (based on enrollment_date it will order by)
 SELECT source_of_joining, enrollment_date FROM students order by enrollment_date;
 
 SELECT source_of_joining FROM students order by enrollment_date;
 
  -- ------------------------------------------------------------------------------------------------
 
 SELECT DISTINCT source_of_joining  FROM students order by enrollment_date;  -- this wont work
 
-- Why it doesn’t work ❌

-- DISTINCT returns unique source_of_joining values

-- enrollment_date is not part of the SELECT list

-- For one source_of_joining, there can be many enrollment dates

-- So the database asks: “Which enrollment_date should I use to sort this distinct value?”
-- When using DISTINCT, every column in ORDER BY must be present in the SELECT list OR be derived from it using an aggregate function.
 
 -- FROM (loading table)
select * from students;
 
 -- SELECT (projecting source_of_joining, enrollment_date)
SELECT source_of_joining, enrollment_date FROM students; -- INTERNALLY it will work like this because order by clause want enrollment date

-- DISTINCT (Duplicates on source_of_joining are removed)
 select DISTINCT source_of_joining from students; 
-- SQL can internally keep extra columns only up to the DISTINCT stage.
-- Once DISTINCT is applied, the rowset is reduced to only the DISTINCT columns.
-- select DISTINCT source_of_joining from students; 
-- select DISTINCT source_of_joining, enrollment_date from students; 

-- ORDER BY  (based on enrollment_date it will try order but enrollment date column is missing)
 SELECT source_of_joining FROM students order by enrollment_date; 
-- ORDER BY tries to sort by enrollment_date
-- ORDER BY (But enrollment_date is not present now)
-- ERROR: enrollment_date is unknown in ORDER BY
-- ✔ This is why MySQL does NOT allow this query.
-- ------------------------------------------------------------------------------------------------------------------------------
select DISTINCT source_of_joining, enrollment_date from students order by enrollment_date; -- this will work but may not the required output

 