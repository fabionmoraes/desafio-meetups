'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('meetups', 'MeetupController').apiOnly()
    .validator(new Map(
      [
        [
          ['meetups.store'],
          ['Meetup']
        ]
      ]
    ))
  Route.get('listas', 'ListarMeetupController.index')
  Route.get('inscricoes', 'InscricoeController.index')
  Route.post('inscricoes', 'InscricoeController.store')
  Route.delete('inscricoes/:id', 'InscricoeController.destroy')
  Route.put('users', 'UserController.update').validator('UserUpdate')
}).middleware(['auth'])
