import dayjs from 'dayjs';
const now = dayjs()

export function createLi(listId, labelText, liText) {
  const label = document.createElement("label")
  const li = document.createElement("li")
  const ul = document.getElementById(listId)
  label.innerText = labelText
  li.innerText = liText
  ul.append(label, li)
}

export function showAge(day, month, year) {
  const date = dayjs(`${year}/${month}/${day}`)
  let diffYear = now.diff(date, 'year')
  let diffMonth = now.diff(`${now.year()}-${date.month()}-${date.day()}`, 'month') - 1
  let diffDay = now.diff(`${now.year()}-${date.month()}-${date.day()}`, 'day')

  if (now.month() < date.month()) {
    diffMonth = (now.month() - date.month()) + 12  
    diffDay = (now.day() - date.day() + 30)
  } 

  const age = `${diffYear} anos, ${diffMonth} meses, ${diffDay} dias.`
  return age
}

export function showHours(day, month, year) {
  const date = `${year}/${month}/${day}`
  const diff = now.diff(date, 'hours')
  const hours = `${diff} horas.`
  return hours
}

export function showMinutes(day, month, year) {
  const date = `${year}/${month}/${day}`
  const diff = now.diff(date, 'minute')
  const minutes = `${diff} minutos.`
  return minutes
}
