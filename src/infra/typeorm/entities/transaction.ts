import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'transaction' })
export class PgTransaction {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'value', type: 'float', nullable: false })
  value!: number

  @Column('varchar', { name: 'payment_method', length: 30, nullable: false })
  paymentMethod!: string

  @Column({ name: 'card_number', nullable: false })
  cardNumber!: number

  @Column({ name: 'card_holder_name', nullable: false })
  cardHolderName!: string

  @Column({ name: 'validity', nullable: false })
  validity!: Date

  @Column({ name: 'payable_id', nullable: false })
  payableId!: number
}
