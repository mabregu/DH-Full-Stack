module.exports = (sequelize, DataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        awards: {
            type: DataTypes.INTEGER,
        },
        length: {
            type: DataTypes.INTEGER,
        },
        release_date: {
            type: DataTypes.DATE,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie;
}