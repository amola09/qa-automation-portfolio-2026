-- Logical operatores
-- ------------------

use practice830pm;
select * from students;
desc students;

-- get student from bangalore 
select * from students where location = 'bangalore';
select * from students where location = 'Mumbai';

-- to get people who are not from bangalore (!=)
select * from students where location != 'bangalore';
select * from students where location != 'Mumbai';

-- get all courses which has the word 'data'
select * from courses;
select * from courses where course_name like '%data%';

-- get all courses which do not have the word 'data'
select * from courses where course_name not like '%data%';
-- -------------------------------------------------------------------

-- all students from bangalore who joined through linkedin and have less than 8 years of experience(and)
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where location = 'bangalore' and years_of_exp < 8 and source_of_joining = 'youtube';

-- I want all people who do not fall between 8 to 12 years of experience.
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where years_of_exp < 8  and years_of_exp > 12; -- wrong no output

-- if both condn true then only true otherwine false
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where years_of_exp < 8  or years_of_exp > 12; 

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where years_of_exp not between 8 and 12;


-- -----------------------------------------------------------------------------

-- want student between 8 1nd 12
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where years_of_exp between 8 and 12;

-- get list of students who are working for flipkart, infosys or microsoft
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where student_company = 'flipkart' or student_company = 'infosys' or student_company = 'microsoft';

select * from students;

select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where student_company in ('flipkart', 'infosys', 'microsoft');

-- get list of students who are not working for flipkart, infosys or microsoft
select student_fname,selected_course,years_of_exp, student_company, source_of_joining, location from students
where student_company not in ('flipkart', 'infosys', 'microsoft');

-- CASE 
----------------

-- if a course is more than 4 months we categorize it as masters program else it is a diploma

-- time > 4 masters 
--      < 4 deploma

select * from courses;

alter table courses add column course_duration int;

update courses set course_duration = 4 where course_name = 'python';

update courses set course_duration = 6 where course_name = 'mysql'; 
update courses set course_duration = 3 where course_name = 'javascript'; 
update courses set course_duration = 9 where course_name = 'aiml'; 
update courses set course_duration = 10 where course_name = 'data science'; 
update courses set course_duration = 8 where course_name = 'full stack'; 
update courses set course_duration = 7 where course_name = 'automation testing'; 


-- if a course is more than 4 months we categorize it as masters program else it is a diploma

-- case  --- when-then --- when -then--- else --- end as new column name

select course_id, course_name,course_duration, 
case
when course_duration > 4 then 'masters'
else 'diploma'
end as course_type
from courses;

-- people working for flipkart, infosys or microsoft we want to say product based and all others service based.

select student_fname,selected_course,student_company, 
case
when student_company in ('flipkart', 'infosys', 'microsoft') then 'product base'
else 'service base'
end as company_type
from students;


-- multiple logics
select student_fname,selected_course,student_company, 
case
when student_company in ('flipkart', 'infosys', 'microsoft') then 'product base'
when student_company is null then 'company not specified'
else 'service base'
end as company_type
from students;


