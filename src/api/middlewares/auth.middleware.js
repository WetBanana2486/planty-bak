import jwt from 'jsonwebtoken';

// Middleware to verify JWT tokens
export const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the JWT token here (implementation depends on your JWT library)
  // If valid, attach user info to req.user
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Assuming decoded contains user info
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
}