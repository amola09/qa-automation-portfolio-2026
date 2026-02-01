-- sql join inner , outer, letft ,right join 
-- sub queries
-- nested sub queries
-- set operator some all
-- -----------------------------------------------------------------------------------------------

CREATE DATABASE bankdb2;
use bankdb2;

-- 1. Create Tables

-- CUSTOMER
CREATE TABLE customer (
    cname VARCHAR(20),
    ccity VARCHAR(20),
    phone INT
);

-- DEPOSITER
CREATE TABLE depositer (
    cname VARCHAR(20),
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
    cname VARCHAR(20),
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
('ram','pune',1111),
('sham','mumbai',2222),
('gita','pune',3333),
('seeta','mumbai',4444),
('maya','delhi',5555),
('ganesh','delhi',6666),
('amar','pune',7777),
('raj','angar',8888),
('mangesh','nagpur',9999);

-- depositer VALUES
INSERT INTO depositer VALUES
('ram','a_01'),
('sham','a_02'),
('mangesh','a_03'),
('seeta','a_04');

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
('seeta','l_01'),
('geeta','l_02'),
('amar','l_03'),
('raj','l_04');

-- branch VALUES
INSERT INTO branch VALUES
('kondhwa','pune'),
('katraj','pune'),
('mgroad','angar'),
('sadashivpeth','nagpur');

-- -----------------------------table creation and inserting values done ------------------------------------------------

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

