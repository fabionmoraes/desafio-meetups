'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth, response }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.query().select('id', 'username', 'email', 'provider')
      .where('email', email).first()

    return response.json({
      user,
      token
    })
  }
}

module.exports = SessionController
