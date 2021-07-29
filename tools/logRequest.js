function logRequest(req, res, next) {
  const method = req.method
  const timeStart = new Date()
  
  const date = timeStart.toISOString().slice(0, 10)
  const time = timeStart.toLocaleTimeString('en-US', { timeStyle: 'medium', hour12: false })

  const url = req.url

  res.locals.logs = { method: method, date: date, time: time, url: url }
  
  res.on('finish', () => {
    const timeEnd = new Date()
    const ping = timeEnd - timeStart

    const message = `${date} ${time} | ${method} from ${url} | total time: ${ping}ms`
    console.log(message)
  })
  next()
}

module.exports = logRequest