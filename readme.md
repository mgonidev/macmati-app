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

<img width="1470" height="690" alt="image" src="https://github.com/user-attachments/assets/f5c278f5-c32e-4588-9f7b-7897e31d74b3" />

Docker funcionando:
<img width="1196" height="324" alt="image" src="https://github.com/user-attachments/assets/956c675c-392d-4260-9658-684453691fd8" />

---

## 👨‍💻 Autor

Matías Goñi
Proyecto realizado como práctica para la materia Ingeniería de software

