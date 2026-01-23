-- clauses 
-- distinct
-- limit
-- order by 
-- like
show databases;
use practice830pm;

show tables;

create table students (
student_id int AUTO_INCREMENT,
student_fname varchar(30) NOT NULL,
student_lname varchar(30) NOT NULL,
student_mname varchar(30),
student_email varchar(30) NOT NULL,
student_phone varchar (15) NOT NULL,
student_alternate_phone varchar(15),
enrollment_date TIMESTAMP NOT NULL,
selected_course int NOT NULL DEFAULT 1,
years_of_exp int NOT NULL,
student_company varchar(30),
batch_date varchar(30) NOT NULL,
source_of_joining varchar(30) NOT NULL,
location varchar(30) NOT NULL,
primary key (student_id),
unique key (student_email),
FOREIGN KEY(selected_course) REFERENCES courses(course_id)
);

select * from courses;
insert into courses values(1, 'python'),(13,'AIML'),(15, 'data science'),(16,'full stack'),(17, 'automation testing'); 
select * from students;

INSERT INTO students (student_fname, student_lname, student_email, 
    student_phone, student_mname, student_alternate_phone,
    enrollment_date, selected_course, years_of_exp,
    student_company, batch_date, source_of_joining, location
) VALUES (
    'virat', 'kohli', 'virat@gmail.com',
    '9292929292', NULL, NULL,
    NOW(), 1, 10,
    'flipkart', '5-02-2021', 'linkedin', 'hyderabad'
);

INSERT INTO students (
    student_fname, student_lname, student_email,
    student_phone, student_mname, student_alternate_phone,
    enrollment_date, selected_course, years_of_exp,
    student_company, batch_date, source_of_joining, location
) VALUES (
    'shikhar', 'dhawan', 'shikhar@gmail.com',
    '9393939393', NULL, NULL,
    NOW(), 3, 12,
    NULL, '19-02-2021', 'google', 'bangalore'
);

insert into students (student_fname, student_lname, student_email,
student_phone, years_of_exp, student_company, batch_date,
source_of_joining, location, selected_course,enrollment_date) values ('kapil', 'dev',
'kapil@gmail.com','9291292292', 15, 'microsoft', '5-02-2021',
'friend', 'pune',5 , now()),
('brian', 'lara', 'brian@gmail.com', '9291297292', 18, 'tcs',
'5-02-2021', 'youtube', 'pune',7 ,now()),
('carl', 'hooper', 'carl@gmail.com', '9291297392', 20, 'wipro',
'19-02-2021', 'youtube', 'pune',4,now() ),
('saurabh', 'ganguly', 'saurabhg@gmail.com', '9291297492', 14,
'wipro', '19-02-2021', 'google', 'chennai',6,'2024-01-01 10:10:10');

INSERT INTO students (
    student_fname, student_lname, student_email, student_phone,
    student_mname, student_alternate_phone, enrollment_date,
    selected_course, years_of_exp, student_company, batch_date,
    source_of_joining, location
) VALUES (
    'shubman', 'gill', 'shubman@gmail.com', '9016666666',
    NULL, NULL, '2023-10-10 12:20:20', 2, 4, 'intel', '01-06-2021', 'linkedin', 'punjab'
);

INSERT INTO students (
    student_fname, student_lname, student_email, student_phone,
    student_mname, student_alternate_phone, enrollment_date,
    selected_course, years_of_exp, student_company, batch_date,
    source_of_joining, location
) VALUES (
    'surya', 'yadav', 'skyadav2@gmail.com', '9017777777',
    NULL, '9666666666', '2023-05-10 12:20:20', 1, 6, 'adobe', '05-06-2021', 'instagram', 'mumbai'
);

INSERT INTO students (
    student_fname, student_lname, student_email, student_phone,
    student_mname, student_alternate_phone, enrollment_date,
    selected_course, years_of_exp, student_company, batch_date,
    source_of_joining, location
) VALUES (
    'arshdeep', 'singh', 'arsh2@gmaiI.com', '9018888888',
    NULL, NULL, '2023-03-10 12:20:20', 3, 3, 'zoho', '10-06-2021', 'referral', 'punjab'
);

INSERT INTO students (
    student_fname, student_lname, student_email, student_phone,
    student_mname, student_alternate_phone, enrollment_date,
    selected_course, years_of_exp, student_company, batch_date,
    source_of_joining, location
) VALUES (
    'rinku', 'singh', 'rinku2@gmail.com', '9019999999',
    'kumar', NULL, '2021-05-05 05:05:05', 4, 2, 'microsoft', '12-06-2021', 'youtube', 'aligarh'
);


INSERT INTO students (
    student_fname, student_lname, student_email, student_phone,
    student_mname, student_alternate_phone, enrollment_date,
    selected_course, years_of_exp, student_company, batch_date,
    source_of_joining, location
) VALUES 
    ('tilak', 'varma', 'tilak1@gmail.com', '9300000001',
     NULL, NULL, '2021-05-05 05:05:05', 2, 2, 'infosys', '01-09-2021', 'instagram', 'bangalore'),

    ('washington', 'sundar', 'wsundar1@gmail.com', '9300000002',
     NULL, NULL, '2023-05-05 05:05:05', 3, 4, 'infosys', '03-09-2021', 'youtube', 'bangalore'),

    ('arshdeep', 'singh', 'arshdeep1@gmail.com', '9300000003',
     NULL, NULL, '2021-05-05 05:05:05', 1, 3, 'infosys', '05-09-2021', 'facebook', 'pune'),

    ('harry', 'brook', 'hbrook1@gmail.com', '9300000004',
     NULL, NULL, '2024-05-05 05:05:05', 4, 5, 'infosys', '07-09-2021', 'facebook', 'mumbai'),

    ('jofra', 'archer', 'jarcher1@gmail.com', '9300000005',
     NULL, NULL, '2024-05-05 05:05:05', 2, 6, 'infosys', '09-09-2021', 'instagram', 'hyderabad');


select * from students;
