# 📍Basecamp-JavaScript
Aprendendo JavaScript ( Maps, Sets, Erros e API's )

## _*Atividade 1 - Maps*_ 🗺️

*Crie uma função que retorna o nome dos membros de um Map que tem o papel "ADMIN" no sistema.*

<ol>
  <li> Crie uma função getAdmins que recebe um Map;
  <li> Crie um map e popule-o com nomes de usuários e seus papéis no sistema (Ex.: Luiz => Admin);
  <li> Dentro de getAdmins, utilize o loop for...of para retornar uma lista dos usuário que são Administradores;
</ol>

## _*Atividade 2 - Sets*_ 🚀

<ol>
  <li> Dado o Array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos;
</ol>

Aprendendo JavaScript (Erros)

## _*Atividade 3 - Erros*_ :x:

<ul>
  <li> Crie uma função que recebe um array e um número;
  <li> Realize as seguintes validações:
  <ul>
    <li> Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError;
    <li> Se o array não for do tipo 'object', lance um erro do tipo TypeError;
    <li> Se o número não for do tipo 'number', lance um erro do tipo TypeError;
    <li> Se o tamanho da Array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError;
  </ul>
  <li> Utilize a declaração try...catch;
  <li> Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof;
</ul>

## _*Atividade 4 - API'S*_ 

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

<ul>
 <li>Utilize a API https://thatcopy.pw/catapi/rest/ para fazer as chamadas com o método fetch();
 <li>Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!]
</ul>

## _*DEMO:*_
 
  <img src = "https://user-images.githubusercontent.com/103296710/164119759-00cb091e-b755-4185-8f29-58032d3ef820.gif">
  
## _*Atividade 5 - Orientação a Objetos*_ ✏️

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma. 💸

<ul>
  
  <li>Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
  <li>Dentro de ContaBancaria, construa o getter e o setter de saldo;
  <li>Dentro de ContaBancaria, crie os métodos sacar e depositar;
  <li>Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
  <li>Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
  <li>Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
  <li>Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
  <li>Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
  <li>Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    
</ul>

## _*Atividade 6 - Map 🗺️, Filter, Reduce 📎*_
<ul>
  
### <li>_*Map*_
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

### <li>_*Filter*_
Filtre e retorne todos os números pares de um array.

### <li>_*Reduce*_
Some todos os números de um array; 
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
</ul>

## _*Atividade 7: Light Mode/Dark Mode*_ 💻

<ul>
<li> Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
<li> Copie o HTML e o CSS deste repositório
<li> Crie um arquivo chamado scripts.js na sua pasta assets/js
<li> Selecione os elementos: h1, button, footer e body
<li> Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
</ul>

## _*DEMO:*_

<img src = "https://user-images.githubusercontent.com/103296710/164951017-1e40e770-daba-4b34-92b4-af8957ab9c5f.gif">
