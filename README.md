# theVentChallenge

Prove of experience.

## The Challenge is:

So here is our Chuck Norris Challenge that I would like you to code:

Please write an application in react and nodejs that:

    takes a variable amount of valid Email Addresses from the User
    Sorts them by: 1st Domain name, 2nd name part of the email
    Sends with a click of a button a Chuck Norris joke within a HTML email to the email addresses

Jokes can be received from this API: http://www.icndb.com/api/

Hint: Write the application as if you would roll it out to a potential customer. That means also think about how you secure your code quality and architecture. Keep the design efforts to a bear minimum.

Also let us know roughly how long it took you to complete the challenge.
If you have any questions let us know.

# HOW TO RUN:

- Do `npm install` or `yarn`.
- Get into `client` directory using `cd client` then install react modules `npm install` or `yarn`.
- Return to the root filder of the project.
- Run `npm run s`

## TODOS tasks:

- Prepare directory with boiler plate for react and nodejs environment using concurrently [29:24 Minutes done].
- Front-end tasks
  - The interface is simple which content of header text and some other components bellow the header. It is centered.
  - Build UI components for Input box with button to add new email address. It has result field for error messages.
  - Implement validation (email validation).
  - Build emails box to show all emails that will send to and store them in localstorage.
  - Build Axios service for api calls.
  - Build service to check if the new emails is already exits and return boolean.
  - Build service to sort email by [domain, name] in sequance.
- Back-end tasks
  - .
