module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn("Books", "filename", Sequelize.STRING);
    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn("Book", "filename");
    },
};
