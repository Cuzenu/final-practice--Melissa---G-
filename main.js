/* 
Core idea: Supernatural VR workout generator
Supernatural Workout Near, Go Far, is a VR fitness app for the Meta Quest 2.  The headset utilize hand tracking controllers to allow dynamic exercises within a virtual space.  The primary workout modes are: boxing and flow with a range of difficulties from low, medium and high, and a workout library of over 1000 options.  A single workout may consists of as few as 1 song or as many as 6 or more within a workout playlist.

This app generates a daily workout plan to allow for variety of songs, but also follow some typical routines.  The user must select which type of workout they will complete: Boxing or Flow.  The app will suggest a Low level workout that is 5-10 minutes as a warm up for the first track.  The next option is a Medium level workout that spans 10-20 minutes.  If participants have enough time and energy they can opt to complete a Hard workout as well.  The app will track completion status (completed, not yet completed) to avoid repetition, once all songs of a specific criteria are exhausted it will notify users all songs of the given parameters are completed and randomized form the previous workout list.


*/
const readline = require('readline-sync');

//Task 1: Gengerate a workout library with 10 workouts and the following properties:
// - workoutName: string
// - workoutType: string (boxing or flow)
// - workoutLevel: string (low, medium, high)
// - workoutDuration: number (in minutes)
// - workoutCompleted: boolean (default false)
// - workoutPlaylist: array of strings (song names)
// Each workout should be setupt within an array of objects with keys to keep the parameters organized.
// Task 1 utalizes skills from the following lessons:
// Building Arrays