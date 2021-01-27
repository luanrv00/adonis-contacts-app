import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('photo').nullable()
      table.string('firstName')
      table.string('lastName')
      table.string('phone').nullable()
      table.string('email')
      table.integer('addressId').references('id').inTable('addresses')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
