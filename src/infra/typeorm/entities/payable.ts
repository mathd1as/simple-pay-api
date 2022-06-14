
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
