use practice830pm;

-- to see all databases
show databases;

-- to create db
create database practice830pm;

-- to drop db
drop database practice830pm;

-- to select database
use practice830pm;

create table employee(
empId int,
empName varchar(20),
location varchar(15),
age int,
salary decimal,
emailId varchar(20));

insert into employee(empId,empName,location,age,salary,emailId) values
(1001,"Madhav Maynale","PUNE",30,10000,"madhav@godrej.com"),
(1002,"Mayuresh Kokate","PUNE",28,12000,"mayuresh@godrej.com"),
(1003,"Ketan Shivankar","PUNE",31,10500,"ketan@ril.com"),
(1004,"Vinisha Dave","PUNE",32,10700,"vinisha@godrej.com"),
(1005,"Pallavi Ner","PUNE",33,20000,"madhav@gmail.com");

drop table employee;

select * from employee;

insert into employee (empId, empName,salary) values (1006,"Jhon Cena",100000),(1006,"Jhon Wick",120000);


-- -----------------------------------------------------------------------

select * from employee;

-- describe table defination
desc employee;

-- we can select any column we want from table
select empName,salary from employee;


-- 'as' used to give an alias to the column name from table
select empName as name, salary as sal from employee;

-- use to update and remove safely
SET SQL_SAFE_UPDATES = 0; -- off

SET SQL_SAFE_UPDATES = 1; -- on


-- delete table

delete from employee; -- deletes all records from table employee but column name exists 

drop table employee; -- drop table employee nothing left

create table fruits(
id int not null,
fruitName varchar(20) not null,
fruitPrice decimal,
location  varchar(15) default "PUNE");

insert into fruits(id,fruitName,fruitPrice) values (1,"Bannana",40),(2,"Apple",150),(3,"Jackfruit",400); -- you dont need to enter all the values 
insert into fruits values (4,"Watermelon",100,"Mumbai"); -- you need to enter all the values to insert this way

insert into fruits values (5,"Lichi",50,"hyderabad");

describe fruits;

select * from fruits;


drop table fruits;