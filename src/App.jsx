
import { useState } from 'react'
import './App.css'

const habitaciones = [
  {
    id: 1,
    nombre: 'Habitación Deluxe',
    descripcion: 'Un espacio elegante y acogedor para disfrutar del máximo confort.',
    precio: 120,
    personas: 2,
    camas: '1 cama King',
    imagen: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32'
  },
  {
    id: 2,
    nombre: 'Suite con vista al mar',
    descripcion: 'Disfrutá de una vista espectacular en una suite exclusiva.',
    precio: 180,
    personas: 2,
    camas: '1 cama King',
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427'
  },
  {
    id: 3,
    nombre: 'Habitación Superior',
    descripcion: 'Diseño moderno, amplitud y comodidad para una estadía perfecta.',
    precio: 150,
    personas: 3,
    camas: '2 camas individuales',
    imagen: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace'
  },
  {
    id: 4,
    nombre: 'Suite Premium',
    descripcion: 'Nuestra habitación más exclusiva, con espacios amplios y sofisticados.',
    precio: 250,
    personas: 4,
    camas: '1 cama King + sofá cama',
    imagen: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
  }
]

function App() {
  const [fechaEntrada, setFechaEntrada] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')

  const hoy = new Date()
  const fechaActual = [
    hoy.getFullYear(),
    String(hoy.getMonth() + 1).padStart(2, '0'),
    String(hoy.getDate()).padStart(2, '0')
  ].join('-')

  function confirmarReserva(habitacion) {
    if (!fechaEntrada || !fechaSalida) {
      alert('Por favor, seleccioná las fechas de entrada y salida.')
      return
    }

    if (fechaSalida <= fechaEntrada) {
      alert('La fecha de salida debe ser posterior a la entrada.')
      return
    }

    const entrada = new Date(fechaEntrada + 'T00:00:00')
    const salida = new Date(fechaSalida + 'T00:00:00')

    const noches = Math.round(
      (salida - entrada) / (1000 * 60 * 60 * 24)
    )

    const total = noches * habitacion.precio

    alert(
      '¡RESERVA CONFIRMADA!\n\n' +
      'Habitación: ' + habitacion.nombre + '\n' +
      'Entrada: ' + fechaEntrada + '\n' +
      'Salida: ' + fechaSalida + '\n' +
      'Noches: ' + noches + '\n' +
      'Precio por noche: USD ' + habitacion.precio + '\n' +
      'TOTAL: USD ' + total
    )
  }

  return (
    <>
      {/* NAVEGACION */}
      <header className="header">
        <a href="#inicio" className="logo">
          MAISON<span>.</span>
          <small>HOTEL & SUITES</small>
        </a>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#reservas">Habitaciones</a>
        </nav>

        <a href="#reservas" className="header-button">
          Reservar ahora
        </a>
      </header>

      {/* PORTADA */}
      <section className="inicio" id="inicio">
        <div className="inicio-contenido">
          <p className="subtitulo">UNA EXPERIENCIA ÚNICA</p>

          <h1>
            Descubrí el placer
            <br />
            de sentirte en casa.
          </h1>

          <p className="inicio-descripcion">
            Un lugar donde el confort, la elegancia y la
            tranquilidad se encuentran para crear
            momentos inolvidables.
          </p>

          <a href="#reservas" className="inicio-boton">
            Explorar habitaciones →
          </a>
        </div>

        <div className="inicio-indicador">
          HOTEL BOUTIQUE · EXPERIENCIAS EXCLUSIVAS
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="nosotros" id="nosotros">
        <div className="nosotros-imagen">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
            alt="Interior elegante de hotel"
          />
        </div>

        <div className="nosotros-contenido">
          <p className="subtitulo">CONOCÉ MAISON</p>

          <h2>
            Mucho más que un lugar para hospedarse.
          </h2>

          <p>
            En Maison creemos que cada viaje merece
            una experiencia especial. Nuestro hotel
            combina elegancia, comodidad y atención
            personalizada para que disfrutes cada
            momento de tu estadía.
          </p>

          <p>
            Diseñamos cada espacio pensando en tu
            bienestar, ofreciendo ambientes únicos
            y servicios de calidad.
          </p>

          <div className="nosotros-datos">
            <div>
              <strong>24/7</strong>
              <span>Atención personalizada</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Confort y tranquilidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVAS */}
      <section className="reservas" id="reservas">
        <div className="reservas-titulo">
          <p className="subtitulo">NUESTROS ESPACIOS</p>

          <h2>Encontrá tu habitación ideal</h2>

          <p>
            Elegí tu habitación y seleccioná las fechas
            para realizar tu reserva.
          </p>
        </div>

        {/* CALENDARIO */}
        <div className="fechas-reserva">
          <div className="fecha-campo">
            <label>Fecha de entrada</label>

            <input
              type="date"
              value={fechaEntrada}
              min={fechaActual}
              onChange={(e) => {
                const nuevaFecha = e.target.value
                setFechaEntrada(nuevaFecha)

                if (fechaSalida && nuevaFecha >= fechaSalida) {
                  setFechaSalida('')
                }
              }}
            />
          </div>

          <div className="fecha-campo">
            <label>Fecha de salida</label>

            <input
              type="date"
              value={fechaSalida}
              min={fechaEntrada || fechaActual}
              onChange={(e) => setFechaSalida(e.target.value)}
            />
          </div>
        </div>

        {/* HABITACIONES */}
        <div className="habitaciones">
          {habitaciones.map((habitacion) => (
            <article className="habitacion-card" key={habitacion.id}>
              <div className="habitacion-imagen">
                <img
                  src={habitacion.imagen}
                  alt={habitacion.nombre}
                />

                <span className="etiqueta">
                  HABITACIÓN {habitacion.id}
                </span>
              </div>

              <div className="habitacion-info">
                <h3>{habitacion.nombre}</h3>

                <p className="habitacion-descripcion">
                  {habitacion.descripcion}
                </p>

                <div className="habitacion-detalles">
                  <span>{habitacion.personas} personas</span>
                  <span>{habitacion.camas}</span>
                </div>

                <div className="habitacion-pie">
                  <div className="precio">
                    <strong>USD {habitacion.precio}</strong>
                    <span> / noche</span>
                  </div>

                  <button
                    className="reservar-boton"
                    onClick={() => confirmarReserva(habitacion)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>MAISON HOTEL & SUITES © 2026</p>
        <p>Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
