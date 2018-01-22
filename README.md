# autofindr

##Technologies Used
* Node.js/NPM
* Express.js
* Heroku
* Bootstrap

##Setup
* The survey on the autofindr homepage should have 10 questions. Each answer will be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

* Determine the user's most compatible car using the following as a guide:

* Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against existing cars, question by question. Add up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
Car 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the car that fits the user the best.
Once you've found the current user's most compatible car, display the result as a modal pop-up.

* The modal should display both the name and picture of the closest match.

