const jwt = require('jsonwebtoken');

exports.authentified = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const userType = decodedToken.userType;
    if (req.params.userId && req.params.userId != userId) {
      throw 'Invalid user ID';
    } else {
      req.user = { userType: userType }
      next();
    }
  } catch {
    res.status(401).json({ error: 'Invalid request ! (not authentified)' });
  }
};

exports.allowClient = (req, res, next) => {
  if(req.user && req.user.userType == "Client") {
    req.user.isAllowed = true;
  }
  next();
}

exports.allowRestaurant = (req, res, next) => {
  if(req.user && req.user.userType == "Restaurant") {
    req.user.isAllowed = true;
  }
  next();
}

exports.allowDeliveryMan = (req, res, next) => {
  if(req.user && req.user.userType == "DeliveryMan") {
    req.user.isAllowed = true;
  }
  next();
}

exports.allowManager = (req, res, next) => {
  if(req.user && req.user.userType == "Manager") {
    req.user.isAllowed = true;
  }
  next();
}

exports.checkAuthorisation = (req, res, next) => {
  try {
    if(req.user && req.user.isAllowed) {
      next();
    } else {
      throw 'Not allowed';
    }
  } catch {
    res.status(401).json({ error: 'Invalid request ! (lack of permission)' });
  }
}

