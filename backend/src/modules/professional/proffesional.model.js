import { sequelize } from "../../config/database/database.js";
import { DataTypes } from "sequelize";
import User from "../users/userModel.js";

const Doctor = sequelize.define("doctor", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consults: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Doctor;