export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parse(req.body);
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.errors });
  }
};
