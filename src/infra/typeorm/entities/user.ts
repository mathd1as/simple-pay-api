import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class pgUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar', { name: 'name', length: 30, nullable: false })
  name!: string

  @Column('varchar', { name: 'email', length: 30, nullable: false })
  email!: string
}
