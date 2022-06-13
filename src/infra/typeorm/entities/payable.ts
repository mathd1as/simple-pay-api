import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'payable' })
export class PgPayable {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'value', nullable: false })
  value!: number

  @Column({ name: 'status', nullable: false })
  status!: string

  @Column({ name: 'payment_date_hour', nullable: false })
  paymentDateHour!: number

  @Column({ name: 'transaction_id', nullable: false })
  transactionId!: number
}
