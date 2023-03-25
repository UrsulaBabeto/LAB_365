SELECT COUNT(*) FROM funcionario
SELECT COUNT(nome) FROM funcionario
SELECT SUM(salario) FROM funcionario--soma
SELECT AVG (salario) FROM funcionario --average/media (soma tudo e divide)
SELECT MIN(nome) FROM funcionario --retorna nome com o mais proximo do inicio do alfabeto "a"
SELECT MAX(nome) FROM funcionario --ordem alfabetica, ultima letra

SELECT ROUND(AVG (salario),2) FROM funcionario --formata o retorno da consulta para 2 casas decimais

