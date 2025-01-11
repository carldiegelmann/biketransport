CREATE TABLE transport_orders (
                                  id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                  customer VARCHAR(255) NOT NULL,
                                  start_location VARCHAR(255) NOT NULL,
                                  destination VARCHAR(255) NOT NULL,
                                  motorcycle_type VARCHAR(255),
                                  transport_date DATE,
                                  fee DOUBLE NOT NULL
);