import * as Clock from './clock'
import './listeners'

if (window.module) module = window.module

Clock.update()
window.setInterval(() => {
  Clock.update()
}, 10000)



