-- update deals with data manupulations and alter deals with structure manupulations
-- ----------------------------------------------------------------------------------

-- Alter command
-- add
-- drop
-- modify
-- rename
-- alter
-- -----------------	
-- Alter is to alter the structure of the table.

alter table employee_CRUD_OP add column jobtitle varchar(20);

alter table employee_CRUD_OP drop column jobtitle;
select * from employee_CRUD_OP;

desc employee_CRUD_OP;
alter table employee_CRUD_OP modify column firstname varchar(30);

-- droping primary key
alter table employee_CRUD_OP modify id int;  -- if we try to modify primary key column then primary key remains unaffected
desc employee_CRUD_OP;

alter table employee_CRUD_OP drop primary key;
desc employee_CRUD_OP;


-- adding primary key and auto_increment
alter table employee_CRUD_OP add primary key(id);

alter table employee_CRUD_OP modify column id int auto_increment; 
desc employee_CRUD_OP;


-- Add a Column with Default Value
alter table employee_CRUD_OP add column department varchar(20) default 'IT';

update employee_CRUD_OP set department = 'COMP' where location ='bangalore';
select * from employee_CRUD_OP;


-- Add Multiple Columns at Once

alter table employee_CRUD_OP 
add column doj int,
add column designation varchar(20) default 'manager';

desc employee_CRUD_OP;

update employee_CRUD_OP set doj = 01012025;
select * from employee_CRUD_OP;

-- Drop a Column
alter table employee_CRUD_OP drop column doj;

desc employee_CRUD_OP;

-- Rename a Column
alter table employee_CRUD_OP rename column location to city;
select * from employee_CRUD_OP;

-- Change Column Data Type
alter table employee_CRUD_OP modify salary decimal(10,2);

-- Change Column Definition (e.g., allow NULLs)
alter table employee_CRUD_OP modify city varchar(20);

-- Set or Change a Default Value
alter table employee_CRUD_OP alter city set default 'Mumbai';
INSERT INTO employee_CRUD_OP(firstname, lastname, age, salary) VALUES('rajesh','Nanaware', 28, 10000);
desc employee_CRUD_OP;
select * from employee_CRUD_OP;

-- Drop a Default Value
alter table employee_CRUD_OP alter city drop default;
desc employee_CRUD_OP;

-- Add a New Constraint (CHECK) 
alter table employee_CRUD_OP add constraint chk_salary check(salary>=10000);

-- Drop a Constraint
SELECT * 
FROM information_schema.CHECK_CONSTRAINTS;

SELECT * 
FROM information_schema.CHECK_CONSTRAINTS
where CONSTRAINT_SCHEMA = 'practice830pm';

alter table employee_CRUD_OP drop check chk_salary;

-- You can perform several changes in one command:

ALTER TABLE employee_CRUD_OP 
ADD COLUMN bonus int DEFAULT 0,
MODIFY salary int,
DROP COLUMN middlename;

select * from employee_CRUD_OP;

-- ---------------------------------------------------------------------------------------------------------------------------

-- DDL VS DML
-- -----------------------------

-- Data Definition Language - deals with table structure

-- Create, Alter, Drop - DDL commands

-- Data Manipulation Language - here we deal with the data directly.

-- insert, update, delete - DML commands

-- delete from employee; -- DML 
-- delete deletes records one by one ---slow

-- Truncate also removes all records - DDL

-- truncate internally drops the table and recreates it.--- fast

