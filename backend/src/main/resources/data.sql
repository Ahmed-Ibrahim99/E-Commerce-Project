INSERT INTO country(id, code, name)
VALUES (1, 'EGY', 'EGYPT');

INSERT INTO state (id, name, country_id)
VALUES (1, 'Alexandria', 1),
       (2, 'Aswan', 1),
       (3, 'Asyut', 1),
       (4, 'Beheira', 1),
       (5, 'Beni Suef', 1),
       (6, 'Cairo', 1),
       (7, 'Dakahlia', 1),
       (8, 'Damietta', 1),
       (9, 'Faiyum', 1),
       (10, 'Gharbia', 1),
       (11, 'Giza', 1),
       (12, 'Ismailia', 1),
       (13, 'Kafr El Sheikh', 1),
       (14, 'Luxor', 1),
       (15, 'Matrouh', 1),
       (16, 'Minya', 1),
       (17, 'Monufia', 1),
       (18, 'New Valley', 1),
       (19, 'North Sinai', 1),
       (20, 'Port Said', 1),
       (21, 'Qalyubia', 1),
       (22, 'Qena', 1),
       (23, 'Red Sea', 1),
       (24, 'Sharqia', 1),
       (25, 'Sohag', 1),
       (26, 'South Sinai', 1),
       (27, 'Suez', 1);

INSERT INTO product_category(id, category_name)
VALUES (1, 'MOBILES'),
       (2, 'GAMING'),
       (3, 'TELEVISIONS'),
       (4, 'HEADPHONES'),
       (5, 'LAPTOPS'),
       (6, 'CAMERAS'),
       (7, 'TABLETS'),
       (8, 'WEARABLES');


INSERT INTO roles (id, role_name)
VALUES (1, 'USER_ROLE'),
       (2, 'ADMIN_ROLE');


INSERT INTO product (id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (1, now(), 'This is Apple Watch Series 8', 'assets/images/Wearables/Apple-watch-series-8',
        'Apple Watch Series 8', 900, 8,
        CONCAT(LEFT('Apple Watch Series 8', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 8), 2), '-', 1));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (2, now(), 'This is Iphone 14 pro max', 'assets/images/Mobiles/Apple-14-pro-max', 'Iphone 14 Pro Max', 1200, 1,
        CONCAT(LEFT('Iphone 14 Pro Max', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 1), 2), '-', 2));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (3, now(), 'This is Playstation 5', 'assets/images/Gaming/playstation-5', 'Playstation 5', 600, 2,
        CONCAT(LEFT('Playstation 5', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 2), 2), '-', 3));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (4, now(), 'Sony WH-1000XM4 Wireless Premium Noise Canceling Headphones',
        'assets/images/Headphones/sony-wh-1000xm4', 'Sony WH-1000XM4 Headphones', 350, 4,
        CONCAT(LEFT('Sony WH-1000XM4 Headphones', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 4), 2), '-', 4));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (5, now(), 'Dell Vostro 3510 Laptop, Intel Core i3-1115G4, 15.6 Inch FHD, Intel UHD Graphics, Ubuntu',
        'assets/images/Laptops/dell-vostro', 'Dell Vostro 3510 Laptop', 800, 5,
        CONCAT(LEFT('Dell Vostro 3510 Laptop', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 5), 2), '-', 5));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (6, now(), 'BRAVIA XR 42" Class A90K 4K HDR OLED TV with Google TV (2022)',
        'assets/images/Televisions/Bravia-xr-42.png', 'BRAVIA XR 42', 800, 3,
        CONCAT(LEFT('BRAVIA XR 42', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 6), 2), '-', 6));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (7, now(), 'Sony Alpha 7R V Full-frame Mirrorless Interchangeable Lens Camera',
        'assets/images/Cameras/Alpha-7r.png', 'Sony Alpha 7R', 800, 6,
        CONCAT(LEFT('Sony Alpha 7R', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 7), 2), '-', 7));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (8, now(), 'Lenovo Tab P11 Gen 2 (11″ MTK) Tablet', 'assets/images/Tablets/Lenovo-tab-p11.jpeg', 'Sony Alpha 7R',
        360, 7,
        CONCAT(LEFT('Lenovo Tab P11 Gen 2', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 8), 2), '-', 8));

INSERT INTO product
(id, date_created, product_description, image_url, product_name, product_price, category_id, sku)
VALUES (9, now(), 'Description The iPad Pro 12.9-inch (2022) comes with 12.9-inch display and Apples M2 processor',
        'assets/images/Tablets/Apple-ipad-pro.jpeg', 'iPad Pro 12.9-inch', 800, 7,
        CONCAT(LEFT('iPad Pro 12.9-inch', 3), '-', LEFT((SELECT category_name FROM product_category WHERE id = 9), 2), '-', 9));




