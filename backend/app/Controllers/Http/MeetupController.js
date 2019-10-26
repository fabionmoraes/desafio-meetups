'use strict'

const Meetup = use('App/Models/Meetup')

class MeetupController {
  async index ({ request }) {
    const meetup = await Meetup.query()
      .orderBy('id', 'DESC')
      .with('user', (builder) => builder.select('id', 'username'))
      .with('file')
      .fetch()

    return meetup
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'description', 'date_meetup', 'time', 'location', 'file_id'])

    const meetup = await Meetup.create({ ...data, user_id: auth.user.id })

    return meetup
  }

  async show ({ params }) {
    const meetup = await Meetup.findOrFail(params.id)

    await meetup.load('user', (builder) => builder.select('id', 'username'))
    await meetup.load('file')

    return meetup
  }

  async update ({ params, request, response }) {
    const meetup = await Meetup.findOrFail(params.id)
    const data = request.only(['title', 'description', 'date_meetup', 'time', 'location', 'file_id'])

    meetup.merge(data)

    await meetup.save()

    return meetup
  }

  async destroy ({ params }) {
    const meetup = await Meetup.findOrFail(params.id)

    await meetup.delete()
  }
}

module.exports = MeetupController
