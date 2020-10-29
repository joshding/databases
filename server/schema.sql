DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages
(
  id INT NOT NULL
  AUTO_INCREMENT,
  text VARCHAR
  (255),
  usersId INT
  (11),
  roomsId INT
  (11),
  PRIMARY KEY
  (id)
);

  -- ---
  -- Table 'Users'
  --
  -- ---

  DROP TABLE IF EXISTS Users;

  CREATE TABLE Users
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  name VARCHAR
    (255) NULL DEFAULT NULL,
  PRIMARY KEY
    (id)
);

    -- ---
    -- Table 'Rooms'
    --
    -- ---

    DROP TABLE IF EXISTS Rooms;

    CREATE TABLE Rooms
    (
      id INT NOT NULL
      AUTO_INCREMENT,
  name VARCHAR
      (255) NULL DEFAULT NULL,
  PRIMARY KEY
      (id)
);

      -- ---
      -- Table 'roomusers'
      --
      -- ---

      DROP TABLE IF EXISTS roomusers;

      CREATE TABLE roomusers
      (
        id INT NOT NULL
        AUTO_INCREMENT,
  usersId INT NOT NULL,
  roomsId INT NULL DEFAULT NULL,
  PRIMARY KEY
        (id)
);

        -- ---
        -- Table 'Friends'
        --
        -- ---

        DROP TABLE IF EXISTS Friends;

        CREATE TABLE Friends
        (
          id INT NOT NULL
          AUTO_INCREMENT,
  usersId INT NOT NULL,
  friendId INT NOT NULL,
  PRIMARY KEY
          (id)
);

          -- ---
          -- Foreign Keys
          -- ---

          ALTER TABLE Messages ADD FOREIGN KEY (usersId) REFERENCES Users (id);
          ALTER TABLE Messages ADD FOREIGN KEY (roomsId) REFERENCES Rooms (id);
          ALTER TABLE roomusers ADD FOREIGN KEY (usersId) REFERENCES Users (id);
          ALTER TABLE roomusers ADD FOREIGN KEY (roomsId) REFERENCES Rooms (id);
          ALTER TABLE Friends ADD FOREIGN KEY (usersId) REFERENCES Users (id);
          ALTER TABLE Friends ADD FOREIGN KEY (friendId) REFERENCES Users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roomusers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`text`,`usersId`,`roomsId`) VALUES
-- ('','','','');
-- INSERT INTO `Users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `roomusers` (`id`,`usersId`,`roomsId`) VALUES
-- ('','','');
-- INSERT INTO `Friends` (`id`,`usersId`,`friendId`) VALUES
-- ('','','');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

