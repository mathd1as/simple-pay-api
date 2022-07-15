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

  @Column('varchar', { name: 'card_holder_name', length: 30, nullable: false })
  cardHolderName!: string

  @Column('varchar', { name: 'security_code', length: 4, nullable: false })
  securityCode!: string

  @Column({ name: 'validity', nullable: false })
  validity!: Date

  @Column({ name: 'payable_id', nullable: false })
  payableId!: number

  @Column({ name: 'user_id', nullable: false })
  userId!: number
}
