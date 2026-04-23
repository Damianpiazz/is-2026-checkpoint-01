from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

DB_HOST = os.getenv("DB_HOST", "database")
DB_NAME = os.getenv("DB_NAME", "teamboard_db")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASSWORD = os.getenv("DB_PASSWORD", "postgres")

def db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn

@app.route('/api/route', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "message": "El servicio Backend está activo"}), 200

@app.route('/api/team', methods=['GET'])
def get_team():
    try:
        conn = db_connection()
        cursor = conn.cursor()

        cursor.execute('SELECT * FROM members;')
        members = cursor.fetchall()

        column_names = [i for i in cursor.description]

        team_list = []
        for member in members:
            team_list.append(dict(zip(column_names, member)))

            cursor.close()
            conn.close()

            return jsonify(team_list), 200
        
    except Exception as e:
        return jsonify({"error": "Error de conexión a PostgreSQL", "details": str(e)}), 500
    
@app.route('/api/info', methods=['GET'])
def service_info():
    return jsonify({
        "service": "backend",
        "version": "1.0.0",
        "desciption": "API REST para TeamBoard APP",
        "feature": "Feature 03",
        "framework": "Flask"
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
