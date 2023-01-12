"o sucesso se baseia em insistir."

Criando um repositorio Git!

Crie uma pasta no seu computador;
Acesse a pasta que você acabou de criar;
Inicie o versionamento com o comando git init;
Abra a pasta no VSCode com o comando code .;
Crie um arquivo chamado README.md;
Adicione o arquivo novo em staging e realize um commit. Por exemplo: git add . e git commit -m "Descreva a alteração realizada";
Crie uma nova branch com o comando git checkout -b. Por exemplo: git checkout -b adiciona-readme;
Faça uma alteração no README.md e depois realize um novo commit. Por exemplo: git add . e git commit -m "Alterando o README"
Retorne para a branch main, em seguida realize o merge das alterações com o comando git merge nome-da-branch. Por exemplo: 
git merge adiciona-readme.