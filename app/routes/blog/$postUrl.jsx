
import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'

export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl )

    if(post.data.length === 0) {
        throw new Response('', { 
            status: 404,
            statusText: 'Entrada no encontrada'
        }) 
    }

    return post
}
export function meta({data}) { 
  
  if(!data) {
    return [
        { title: `GuitarLa - Entrada no encontrada` }, 
        { description: `Guitarras, venta de guitarras, Guitarra No Encontrada` }
      ]
    }
  
    return [
      { title: `GuitarLa - ${data.data[0].attributes.titulo}` }, 
      { description: `Guitarras, venta de guitarras, Entrada: ${data.data[0].attributes.titulo}` }
    ]
}

function Post() {

    const post = useLoaderData(); 
    const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes

  return (
    <article className='post mt-3'>
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen Blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha postUrl'>{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post