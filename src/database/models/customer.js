module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define(
        'customer',
        {
          // Model attributes are defined here
          custormer_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          customer_details: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        },
        {
          // Other model options go here
        },
      );
    return Customer
}







