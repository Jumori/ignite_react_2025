import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  Content,
  Heading,
  Summary,
  SummaryContent,
  SummaryItem
} from './styles'
import sideImg from '../../assets/success-side-image.svg'

export function Success() {
  return (
    <Container>
      <Heading>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </Heading>

      <Content>
        <Summary>
          <SummaryContent>
            <SummaryItem $backgroundColor="purple">
              <MapPin size={32} />

              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </span>
            </SummaryItem>

            <SummaryItem $backgroundColor="yellow">
              <Timer size={32} />

              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </SummaryItem>

            <SummaryItem $backgroundColor="yellow-dark">
              <CurrencyDollar size={32} />

              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </span>
            </SummaryItem>
          </SummaryContent>
        </Summary>

        <img src={sideImg} />
      </Content>
    </Container>
  )
}
