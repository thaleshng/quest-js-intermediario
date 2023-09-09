<h1 align="center">Validação de Formulário com JavaScript</h1>
<br>

<p align="center">2° Desafio do curso com Feedback</p> 
<br>

<div>
    <h3 align="center"><strong>Desktop View</strong><h3>
    <a href="https://thaleshng.github.io/quest-js-intermediario/" target="_blank"><img src="./src/images/gif-questjs-desktop.gif" target="_blank"></a> 
</div>

<div align="center">
    <h3 align="center"><strong>Mobile View</strong><h3>
    <a href="https://thaleshng.github.io/quest-js-intermediario/" target="_blank"><img src="./src/images/gif-questjs-mobile.gif" target="_blank"></a> 
</div>

<div align="center">
    <img height=20em src="https://img.shields.io/badge/-HTML-orange?style=plastic"><img>
    <img height=20em src="https://img.shields.io/badge/-CSS-blue?style=plastic"><img>
    <img height=20em src="https://img.shields.io/badge/-JS-yellow?style=plastic"><img>
    <br>
    <img height=20em src="https://img.shields.io/badge/STATUS-FINALIZADO-green?style=plastic"><img>
    <br>
    <img src="https://img.shields.io/github/stars/thaleshng/quest-js-intermediario?style=social"><img>
</div>

<br>


<div align="center">
    <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
    <a href="#finalidade-do-projeto">Finalidade do Projeto</a> •
    <a href="#feedback">Feedback</a> •
    <a href="#dificuldades-encontradas-e-aprendizados">Dificuldades Encontradas e Aprendizados</a> •
    <a href="#como-ter-acesso-ao-código">Como ter acesso ao Código</a>
</div>

<br>
<br>

<h2 align="center">Tecnologias Utilizadas</h2>
<br>

[<img alt="HTML" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" target="_blank">](https://www.devmedia.com.br/o-que-e-o-html5/25820)
<br>
<br>

[<img alt="CSS" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" target="_blank">](https://kenzie.com.br/blog/css3/)
<br>
<br>

[<img alt="Js" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" target="_blank">](https://blog.betrybe.com/javascript/)
<br>
<br>
<br>

<h2 align="center">Finalidade do Projeto</h2>
<br>

<p> O projeto em questão tem como finalidade testar os aprendizados dos módulos de HTML, CSS e JavaScript do curso de developer.</p> 
<p>A premissa do desafio em questão foi avaliar como o aluno do curso criaria um formulário e validaria o mesmo com JavaScript puro, onde a borda do input ficaria verde ao preencher o campo e ao clicar no botão "enviar", caso
algum campo não estiver preenchido, a borda do input deverá ficar vermelha e uma mensagem de "campo obrigatório" deverá aparecer embaixo do campo que não foi preenchido.
<p>Finalizado o projeto, os professores do curso dariam um feedback do código, para testar o nível de aprendizado de cada aluno e corrigir o código para que os alunos possam melhorar suas maneiras de codar.
</p> 
<br>
<br>
<br>
<br>

<h2 align="center">Feedback</h2>
<br>

<h3 align="center">"Correção de Quest:
JavaScript Intermediário
</h3>
<br>
<p align="center">Aluno: Thales Henrique - Turma 11<br>
<a href="https://github.com/thaleshng/quest-js-intermediario">https://github.com/thaleshng/quest-js-intermediario</a></p>

<h3>Requisitos Obrigatórios:</h3>
<ul>
    <li><s>A Validação deve ser feita com JS Vanilla.</s></li>
    <li><s>O fundo do formulário deve ser feito usando a imagem em anexo na aula.</s></li>
    <li><s>Ao clicar para enviar o formulário, se caso algum campo não estiver preenchido, a borda do input deve ficar vermelha e uma mensagem de "campo obrigatório" deve aparecer embaixo do campo que não foi preenchido, conforme o Figma.</s></li>
</ul>

<h3>Pontuações:</h3>
<ol>
    <li>Em um formulário, tanto o input do tipo “button” quanto a tag button com o atributo type definido como “button” podem ser usados para criar botões em formulários HTML. No entanto, a tag button oferece mais flexibilidade em termos de personalização e permite incluir outros elementos dentro do botão. Já o input é mais adequado quando se precisa enviar um valor junto com o formulário.<br><br>
    Neste formulário, como o botão “enviar” apenas envia os dados dos outros inputs para a validação, o mais correto seria utilizar a tag button com o atributo type definido como “button”.<br>
    <i>Ex:</i><br>
    <img src="./src/images/pontuação-1.jpg"><img><br><br>
    Por fim, só bastaria colocar as suas Classes ou ID’s que ficaria igual. Caso não ficasse, bastaria consertar alguns pequenos pontos com o CSS.</li><br>
    <li>Aqui fez bom uso da <strong>Tag TextArea:</strong><br><br>
    <img src="./src/images/pontuação-2.jpg"><img><br><br>
    Essa tag é especialmente recomendada para uma área de texto editável em uma página web. Ela permite que usuários possam escrever e manipular um texto mais longo, como em um <strong>formulário de comentários</strong> ou em uma <strong>caixa de texto para a digitação de mensagens.</strong><br><br>
    <li>Percebi que seu projeto <strong>foi bem adaptado às diferentes telas.</strong> Apesar de não ser obrigatório, garantir que seus projetos sejam responsivos é uma prática importante, pois muitos usuários acessam aplicativos em diferentes telas.<br>
    <img src="./src/images/pontuação-3.jpg"><img><br>
    </li><br>
    <li>Muito legal ter utilizado os conceitos de <strong><span style=color:#0B5394>Regex</span></strong> para a aumentar a eficiência da validação nos campos do seu formulário, mandou bem de mais:<br>
    <img src="./src/images/pontuação-4.jpg"><img><br>
    </li><br>
    <li>Lembra: por se tratar de uma validação em <strong>vários</strong> campos, seria uma ótima oportunidade para treinar o uso do <strong>ForEach</strong> - ensinado nas aulas anteriores.<br><br>
    O uso do <strong>ForEach</strong> iria dispensar a necessidade de criar várias validações, pois ele iria automaticamente fazer a validação <strong>em cada item</strong> da função.<br><br>
    Vou te dar um exemplo mais visual de como poderia ter feito, depois você compara com a sua versão e faz anotações sobre o que achar importante:<br>
    <img src="./src/images/pontuação-5.jpg"><img><br>
    Vou te explicar bloco por bloco:
    <br>
    a. <span style=color:#DE5A5A><strong>Nessa primeira parte do código</strong></span>, eu usei o método querySelectorAll() para selecionar todos os elementos que possuem a classe <strong>campo</strong> e coloquei eles na variável <strong>camposFormulario</strong>. Em seguida, usei o método querySelector() para selecionar o elemento que possui a classe <strong>btn-enviar</strong> o armazenei na variável chamada <strong>botaoEnviar</strong>.</li><br>
    b. <span style=color:#BF9000><strong>Nessa segunda parte do código</strong></span>, eu adicionei um evento de clique ao botão de envio, usando o método addEventListener(). Quando o botão é clicado, a função que é passada como segundo parâmetro é executada. Nesse caso, a primeira linha dessa função chama o método preventDefault() do objeto Event passado como parâmetro para evitar que a página seja recarregada quando o botão é clicado.<br>
    c. <span style=color:#38761D><strong>Nessa terceira última parte do código</strong></span>, eu usei o método forEach() para percorrer todos os elementos armazenados na variável <strong>camposFormulario</strong>, que são os campos do formulário que devem ser validados. <strong>Para cada campo</strong>, o código verifica se o valor do campo (acessado através da propriedade value) está preenchido ou não. <strong>Se estiver preenchido</strong>, a classe <strong>valido</strong> é adicionada ao elemento e a classe <strong>mostrar</strong> é removida do elemento irmão (usando o método nextElementSibling). Se não estiver preenchido, a classe <strong>valido</strong> é removida, a classe <strong>erro</strong> é adicionada e a classe <strong>mostrar</strong> é adicionada ao elemento irmão. Assim, o usuário visualiza uma mensagem de erro indicando que o campo precisa ser preenchido corretamente.<br><br>
    <strong>OBS:</strong> É importante lembrar que dois códigos fazem a mesma coisa, que é validar campos de formulário e exibir uma mensagem de erro quando necessário. A principal diferença entre o meu código e o seu é que o meu é um pouco mais simples e direto, usando uma condicional <strong>if/else</strong> para adicionar ou remover classes diretamente nos elementos do formulário, enquanto a sua versão utiliza <strong>funções e condicionais separadas</strong> para realizar essas ações, o que pode dificultar um pouco mais a leitura do código <strong>e gerar algumas inconsistências.
    Seu código de 54 linhas passou a ter 18.</strong>
</ol>
<br>
<p>No fim, completou os desafios de JavaScript Intermediário, tá mandando bem!
Anota essas observações, se preferir, e vai treinando tudo isso. Usa essas mesmas observações nos próximos projetos que vão te ajudar bastante.
Como desafio final, tenta refatorar esse seu código usando essas dicas, com a prática você pega o jeito da coisa.
 
</p>

<h3>~ Boa sorte, Thales! ☕"</h3>
<br>
<br>
<br>
<br>

<h2 align="center">Dificuldades Encontradas e Aprendizados</h2>
<br>

<p> No geral não encontrei tantas dificuldades no desenvolvimento do projeto, além da parte do JavaScript, visto que é a linguagem que estou estudando atualmente, mas não foi uma barreira e consegui atingir o objetivo sem muitos problemas.</p>
<p> Aprendi a usar melhor o forEach para iterar em cada elemento da página, além de aprender sobre conceitos de Regex para a aumentar a eficiência da validação nos campos do formulário que até então não tinha visto no curso e procurei em fontes externas</p>
<p>Foram usadas tags mais semânticas no HTML melhorando o SEO (Search Engine Optimization), para aumentar as chances do site ser encontrado pelos usuários. <br>Além disso, as tags semânticas também ajudam na acessibilidade para que leitores de tela e outros dispositivos assistivos entendam melhor a estrutura do conteúdo.</p>
<p>Após receber o Feedback, busquei refatorar o código seguindo as pontuações que foram passadas no mesmo, acredito ter conseguido um bom resultado.</p>
<br>
<br>
<br>
<br>

<h2 align="center">Como ter acesso ao Código<h2>
<br>

### Pré-requisitos:
<br>
Antes de começar, vai precisar ter instalado na sua máquina as seguintes ferramentas:
<br>
<br>

[Git Bash](https://git-scm.com)

[VS Code](https://code.visualstudio.com)
<br>
<br>

Clone este repositório com o Git Bash:
```
git clone https://github.com/thaleshng/quest-js-intermediario.git
```
Entra na pasta que foi criada e abra com o Visual Studio Code.