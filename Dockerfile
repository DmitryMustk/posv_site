# Используем официальный образ Nginx
FROM nginx

# Копируем файлы в контейнер
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY favicon.png /usr/share/html/favicon.png
COPY music.mp3 /usr/share/html/music.mp3
COPY RussoOne-Regular.ttf /usr/share/html/RussoOne-Regular.ttf
# В случае необходимости, вы также можете добавить другие статические ресурсы, такие как изображения.

# Экспонируем порт 80, который используется Nginx
EXPOSE 80

# Этот образ Nginx автоматически запустит веб-сервер при запуске контейнера

