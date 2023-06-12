-- Active: 1686544414577@@myhackmysql.mysql.database.azure.com@3306
create database if not exists fundraiser;   -- creating a database fundraiser for our website if 

use fundraiser; -- using the created database. 

-- create tables users , fundraisers, demographic, interests, interactions with required constraints 

create table if not exists test (
id int primary key auto_increment,
firstname varchar(255),
lastname varchar(255)
);


create table if not exists users (
email varchar(255) primary key,
passwords varchar(20));

create table if not exists fundraisers(
	fundid int primary key auto_increment,
    email varchar(255) ,
    foreign key (email) references users(email),
	title varchar(100),
    description varchar(255),
    category varchar(50),
    goalamount int ,
    currentamount int,
    startdate date,
    enddate date
    );
    




create table if not exists demographics(
	id int primary key auto_increment,
    email varchar(255),
    foreign key (email) references  users(email),
    age int,
    gender varchar(10),
    location varchar(30)
    );
    
create table if not exists  interests(
 id int primary key auto_increment,
 email varchar(255) ,
 foreign key (email) references users(email),
 categories varchar(255)
 );
  
  create table if not exists interactions(
  id int primary key auto_increment,
  email varchar(255),
  fundid int,
  foreign key (email) references users(email),
  foreign key (fundid) references fundraisers(fundid),
  donationamount decimal,
  donationdatee date
  );
  
 
 
 
