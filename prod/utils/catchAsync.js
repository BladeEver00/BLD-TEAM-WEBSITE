// Ce wrapper évite de répéter try/catch dans chaque fonction async du contrôleur
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};