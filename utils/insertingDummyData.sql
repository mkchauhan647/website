 -- Inserting dummy data for testing .... 
 
 
 -- Insert into users table
INSERT INTO users (email, passwords)
VALUES
('user1@example.com', 'password1'),
('user2@example.com', 'password2'),
('user3@example.com', 'password3'),
('user4@example.com', 'password4'),
('user5@example.com', 'password5'),
('user6@example.com', 'password6'),
('user7@example.com', 'password7'),
('user8@example.com', 'password8'),
('user9@example.com', 'password9'),
('user10@example.com', 'password10');

-- Insert into fundraisers table
INSERT INTO fundraisers (userid, title, description, category, goalamount, currentamount, startdate, enddate)
VALUES
(1, 'Fundraiser 1', 'Description for Fundraiser 1', 'Category 1', 500, 250, '2023-06-01', '2023-06-30'),
(2, 'Fundraiser 2', 'Description for Fundraiser 2', 'Category 2', 1000, 750, '2023-06-01', '2023-07-15'),
(3, 'Fundraiser 3', 'Description for Fundraiser 3', 'Category 3', 2000, 1800, '2023-06-01', '2023-07-31'),
(4, 'Fundraiser 4', 'Description for Fundraiser 4', 'Category 1', 1500, 1200, '2023-06-01', '2023-07-31'),
(5, 'Fundraiser 5', 'Description for Fundraiser 5', 'Category 2', 800, 400, '2023-06-01', '2023-07-15'),
(6, 'Fundraiser 6', 'Description for Fundraiser 6', 'Category 3', 3000, 2500, '2023-06-01', '2023-08-15'),
(7, 'Fundraiser 7', 'Description for Fundraiser 7', 'Category 1', 1200, 900, '2023-06-01', '2023-07-31'),
(8, 'Fundraiser 8', 'Description for Fundraiser 8', 'Category 2', 600, 300, '2023-06-01', '2023-07-15'),
(9, 'Fundraiser 9', 'Description for Fundraiser 9', 'Category 3', 4000, 3500, '2023-06-01', '2023-08-31'),
(10, 'Fundraiser 10', 'Description for Fundraiser 10', 'Category 1', 2000, 1500, '2023-06-01', '2023-07-31');

-- Insert into demographics table
INSERT INTO demographics (userid, age, gender, location)
VALUES
(1, 25, 'Male', 'Location 1'),
(2, 30, 'Female', 'Location 2'),
(3, 35, 'Male', 'Location 3'),
(4, 40, 'Female', 'Location 4'),
(5, 45, 'Male', 'Location 5'),
(6, 50, 'Female', 'Location 6'),
(7, 55, 'Male', 'Location 7'),
(8, 60, 'Female', 'Location 8'),
(9, 65, 'Male', 'Location 9'),
(10, 70, 'Female', 'Location 10');

-- Insert into interests table
INSERT INTO interests (userid, categories)
VALUES
(1, 'Category 1, Category 2'),
(2, 'Category 2, Category 3'),
(3, 'Category 3, Category 4'),
(4, 'Category 4, Category 5'),
(5, 'Category 5, Category 6'),
(6, 'Category 6, Category 7'),
(7, 'Category 7, Category 8'),
(8, 'Category 8, Category 9'),
(9, 'Category 9, Category 10'),
(10, 'Category 10, Category 1');

-- Insert into interactions table
INSERT INTO interactions (userid, fundid, donationamount, donationdatee)
VALUES
(1, 1, 50.00, '2023-06-05'),
(2, 2, 100.00, '2023-06-10'),
(3, 3, 75.00, '2023-06-15'),
(4, 4, 120.00, '2023-06-20'),
(5, 5, 200.00, '2023-06-25'),
(6, 6, 150.00, '2023-06-30'),
(7, 7, 80.00, '2023-07-05'),
(8, 8, 60.00, '2023-07-10'),
(9, 9, 250.00, '2023-07-15'),
(10, 10, 180.00, '2023-07-20');
