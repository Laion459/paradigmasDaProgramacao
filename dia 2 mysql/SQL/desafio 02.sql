CREATE TABLE 'funcionarios' (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
'matricula funcionario' VARCHAR(30) NOT NULL,
'nome funcionario' VARCHAR(30) NOT NULL,
'funcao dentro da instituicao' VARCHAR(50) NOT NULL,
'data admissao' VARCHAR(30) NOT NULL,
'email' VARCHAR(30) NOT NULL
)

insert into funcionarios
(matricula funcionario, nome funcionario, funcao dentro da instituicao, data admissao, email)
values
('01', 'Leonardo Borges', 'Diretor', '23 02 1992', 'laion459@gmail.com'),
('02', 'Dario Borges', 'escravo', '03 09 1999', 'dario@gmail.com'),
('03', 'Rafael Queiroz', 'presidente', '06 05 2000', 'rafael@gmail.com'),
('04', 'Daniela Diaz', 'auxiliar', '14 10 1982', 'daniela@gmail.com'),
('05', 'Amanda Gomes', 'striper', '20 12 1988', 'amanda@gmail.com'),
('06', 'Bruna Tadiotto', 'supervisor', '21 11 1960', 'bruna@gmail.com')


select * form funcionarios where data admissao <  23 02 1992

insert into funcionarios
(situacao)
values
(ativo)

UPDATE funcionarios
SET situacao = 'ativo'
WHERE id > 0;
