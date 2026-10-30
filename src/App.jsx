
import { useState } from "react";
import "./App.css";

const habitaciones = [
  {
    nombre: "Habitacion Simple",
    precio: 45000,
    imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    descripcion: "Habitacion comoda para una persona."
  },
  {
    nombre: "Habitacion Doble",
    precio: 65000,
    imagen: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    descripcion: "Ideal para compartir una estadia."
  },
  {
    nombre: "Habitacion Deluxe",
    precio: 90000,
    imagen: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
    descripcion: "Mayor comodidad y espacio."
  },
  {
    nombre: "Suite Premium",
    precio: 120000,
    imagen: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    descripcion: "Una habitacion amplia y equipada."
  }
];

function App() {
  const [llegada, setLlegada] = useState("");
  const [salida, setSalida] = useState("");
  const [huespedes, setHuespedes] = useState("2");
  const [habitacion, setHabitacion] = useState("Habitacion Simple");
  const [mensaje, setMensaje] = useState("");

  function reservar(evento) {
    evento.preventDefault();

    if (salida <= llegada) {
      setMensaje("La fecha de salida debe ser posterior a la llegada.");
      return;
    }

    setMensaje("Solicitud de reserva enviada correctamente.");
  }

  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">HOTEL PATEK</a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#habitaciones">Habitaciones</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#reservas" className="boton-header">Reservar</a>
      </header>

      <main>
        <section className="inicio" id="inicio">
          <div className="inicio-contenido">
            <h1>Bienvenido a Hotel Patek</h1>
            <p>Un lugar pensado para descansar y disfrutar de tu estadia.</p>
            <a href="#habitaciones" className="boton">Ver habitaciones</a>
          </div>
        </section>

        <section className="nosotros" id="nosotros">
          <div>
            <h2>Sobre nosotros</h2>
            <p>
              Hotel Patek ofrece un espacio comodo y tranquilo para
              quienes buscan disfrutar de una buena estadia.
              Contamos con diferentes habitaciones y servicios
              para que nuestros huespedes se sientan a gusto.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
            alt="Interior del hotel"
          />
        </section>

        <section className="habitaciones" id="habitaciones">
          <h2>Nuestras habitaciones</h2>
          <p className="subtitulo">Conoce las opciones disponibles.</p>

          <div className="habitaciones-lista">
            {habitaciones.map((item) => (
              <article className="habitacion" key={item.nombre}>
                <img src={item.imagen} alt={item.nombre} />

                <div className="habitacion-info">
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <strong>
                    ${item.precio.toLocaleString("es-AR")} por noche
                  </strong>
                  <a href="#reservas" className="boton">Reservar</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reservas" id="reservas">
          <h2>Realizar una reserva</h2>
          <p>Completa el siguiente formulario para consultar tu estadia.</p>

          <form onSubmit={reservar}>
            <label>Fecha de llegada</label>
            <input
              type="date"
              value={llegada}
              onChange={(e) => setLlegada(e.target.value)}
              required
            />

            <label>Fecha de salida</label>
            <input
              type="date"
              value={salida}
              min={llegada}
              onChange={(e) => setSalida(e.target.value)}
              required
            />

            <label>Cantidad de huespedes</label>
            <select
              value={huespedes}
              onChange={(e) => setHuespedes(e.target.value)}
            >
              <option value="1">1 huesped</option>
              <option value="2">2 huespedes</option>
              <option value="3">3 huespedes</option>
              <option value="4">4 huespedes</option>
            </select>

            <label>Tipo de habitacion</label>
            <select
              value={habitacion}
              onChange={(e) => setHabitacion(e.target.value)}
            >
              {habitaciones.map((item) => (
                <option key={item.nombre} value={item.nombre}>
                  {item.nombre}
                </option>
              ))}
            </select>

            <button type="submit" className="boton">
              Consultar reserva
            </button>

            {mensaje && <p className="mensaje">{mensaje}</p>}
          </form>
        </section>

        <section className="contacto" id="contacto">
          <h2>Contacto</h2>
          <p>Si tenes alguna consulta, podes comunicarte con nosotros.</p>
          <p>Email: reservas@hotelpatek.com</p>
          <p>Telefono: +54 387 000 0000</p>
          <p>Ubicacion: Salta, Argentina</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Hotel Patek - Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
