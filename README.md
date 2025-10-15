# Atividade-Type-Script
Criem uma aplicação em typescript baseada no exemplo mostrado na aula do dia 03/10 e presente na pasta do módulo 3. A aplicação deverá rodar através do servidor de aplicação SERVE sem erros. A aplicação deverá conter frontend baseado em html e css, e um cadastro de produto, pessoas, tarefas, o que vocês preferirem, também deverá ser possível remover o item cadastrado na lista.

Inicio
---------------------------------------------------------
                        Terminal 
---------------------------------------------------------
node -v *Verificar se o Node está instalado*
npm init *Cria o package.json*
npm i typescript *adiciona nodemodules e o typescript*
npx tsc --init *Cria o tsconfig*

No arquivo tsconfi.json foram alteradas as partes de: 
"module": "ES6",
"target": "ES6",
E retirado o outdir de comentário para ser utilizado:
"outDir": "./dist",

Foi necessário adicionar o "dev": "vite" no scripts em package.json para que fosse possível instalar o vite(npm install vite --save-dev) e depois executar o comando solicitado: 
npm run dev

Para que fosse possível seguir, foi necessário inserir:
"build": "vite build",
"preview": "vite preview"
Também em scripts no package.json, além disso foi preciso alterar o path no tsconfig para:
"baseUrl": "./",
"paths": {
    "@components/*": ["src/components/*"],
    "@utils/*": ["src/utils/*"]
},  
Além dos imports no main.ts para:

import { Button } from "./components/Button";
import { soma, multiplica } from "./utils/math";

E aí então: 
npm run build