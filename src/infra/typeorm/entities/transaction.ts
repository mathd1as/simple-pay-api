import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'transaction' })
export class PgTransaction {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'value', nullable: false })
  value!: number

  @Column({ name: 'payment_method', nullable: false })
  paymentMethod!: string

  @Column({ name: 'card_number', nullable: false })
  cardNumber!: number

  @Column({ name: 'Cardholder_name', nullable: false })
  CardholderName!: string

  @Column({ name: 'validity', nullable: false })
  validity!: Date
}
