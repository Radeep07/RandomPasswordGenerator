# Password Generator


## User Story

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

## Business Context

For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

## Acceptance Criteria

GIVEN that a user needs a new, secure password

WHEN prompted for password criteria

THEN a password is generated


## Description

Creating an application that generates a random password based on user-selected criteria. This application will run in the browser with dynamically updated HTML, CSS and JavaScript code.

The user will be prompted to choose from the following password criteria by clicking the button 'Create Password':

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters 

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application validates user input and ensure that at least one character type is selected.

Once all prompts are answered, the user will be presented with a password matching the answered prompts. This is done by a button click i.e., 'Generate Password'

The user should also have the option to click a button to copy the password to their clipboard.

My application is with a clean and polished user interface. Additionally, it adapts to multiple screen sizes.

Deployed application can be found at [Random Password Generator]( https://radeep07.github.io/RandomPasswordGenerator/)