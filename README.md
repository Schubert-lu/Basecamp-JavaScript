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

