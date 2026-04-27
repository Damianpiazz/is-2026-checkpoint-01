CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    legajo VARCHAR(20)  NOT NULL,
    feature VARCHAR(100) NOT NULL,
    servicio VARCHAR(100) NOT NULL,
    estado VARCHAR(50)  NOT NULL DEFAULT 'activo'
);

INSERT INTO members (nombre, apellido, legajo, feature, servicio, estado) VALUES
    ('Milagros', 'Crespo', '33352', 'Feature 02 - Frontend', 'frontend', 'activo'),
    ('Manuela', 'Chanquia', '33159', 'Feature 03 - Backend', 'backend', 'activo'),
    ('Lucia', 'Meza', '33693', 'Feature 04 - Base de Datos', 'database', 'activo'),
    ('Damian', 'Piazza', '33400', 'Feature 01 - Coordinación', 'coordinacion', 'activo'), 
    ('Martina', 'Garcia', '33093', 'Feature 05 - Portainer', 'portainer', 'activo');