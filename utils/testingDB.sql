-- This file is used for the testing our datbase doing some crud operations to ensure that all the setup are correct.

use fundraiser;

alter table users 
modify column email varchar(100) unique;
-- rename column passwords to password;
select email from users where email='mkchauhan6447@gmail.com';
select * from users;

delete from users 
where userid=2;

update users
set email = 'user1modify@example.com'
where userid = 1 and password='password1';


select * from users 
where email = 'mkchauhan647@gmail.com' and password = 'password1';

alter table users
rename column password to passwords