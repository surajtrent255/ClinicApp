const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    // const user = req.user;
    // if (!user || !allowedRoles.includes(user.roles[0])) {
    //   return res.status(403).json({ message: "Access denied" });
    // }
    next();
  };
};

module.exports = roleMiddleware;
