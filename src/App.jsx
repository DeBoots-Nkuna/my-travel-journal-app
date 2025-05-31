import { Header } from './components/Header'
import { Article } from './components/Article'
import travelData from '../journalData'

export const App = () => {
  //creating journal entries from travelData

  const journalEntriesElements = travelData.map((entry) => {
    return <Article key={entry.id} {...entry} />
  })

  return (
    <>
      <Header />
      <main className="container">{journalEntriesElements}</main>
    </>
  )
}
