import { useState, useEffect } from 'react'
import {
    Meta,
    Links, 
    Outlet, 
    Scripts, 
    LiveReload,
    useRouteError, 
    isRouteErrorResponse,
    Link 
} from '@remix-run/react'
import styles from './styles/index.css' 
import Header from '~/components/Header'; 
import Footer from '~/components/Footer'; 

export function meta() {
    return [ 
      { charset: 'utf-8' },
      { title: 'GuitarLa - Remix' },
      { viewport: 'width=device-width, initial-scale=1' },
    ];
}

export function links() {
    return [
        { 
            rel: 'stylesheet', /* Normalize */
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        { 
            rel: 'stylesheet', /* Css */
            href: styles
        },
        {
            rel: 'preconnect', /* Google Fonts */
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',  /* Google Fonts */
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true' 
        },
        {
            rel: 'stylesheet',  /* Google Fonts */
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() { //

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null

    const [ carrito, setCarrito ] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito)) 
    }, [carrito]) 

    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)) { 
            const carritoActualizado = carrito.map( guitarraState => {
                if(guitarraState.id === guitarra.id) {
                    // Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrito
            setCarrito(carritoActualizado)
        } else {
            // Agregar al carrito
            setCarrito([...carrito, guitarra]) 
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState 
        })
        // Añadir al carrito
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter( producto => producto.id !== id)
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet 
                context={{ 
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            /> 
        </Document>
    )
}

function Document({children}) { 
    return (
        <html lang="es">
            <head>
                <Meta /> 
                <Links /> 
            </head>
            <body>
                <Header /> 
                {children} 
                <Footer /> 
                
                <Scripts /> 
                <LiveReload /> 
            </body>
        </html>
    )
}

/* ------ Manejo de Errores ---------- */

export function ErrorBoundary() {
    const error = useRouteError(); 

    if(isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>{error.status } {error.statusText}</p>
                <Link className='error-elace' to='/' >Tal vez quieras volver a la pagina principal...</Link>
            </Document>
        )
    }
}