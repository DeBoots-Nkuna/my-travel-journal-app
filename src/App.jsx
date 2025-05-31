import { Header } from './components/Header'
import { Article } from './components/Article'

export const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Article />
      </main>
    </>
  )
}
