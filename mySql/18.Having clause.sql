-- ORDER OF EXECUTION
-- ------------------------------------------------
-- SQL executes in the following logical order:

-- 1. FROM
-- 2. WHERE (if present)
-- 3. GROUP BY (if present)
-- 4. HAVING (if present)
-- 5. SELECT
-- 6. DISTINCT (if present)
-- 7. ORDER BY
-- 8. LIMIT (if present)

-- Where vs Having clause in SQL
-- ------------------------------
use practice830pm;
select * from students;


-- want a count of student joined from different sources
select source_of_joining , count(*) as total from students group by source_of_joining;

-- I want to know the lead sources through with more  than 2 person has registered.

-- select source_of_joining , count(*) as total from students group by source_of_joining where total > 2; -- error 

-- above will not work... because
-- where clause is used to filter the individual records before aggregation ..work before aggregation ...cant understand grouping...
-- if i want to filter after aggregation " having "


select source_of_joining , count(*) as total from students group by source_of_joining having total > 2;
-- having is used after aggreagation to filter the record and where ia used before aggregation


-- I want to know the count of people who registered through linkedIN
select source_of_joining , count(*) as total from students group by source_of_joining having source_of_joining = "linkedin";
-- but here all grouping is done to retrive one source_of_joining ....
-- so here better option is use where clause

select source_of_joining , count(*) as total from students where source_of_joining = "linkedin" group by source_of_joining;

-- can we use where and having in same query
-- ------------------------------------------------
-- the locations from which more than 2 student has joined & the students experience is more than 10 years

select location , count(*) as total from students where years_of_exp > 10 group by location having total > 2;
select * from students;


-- important do filtering as soon as possible so we do not do havy crunching and latter filtering.


-- ---where is used before group by and do filtering on individual records

-- ---having is used after group by and do filtering on aggregated records.

-- ----we can use where and having in the same query also. 

-- ----where is more performant than having ..


