-- foreign key
-- 
-- parent --- courses --- holds PK
-- child --- students ---holds FY

-- the foreign key constraint is used to prevent actions that would
-- destroy links between two tables ..

-- A foreign key is a field in one table that refers to the primary
-- key in another table.

-- selected_course is a foreign key in students table which refers
-- to course_id (primary key) in courses table.

-- the table with the foreign key is called the child table,
-- the table with primary key is called the parent or referenced
-- table.


-- constraints are used to limit the type of data that can go into a table.

-- This ensures the accuracy and reliability of the data is maintaineed.

-- If there is any violation then the action is aborted.


use practice830pm;
show tables;
create table courses(
course_id int primary key auto_increment,
course_name varchar(30));

INSERT INTO courses (course_name) VALUES
('Computer Science'),
('Information Technology'),
('Data Science'),
('Artificial Intelligence'),
('Cyber Security'),
('Software Engineering'),
('Business Administration'),
('Mechanical Engineering'),
('Electrical Engineering'),
('Civil Engineering');

-- one way
create table students(
student_id int primary key auto_increment,
student_name varchar(30),
course_id int references courses(course_id));

drop table students;
-- another way
create table students(
student_id int primary key auto_increment,
student_name varchar(30),
course_id int,
foreign key(course_id) references courses(course_id));

INSERT INTO students (student_name, course_id) VALUES
('Aarav Sharma', 1),
('Neha Patel', 2),
('Rahul Verma', 1),
('Priya Singh', 3),
('Karan Mehta', 4),
('Ananya Gupta', 2),
('Vikram Rao', 5),
('Sneha Iyer', 3),
('Rohit Malhotra', 4),
('Pooja Nair', 5);

select * from courses;

select * from students;


SET SQL_SAFE_UPDATES = 0;
delete from students where course_id=1;
insert into courses(course_id, course_name) values(1, 'python');  -- --> 1062 Duplicate entry for courses

insert into students(student_name,course_id) values('raj', 1),('geet',1);
delete from courses where course_id=1; -- >can not delete update a parent row forign key constraint fails

desc students;
desc courses;

show tables;

insert into students values(10, 'tanish', 6); -- >duplicate entry 10 for key student primary

-- -----------------------------------------------------------------------


-- | Option                    | Description                                                                    | Example Behavior                                      |
-- | ------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
-- | CASCADE                   | Automatically deletes rows in child table when the parent row is deleted.      | Delete a course → delete all students in that course. |
-- | SET NULL                  | Sets the foreign key column to NULL in child table when parent row is deleted. | Delete a course → students' `course_id` becomes NULL. |
-- | RESTRICT                  | Prevents deletion of parent row if related rows exist in child table.          | Delete a course → fails if any student is enrolled.   |
-- | NO ACTION (default)       | Same as RESTRICT (in MySQL). Prevents delete if child records exist.           | Delete a course → error if dependent rows exist.      |


-- -----on delete cascade---------------------------------

drop table students;

show tables;
create table students_c(
student_id int primary key auto_increment,
student_name varchar(30),
course_id int,
foreign key(course_id) references courses(course_id) on delete cascade);

select * from students_c;
select * from courses;
-- insert into courses values(1,'python');
INSERT INTO students_c (student_name, course_id) VALUES
('Aarav Sharma', 1),
('Neha Patel', 2),
('Rahul Verma', 1),
('Priya Singh', 3),
('Karan Mehta', 4),
('Ananya Gupta', 2);

delete from courses where course_id=1; -- parent table

insert into students_c(student_name,course_id) values('raj', 11),
('geet',12); -- can not add or update row a forigney constraints fails

create table students_sn(
student_id int primary key auto_increment,
student_name varchar(30),
course_id int,
foreign key(course_id) references courses(course_id) on delete set null);

drop table students_sn;

show tables;
select * from students_sn;  -- child
select * from courses;  -- parent
select * from students_c; -- child

insert into students_sn(student_name,course_id) values('raj', 1),
('kiran',2),
('pooja',2),
('rakesh',3),
('geet',1);  -- foreign key constraint fails

delete from courses where course_id=1;
