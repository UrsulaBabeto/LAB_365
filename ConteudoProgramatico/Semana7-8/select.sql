SELECT * from funcionario

SELECT DISTINCT nome FROM funcionario
-- entre valores iguais retorna somente 1 deles

ALTER TABLE funcionario RENAME COLUMN comissao TO salario
ALTER TABLE funcionario ADD comissao decimal(11,2)

--atualiza valores de colunas ja existentes ou criadas apos a inserção de dos demais valores
UPDATE funcionario SET comissao=22 WHERE id=1;
UPDATE funcionario SET comissao=33 WHERE id=2;
UPDATE funcionario SET comissao=44 WHERE id=3;
UPDATE funcionario SET comissao=55 WHERE id=4;
UPDATE funcionario SET comissao=66 WHERE id=5;
UPDATE funcionario SET comissao=11 WHERE id=6;

SELECT salario,salario+comissao from funcionario;
SELECT salario*1.05 from funcionario;
SELECT salario*1.1 from funcionario;

SELECT salario FROM funcionario WHERE salario>=2000;
SELECT nome,salario FROM funcionario WHERE salario =9666.66;
SELECT nome FROM funcionario WHERE SALARIO <> 9666.66;
SELECT nome, salario FROM funcionario WHERE salario>6000;
SELECT nome, salario FROM funcionario WHERE salario <3000;
SELECT nome, salario+comissao FROM funcionario WHERE comissao <7000;
SELECT nome, salario FROM funcionario WHERE comissao<7000;
SELECT nome, comissao FROM funcionario WHERE comissao <>33;
SELECT * FROM funcionario;
SELECT nome, cpf FROM funcionario; 
SELECT nome, salário FROM funcionario;


SELECT nome FROM funcionario WHERE nome LIKE 'R%';
SELECT nome FROM funcionario WHERE nome LIKE '%su';
SELECT nome FROM funcionario WHERE nome LIKE '_o%';
SELECT nome FROM funcionario WHERE LOWER(nome) LIKE 'r%';

SELECT nome,salario FROM funcionario WHERE salario>2000 AND id=1;
SELECT nome,salario FROM funcionario WHERE salario>2000 OR id=1;

--like => como
-- underline nao importa o caractere onde ele é colocado
--tanto faz o que vem depois%; %tanto faz o que vem antes
-- <> DIFERENTE, = IGUAL, > MAIOR, < MENOR
--order by =>organizar em ordem crescente DESC, ordem decrescente

SELECT nome,cpf FROM funcionario ORDER BY nome;
SELECT * FROM funcionario ORDER BY id;
SELECT * FROM funcionario ORDER BY id DESC;
SELECT * FROM funcionario ORDER BY id ASC;

SELECT nome FROM funcionario WHERE salario IS null;
SELECT nome FROM funcionario WHERE salario = null;--busca campos nulos
SELECT nome,salario FROM funcionario WHERE NOT(salario<2000 AND id=2)--retorna salario maior que 2000 OU id diferente de 2

SELECT UPPER (nome) FROM funcionario
SELECT LOWER(nome) FROM funcionario

SELECT SUBSTRING(nome,1,3) FROM funcionario 
SELECT nome,LENGTH (nome) FROM funcionario