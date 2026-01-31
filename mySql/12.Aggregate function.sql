-- Aggregate Functions
-- ----------------------

-- group by , count , min, max, avg, sum 
-- --------------------------------------
use Practice830pm;
select * from students;
select count(*) from students; -- gives count from students table


select count(student_company) from students; -- gives count of student_company from student table (NULL values not count)

select distinct student_company from students; -- gives name and null values of column student_company from student table


select count(distinct student_company) from students;-- distinct removes duplicates

select count(distinct student_company) as num_of_companies from students; -- distinct with alias

select count(distinct source_of_joining) from students;-- distinct removes duplicates

select count(*) from students where batch_date like '%-02-%'; -- count all with where and like

select count(*) from students where batch_date like '%5-02-%';-- count all with where and like


-- group by
-- ------------------
-- I want to know that how many people have joined my course ? got to know about me through
-- linkdin   6
-- insta   2
-- youtube 1 

select source_of_joining , count(*) from students group by source_of_joining; -- select count group by

select source_of_joining as joining_media , count(*) as num_of_students from students group by source_of_joining order by source_of_joining;
-- select alias joining media count all alias num_of_students from group by source of joining order by sourch of joining


-- this will not work because what ever written in group by should be the part of select like source_of_joining-------------
select location , count(*) from students group by source_of_joining; -- error

-- group by on 2 column 
-- want to know the Count the number of students for each unique combination of location and source of joining. 

select location, source_of_joining, count(*) from students group by source_of_joining, location order by location;
-- select count from group by order by 


-- how many people enroll for verious courses-------
select selected_course , count(*) from students group by selected_course order by selected_course;
-- select count all from group by orderby

select * from courses;

select s.selected_course, c.course_name , count(*) from students s, courses c 
where s.selected_course = c.course_id group by s.selected_course,  c.course_name  order by s.selected_course;

-- how many courses sold on dates count 
--     when         which           how many
select batch_date, selected_course , count(*) from students group by batch_date, selected_course;


select batch_date, count(*) from students group by batch_date;