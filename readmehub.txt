//Database Lead: Kobe Dixon
//JSU Link's database is built in MySQL, and constructed as a relational database.
//This database is composed of different entities that have multiple properties.
//Certain entities have characteristics unique to others.

CREATE TABLE `Alumni`
(
 `alumni_id`  int NOT NULL ,
 `first_name` varchar(40) NOT NULL ,
 `last_name`  varchar(40) NOT NULL ,
 `field_1`    varchar(3) NOT NULL ,
 `field_2`    varchar(3) NULL ,
 `dob`        date NULL ,
 `tax_id`     int NULL ,
 `phone_no`   varchar(20) NULL ,

PRIMARY KEY (`alumni_id`),
UNIQUE KEY `AK1_alumni` (`tax_id`)
);


CREATE TABLE `Client`
(
 `client_id`   int NOT NULL ,
 `client_id`   int NULL ,
 `client_name` varchar(40) NOT NULL ,
 `first_name`  varchar(40) NOT NULL ,
 `address`     varchar(60) NOT NULL ,
 `last_name`   varchar(40) NOT NULL ,
 `industry`    varchar(20) NULL ,
 `phone_no`    varchar(20) NULL ,
 `client`      int NULL ,

PRIMARY KEY (`client_id`),
PRIMARY KEY (`client_id`)
);

CREATE TABLE `Industry_prospects`
(
 `industry` varchar(20) NOT NULL ,
 `outlook`  varchar(20) NULL ,

PRIMARY KEY (`industry`)
);

CREATE TABLE `Job`
(
 `job_id`           int NOT NULL ,
 `job_name`         varchar(40) NOT NULL ,
 `description`      varchar(3) NOT NULL ,
 `level`            varchar(2) NULL ,
 `job_length_weeks` int NULL ,
 `start_date`       date NULL ,
 `in_area`          boolean NULL ,
 `alumni`           int NULL ,
 `client`           int NULL ,

PRIMARY KEY (`job_id`)
);

CREATE TABLE `Takes_job`
(
 `participant_id` int NOT NULL ,
 `job_id`         int NOT NULL ,

PRIMARY KEY (`participant_id`, `job_id`),
KEY `FK_takes_job_49` (`job_id`),
CONSTRAINT `FK_takes_job_49` FOREIGN KEY `FK_takes_job_49` (`job_id`) REFERENCES `Job` (`job_id`) ON DELETE CASCADE
);


CREATE TABLE alumni (




 alumni_id INT PRIMARY KEY,


 first_name VARCHAR(40) NOT NULL,


 last_name VARCHAR(40) NOT NULL,


 field_1 VARCHAR(3) NOT NULL,


 field_2 VARCHAR(3),


 dob DATE,


 tax_id INT UNIQUE,


 phone_no VARCHAR(20)


 );







CREATE TABLE client (


 client_id INT PRIMARY KEY,


 client_name VARCHAR(40) NOT NULL,


 address VARCHAR(60) NOT NULL,


 industry VARCHAR(20)


);







CREATE TABLE client (


 client_id INT PRIMARY KEY,


 first_name VARCHAR(40) NOT NULL,


 last_name VARCHAR(40) NOT NULL,


 phone_no VARCHAR(20),


 client INT


);







CREATE TABLE job (


 job_id INT PRIMARY KEY,


 job_name VARCHAR(40) NOT NULL,


 description VARCHAR(3) NOT NULL,


 level VARCHAR(2),


 job_length_weeks INT,


 start_date DATE,


 in_school BOOLEAN,


 alumni INT,


 client INT


);












-- Altering the tables to establish the relationships via FOREIGN KEYs







ALTER TABLE participant


ADD FOREIGN KEY(client)


REFERENCES client(client_id)


ON DELETE SET NULL;







ALTER TABLE job


ADD FOREIGN KEY(alumni)


REFERENCES alumni(alumni_id)


ON DELETE SET NULL;







ALTER TABLE job


ADD FOREIGN KEY(client)


REFERENCES client(client_id)


ON DELETE SET NULL;

















CREATE TABLE takes_job (


 participant_id INT,


 job_id INT,


 PRIMARY KEY(participant_id, job_id),


 FOREIGN KEY(participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,


 FOREIGN KEY(job_id) REFERENCES job(job_id) ON DELETE CASCADE


);

















/*


-- If needed to quickly delete and re-build the tables:






SET FOREIGN_KEY_CHECKS = 0;






DROP TABLE client;


DROP TABLE job;


DROP TABLE participant;


DROP TABLE takes_job;


DROP TABLE alumni;






SET FOREIGN_KEY_CHECKS = 1;






*/







-- Populating the tables







INSERT INTO alumni VALUES


(1,  'James', 'Smith', 'Position', NULL, '1985-04-20', 12345, '+491774553676'),


(2, 'Stefanie',  'Martin',  'Position', NULL,  '1970-02-17', 23456, '+491234567890'),


(3, 'Steve', 'Wang',  'MAN', 'Position', '1990-11-12', 34567, '+447840921333'),


(4, 'Friederike',  'Müller-Rossi', 'Position', 'ITA', '1987-07-07',  45678, '+492345678901'),


(5, 'Isobel', 'Ivanova', 'Position', 'ENG', '1963-05-30',  56789, '+491772635467'),


(6, 'Niamh', 'Murphy', 'Position', 'IRI', '1995-09-08',  67890, '+491231231232');












INSERT INTO client VALUES


(101, 'Big Business Federation', '123 Falschungstraße, 10999 Berlin', 'NGO'),


(102, 'eCommerce GmbH', '27 Ersatz Allee, 10317 Berlin', 'Retail'),


(103, 'AutoMaker AG',  '20 Künstlichstraße, 10023 Berlin', 'Auto'),


(104, 'Banko Bank',  '12 Betrugstraße, 12345 Berlin', 'Banking'),


(105, 'WeMoveIt GmbH', '138 Arglistweg, 10065 Berlin', 'Logistics');












INSERT INTO participant VALUES


(101, 'Marina', 'Berg','491635558182', 101),


(102, 'Andrea', 'Duerr', '49159555740', 101),


(103, 'Philipp', 'Probst',  '49155555692', 102),


(104, 'René',  'Brandt',  '4916355546',  102),


(105, 'Susanne', 'Shuster', '49155555779', 102),


(106, 'Christian', 'Schreiner', '49162555375', 101),


(107, 'Harry', 'Kim', '49177555633', 101),


(108, 'Jan', 'Nowak', '49151555824', 101),


(109, 'Pablo', 'Garcia',  '49162555176', 101),


(110, 'Melanie', 'Dreschler', '49151555527', 103),


(111, 'Dieter', 'Durr',  '49178555311', 103),


(112, 'Max', 'Mustermann', '49152555195', 104),


(113, 'Maxine', 'Mustermann', '49177555355', 104),


(114, 'Heiko', 'Fleischer', '49155555581', 105);












INSERT INTO job VALUES


(12, 'Chase', 'ENG', 'A1', 10, '2020-02-01', TRUE,  1, 105),


(13, 'Visa', 'ENG', 'A2', 40, '2019-11-12',  FALSE, 6, 101),


(14, 'Honda', 'ENG', 'B2', 40, '2019-11-12', FALSE, 6, 101),


(15, 'Firestone', 'ENG', 'C1', 40, '2019-11-12', FALSE, 6, 101),


(16, 'WalGreens', 'ENG', 'B1', 15, '2020-01-15', TRUE, 3, 103),


(17, 'Walmart', 'ENG', 'B1',  18, '2020-04-03', FALSE, 2, 101),


(18, 'CVS', 'ENG', 'A2', 8, '2020-02-14', TRUE, 4, 102),


(19, 'Toyota', 'ENG', 'B2', 10, '2020-03-29', FALSE, 1, 104),


(20, 'Hyundai', 'RUS', 'C1',  4, '2020-04-08',  FALSE, 5, 103);












INSERT INTO takes_job VALUES


(101, 15),


(101, 17),


(102, 17),


(103, 18),


(104, 18),


(105, 18),


(106, 13),


(107, 13),


(108, 13),


(109, 14),


(109, 15),


(110, 16),


(110, 20),


(111, 16),


(114, 12),


(112, 19),


(113, 19);












-- ---------------------------------------------------------------------------------------------------------




















-- Get all the details from the alumnis table.


SELECT *


FROM alumni;







-- Get the last names and birthdays of all the alumnis.


SELECT last_name, dob


FROM alumni;












-- Find all jobs in English


SELECT *


FROM job


WHERE field = 'ENG';







SELECT *


FROM job


WHERE field = 'ENG'


ORDER BY start_date DESC;












-- Find all jobs in English at B2 level


SELECT *


FROM job


WHERE field = 'ENG' AND level = 'B2';












-- Find all jobs in English and all jobs at B2 level


SELECT *


FROM job


WHERE field = 'ENG' OR level = 'C1';












-- Find all jobs where the field is not English and the level is not C1


SELECT *


FROM job


WHERE NOT field = 'ENG' OR level = 'C1';












-- Get the names and phone numbers of all alumnis born before 1990.


SELECT first_name, last_name, phone_no


FROM alumni


WHERE dob < '1990-01-01';







-- Do the same as before but use aliasing.


SELECT first_name AS First Name, last_name AS 'Last Name', phone_no AS Telephone


FROM alumni


WHERE dob < '1990-01-01';












-- Find all jobs which start in January


SELECT *


FROM job


WHERE start_date BETWEEN '2020-01-01' AND '2020-01-31';












-- Find some intermediate jobs


SELECT job_name


FROM job


WHERE job_name LIKE '%intern%';












-- Find participants whose last names are Garcia, Nowak or Mustermann


SELECT first_name, last_name


FROM participant


WHERE last_name IN ('Garcia', 'Nowak', 'Mustermann');












-- Identify alumnis who only reference one or two fields


SELECT *


FROM alumni


WHERE field_2 IS NULL;












SELECT *


FROM alumni


WHERE field_2 IS NOT NULL;












-- Find the average length of a job


SELECT AVG(job_length_weeks)


FROM job;












-- Find the average length of a job, grouped by client


SELECT client, AVG(job_length_weeks)


FROM job


GROUP BY client;












-- Count the number of jobs


SELECT COUNT(*)


FROM job;












-- Count the number of jobs in English


SELECT COUNT(*)


FROM job


WHERE field = 'Eng';












-- How many jobs does the client offer in each field?


SELECT field, COUNT(field)


FROM job


GROUP BY field;












-- Find all the alumnis whose birthdate is above the average alumni's birthdate


SELECT *


FROM alumni


WHERE dob >


   (SELECT AVG(dob)


   FROM alumni);







-- Get the job details for all jobs which take place at the client's offices.


SELECT job.job_id, job.job_name, job.field, client.client_name, client.address


FROM job


JOIN client


ON job.client = client.client_id


WHERE job.in_school = FALSE;












-- Get the job details for all jobs which take place at the client's offices, 






SELECT job.job_id, job.job_name, job.field, client.client_name, client.address


FROM job


JOIN client


ON job.client = client.client_id


WHERE job.in_school = FALSE AND job.alumni = 2;












-- Get all participants in reference by Field of Study


SELECT participant.first_name, participant.last_name


FROM participant


JOIN takes_job ON takes_job.participant_id = participant.participant_id


JOIN job ON takes_job.job_id = job.job_id


WHERE takes_job.job_id =


   (SELECT takes_job.job_id


   WHERE job.alumni = 6);












-- NEW TABLE ALERT!







CREATE TABLE industry_prospects (


 industry VARCHAR(20) PRIMARY KEY,


 outlook VARCHAR(20)


);







INSERT INTO industry_prospects VALUES


('Retail', 'Good'),


('Hospitality', 'Poor'),


('Logistics', 'Terrible'),


('Responsibility', 'Great'),


('Events', 'Good');












SELECT client.client_name, client.industry, industry_prospects.outlook


FROM client


JOIN industry_prospects


ON client.industry = industry_prospects.industry;







SELECT client.client_name, client.industry, industry_prospects.outlook


FROM client


LEFT JOIN industry_prospects


ON client.industry = industry_prospects.industry;







SELECT client.client_name, client.industry, industry_prospects.outlook


FROM client


RIGHT JOIN industry_prospects


ON client.industry = industry_prospects.industry;







SELECT client.client_name, client.industry, industry_prospects.outlook


FROM client


FULL JOIN industry_prospects


ON client.industry = industry_prospects.industry;