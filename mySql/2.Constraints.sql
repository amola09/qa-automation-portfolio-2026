show databases;

use practice830pm;

show tables;

select * from employee;

select empName, salary from employee;

select empName as name , salary as sal from employee;

desc employee;

create table employee1(
firstName varchar(15) not null,
middleName varchar(15) ,
lastName varchar(15) not null,
age int not null,
salary int not null,
location varchar(15) );

-- we try to insert null on purpose cause constraint is set not null to firstName error 1048  
insert into 
employee1(firstName ,middleName ,lastName ,age ,salary ,location) 
values (null, 'Arun', 'Rokade', 32, 40000, 'pune'); -- 1048 firstName can not be null

-- we can insert null as string 
insert into 
employee1(firstName ,middleName ,lastName ,age ,salary ,location) 
values ('null', 'Arun', 'Gaikwad', 32, 40000, 'pune');

insert into 
employee1(firstName ,middleName ,lastName ,age ,salary ,location) 
values ('Akshay', 'Arun', 'Pande', 32, 40000, 'pune');

-- creating table to learn default constraint
create table employee2(
firstName varchar(15) not null,
middleName varchar(15) ,
lastName varchar(15) not null,
age int not null,
salary int not null,
location varchar(15) default "pune" );

select * from employee2;

insert into employee2(firstName,middleName,lastName,age,salary,location) values
("Nitin", "Dttatray", "Shinde",28,20000,"Solapur"); -- regular insertion

insert into employee2(firstName,middleName,lastName,age,salary) values
("Balu", "Maruti", "Shinde",27,12000); -- not entered location to see default value Pune

insert into employee2(firstName,middleName,lastName,age,salary,location) values
("Jayashri", "Dasharath", "Jadhav",38,22000,null); -- entering null value to location

-- default constraint 
-- from above insertion, if value not entered then it will take default value 
-- it allows null value to enter manually while inserting record

-- creating employee3 to understand defualt constraint with not null
create table employee3(
firstName varchar(15) not null,
middleName varchar(15) ,
lastName varchar(15) not null,
age int not null,
salary int not null,
location varchar(15) not null default 'Pune');

insert into employee3(firstName,middleName,lastName,age,salary,location) values
("Suman","Changdev","Shinde",29,30000,"Jodhpur");  -- regular insertion

insert into employee3(firstName,middleName,lastName,age,salary) values
("Aparna", "Kiran", "Singh",26,15000); -- not entered location to see default value Pune

-- wrong insertion 1048 location column can not be null
insert into employee3(firstName,middleName,lastName,age,salary,location) values
("Jayashri", "Dasharath", "Jadhav",38,22000,null); -- entering null value to location

-- creating employee4 to understand check constraint
create table employee4(
firstName varchar(15) not null,
middleName varchar(15) ,
lastName varchar(15) not null,
age int not null check(age>18),
salary int not null,
location varchar(15) not null default 'Pune');

insert into employee4(firstName,middleName,lastName,age,salary,location) values
("Suman","Changdev","Jadhav",29,30000,"Jodhpur");  -- regular insertion

insert into employee4(firstName,middleName,lastName,age,salary) values
("Aparna", "Kiran", "Jadhav",null,15000); -- not entered age as null -- check contrain error 1048 age can not be null

-- wrong insertion 3819 chek contraint is violated
insert into employee4(firstName,middleName,lastName,age,salary) values
("Jayashri", "Dasharath", "Patil",8,22000); -- entering age is less than 18 

 -- to see again check contraint 
create table employee5(
firstName varchar(15) not null,
middleName varchar(15) ,
lastName varchar(15) not null,
age int not null check(age>18),
salary int not null,
location varchar(15) not null default 'Pune');

describe employee5;
select * from employee5;

insert into employee5(firstName,middleName,lastName,age,salary,location) values
("Suman","Changdev","Ghodke",29,30000,"Jodhpur");  -- regular insertion

-- wrong insertion 3819 chek contraint is violated
insert into employee5(firstName,lastName,age,salary) values
("Aparna","Ghodke",5,15000); --  -- entering age is less than 18 

insert into employee5(firstName,lastName,age,salary) values
("Jayashri","Ghodke",null,22000); -- not entered age as null -- check contrain error 1048 age can not be null

SET SQL_SAFE_UPDATES = 0;

SET SQL_SAFE_UPDATES = 1;

delete from employee5; -- delets all records(rows) columns exist

-- create database
-- create tables
-- drop db and table    
-- insert a record
-- not null 
-- default 
-- check 
-- by default safe mode is on
-- SET SQL_SAFE_UPDATES = 0; OFF
-- SET SQL_SAFE_UPDATES = 1; ON