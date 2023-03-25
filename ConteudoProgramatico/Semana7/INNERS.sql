SELECT f.nome, f.salario, s.nome FROM funcionario f JOIN setor s ON f.id_funcionario_setor=s.id

SELECT f.nome, s.nome FROM funcionario f LEFT JOIN setor s ON f.id_funcionario_setor=s.id
--dps do from fica definido o left

SELECT f.nome, s.nome FROM funcionario f RIGHT JOIN setor s ON f.id_funcionario_setor=s.id

SELECT funcionario.nome, setor.nome FROM funcionario LEFT OUTER JOIN setor ON funcionario.id_funcionario_setor=setor.id

INSERT INTO dependentes(nome,idade,cpf,rg) VALUES ('branca',5,'12345678999','98765432111')
INSERT INTO dependentes(nome,idade,cpf,rg,id_funcionario_dependente) VALUES ('thunder',8,'55345678999','66765432111',3)
SELECT f.nome, d.nome FROM funcionario f LEFT JOIN dependentes d ON f.id= d.id_funcionario_dependente
SELECT f.nome, d.nome FROM funcionario f RIGHT JOIN dependentes d ON f.id= d.id_funcionario_dependente

