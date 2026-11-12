import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [fotoAtual, setFotoAtual] = useState(0)

  // Nomes de perfil para cada foto
  const nomesPerfil = [
    'Megumin',
    'Eggman',
    'Knuckles',
    'Luiz Miguel',
  ]

  const comentarios = [
    'Designer Ótimo',
    'Dr. Eggman aprovou este designer.',
    'Design insano, gostei muito!',
    'Muito bom man',
  ]

  const [respostas, setRespostas] = useState({})
  const [textoResposta, setTextoResposta] = useState('')

  const fotos = [
    'https://i.pinimg.com/236x/3c/df/1f/3cdf1f8d5ccbe47c979d00cd5de9100c.jpg',
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

  const handleEnviarResposta = (e) => {
    e.preventDefault()
    if (!textoResposta.trim()) return

    setRespostas((prev) => ({
      ...prev,
      [fotoAtual]: [...(prev[fotoAtual] || []), textoResposta],
    }))

    setTextoResposta('')
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
          <div className="likes-wrapper">
            <div className="likes">
              <span className="heart">❤️</span>
              <span>{count} Curtidas</span>
            </div>

            {count > 5 && (
              <div className="tag-turma">
                TECINFO 2026 🔥
              </div>
            )}
          </div>
        )}

        <button className="like-btn" onClick={handleLike}>
          <span className="thumb">👍</span>
          Curtir
        </button>
      </div>

      <div className="galeria">
        <h3>Comentários</h3>

        <div className="perfil-foto-header">
          <span className="nome-perfil-foto">{nomesPerfil[fotoAtual]}</span>
        </div>

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
            alt={`Foto de ${nomesPerfil[fotoAtual]}`}
          />

          <button
            className="seta-foto"
            onClick={proximaFoto}
            aria-label="Próxima foto"
          >
            ❯
          </button>
        </div>

        <div className="comentario-box">
          <p className="comentario-texto">
            <strong>Comentário:</strong> {comentarios[fotoAtual]}
          </p>

          {respostas[fotoAtual] && respostas[fotoAtual].length > 0 && (
            <div className="lista-respostas">
              {respostas[fotoAtual].map((resposta, index) => (
                <div key={index} className="resposta-item">
                  💬 {resposta}
                </div>
              ))}
            </div>
          )}

          {/* Formulário para responder */}
          <form className="form-resposta" onSubmit={handleEnviarResposta}>
            <input
              type="text"
              placeholder="Responder comentário..."
              value={textoResposta}
              onChange={(e) => setTextoResposta(e.target.value)}
            />
            <button type="submit">Responder</button>
          </form>
        </div>

        <div className="indicadores">
          {fotos.map((foto, index) => (
            <button
              key={foto}
              className={`indicador ${
                fotoAtual === index ? 'ativo' : ''
              }`}
              onClick={() => setFotoAtual(index)}
              aria-label={`Ver foto de ${nomesPerfil[index]}`}
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