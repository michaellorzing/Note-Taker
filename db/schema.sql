DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);

INSERT INTO notes
	(title, body, created_at)
VALUES	 
	("Grocery List", "Milk, eggs, bread", NOW());
    
 INSERT INTO notes
	(title, body, created_at)
VALUES	 
	("Weekend Plans", "Dinner: Saturday @ 6, Game of Thrones: Sunday @ 9", NOW());
 
 INSERT INTO notes
	(title, body, created_at)
VALUES	 
	("300 Atrium Dr", "Class from 10:30-2:30", NOW());
    
    
SELECT * FROM notes;