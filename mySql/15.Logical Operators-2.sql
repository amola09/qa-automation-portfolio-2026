-- update using case
select * from courses;
set sql_safe_updates=0;

update courses
set 
course_duration = case
when course_name = 'python' then 5
when course_name = 'javascript' then 4
else course_duration
end,
course_name = case 
when course_id = 6 then 'full stack python'
when course_id  = 7 then 'software testing'
else course_name
end;

-- ---------more operator---------------------
-- <> is a comparison operator in SQL.
select student_fname, location from students where location <> 'pune';

-- It means “not equal to” (same as !=).
select student_fname, location,source_of_joining from students where source_of_joining <> 'facebook';


-- -------------------------------------------------------------------------
-- In MySQL, REGEXP (or RLIKE, they’re the same) is used in the WHERE clause to match a string column against a regular expression pattern.

-- It’s more powerful than LIKE, because you can define flexible rules.
-- Some common regex patterns in MySQL:

-- ^ → start of string
-- $ → end of string
-- . → any single character
-- [...] → any character in the set
-- | → OR
-- *, +, {n,m} → repetition


-- Examples:
select * from students;
-- Find names starting with 'A'
select student_fname from students where student_fname regexp '^v';
select student_fname , batch_date from students where batch_date regexp '^5';

-- Find names ending with 'n'
select student_fname from students where student_fname regexp 'n$';
select student_fname , batch_date from students where batch_date regexp '2021$';

-- LIKE uses wildcards: % means “any sequence of characters”. (% is not part of regexp)
select student_fname , batch_date from students where batch_date regexp '%-02-%'; -- wont work no output
select student_fname , batch_date from students where batch_date like '%-02-%';
-- REGEXP uses regular expressions, where % has no special meaning

-- Find names containing 'an'
select student_fname , batch_date from students where student_fname regexp 'bh';
select student_fname , batch_date from students where student_fname regexp 'ra';  -- names containing ra

-- Find names that start with J and are exactly 4 letters
select student_fname , batch_date from students where student_fname regexp '^j..';

select student_fname , batch_date from students where student_fname regexp '^j....$';
select student_fname , batch_date from students where student_fname regexp '^j..$';

-- Find names containing 'Ann' or 'Anna'
SELECT name FROM employees WHERE name REGEXP 'Ann(a)?';
-- Ann → must appear
-- (a)? → optional a (can appear 0 or 1 time)


SELECT name FROM employees WHERE name REGEXP 'nit(h)?in';  -- nitin nithin  tanish thanish
-- nit → required
-- (h)? → optional h
-- in → required

-- ✔ Matches names:
-- nitin
-- nithin

-- Match 'color' or 'colour'
-- WHERE word REGEXP 'colou?r';

-- matches shi, shu, or sha
-- REGEXP 'sh(i|u|a)'

-- matches ab, abab, ababab, etc.
-- REGEXP '(ab)+'  

-- Without parentheses, ab+ would mean a followed by one or more b's (abb, abbb …).