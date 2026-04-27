# Portainer

## Deployment

Según la documentación, https://docs.portainer.io/start/install-ce/server/docker/linux#docker-compose se puede desplegar Portainer usando docker run o a través de Docker Compose. Elegimos la segunda opción.

```
services:
  portainer:
    container_name: portainer
    image: portainer/portainer-ce:sts # dejamos sts para seguir la rama estable de soporte
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    ports: # cambiaremos los puertos por 9000, especificado en la consiga del trabajo
      - 9443:9443
      - 8000:8000  # Remove if you do not intend to use Edge Agents

volumes:
  portainer_data:
    name: portainer_data

networks: # sacamos la creación de la red portainer_network para que use la de defecto
  default:
    name: portainer_network
```

Agregamos el siguiente bloque al docker-compose.yml:

```
services:
  portainer:
    container_name: portainer
    image: portainer/portainer-ce:sts
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    ports: 
      - 9000:9000
    deploy: # agregamos limites de cpu y memoria para agregarle calidad al proyecto
      resources:
        limits:
          cpus: '0.5'
          memory: 256M

volumes:
  portainer_data:
    name: portainer_data
```

El próximo paso es hacer 
``` bash
docker compose up -d
```
---

## Logging in

Ya levantado el contenedor, vamos al puerto 9000 donde creamos un usuario en Portainer:

![alt text](LogIn.jpeg)

![alt text](image-6.png)

---

## Creating enviroment

Elegimos Docker Standalone:
![alt text](image.png)

Elegimos la opción Socket (el cable configurado en el docker-compose.yml)
![alt text](image-1.png)

Elegimos la opción linux, cuya flag tiene la misma ruta que pusimos en el docker-compose.yml y creamos el entorno bajo el nombre "local"
![alt text](image-2.png)

(aclaración: la captura dice que se llama ISlocal pero el nombre fue modificado en el segundo intento de creación, ya que el primero no se pudo concretar por un error "Failure. Forbidden - origin invalid")

![alt text](image-4.png)

![alt text](image-5.png)

---

## Agregamos la base de datos

Agregamos las imagenes de la base de datos. Ejecutamos:

``` bash
docker compose down

git merge main

docker compose up -d --build
```
Ingresamos con el usuario y contraseña
![alt text](image-7.png)

![alt text](image-8.png)

- Accedemos a los contenedores:
![alt text](image-12.png)
(Aclaración: las filas superiores y la última aparecen tachadas/vacías son contenedores locales que no forman parte del trabajo)
Observamos que aparece la de la base de datos corriendo en un contenedor is-2026-checkpoint-01-database-1, ademas de la del portainer
![alt text](image-13.png)

- Accedemos a los volúmenes:
![alt text](image-16.png)
De los cuales solo corresponden al trabajo los seleccionados, correspondiendo uno al contenedor de portainer y otro al de la base de datos.

- Accedemos a los stacks:
![alt text](image-14.png)

---
 ## Agregamos el Back-End
Agregamos las imagenes del Back-End. Ejecutamos:

 ``` bash
docker compose down

git merge main

docker compose up -d --build
```
Ingresamos con el usuario y contraseña

![alt text](image-10.png)

- Accedemos a los contenedores:
![alt text](image-11.png)
(Aclaración: las filas superiores y la última aparecen tachadas/vacías son contenedores locales que no forman parte del trabajo)
Observamos que aparece la de la base de datos corriendo en un contenedor is-2026-checkpoint-01-database-1 y el Back-End en backend, ademas de la del portainer
![alt text](image-15.png)

- Accedemos a las imagenes:
![alt text](image-3.png)
(Aclaración: las filas vacias no forman parte de este trabajo)