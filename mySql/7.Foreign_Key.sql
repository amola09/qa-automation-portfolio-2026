use practice830pm;
show tables;

-- Topic: FOREIGN KEY and ON DELETE Options in MySQL

-- 1.What is a FOREIGN KEY?

-- A foreign key is a column (or group of columns) in one table that refers to a primary key in another table.
-- It creates a relationship between two tables and ensures referential integrity — meaning, 
-- data in the related tables remain consistent.

-- courses - parent table - primary key -course_id
-- students - child table - foreign key - course_id (you can keep any name to the column)

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



 


