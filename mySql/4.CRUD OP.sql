-- ------------------
-- CRUD Operations
-- ----------------------

-- create - insert statements
-- read - select statements
-- update - update statements
-- delete - delete statements


use practice830pm;

CREATE TABLE employee_CRUD_OP(
id int PRIMARY Key auto_increment,
firstname varchar(20) NOT NULL,
middlename varchar(20),
lastname varchar(20) NOT NULL,
age int NOT NULL,
salary int NOT NULL,
location varchar(20) NOT NULL DEFAULT 'bangalore'
);


desc employee_CRUD_OP;

delete from employee_CRUD_OP;

select * from employee_CRUD_OP;

-- truncate and delete diffrence

-- truncate deletes table and re create it
-- restart auto increment 
-- fast

-- delete table deletes record one by on
-- slow
-- remenbers last incerment in auto increment

INSERT INTO employee_CRUD_OP
(firstname, middlename, lastname, age, salary, location)
VALUES
('Rahul',  'Kumar',  'Sharma', 28, 45000, 'Bangalore'),
('Anita',  NULL,     'Verma',  32, 55000, 'Mumbai'),
('Suresh', 'R',      'Naik',   40, 72000, 'Chennai'),
('Priya',  'A',      'Singh',  26, 38000, 'Delhi'),
('Amit',   NULL,     'Patel',  35, 60000, 'Ahmedabad'),
('Neha',   'M',      'Joshi',  29, 48000, 'Pune'),
('Vikram', NULL,     'Rao',    42, 85000, 'Hyderabad'),
('Kavya',  'S',      'Iyer',   31, 52000, 'Bangalore');


delete from employee_CRUD_OP; -- delete wont work because of safe mode is on

SET SQL_SAFE_UPDATES = 0; -- Safe mode off

SET SQL_SAFE_UPDATES = 1; -- Safe mode on
delete from employee_CRUD_OP;

INSERT INTO employee_CRUD_OP
(firstname, middlename, lastname, age, salary, location)
VALUES
('Rahul',  'Kumar',  'Sharma', 28, 45000, 'Bangalore'),
('Anita',  NULL,     'Verma',  32, 55000, 'Mumbai'),
('Suresh', 'R',      'Naik',   40, 72000, 'Chennai'),
('Priya',  'A',      'Singh',  26, 38000, 'Delhi'),
('Amit',   NULL,     'Patel',  35, 60000, 'Ahmedabad'),
('Neha',   'M',      'Joshi',  29, 48000, 'Pune'),
('Vikram', NULL,     'Rao',    42, 85000, 'Hyderabad'),
('Kavya',  'S',      'Iyer',   31, 52000, 'Bangalore');

-- truncate table
truncate table employee_CRUD_OP;
select * from employee_CRUD_OP;

-- crud operation 

select * from employee_CRUD_OP;

INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (11, 'Rahul', NULL, 'Sharma', 30, 60000, 'Bangalore');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (12, 'Sneha', 'K.', 'Verma', 28, 55000, 'Mumbai');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (13, 'Amit', NULL, 'Patel', 35, 75000, 'Delhi');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (14, 'Neha', 'R.', 'Mishra', 42, 68000, 'Bangalore');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (15, 'Vikas', 'L.', 'Gupta', 29, 62000, 'Hyderabad');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (16, 'Divya', NULL, 'Nair', 27, 53000, 'Chennai');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (17, 'Rohit', 'A.', 'Kumar', 33, 70000, 'Pune');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (18, 'Priya', NULL, 'Singh', 41, 64000, 'Kolkata');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (19, 'Ankit', 'B.', 'Yadav', 34, 72000, 'Bangalore');
INSERT INTO employee_CRUD_OP (id, firstname, middlename, lastname, age, salary, location) VALUES (20, 'Meera', NULL, 'Desai', 26, 50000, 'Ahmedabad');

-- 1. select command
-- --------

-- selecting all columns
select * from employee_CRUD_OP;

-- selecting specific columns
select firstname, lastname, salary from employee_CRUD_OP;

-- alias as
select firstname as Name , lastname as Surname , salary as Salary from employee_CRUD_OP;

-- select by applying a where clause (filter condition)
select firstname as Name , lastname as Surname , salary as Salary,age from employee_CRUD_OP where age > 30; 
select firstname as Name , lastname as Surname , salary as Salary,age from employee_CRUD_OP where age >= 30; 
select firstname as Name , lastname as Surname , salary as Salary,age from employee_CRUD_OP where age >= 30 and age <=40; 

select * from employee_CRUD_OP where middlename = null; -- wrong
select * from employee_CRUD_OP where middlename = Null; -- wrong
select * from employee_CRUD_OP where middlename = 'Null'; -- wrong
select * from employee_CRUD_OP where middlename = NULL; -- wrong

select * from employee_CRUD_OP where middlename is null;
select * from employee_CRUD_OP where middlename is NULL;

select firstname as Name , lastname as Surname , salary as Salary,age, location from employee_CRUD_OP where location = 'delhi'; 


-- -------------case insensitive and sensitive--------------------------



