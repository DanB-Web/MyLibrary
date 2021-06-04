export const sessionCheck = (req, res, next) => {
  if (req.session.cookie) {
    next();
  } else {
    res.json({error: "Not authed"});
  }
}