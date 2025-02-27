import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money
} from 'phosphor-react'
import {
  Container,
  PaymentForm,
  PaymentFormCol,
  PaymentMethodForm,
  PaymentTitle,
  SideContainer
} from './styles'
import { useTheme } from 'styled-components'
import { Radio } from '../../components/Radio'
import { InputText } from '../../components/InputText'

export function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <SideContainer>
        <h2>Complete seu pedido</h2>

        <form>
          <PaymentTitle>
            <MapPinLine color={theme.colors['yellow-dark']} size={20} />

            <div>
              <h3>Endereço de Entrega</h3>
              <h4>Informe o endereço onde deseja receber seu pedido</h4>
            </div>
          </PaymentTitle>

          <PaymentForm>
            <PaymentFormCol cols={4}>
              <InputText placeholder="CEP" inputMode="numeric" />
            </PaymentFormCol>

            <PaymentFormCol cols={12}>
              <InputText placeholder="Rua" />
            </PaymentFormCol>

            <PaymentFormCol cols={4}>
              <InputText placeholder="Número" />
            </PaymentFormCol>
            <PaymentFormCol cols={8}>
              <InputText placeholder="Complemento" optional />
            </PaymentFormCol>

            <PaymentFormCol cols={4}>
              <InputText placeholder="Bairro" />
            </PaymentFormCol>
            <PaymentFormCol cols={6}>
              <InputText placeholder="Cidade" />
            </PaymentFormCol>
            <PaymentFormCol cols={2}>
              <InputText placeholder="UF" />
            </PaymentFormCol>
          </PaymentForm>
        </form>

        <form>
          <PaymentTitle>
            <CurrencyDollarSimple color={theme.colors.purple} size={20} />

            <div>
              <h3>Pagamento</h3>
              <h4>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h4>
            </div>
          </PaymentTitle>

          <PaymentMethodForm>
            <Radio isSelected>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio isSelected={false}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>

            <Radio isSelected={false}>
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </PaymentMethodForm>
        </form>
      </SideContainer>

      <SideContainer>
        <h2>Cafés selecionados</h2>
      </SideContainer>
    </Container>
  )
}
