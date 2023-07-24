## Padroes Front End de projeto SEO-PRO

# JS

 - Preferir o uso dos modulos:   
 um projeto excelente contem todo o javascript dentro de arquivos javascript
- GLOBAL  => Unico objeto que nao precisa ser um modulo, onde esta anexado no   window e pode receber configuracoes da aplicacao
- GLOBAL.context => onde sera passado o contexto do django pra dentro do javascript, para exemplos veja `context.html`

 - Todo elemento que sofrer referencia do javascript 
 deve conter um **data atributo** começado com `js-` 
 (para facilitar a identificacao e leitura)




# Bibliotecas
- Todos bibliotecas devem ser instalados pelo NPM, vamos evitar o uso de CDNS








# Atributos







# Pastas
     /dist 
nesta pasta ficara todos os arquivos apos a compilacao,    
nada deve ser colocado nesta pasta, ela deve conter apenas os arquivos gerados 

    /public 
nesta pasta ficara todas as images, videos, e coisas publicas do projeto

    /src 
esta pasta é onde estara o codigo js e css fonte do projeto,  


---
# Tags
	{% vite_asset 'caminho/arquivo.js' %}
A template tag **vite_asset** é usada para que o vite proveda o arquivo em desenvolvimento
e em producao saiba qual o arquivo compilado relativo  
*  Deve ser usado apenas quando se quer incluir um novo arquivo js no projeto 
*  Caso de uso muito raro pois todas as entradas necessarias ja estao no projeto   

# 
	{% static 'img/logos/logo.webp' %}
A template tag **static** deve ser usada para gerar o link das imagens no projeto
* pode ser otimido o caminho static
* pode ser otimido o caminho public
* Ex: arquivo acima está em  
  `static/public/img/logos/logo.webp`


# Atalhos

 Desempacotar classes HTML   
`CTRL + K + A`  