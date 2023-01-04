# simple-pay-api
O simple-pay-api é uma implementação simplificada de um Payment Service Provider (PSP), e foi desenvolvido no intuito de se aprender um pouco mais sobre como funcionam pagamentos no Brasil. :brazil: 

Esta API é baseada no [desafio](https://github.com/pagarme/vagas/blob/master/desafios/software-engineer-backend/README.md) de back-end software engineer da [@pagarme](https://github.com/pagarme) e foi implementada utilizando clean architecture, TDD e design patterns. :man_technologist:

## Depêndencias
[``docker``](https://www.docker.com/)
[``docker-compose``](https://docs.docker.com/compose/)
[``node.js``](https://nodejs.org/en/)
[``npm``](https://www.npmjs.com/)

## Instalando o projeto
1. ``git clone https://github.com/mathd1as/simple-pay-api.git``
2. ``cd simple-pay-api``
3. ``npm install``

## Subindo o banco de dados
``docker compose -f setup-database.json up``

## Executando o projeto em desenvolvimento
``npm run dev``

## Executando o projeto em produção
1. ``npm run build``
2. ``npm run start``

## Executando os testes
``npm run test``
