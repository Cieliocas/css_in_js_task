import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import TemaLight from './Theme/tema'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={TemaLight}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
