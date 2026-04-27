#Imagen slim, Versión fija 
FROM python:3.12-slim

#esto es para el HEALTHCHECK
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

#Capas cacheadas 
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

#Usuario no-root 
RUN useradd -m backenduser
USER backenduser

#puerto 5000
EXPOSE 5000

#HEALTHCHECK 
HEALTHCHECK CMD curl -f http://localhost:5000/api/health || exit 1

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]