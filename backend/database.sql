{/*CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;*/}

CREATE TABLE language (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT NULL,
  logo VARCHAR(150),
  languageName VARCHAR(150),
  CONSTRAINT fk_user_project
  FOREIGN KEY (user_id)
  REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE project (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  projectName VARCHAR(150) NOT NULL,
  projectImage VARCHAR(150),
  link VARCHAR(150)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE projet_language (
  id_project INT NOT NULL,
  id_language INT NOT NULL,
  CONSTRAINT fk_project_language
  FOREIGN KEY (id_project)
  REFERENCES project(id),
  CONSTRAINT fk_language_project
  FOREIGN KEY (id_language)
  REFERENCES language(id)
  )ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;






