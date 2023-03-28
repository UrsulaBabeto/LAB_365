CREATE TABLE produto (
	id serial primary key,
	descricao varchar(40) not null	
)

--comentario varchar ate 255 caracteres variaveis
--char para itens que nao variam de tamanho ex.: cpf

CREATE TABLE setor(
	id serial primary key,
	nome varchar(40) not null
)

CREATE TABLE pedido(
	id serial primary key,
	id_pedido_produto INTEGER,
	foreign key (id_pedido_produto) references produto(id)
)

CREATE TABLE IF NOT EXISTS cliente(
id serial primary key,
nome varchar(50)not null,
cpf char(11) not null,
rg char(11) not null
)

CREATE TABLE funcionario(
	id serial primary key,
	nome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null,
	id_funcionario_setor INTEGER,
	foreign key(id_funcionario_setor) references setor(id)
)

CREATE TABLE item (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(70) NOT NULL,
	preco NUMERIC(5,2) NOT NULL
)

CREATE TABLE dependentes(
	id SERIAL primary key,
	nome varchar(60) not null,
	idade smallint not null,
	cpf char(11) not null,
	rg char(11) not null,
	id_funcionario_dependente INTEGER,
	foreign key (id_funcionario_dependente) references funcionario(id)
)

CREATE DATABASE teste

CREATE TABLE test1(
nome varchar(60),
	id serial primary key,
	cpf char(11)
)

CREATE TABLE test2(
id serial primary key)
