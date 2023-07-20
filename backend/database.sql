CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE language (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  languageName VARCHAR(150),
  logo VARCHAR(150)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE project (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  projectName VARCHAR(150) NOT NULL,
  projectImage VARCHAR(150),
  link VARCHAR(250)
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

INSERT INTO `language` VALUES (1, "HTML", "html.png"), (2, "CSS", "css.png"), (3, "JavaScript", "js.png"), (4, "React JS", "react.png"), (5, "Tailwind CSS", "tailwind.png"), (6, "Node JS", "node.png"), (7, "Express JS", "express.png"), (8, "Mysql", "mysql.png"), (9, "GitHub", "github.png"), (10, "VS Code", "vscode.png");

INSERT INTO `project` VALUES (1, "Who wiz it?", "orange.jpg", "https://who-wiz-it.remote-fr-2.wilders.dev/"), (2, "Choîteau - Hackaton", "bunny.jpg", "https://choixteau.netlify.app/"), (3, "Emmaus Connect - Hackaton", "tea.jpg",  "https://github.com/OyhanaM/Hackaton-Emmaus-Connect");

INSERT INTO `user`VALUES (1, "oyhana.mahjoubi@gmail.com", "$argon2id$v=19$m=65536,t=5,p=1$bA2B4KWtmuBSkYWIHlD9ig$tb9JVzK+afCKJ7TULBk2QFknTBwekcUWeKdfZ+OVfzk" )

