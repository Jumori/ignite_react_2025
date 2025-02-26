import { Hero } from './components/Hero'
import { CoffeeList } from './styles'
import { coffees } from '../../../server.json'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <Hero />

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map(coffee => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
