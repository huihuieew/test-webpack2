module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": ["width", "height"],
  },
};
