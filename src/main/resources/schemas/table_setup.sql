DROP TABLE IF EXISTS test_table;

CREATE TABLE test_table (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO test_table(first_name, last_name) VALUES ('first_name', 'last_name');