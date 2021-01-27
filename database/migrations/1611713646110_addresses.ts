import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('country').nullable()
      table.string('state').nullable()
      table.string('city').nullable()
      table.string('street').nullable()
      table.string('number').nullable()
      table.string('additionalInfo').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
