export const parseTime = (ms, utc = false) => {
  const time = new Date(ms)
  const seconds = utc ? time.getUTCSeconds() : time.getSeconds()
  const minutes = utc ? time.getUTCMinutes() : time.getMinutes()
  const hours = utc ? time.getUTCHours() : time.getHours()
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`
}
