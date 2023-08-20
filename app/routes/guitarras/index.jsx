import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/ListadoGuitarras'

export function meta() {
  return [
    { title: 'GuitarLa - Tienda de Guitarras' },
    { description: 'GuitarLa - Nuestra coleccion de guitarras' }
  ]
}

export async function loader() { 
  const guitarras = await getGuitarras(); 
  return guitarras.data 
}

function Tienda() {
  
  const guitarras = useLoaderData();

  return ( 
      <ListadoGuitarras 
        guitarras={guitarras}
      />
  )
}

export default Tienda