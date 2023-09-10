
## Descripción

Este es un proyecto creado en nest.js con la finalidad consumir la api de properties de EasyBrok en su entorno de 
pruebas.

Se ha implementado una arquitectura en capas, con la finalidad de separar la lógica de negocio de la infraestructura del 
mismo, esto además de crear un código menos acoplado facilita la implementación de pruebas.

La estructura en capa optada se describe a continuación.

**_Domain:_** Es la capa core del proyecto y en ella solo hemos definido entidades y uno que otra excepción propia.

**_Data:_** Esta es la capa de acceso a datos, en ella se encuentra los repositorios o adaptadores que nos permiten 
acceder a los recursos.

**_UseCase:_** En esta capa se agregan los casos de usos, (interacciones que el usuario tendrá con el sistema).

**_Infrastructure:_** Aquí se encuentran las implementaciones de los repositorios y de librerías necesarias para poder 
hacer la consultas a la api de EasyBroker.

Además, se ha elegido construir este proyecto en Nest.js, debido a su soporte con TypeScript, inyección de dependencias 
y modularidad y soporte con jest por defecto.    

---
**_Nota_:** 

Este es un proyecto para aplicar a EasyBroker. Debido a esto se ha obviado el uso de algunas prácticas con 
la finalidad de agilizar su implementación, tales como: 
- agregar un .env 
- una mayor cobertura de los tests.

También aclarar que el backend no es mi fuerte, me dedico más al desarrollo mobil, por lo cual quizás la estructura del 
proyecto utilizada no sea lo más habitual para este tipo de proyectos.

---

## Instalación

```bash
$ npm install
```

## Ejecutar el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

El proyecto se ejecuta en el puerto `3000`, para acceder a la lista de propiedades se debe hacer la request a:
`GET http://localhost:3000/properties?page=1`.

## Acceder a la documentación con swagger.
Una vez levantado el proyecto acceda a [http://localhost:3000/api](http://localhost:3000/api) para ver la documentación.

## Ejecutar pruebas

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Contacto

- Linkedin - [Jesús Mendoza](https://www.linkedin.com/in/jesusamendozas/)
- GitHub - [ApamateSoft](https://github.com/ApamateSoft)

## License

[MIT licensed](LICENSE).
