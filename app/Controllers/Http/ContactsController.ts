import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

import Contact from 'App/Models/Contact'
import Address from 'App/Models/Address'

export default class ContactsController {
  public async index ({view}: HttpContextContract) {
    const contacts = await Contact.query().preload('address')
    return view.render('contacts/index', {contacts})
  }

  public async create ({view}: HttpContextContract) {
    return view.render('contacts/create')
  }

  public async store ({request, response}: HttpContextContract) {
    await request.validate({
      schema: schema.create({
        first_name: schema.string(),
        last_name: schema.string(),
        email: schema.string({}, [rules.email()]),
      })
    })

    let contactData = request.only(
      ['first_name', 'last_name', 'email', 'phone']
    )

    const addrData = request.only(
      ['country', 'state', 'city', 'street', 'number', 'additional_info']
    )

    const contactPhoto = request.file('photo',
      {size: '1mb', extnames: ['jpg', 'jpeg', 'png', 'gif']} // upload validations
    )

    if (contactPhoto) {
      // Set contact photo path
      const publicPath = `${Application.appRoot}/public/uploads`
      await contactPhoto.move(publicPath)
      contactData.photo = contactPhoto.fileName
    }

    const addr = await Address.create(addrData)
    const contact = await Contact.create(contactData)

    // Set correct address_id for contact model
    contact.related('address').associate(addr)

    return response.redirect('contacts')
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
