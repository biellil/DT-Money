import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <samp>Entradas</samp>
          <ArrowCircleUp size={32} color="#38b37e" />
        </header>
        <strong>R$ 17.500,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <samp>Saídas</samp>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.500,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <samp>Total</samp>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 17.500,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
