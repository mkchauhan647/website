-- Inserting dummy data into 'users' table
INSERT INTO users (email, passwords)
VALUES
    ('john@example.com', 'password123'),
    ('jane@example.com', 'securepass'),
    ('mark@example.com', 'secret123'),
    ('emma@example.com', 'pass123'),
    ('michael@example.com', 'password456'),
    ('sarah@example.com', 'secure123'),
    ('david@example.com', 'pass456'),
    ('olivia@example.com', 'password789'),
    ('james@example.com', 'secure456'),
    ('emily@example.com', 'pass789');

-- Inserting dummy data into 'fundraisers' table
INSERT INTO fundraisers (email, title, description, category, goalamount, currentamount, startdate, enddate)
VALUES
    ('john@example.com', 'Fundraiser 1', 'Helping those in need', 'Charity', 5000, 2000, '2023-06-01', '2023-07-01'),
    ('jane@example.com', 'Fundraiser 2', 'Support education', 'Education', 10000, 500, '2023-06-15', '2023-08-15'),
    ('mark@example.com', 'Fundraiser 3', 'Save the environment', 'Environment', 8000, 3000, '2023-07-01', '2023-09-01'),
    ('emma@example.com', 'Fundraiser 4', 'Providing clean water', 'Charity', 3000, 1500, '2023-06-10', '2023-07-10'),
    ('michael@example.com', 'Fundraiser 5', 'Helping homeless shelters', 'Social Causes', 6000, 200, '2023-06-20', '2023-08-20'),
    ('sarah@example.com', 'Fundraiser 6', 'Promoting arts and culture', 'Arts', 4000, 1000, '2023-07-05', '2023-09-05'),
    ('david@example.com', 'Fundraiser 7', 'Supporting animal welfare', 'Environment', 7000, 2500, '2023-06-15', '2023-08-15'),
    ('olivia@example.com', 'Fundraiser 8', 'Music for everyone', 'Arts', 2000, 500, '2023-06-25', '2023-07-25'),
    ('james@example.com', 'Fundraiser 9', 'Promoting health awareness', 'Health', 5000, 300, '2023-07-10', '2023-09-10'),
    ('emily@example.com', 'Fundraiser 10', 'Supporting social causes', 'Social Causes', 4000, 1000, '2023-07-01', '2023-08-01');

-- Inserting dummy data into 'demographics' table
INSERT INTO demographics (email, age, gender, location)
VALUES
    ('john@example.com', 28, 'Male', 'New York'),
    ('jane@example.com', 32, 'Female', 'London'),
    ('mark@example.com', 35, 'Male', 'Sydney'),
    ('emma@example.com', 29, 'Female', 'Paris'),
    ('michael@example.com', 27, 'Male', 'Berlin'),
    ('sarah@example.com', 30, 'Female', 'Toronto'),
    ('david@example.com', 34, 'Male', 'Tokyo'),
    ('olivia@example.com', 31, 'Female', 'Rome'),
    ('james@example.com', 26, 'Male', 'Barcelona'),
    ('emily@example.com', 33, 'Female', 'Amsterdam');


-- Inserting dummy data into 'interests' table
INSERT INTO interests (email, categories)
VALUES
    ('john@example.com', 'Charity, Social Causes'),
    ('jane@example.com', 'Education, Technology'),
    ('mark@example.com', 'Environment, Health'),
    ('emma@example.com', 'Charity, Arts'),
    ('michael@example.com', 'Social Causes, Education'),
    ('sarah@example.com', 'Environment, Animal Welfare'),
    ('david@example.com', 'Charity, Health'),
    ('olivia@example.com', 'Arts, Music'),
    ('james@example.com', 'Health, Technology'),
    ('emily@example.com', 'Social Causes, LGBTQ+');


-- Inserting dummy data into 'interactions' table
INSERT INTO interactions (email, fundid, donationamount, donationdatee)
VALUES
    ('john@example.com', 1, 100, '2023-06-05'),
    ('jane@example.com', 2, 200, '2023-06-10'),
    ('mark@example.com', 3, 150, '2023-06-12'),
    ('emma@example.com', 4, 50, '2023-06-15'),
    ('michael@example.com', 5, 300, '2023-06-20'),
    ('sarah@example.com', 6, 100, '2023-06-25'),
    ('david@example.com', 7, 200, '2023-06-28'),
    ('olivia@example.com', 8, 75, '2023-07-02'),
    ('james@example.com', 9, 250, '2023-07-05'),
    ('emily@example.com', 10, 150, '2023-07-08');

