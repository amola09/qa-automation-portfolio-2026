use practice830pm;
select * from employee2;

-- want to give numbering according to salary

select firstname, lastname, age, salary , 
row_number() over(order by salary) , 
location from employee2;

select firstname, lastname, age, salary , 
row_number() over(order by salary desc) , 
location from employee2;


-- find the 5th highest salary

select *  from (select firstname, lastname, age, salary , row_number() over(order by salary desc) as rownum , location from employee2)  temptable
where rownum =5;

-- the problem statement is to assign row number for partitions based on each location ..

select firstname, lastname, age, salary , location ,
row_number() over(partition by location order by salary desc) from employee2;


-- the problem statement is to assign row number for partitions based on each location and salary ..

-- I want to find the highest salary getters at each location
select * from (select firstname, lastname, age, salary , location , row_number() over(partition by location order by salary desc) as rownum from employee2) temptable
where rownum =1 ;

-- I want to find the lowest salary getters at each location
select * from (select firstname, lastname, age, salary , location , row_number() over(partition by location order by salary) as rownum from employee2) temptable
where rownum =1 ;

-- when we use row_number
    -- we should be using the order by clause 
    -- we can also use the partition by - optional
    -- the rownumber starts from 1 for every partition