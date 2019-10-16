module.exports = department => {
    return (req, res, next) => {
      // check that the role that was in the token is the role passed as an argument?
      if (department === req.user.department) {
        next();
      } else {
        res.status(403).json({ you: "can't touch this" });
      }
    };
  };