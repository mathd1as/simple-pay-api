
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PgTransaction } from '@/infra/typeorm/entities/transaction'

@Entity({ name: 'payable' })
export class PgPayable {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'float', nullable: false })
  value!: number

  @Column('varchar', { length: 30, nullable: false })
  status!: string

  @Column({ name: 'payment_date_hour', nullable: false })
  paymentDateHour!: Date

  @OneToOne(() => PgTransaction)
  @JoinColumn()
  transaction!: PgTransaction
}
