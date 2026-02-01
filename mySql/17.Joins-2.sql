-- sql join inner , outer, letft ,right join 
-- sub queries
-- nested sub queries
-- set operator some all
-------------------------------------------------------------------------------------------------

create database bankDB;

use bankDB;

-- 1. Create Tables
-- CUSTOMER
CREATE TABLE customer (
    customerName VARCHAR(20),
    customerCity VARCHAR(20),
    phone INT
);
-- DEPOSITER
CREATE TABLE depositer (
    customerName VARCHAR(20),
    accno VARCHAR(10)
);

-- ACCOUNT
CREATE TABLE account (
    bname VARCHAR(20),
    accno VARCHAR(10),
    bal INT
);

-- LOAN
CREATE TABLE loan (
    lno VARCHAR(10),
    branch_name VARCHAR(20),
    amount INT
);


-- BORROWER
CREATE TABLE borrower (
    customerName VARCHAR(20),
    lno VARCHAR(10)
);

-- BRANCH
CREATE TABLE branch (
    bname VARCHAR(20),
    bcity VARCHAR(20)
);
--  2. Insert Values

-- customer VALUES
INSERT INTO customer VALUES
('Krishna','pune',1111),
('Mayuri','mumbai',2222),
('Hina','pune',3333),
('Akshay','mumbai',4444),
('Ashok','delhi',5555),
('Vishwanath','delhi',6666),
('Rakesh','pune',7777),
('Ramesh','angar',8888),
('Mangesh','nagpur',9999);

-- depositer VALUES
INSERT INTO depositer VALUES
('Krishna','a_01'),
('Mayuri','a_02'),
('Mangesh','a_03'),
('Akshay','a_04');

-- account VALUES 
INSERT INTO account VALUES
('kondhwa','a_01',35000),
('mgroad','a_02',15000),
('sadashivpeth','a_03',65000),
('katraj','a_04',60000);

-- loan VALUES
INSERT INTO loan VALUES
('l_01','kondhwa',15000),
('l_02','kondhwa',20000),
('l_03','katraj',45000),
('l_04','mgroad',35000),
('l_05','katraj',55000);

-- borrower VALUES
INSERT INTO borrower VALUES
('Akshay','l_01'),
('Krishna','l_02'),
('Ramesh','l_03'),
('Mahesh','l_04');

-- branch VALUES
INSERT INTO branch VALUES
('kondhwa','pune'),
('katraj','pune'),
('mgroad','angar'),
('sadashivpeth','nagpur');

-- -----------------------------------------------------------------------------------------

-- 3. Training Queries

-- ---A. Joins  inner , left , right , full ,cross , outer


-- 1. List customers with their name, account numbers and city (INNER JOIN)
-- customer , depositer
select * from customer;
select * from depositer;

select customer.cname, ccity, accno from customer, depositer where customer.cname = depositer.cname;

select c.cname, ccity, accno from customer c, depositer d where c.cname = d.cname;

-- inner join
select c.cname, ccity, accno from customer c inner join depositer d on c.cname = d.cname;

-- 2. List customers even if they don’t have an account (LEFT JOIN)

select c.cname, ccity, accno from customer c left join depositer d on c.cname = d.cname;

insert into depositer values ('neel' , 'a_01'),('tanish','a_04');
select * from depositer;
select c.cname, ccity, accno from customer c left join depositer d on c.cname = d.cname;


-- 3. Branch & account details  inner JOIN 


-- 4. Right Join taking left table
select c.cname, ccity, accno from customer c right join depositer d on c.cname = d.cname;


-- --- Right Join taking right table
select d.cname, ccity, accno from customer c right join depositer d on c.cname = d.cname;

-- --------------------above code is from 16.Joins.sql --------

-- B. Nested Subqueries **********************************************************************

-- --- Right Join taking right table
select d.cname, ccity, accno from customer c right join depositer d on c.cname = d.cname;

-- B. Nested Subqueries **********************************************************************
-- 1. Customers who have loan amounts greater than average loan
-- loan, borrower
use bankdb;
select * from loan;
select * from borrower;
select avg(amount) from loan;


select cname from borrower
where lno in (
select lno from loan
where amount > (select avg(amount) from loan));   

-- 34000 -- > l3, l4,l5, -- > l3 l4 -->amar , raj

-- 2. Customers living in cities having a branch
-- customer , branch

select cname, ccity from  customer 
where ccity in (select bcity from branch);

-- 3. Accounts whose balance is greater than ALL loan amounts
-- account , loan
select * from account;
select * from loan;

select accno,bal from account where bal > ALL (select amount from loan);

-- alternate
select accno , bal from account where bal > (select max(amount) from loan);


-- C. SET Comparison — IN, ANY, ALL
-- 1. Using IN

-- All customers who have an account (are depositers). 
select * from customer;
select * from depositer;
insert into depositer values ('neel' , 'a_03');

select cname from customer 
where cname in (select cname from depositer);

-- All customers who have an account (are not in depositers). 
select cname from customer 
where cname  not in (select cname from depositer);

-- All depositer who are not custometer.  
select cname from depositer where cname not in (select cname from customer);









