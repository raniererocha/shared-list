import 'moment/locale/pt-br'
import moment from 'moment'
moment.locale('pt-br')

export const showTime = (time: string) => {
  return moment(time).fromNow()
}
