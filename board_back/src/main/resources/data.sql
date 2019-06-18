insert into user(account, password, username, email)
values
('user 1', '1234', 'username 1', 'user1@dgsw.hs.kr'),
('user 2', '1234', 'username 2', 'user2@dgsw.hs.kr'),
('user 3', '1234', 'username 3', 'user3@dgsw.hs.kr'),
('user 4', '1234', 'username 4', 'user4@dgsw.hs.kr'),
('user 5', '1234', 'username 5', 'user5@dgsw.hs.kr');


insert into post(user_id, title, content) values
(1, 'title 1', 'content content content 1'),
(1, 'title 2', 'content content content 2'),
(1, 'title 3', 'content content content 3'),
(1, 'title 4', 'content content content 4'),
(2, 'title 5', 'content content content 5'),
(2, 'title 6', 'content content content 6'),
(3, 'title 7', 'content content content 7');