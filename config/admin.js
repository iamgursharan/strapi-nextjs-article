module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b5e3adb20de46b14e2c84333fc66cbb'),
  },
});
