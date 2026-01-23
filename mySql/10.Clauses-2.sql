use practice830pm;
select * from students;

-- limit
-- ------------------
select * from students limit 3; -- will return any/first 3 student records

select * from students limit 5; -- will return any/first 5 student records

select * from students limit 3 , 3 ;  -- will return first 3 student records after 3 records

select * from students limit 3 , 5 ; -- will return first 5 student records after 3 records

-- Que1. students name , company, enollment date , source of joining , according to enrollment date want first 3 student 

select student_fname,enrollment_date,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by enrollment_date; -- Order students by student_name (A → Z)

select student_fname,enrollment_date,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by enrollment_date limit 3; -- - Order students by student_name (A → Z) and limit 1st three records

-- Que.2 now we want last 3 students;

select student_fname,enrollment_date,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by  enrollment_date desc limit 3;

-- Que.3  want to know that from which source_of_joining last 5 candidates have who has more years of exp with different location

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by years_of_exp;

-- ------------------
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by years_of_exp desc; -- order by desc order

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
order by years_of_exp desc limit 5; -- order by desc order limit 5 first five records

select distinct location, student_fname,selected_course,years_of_exp, student_company, source_of_joining from students
order by years_of_exp desc limit 5; -- wrong 

select distinct location from students
order by years_of_exp desc limit 5; -- wrong 

select distinct source_of_joining, years_of_exp from students
order by years_of_exp desc limit 5; -- wrong 

select source_of_joining from students
order by years_of_exp; -- wrong 

-- order of using clauses 
-- nested or sub query 
-- order by clause should be the part of select list when using with other clauses
-- ---------------------------------------------------------------------------------------------------------

-- like
-- % 0 or more
-- _ exactly one
-- \ consider it as char not wild card char

select * from students;

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like 'sh%';

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like '%hu%';

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like '%ra%';

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like '%at';

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like '____';

-- % before and after = hu can appear anywhere
-- % before = any characters before at
-- % = any number of characters (including zero)

-- Meaning of LIKE '____'  :-  
--  Each _ (underscore) represents exactly one character.
-- '____' = 4 underscores = exactly 4 characters.

-- if we want to find any name with spelling roh_it --> ending with _it

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students where student_fname like '%\_it';


-- Quick summary table 🧠
-- Pattern	  Meaning
-- 'sh%'	starts with sh
-- '%hu%'	contains hu
-- '%at'	ends with at
-- '____'	exactly 4 characters

