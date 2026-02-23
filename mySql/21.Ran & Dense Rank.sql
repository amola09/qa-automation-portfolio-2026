-- RANK & DENSE RANK
-- -------------------------

CREATE TABLE employee_Rank_DenseRank (
firstname varchar(20),
lastname varchar(20),
age int,
salary int,
location varchar(20)
);

-- for rank and dense rank 
INSERT INTO employee_Rank_DenseRank VALUES ('Sunil', 'Chhetri', 39, 150000, 'Bengaluru');
INSERT INTO employee_Rank_DenseRank VALUES ('Sandesh', 'Jhingan', 31, 88000, 'Goa');
INSERT INTO employee_Rank_DenseRank VALUES ('Gurpreet', 'SinghSandhu', 33, 150000, 'Bengaluru');
INSERT INTO employee_Rank_DenseRank VALUES ('Anirudh', 'Thapa', 27, 90000, 'Kolkota');
INSERT INTO employee_Rank_DenseRank VALUES ('Udanta', 'Singh', 29, 90000, 'Goa');


select * from employee_Rank_DenseRank;
select firstname, lastname, age, salary , row_number() over(order by salary desc) , location from employee_Rank_DenseRank;
select firstname, lastname, age, salary , rank() over(order by salary desc) , location from employee_Rank_DenseRank;
select firstname, lastname, age, salary , dense_rank() over(order by salary desc) , location from employee_Rank_DenseRank;

-- if there are no duplicates then row number, rank and dense rank lead to similar results ..

-- only the difference comes when there are duplicates ..

-- for duplicates same rank is assigned and the for the next entry it skips the ranks ..

-- dense rank - it does not skip any ranks in between


-- whenever you do not have duplicates use row_num

-- there is some competition and I want find the top 3 positions.. to give trophy 
-- marks DENSE_RANK rank 
-- 100 - 1 - 1  
-- 100 - 1 - 1  
-- 98  - 2 - 3  
-- 97  - 3 - 4  
-- 97  - 3 - 4  
-- 96  - 4 - 6

-- so to use row_number , rank or DENSE_RANK depents on business requirements....
-- for all three row_number , rank or DENSE_RANK partition by is optional but order by is compulsary

-- -- find the 3rd highest salary --- using rownum , rank ,denserank

select *  from (select firstname, lastname, age, salary , row_number() over(order by salary desc) as rownum , location from employee_Rank_DenseRank)  temptable
where rownum =3;

select *  from (select firstname, lastname, age, salary , rank() over(order by salary desc) as rownum , location from employee_Rank_DenseRank)  temptable
where rownum =3;

select *  from (select firstname, lastname, age, salary , dense_rank() over(order by salary desc) as rownum , location from employee_Rank_DenseRank)  temptable
where rownum =6;

select firstname, lastname, age, salary , row_number() over(order by salary desc) as rownum , location from employee_Rank_DenseRank;
