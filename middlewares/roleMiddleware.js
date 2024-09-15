const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      const user = req.user;
      if (!user || ! user.roles.includes(allowedRoles)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
  
  module.exports = roleMiddleware;
  