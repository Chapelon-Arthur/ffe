
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [fotoAtual, setFotoAtual] = useState(0)

  const fotos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2631a43eBEvYK-5G0b3zghtd3Lm4xvLMHVImrkXvQDEGiDGteafGuyDf&s=10',
    'https://media.tenor.com/m64KKzlBpvMAAAAe/eggman.png',
    'https://images.teepublic.com/derived/production/designs/2329947_0/1517548191/i_p:c_d60023,s_630,q_90.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuf6G0cRz6lATsDFtLvUOTl852PIf9vY6n4dn3yNIY12_HJbBjHSX7e2M&s=10',
  ]

  const handleLike = () => {
    setCount((prev) => prev + 1)
    setHasLiked(true)
  }

  const proximaFoto = () => {
    setFotoAtual((atual) => (atual + 1) % fotos.length)
  }

  const fotoAnterior = () => {
    setFotoAtual((atual) => (atual - 1 + fotos.length) % fotos.length)
  }

  return (
    <>
      <div className="card">
        <div className="avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SyTk-MrzQ1WR_f1u59R3VciAqK5HqmSOf_TRvEEg3Q&s=10"
            alt="Foto de perfil de el-chapelon"
          />
        </div>

        <h2 className="name">El-Chapelon</h2>
        <p className="title">desenvolvedor de games</p>

        {hasLiked && (
          <div className="likes">
            <span className="heart">❤️</span>
            <span>{count} Curtidas</span>
          </div>
        )}

        <button className="like-btn" onClick={handleLike}>
          <span className="thumb">👍</span>
          Curtir
        </button>
      </div>


      <div className="galeria">
        <h3>Comentários</h3>

        <div className="galeria-container">
          <button
            className="seta-foto"
            onClick={fotoAnterior}
            aria-label="Foto anterior"
          >
            ❮
          </button>

          <img
            className="imagem-galeria"
            src={fotos[fotoAtual]}
            alt={`Foto ${fotoAtual + 1}`}
          />

          <button
            className="seta-foto"
            onClick={proximaFoto}
            aria-label="Próxima foto"
          >
            ❯
          </button>
        </div>

        <div className="indicadores">
          {fotos.map((foto, index) => (
            <button
              key={foto}
              className={`indicador ${
                fotoAtual === index ? 'ativo' : ''
              }`}
              onClick={() => setFotoAtual(index)}
              aria-label={`Ver foto ${index + 1}`}
            />
          ))}
        </div>

        <p className="contador-fotos">
          {fotoAtual + 1} / {fotos.length}
        </p>
      </div>
    </>
  )
}

export default App
