# Onecause Login Front end

## Requirements

- The login view must protect the security of data entry from eavesdroppers.
- The usernames will be email addresses
- Passwords may be any ANSI keyboard-accessible character
- One-time tokens will be numeric and up to 4 characters
- The login box should align to both the vertical and horizontal center of the screen
- The background for the view should be an RGB of 255, 255, and 200
- The box containing the login fields should be a 400 x 400 box with a pure white
background
- Submission of the login form should post to the Go backend and determine next
action:
  - Success: Redirect to http://onecause.com to signify movement to the next
page
  - Failure: Indicate failure in such a way as it cannot be ignored

## Further considerations

- A real login page would of course need to be hosted with TLS
- Would want unit tests as appropriate
- Some sort of loading indicator would be good during the login call
- Styling meets requirements, but is likely sub-optimal
- All the strings hardcoded in the template should be localized and defined in a resource file or something
