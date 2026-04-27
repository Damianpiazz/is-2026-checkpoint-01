FROM python:3.12-slim

WORKDIR /app

# Copia todo el frontend (incluye html/)
COPY . .

# Exponer puerto 8080
EXPOSE 8080

# Levantar servidor HTTP
CMD ["python3", "-m", "http.server", "8080", "--directory", "html"]