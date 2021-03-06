module.exports = (mongoose) => {
    let schema = mongoose.Schema(
        {
            user: String,
            title: String,
            description: String,
        },
        {timestamps: true}
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    })
    const Thought = mongoose.model("thought", schema)
    return Thought;
};
