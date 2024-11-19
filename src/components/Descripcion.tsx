import '../styles/Descripcion.css'

export default function Descripcion() {
  return (
    <>
      <h2>¿Qué es GenList?</h2>
      <p>GenList es un proyecto orientado al ámbito educativo para ayudar a mejorar el proceso de la
          toma de asistencia en las aulas universitarias, evitando posibles suplantaciones por parte de
          los compañeros solidarios, que firman por las personas que no asistieron a la clase.
      </p>
      <p>Pero, ¿Como funciona el proceso de GenList?, La forma de funcionar GenList consiste en la 
        creación de un usuario por cada docente, una vez logeados cada uno, en su menú principal se podrán 
        visualizar las materias ya existentes o se tendrá la opción de crear una nueva matera. En caso del docente 
        crear una nueva materia, este deberá llenar datos básicos de cada materia, como nombre, grupo y sede de 
        la universidad. Una vez puestos estos datos debe proceder a registrar estudiante por estudiante en la 
        materia, agregando los datos básicos de cada estudiante como lo pide el formato existente de asistencia 
        (nombre, carrera, documento). 
      </p>
      <p>Terminado el registro de los estudiantes el docente guarda su nuevo curso el cual aparecerá en el
menú principal, si este desea tomar la asistencia de la clase, solo debe acceder a la opción de tomar
asistencia y será dirigido a una ventana donde será solicitado el aula de la clase y el tema impartido,
posteriormente se realiza el escaneo uno por uno de los alumnos para verificar si asistieron o no, terminado el escaneo se permite guardar el PDF de las personas que asistieron con el respectivo formato
      establecido por la universidad.</p>
      <p>El proyecto busca ahorro de tiempo por parte de los docentes, evitando el tener que digitalizar las
      listas físicas de cada clase.</p>
      <p>Esta app fue desarrollada por medio diferentes tecnologías, la parte Front-End fue desarrollada en
PyQt6, una librería de Python, la parte del Back-End fue diseñado en Python y para la base de datos se y
utilizo MySQLLite, teniendo así un entorno para pruebas. Por último, pero siendo el componente que
contiene el funcionamiento innovador, tenemos la funcionalidad del reconocimiento facial, diseñado en
Python por medio de las librerías de OpenCv y unos cuantos modelos de análisis de imagines.</p>
    </>
  );
}