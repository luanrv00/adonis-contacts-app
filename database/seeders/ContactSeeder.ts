import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Contact from 'App/Models/Contact'
import Address from 'App/Models/Address'

export default class ContactSeederSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    const addr = await Address.create({country: 'Brasil'})

    const contact = await Contact.create({
      first_name: 'Soft',
      last_name: 'Makers',
      email: 'Makers'
    })

    contact.related('address').associate(addr)
  }
}
