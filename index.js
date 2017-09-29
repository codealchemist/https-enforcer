function isPrivateIp (host) {
  return host.match(/^localhost|(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^::1$)|(^[fF][cCdD])/)
}

module.exports = (req, res, next) => {
  // Don't redirect private ips.
  const host = req.get('host')
  if (isPrivateIp(host)) return next()

  // Don't redirect if it's already https.
  const schema = (req.headers['x-forwarded-proto'] || '').toLowerCase()
  if (schema === 'https') return next()

  // Redirect.
  res.redirect('https://' + req.headers.host + req.url)
}
