import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Contact from 'App/Models/Contact'

export default class ContactsController {
  public async index ({view}: HttpContextContract) {
    const contacts = await Contact.all()
    return view.render('contacts/index', {contacts})
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
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
