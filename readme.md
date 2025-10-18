# 🍔 MacMati - Hamburguesas Artesanales

**MacMati** es una mini aplicación web, creada para el final de Aplicaciones Web Cliente. La misma que muestra un menú de hamburguesas con precios en USD y ARS, utilizando la cotización del dólar oficial en tiempo real desde [dolarapi.com](https://dolarapi.com).

---

## 🚀 Tecnologías utilizadas

- **HTML5**, **CSS3**, **JavaScript**
- **Nginx**
- **Docker**

---

## 🧠 Funcionalidad principal

- Permite **cambiar la moneda** entre USD y ARS.
- Obtiene la **cotización del dólar oficial** mediante una API pública.
- Guarda la preferencia del usuario en **LocalStorage**.
- Diseño responsive con **menú hamburguesa**.

---

## 🐳 Despliegue con Docker

### 1️⃣ Construir la imagen

docker build -t macmati-app .
docker run -d -p 8080:80 macmati-app

Luego accedé desde tu navegador a: http://localhost:8080

---

## 👨‍💻 Autor

Matías Goñi
Proyecto realizado como práctica para la materia Desarrollo de Aplicaciones con Docker.

