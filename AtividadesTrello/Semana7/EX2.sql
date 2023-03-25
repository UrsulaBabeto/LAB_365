CREATE TABLE cliente(
	id 			SERIAL primary key,
	nome 			VARCHAR(70) not null,
	data_nasc		 DATE not null,
	rg 			CHAR(11) not null,
	cpf 			CHAR(11) not null,
	email 		VARCHAR(30) not null,
	telefone 		VARCHAR(15) not null,
	endereço 		VARCHAR(130) nott null
)

CREATE TABLE produto(
	id 			SERIAL primary key,
	nome 			VARCHAR(30) not null,
	quantidade  	INTEGER not null,
	valor 		NUMERIC(8,2) not null,
	categoria 		VARCHAR(30) not null,
	id_cliente 	INTEGER,
	FOREIGN KEY(id_cliente) REFERENCES cliente(id)
)
