use tecnicoMoura;

CREATE TABLE Pessoa (
    Codigo INT IDENTITY(1,1) PRIMARY KEY,
    Nome VARCHAR(50) not null,
    DataNascimento DATE,
    Inativo BIT not null,
    Nacionalidade SMALLINT CHECK (Nacionalidade IN (1, 2)) not null,
    RG VARCHAR(20),
    Passaporte VARCHAR(20)
);

INSERT INTO Pessoa (Nome, DataNascimento, Inativo, Nacionalidade, RG, Passaporte)
VALUES 
('Jo�o', '1990-05-15', 0, 1, '123456', 'AB123456'),
('Maria', '1985-08-20', 1, 2, '987654', 'CD987654');

select * from Pessoa;