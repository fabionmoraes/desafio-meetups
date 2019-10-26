'use strict'

const Antl = use('Antl')

class Meetup {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      location: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Meetup
