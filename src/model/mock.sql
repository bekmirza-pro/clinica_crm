INSERT INTO users(
    user_name,
    email,
    password,
    is_admin
) VALUES (
    'bekmirza007',
    'by@mail.com',
    '123456bek',
    true
),
(
    'murod123',
    'm@gmail.com',
    '123456murod',
    false
),
(
    'mohir123',
    'm@gmail.com',
    '123456mohir',
    false
);


INSERT INTO clinics(
    clinica_name
) VALUES 
('Dardiga_darmon');



INSERT INTO disease_trends(
    dis_tend_name,
    clinica_id
) VALUES 
('Yurak kasalligi', 1),
('Ko`z kasalligi', 1),
('Quloq kasalligi', 1);



INSERT INTO ocherds(
    users_name,
    dise_tend_id
) VALUES 
('Javohir', 1),
('Bekmirza', 2);