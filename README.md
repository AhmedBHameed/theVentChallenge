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

- Prepare directory with boiler plate for react and nodejs environment using concurrently [00:29:24 Minutes done].
- Front-end tasks

  - The interface is simple which content of header text and some other components bellow the header. It is centered [00:16:31 Minutes done].
  - Build UI components for Input box with button to add new email address. It has result field for error messages. [01:02:23 Minutes done].
  - Email table list to show all emails stored to send them the joke with delete functionality. [01:25:03 Minutes done].
  - JokeBox to fetch jokes and 2 button one for select another joke and the other to send it to emails listed in emails tabl. [00:45:41 Minutes done].
  - Build Axios service for api calls. [00:25:41 Minutes done].
  - Build email service to [sort email, grab emails, store emails, check emails, check existance [01:38:23 Minutes done].
  - Bind buttons with axios [00:31:32 Minutes done].
  - Build notification message [00:44:23 Minutes done].

- Back-end tasks

  - Implement End-point with random jokes [00:23:33 Minutes done].
  - Implement End-point to recieve joke with list of emails to send [01:01:37 Minutes done].
  - Implement XSS security service [00:26:19 Minutes done].
  - Implement Job-Cron to prevent hammering the domain [00:16:38 Minutes done].
  - Implement HTML email body [01:24:22 Minutes done].

- Some enhancement and documentation [00:53:04 Minutes done].

**In general i also search for some implementation while doing the app and for that i would say the app took me 1.5 working days in total**
