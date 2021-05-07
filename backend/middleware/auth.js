export const sessionCheck = (req, res, next) => {
  if (req.session.isLoggedIn === true) {
    next();
  } else {
    res.json({error: "Not authed"});
  }
}