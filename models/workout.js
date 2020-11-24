const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        },
        distance: {
            type: Number,
            required: false
        }
    }]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

workoutSchema.virtual('totalTime').get(function () {
    return this.exercises.reduce((time, exercise) => time + exercise.duration, 0)
})

workoutSchema.virtual('totalWeight').get(function () {
    return this.exercises.reduce((weight, exercise) => weight + exercise.duration, 0)
})

workoutSchema.virtual('totalDistance').get(function () {
    return this.exercises.reduce((distance, exercise) => distance + exercise.duration, 0)
})

module.exports = model('Workout', workoutSchema)