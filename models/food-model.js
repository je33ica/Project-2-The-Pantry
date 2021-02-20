module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40],
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    storageCondition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 40],
      },
    },
  });
  return Food;
};
