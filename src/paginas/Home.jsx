import React from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPosts from '../componentes/ListaPosts'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPosts url={'/posts'} />
    </main>
  )
}

export default Home
