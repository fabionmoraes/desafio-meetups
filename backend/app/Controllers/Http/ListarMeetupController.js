'use strict'

const Meetup = use('App/Models/Meetup')

class ListarMeetupController {
  async index ({ request }) {
    const { date } = request.get()
    const meetup = await Meetup.query()
      .where({ date_meetup: date })
      .orderBy('id', 'DESC')
      .with('user', (builder) => builder.select('id', 'username'))
      .with('file')
      .fetch()

    return meetup
  }
}

module.exports = ListarMeetupController
