'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'provider'])

    const user = await User.create(data)

    return user
  }

  async update ({ auth, request, response }) {
    const user = auth.current.user

    user.username = request.input('username')
    user.email = request.input('email')

    if (request.input('password')) {
      const verifyPassword = await Hash.verify(
        request.input('password'),
        user.password
      )

      if (!verifyPassword) {
        return response.status(400).json({
          status: 'error',
          message: 'Não foi possível verificar a senha atual! Por favor, tente novamente.'
        })
      }

      if (request.input('newPassword') === request.input('password_confirmed')) {
        user.password = request.input('newPassword')
      } else {
        return response.status(400).json({
          status: 'error',
          message: 'A sua senha não bate na confirmação'
        })
      }
    }

    await user.save()

    return response.json({
      id: user.id,
      username: user.username,
      email: user.email,
      provider: user.provider
    })
  }
}

module.exports = UserController
