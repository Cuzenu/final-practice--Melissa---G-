/* 
Core idea: Supernatural VR workout generator
Supernatural Workout Near, Go Far, is a VR fitness app for the Meta Quest 2.  The headset utilize hand tracking controllers to allow dynamic exercises within a virtual space.  The primary workout modes are: boxing and flow with a range of difficulties from low, medium and high, and a workout library of over 1000 options.  A single workout may consists of as few as 1 song or as many as 6 or more within a workout playlist.

This app generates a daily workout plan to allow for variety of songs, but also follow some typical routines.  The user must select which type of workout they will complete: Boxing or Flow.  The app will suggest a Low level workout that is 5-10 minutes as a warm up for the first track.  The next option is a Medium level workout that spans 10-20 minutes.  If participants have enough time and energy they can opt to complete a Hard workout as well.  The app will track completion status (completed, not yet completed) to avoid repetition, once all songs of a specific criteria are exhausted it will notify users all songs of the given parameters are completed and randomized form the previous workout list.


*/
const readline = require('readline-sync');

//Task 1: Gengerate a workout library with 10 workouts and the following properties:
// - workoutTitle: string
// - workoutType: string (boxing or flow)
// - workoutLevel: string (low, medium, high)
// - workoutDuration: number (in minutes)
// - workoutCompleted: boolean (default false)
// - workoutPlaylist: array of strings (song names)
// Each workout should be setupt within an array of objects with keys to keep the parameters organized.

/*Task 1 utalizes skills from the following lessons:
Building Arrays, Stringing Characters Together - generating the workout library utalizes the skills of building arrays with the object key value pairs.
Values, Data Types, and Operations & Control Structures and Logic - the lessons around different kinds of data types will be used to create the object keys and ensure each workout has the correct data type.  For example, the workoutDuration is a number, while the workoutName is a string.
The app will also use the boolean data type to track the completion status of each workout.  The app will check this value to determine if a workout has been completed or not.

*/

let workoutLibrary = [
    {
        workoutTitle: "Boxing Quick Hits",
        workoutType: "boxing",
        workoutLevel: "low",
        workoutDuration: 5,
        workoutCompleted: false,
        workoutPlaylist: ["Song A"]

    },
    {
        workoutTitle: "Flow Quick Hits",
        workoutType: "flow",
        workoutLevel: "low",
        workoutDuration: 5,
        workoutCompleted: false,
        workoutPlaylist: ["Song B"]
    },

    {
        workoutTitle: "Boxing Headbangers",
        workoutType: "boxing",
        workoutLevel: "medium",
        workoutDuration: 10,
        workoutCompleted: false,
        workoutPlaylist: ["Song C", "Song D"]

    },
    {
        workoutTitle: "Shower Songs",
        workoutType: "flow",
        workoutLevel: "medium",
        workoutDuration: 10,
        workoutCompleted: false,
        workoutPlaylist: ["Song E", "Song F"]
    },
]


console.log("Workout Library: ", workoutLibrary); // Print full workout library

/* Task 2: Create a function to generate a workout plan based on user input.  The function should take the following parameters:
- selectedType: string (boxing or flow)
- selectedLevel: string (low, medium, high)
- selectedDuration: number (in minutes)



console.log("Welcome to the Supernatural VR workout generator!")
console.log("Please select your workout type: boxing or flow.");
let selectedType = readline.question("Enter workout type: ");  //prompt user for input on workout type

console.log("Please select your workout level: low, medium, high.");      //prompt user for input on workout level
let selectedLevel = readline.question("Enter workout level: ");

console.log("Please select your workout duration in minutes: "); //prompt user for input on workout duration
let selectedDuration = readline.question("Enter workout duration: "); //prompt user for input on workout duration

This utalizes skills from the following lessons:
Values, Data Types and Operations - the function will take the user input and use it to filter the workout library array to find workouts that match the selected type, level and duration.
Control Structures and Logic - the function will use if statements to check if the workout matches the selected type, level and duration.  If it does, it will add it to the workout plan array.
Working with Loops - the function will use a for loop to iterate through the workout library array and check each workout against the selected type, level and duration.  It will also be used to very the workout selection.

let workoutSummary = '
Workout Summary:
- Workout Type: ${selectedType}
- Workout Title: ${workoutTitle}
- Workout Level: ${selectedLevel}
- Workout Duration: ${selectedDuration} minutes

Enjoy your workout!
';'

// Use an if statement to check if the user input is valid.  If it is not, prompt the user to enter a valid input.
// If workout summary is correct then the app will move to task 3, else loop back to the start and ask for input again.

console.log(workoutSummary); // Print workout summary as confirmation to user



//Task 3: Create an array of workoutsCompleted to track the completion status of each workout.  This array will be used to store the completed workouts and their properties.  The app will check this array to avoid repeating workouts that have already been completed.  The completed workouts will be removed from the workout library array and added to the workoutsCompleted array.  The app will also check if all workouts of a specific criteria have been completed and notify the user.

/*Task 3 utalizes skills from the following lessons:
Building Arrays, Using Arrays - by removing workouts from the workout library array and adding them to the workoutsCompleted array, the app will be able to track which workouts have been completed and which ones are still available for selection.
This will be done by using the splice method to remove the completed workout from the workout library and push it to the workoutsCompleted array.

// Generate th empty array to track completed workouts
let workoutsCompleted = [];

// Splice the selected workout from the wokrout library and push it to the workoutsCompleted array

// Output the completed workout to the user
console.log("Workout Completed: ", workoutTitle); // Print completed workout to user

// Check if the user wants to view their full completed workout list.  If they do, print the workoutsCompleted array to the console.

// Offer to let view the workout library based on workouts not yet compelted.  If they do, print the workout library array to the console.

// If all workouts of a specific criteria have been completed, notify the user and randomize the previous workout list.

*/