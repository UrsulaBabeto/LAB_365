Criar uma tabela, inserir 3 conjuntos de dados, 
através do alter inserir uma nova coluna, 
atualizar e deletar alguma coluna da tabela


CREATE TABLE usuario(
id serial,
nome varchar(60) not null,
funcao varchar(40) not null	
)

select * from usuario

ALTER TABLE usuario ADD COLUMN cpf  char(11) not null;
insert into usuario (nome, funcao, cpf) values ('oi','lala','12345678900')
UPDATE usuario SET cpf=33345678990
delete from usuario where id=1