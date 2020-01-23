

const defaultUser = {
  name: 'Roman Chyorny',
  given_name: 'Roman',
  family_name: 'Chyorny',
  picture: 'https://lh5.googleusercontent.com/-uMPshretLsU/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reVWO36lpY-ZhVVDgVq1C1vMwQcOg/photo.jpg',
  email: 'dumpoftheworld@gmail.com',
  email_verified: true,
  displayingFormatTime: 'H:mm A'
};

module.exports.getProfile = async (req, res) => {

  res.status(200).json(defaultUser)
};

module.exports.updateProfile = async (req, res) => {};

module.exports.deleteProfile = async (req, res) => {};
