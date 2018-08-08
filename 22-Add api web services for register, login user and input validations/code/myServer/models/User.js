/**
 * Mr Nguyen Duc Hoang
 * Youtube channel: https://www.youtube.com/c/nguyenduchoang
 */
//Do the same as Todo
import Sequelize from 'sequelize';
import { sequelize } from '../databases/database';
import Todo from './Todo';
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    profileurl: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATE
    }
}, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
});
//Relations
User.hasMany(Todo, { foreignKey: 'userid', sourceKey: 'id' });
Todo.belongsTo(User, { foreignKey: 'userid', targetKey: 'id' });
export default User;