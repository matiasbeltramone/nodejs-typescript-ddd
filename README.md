# AEMON PACKAGE (Outdated)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

### Objetivo:
Este repositorio tiene como finalidad ser un monorepo con diferentes paquetes pertenecientes al stack de Javascript, utilizando buenas prácticas de programación junto a Typescript.

Cada paquete sera un bootstraping de una configuración inicial determinada para cada caso en particular utilizando las mejores prácticas posibles entendiendo que siempre se puede mejorar lo realizado.

### Packages:
 - API (NodeJS)
 - Frontend (VueJS / ReactJS)
 - Auth (OAuth2)

#### Package API:
En este paquete es un boostraping para utilizar como base de diferentes proyectos con NodeJs donde se utilizan:

- NodeJs
- Typescript
- Express como minimalist web framework for Node.js

- Programación Orientada a Objetos
- Inversión de dependencias mediante InversifyJs.
- Arquitectura Hexagonal (Previo a CQRS: Implementando capas de Infrastructura, Aplicación, Dominio, Presentación/API)
- ORM implementado mediante TypeORM utilizando el patrón DataMapper.
- Validaciones mediante JOI.
