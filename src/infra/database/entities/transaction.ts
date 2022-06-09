import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'transaction' })
export class PgTransaction {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'nome', nullable: true })
  name?: string

  @Column()
  email!: string

  @Column({ name: 'id_facebook', nullable: true })
  facebookId?: string

  @Column({ name: 'foto', nullable: true })
  pictureUrl?: string

  @Column({ name: 'iniciais', nullable: true })
  initials?: string
}
