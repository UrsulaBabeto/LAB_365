
DROP TABLE test1
--drop apaga a tabela do sistema

ALTER TABLE test1 RENAME TO test5;
ALTER TABLE test5 ADD salario numeric(11,2)
ALTER TABLE funcionario DROP COLUMN rg;
ALTER TABLE funcionario ADD CONSTRAINT unique_cpf UNIQUE (cpf);
ALTER TABLE funcionario add salário INTEGER;


https://pgdocptbr.sourceforge.io/pg80/ddl-alter.html

