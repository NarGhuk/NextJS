export default function echo(req, res) {
  res.status(200).json({ yourId: req.query.id })
}
