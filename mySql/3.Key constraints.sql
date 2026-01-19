use practice830pm;

-- Topic Key Contraints : -
-- primary key
-- unique key
-- auto incerment key 
-- combined primary key 
-- primary key vs unique key



show tables;

select * from employee;

describe employee;

SHOW CREATE TABLE employee;

-- CREATE TABLE `employee` (
--    `empId` int DEFAULT NULL,
--    `empName` varchar(20) DEFAULT NULL,
--    `location` varchar(15) DEFAULT NULL,
--    `age` int DEFAULT NULL,
--    `salary` decimal(10,0) DEFAULT NULL,
--    `emailId` varchar(20) DEFAULT NULL
--  ) ;

select * from employee;
insert into employee values (1007,"Megha Shete","Pune",35,20000,'meghas@godrej.com');

-- primary key identify each record uniquely and null value not allowed 
-- there can be only one primary key in single table 
-- unique key identify each record uniquely and null value allowed
-- there can be more than one unique key in single table 

drop table employee;
select* from employee;
CREATE TABLE employee (
   empId int primary key not null ,
   empName varchar(20) not NULL,
   location varchar(15) not NULL default "PUNE",
   age int not NULL,
   salary decimal(10,0) not NULL,
   emailId varchar(20) not NULL
 ) ;
 
 insert into employee(empId,empName,location,age,salary,emailId) values
(1001,"Madhav Maynale","PUNE",30,10000,"madhav@godrej.com"),
(1002,"Mayuresh Kokate","PUNE",28,12000,"mayuresh@godrej.com"),
(1003,"Ketan Shivankar","PUNE",31,10500,"ketan@ril.com"),
(1004,"Vinisha Dave","PUNE",32,10700,"vinisha@godrej.com"),
(1005,"Pallavi Ner","PUNE",33,20000,"madhav@gmail.com"),
(1006,"Ketan Shivankar","Pune",30,15000,"ketans@ril.com"),
(1007,"Megha Shete","Pune",35,20000,'meghas@godrej.com');

-- primary key identify each record uniquely and null value not allowed 
-- there can be only one primary key in single table 
-- unique key identify each record uniquely and null value allowed
-- there can be more than one unique key in single table 

desc employee;
-- ------------------------------------------------------------------------------------
-- primary key identify each record uniquely and null value not allowed 
-- there can be only one primary key in single table 
-- unique key identify each record uniquely and null value allowed
-- there can be more than one unique key in single table 

create table users(
user_id int not null auto_increment primary key,
user_name varchar(20) not null,
emailId varchar(20) unique key
);

insert into users (user_id,user_name,emailId)  values 
(1,'rahul_sharma','rahuls@gmail.com'),
(2,'anjali_verma','anjaliv@gmail.com'),
(3,'arjun_singh','arjuns@ymailcom'),
(4,'priya_kapoor','priyak@outlook.com'),
(5,'vikram_mehta','viramm@ril.com');

insert into users values(6,'null',null);
select * from users;
-- primary key and not null both constraints dont allow null as values
-- unique key defins records uniquely but allow null values
-- not null constraints alllow null value as string

create table vehicles(
vechicle_id int auto_increment primary key not null,
number_plate varchar(10) not null unique,
year_of_manufactured int not null,
check(year_of_manufactured >= 1980)
);
insert into  vehicles (vechicle_id,number_plate, year_of_manufactured) values
(1001,'MH12AB1234', 2015),
(1002,'DL04CD5678', 2018),
(1003,'KA03EF9988', 2012),
(1004,'TN07GH4455', 2020),
(1005,'GJ01JK2211', 2019);

insert into vehicles values (null,'null',1988);
select * from vehicles;
-- primary key wont allow duplicate entries while unique key allow null and duplicates
-- primary key and not null both constraints dont allow null as values
-- unique key defins records uniquely but allow null values
-- not null constraints alllow null value as string



create table orders(
order_id int,
order_number varchar(20) not null,
quantity int not null,
check (quantity between 1 and 100)
);
INSERT INTO orders (order_id,order_number, quantity) VALUES
(1,'ORD-IND-1001', 5),
(2,'ORD-IND-1002', 12),
(3,'ORD-IND-1003', 3),
(4,'ORD-IND-1004', 25),
(5,'ORD-IND-1005', 8);

create table employees(
emp_id int auto_increment primary key,
emp_name varchar(20)not null unique,
salary decimal(10,2) not null,
check(salary >= 1000)
);
select * from employees;
INSERT INTO employees (emp_name, salary) VALUES
('raj kumar', 25000),
('sneha patil', 32000),
('imran shaikh', 28000),
('mansi nair', 45000),
('arvind reddy', 38000);

-- check constraints 
SELECT * 
FROM information_schema.CHECK_CONSTRAINTS;

SELECT * 
FROM information_schema.CHECK_CONSTRAINTS
where CONSTRAINT_SCHEMA = 'practice830pm';
