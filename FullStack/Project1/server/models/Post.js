module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});

    // Define a static method for creating a new post
    createPost = async (post) => {
        try {
            console.log(post);
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    };

    return Posts;
};
