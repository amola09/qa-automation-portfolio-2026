-- Data Types :-

-- date 
-- timestamp
-- current_timestamp
-- varchar 
-- int 

-- 1. Numeric Data Types -------------------------------------------------------------------
-- Used for storing numbers (both integers and floating-point numbers).

-- a. Integer Types
-- TINYINT      	1            	-128 to 127                            	0 to 255
-- SMALLINT     	2            	-32,768 to 32,767                      	0 to 65,535
-- MEDIUMINT    	3            	-8,388,608 to 8,388,607               	0 to 16,777,215
-- INT / INTEGER	4            	-2,147,483,648 to 2,147,483,647       	0 to 4,294,967,295
-- BIGINT       	8            	-9,223,372,036,854,775,808 to           0 to 18,446,744,073,709,551,615
--                                   9,223,372,036,854,775,807	


use practice830pm;

show tables;

create table signednumeric(
    tiny_version tinyint,
    small_version smallint,
    med_version mediumint,
    int_version int,
    bigint_version bigint   
);
describe signednumeric;
select* from signednumerics;

insert into signednumeric values(-128, -32768,-8388608,-2147483648,-9223372036854775807);
insert into signednumeric values(-128, -32769,-8388608,-2147483648,-9223372036854775807); -- out of range for small
insert into signednumeric values(128, 32768,8388608,2147483648,9223372036854775807);-- out of range for tiny
insert into signednumeric values(127, 32767,8388607,2147483647,9223372036854775807);

create table unsignednumeric(
    tiny_version tinyint unsigned,
    small_version smallint unsigned,
    med_version mediumint unsigned,
    int_version int unsigned,
    bigint_version bigint unsigned   
);


insert into unsignednumeric values(-128, -32768,-8388608,-2147483648,-9223372036854775807);-- out of range tiny int
-- insert into signednumeric values(-128, -32769,-8388608,-2147483648,-9223372036854775807);
insert into unsignednumeric values(128, 32768,8388608,2147483648,9223372036854775807);
insert into unsignednumeric values(255, 32767,8388607,2147483647,9223372036854775807);

insert into unsignednumeric values(256, 32767,8388607,2147483647,9223372036854775807); -- out of range tiny int
select * from unsignednumeric;


-- 2.VARCHAR----------------------------------------------------

-- VARCHAR (Variable Character range):

-- Used to store text or string data.
-- You must specify a maximum length (e.g., `VARCHAR(50)` → up to 50 characters).
-- Takes only as much space as needed for the text + 1 byte for length info.
-- Commonly used for names, emails, addresses, etc.

-- 1. Characters allowed in `VARCHAR`**

-- `VARCHAR` can store any character, including:

--   Letters → A-Z, a-z
--   Digits → 0-9
--   Special characters → `@ # $ % & * ( ) - _ + = / , . ? !` etc.
--   Spaces and Unicode characters** (like emojis or non-English letters) if the table uses UTF-8 or similar encoding.


-- 2. Maximum length of `VARCHAR` in MySQL

-- You can define up to VARCHAR(65535) bytes per column,
--   but this depends on:

--   The character set (UTF-8 uses more bytes per character).
--   The storage engine (InnoDB has row size limits).

-- Practical limit:
-- Usually, the maximum you can safely use is around VARCHAR(65532) for single-byte characters (like Latin1).
-- But in real-world use:

-- `VARCHAR(255)` or `VARCHAR(500)` is common for names, emails, etc.
-- For long text, better use TEXT or LONGTEXT type.
select * from employee;

INSERT INTO employee VALUES(1015,'Kapil Sharma','PUNE', 40, 100000, 9000);

select * from employee where empId =1015;
select * from employee where emailId = '9000';



-- 3.date and current timestamp----------------------------------------

-- date : (YYYY-MM-DD)


-- | Data Type     | Description                                                              | Example Stored Value  |
-- | ------------- | ------------------------------------------------------------------------ | --------------------- |
-- | DATE          | Stores only the date (YYYY-MM-DD)                                        | `2025-11-06`          |
-- | TIME          | Stores only the time (HH:MM:SS)                                          | `14:35:59`            |
-- | DATETIME      | Stores both date and time                                                | `2025-11-06 14:35:59` |
-- | TIMESTAMP     | Similar to DATETIME, but also stores time zone and updates automatically | `2025-11-06 14:35:59` |
-- | YEAR          | Stores only the year (YYYY)                                              | `2025`                |

show tables;
