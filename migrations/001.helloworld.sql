-- UP
create table User(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

create table Poruka(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   tekst TEXT,
   userId INTEGER REFERENCES User(id)
);

INSERT INTO User(name,email) VALUES ('Milos', 'milos@gmail.com');
INSERT INTO User(name,email) VALUES ('Milos1', 'milos1@gmail.com');
INSERT INTO User(name,email) VALUES ('Milos2', 'milos2@gmail.com');

INSERT INTO Poruka(tekst,userId) VALUES ('Milos je lep', 1);
INSERT INTO Poruka(tekst,userId) VALUES ('Milos je glup', 2);
INSERT INTO Poruka(tekst,userId) VALUES ('Milos je pametan', 1);
-- DOWN
DROP TABLE User;
DROP TABLE Poruka;
