import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Contact from 'App/Models/Contact'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public country: string

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public street: string

  @column()
  public number: string

  @column()
  public additionalInfo: string

  @hasMany(() => Contact)
  public contacts: HasMany<typeof Contact>
}
