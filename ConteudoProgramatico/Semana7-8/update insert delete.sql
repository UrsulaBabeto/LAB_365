INSERT INTO setor (nome) values('Vendas');

INSERT INTO setor (nome) values('RH');

INSERT INTO setor (nome) values('Comercial');

INSERT INTO setor (nome) values ('Financeiro'),
                                ('Marketing'),
                                ('Serviços Gerais');

INSERT INTO funcionario (nome, cpf, rg, id_funcionario_setor, salário) values ('Gabriel', '82965432521', '40547859632', 5 , 2632);

INSERT INTO funcionario (nome, cpf, rg, id_funcionario_setor, salário) values ('Daniel', '12345678910', '12345678910', 5 , '2000' );

INSERT INTO funcionario (nome, cpf, rg, id_funcionario_setor, salário) values ('Daniel', '12345678910', '12345678910', 5 , '12000' );

INSERT INTO funcionario (nome, cpf, rg, id_funcionario_setor, salário) values ('William', '54654545555', '32659874521', 5 , '250000' );


UPDATE funcionario SET nome='Rodolfo' WHERE id=1;

UPDATE funcionario SET salário='5000' WHERE id=1;

UPDATE funcionario SET salário='7000' WHERE id=4;

UPDATE funcionario SET cpf='15632547895' WHERE id=2;

UPDATE funcionario SET cpf='15665547895' WHERE id=1;

UPDATE funcionario SET nome='Tom' WHERE id=2;


DELETE FROM funcionario WHERE id=5;


--CRUD => CREATE READ UPDATE DELETE