create database if not exists fundraiser;   -- creating a database fundraiser for our website if 

use fundraiser; -- using the created database. 

-- create tables users , fundraisers, demographic, interests, interactions with required constraints 

create table if not exists test (
id int primary key auto_increment,
firstname varchar(255),
lastname varchar(255)
);


create table if not exists users (
userid int primary key auto_increment,
email varchar(50),
passwords varchar(20));

create table if not exists fundraisers(
	fundid int primary key auto_increment,
    userid int ,
    foreign key (userid) references users(userid),
	title varchar(100),
    description varchar(255),
    category varchar(50),
    goalamount int ,
    currentamount int,
    startdate current_date(),
    enddate date
    );
    




create table if not exists demographics(
	id int primary key auto_increment,
    userid int,
    foreign key (userid) references  users(userid),
    age int,
    gender varchar(10),
    location varchar(30)
    );
    
create table if not exists  interests(
 id int primary key auto_increment,
 userid int ,
 foreign key (userid) references users(userid),
 categories varchar(255)
 );
  
  create table if not exists interactions(
  id int primary key auto_increment,
  userid int,
  fundid int,
  foreign key (userid) references users(userid),
  foreign key (fundid) references fundraisers(fundid),
  donationamount decimal,
  donationdatee date
  );
  

  
  
  
  
  
 
 
 
 
 
 
