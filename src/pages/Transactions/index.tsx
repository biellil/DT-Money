import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import {
  PriceHighLight,
  TransactionTable,
  TransactionsContainer,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,000</PriceHighLight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">-R$ 59,00</PriceHighLight>
              </td>
              <td>Alineação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
