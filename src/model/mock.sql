INSERT INTO users(
    user_name,
    email,
    password,
    is_admin
) VALUES
(
    'Baxtiyor',
    'baxti@gmail.com',
    '123456Baxa',
    false
),
(
    'Nodir123',
    'No@gmail.com',
    '123456iii',
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


SELECT *
FROM ocherds 
INNER JOIN disease_trends
ON ocherds.dise_tend_id = disease_trends.dis_tend_id;