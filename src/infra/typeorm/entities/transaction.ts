import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PgPayable, pgUser } from '@/infra/typeorm/entities'

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

  @Column({ name: 'validity', nullable: false })
  validity!: Date

  @OneToOne(() => PgPayable)
  @JoinColumn()
  payable!: PgPayable

  @OneToOne(() => pgUser)
  @JoinColumn()
  user!: pgUser
}
