'use strict'

const Insc = use('App/Models/Inscricoe')

class InscricoeController {
  async index ({ auth }) {
    const meetups = await Insc.query().where('id_user', auth.user.id)
      .with('user')
      .with('organizador')
      .with('meetup')
      .with('file')
      .fetch()

    return meetups
  }

  async store ({ request, auth, response }) {
    const data = request.only(['meetup_id', 'file_id', 'org_id'])

    const inscricoes = await Insc.query().where({
      id_user: auth.user.id,
      meetup_id: request.input('meetup_id')
    })
      .first()

    if (inscricoes) {
      return response.json({
        error: 'Você já possui essa inscrição'
      })
    }

    const meetups = await Insc.create({
      ...data,
      id_user: auth.user.id
    })

    return meetups
  }

  async destroy ({ params }) {
    const insc = await Insc.findOrFail(params.id)

    await insc.delete()
  }
}

module.exports = InscricoeController
