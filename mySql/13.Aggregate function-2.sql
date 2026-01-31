-- Aggregate Functions
-- ----------------------

-- group by , count , min, max, avg, sum 
-- --------------------------------------

use practice830pm;
select * from students;
desc students;
show tables;


-- Count the number of students per course for each month and year.

-- group by year, month, seleted_course

select year(batch_date) as year, month(batch_date) as month, selected_course as courseID, count(*) from students 
group by year(batch_date), month(batch_date) , selected_course order by year(batch_date), month(batch_date) ;
-- select year alias, month alias, selected_course  alias count all from group by order by 

select year(batch_date) as year, monthname(batch_date) as month, selected_course as courseID, count(*) from students 
group by year(batch_date), monthname(batch_date) , selected_course order by year(batch_date), monthname(batch_date) ;
-- select year alias, month alias, selected_course  alias count all from group by order by


select * from students;
desc students;

-- MIN and MAX
-- ------------
select min(years_of_exp) from students;
select max(years_of_exp) from students;

select min(years_of_exp), student_fname from students;  -- wont work --dont know which name to project in case of tie

select student_fname from students order by years_of_exp limit 1;

select student_fname, years_of_exp from students order by years_of_exp;

SELECT student_fname FROM students ORDER BY years_of_exp LIMIT 1;
-- This orders all rows by years_of_exp ascending.
-- If there’s a tie (two students with the same minimum value), MySQL will pick one arbitrarily, unless you specify a secondary sort.
-- The row returned depends on how MySQL reads the data internally — there’s no guarantee which tied record comes first.
-- To make it deterministic, add another column in ORDER BY, for example:
-- SELECT student_fname FROM students ORDER BY years_of_exp, student_id LIMIT 1;

-- each source of joining I want to get max experience
select source_of_joining, max(years_of_exp) from students group by source_of_joining;

-- SUM 
-- ------

select source_of_joining, sum(years_of_exp) from students group by source_of_joining;

-- avg 
-- ----

select source_of_joining, avg(years_of_exp) from students group by source_of_joining;

select location, avg(years_of_exp) from students group by location;
