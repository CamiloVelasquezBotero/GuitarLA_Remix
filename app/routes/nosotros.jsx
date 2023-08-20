import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
    { title: 'GuitarLa - Sobre Nosotros' },
    { description: 'Venta de Guitarras, Blog de musica' }
  ]
}

export function links() {
  return [
    { 
      rel: 'stylesheet', 
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen Nosotros" />

        <div>
          <p>Proin at eleifend tortor, in porttitor purus. Suspendisse aliquet leo mauris, id vehicula nulla varius sed. Aliquam commodo aliquam hendrerit. Fusce a urna mi. Aenean volutpat ante id justo imperdiet, sed sodales augue dictum. Donec pulvinar lorem quis diam porta rhoncus. Pellentesque a sem ipsum.</p>
          <p>Proin at eleifend tortor, in porttitor purus. Suspendisse aliquet leo mauris, id vehicula nulla varius sed. Aliquam commodo aliquam hendrerit. Fusce a urna mi. Aenean volutpat ante id justo imperdiet, sed sodales augue dictum. Donec pulvinar lorem quis diam porta rhoncus. Pellentesque a sem ipsum.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros