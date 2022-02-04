Sign up dialog:
1. Open https://qa-challenge-tabeo.vercel.app/
2. Click Sign in in the top right corner
ER: Sign in dialog is shown, 
    email input, 'Sign in with email' and 'Sign in with Google' buttons are visible

Sign up with magic link:
1. Open https://qa-challenge-tabeo.vercel.app/
2. Click Sign in in the top right corner
3. When sign in dialog is shown enter you email
4. Click 'Sign in with email'
ER: email with sign in link is sent to the email address you have entered
    when clicked on the link in email you are logged in.

Sign up with Google:
1. Open https://qa-challenge-tabeo.vercel.app/
2. Click Sign in in the top right corner
3. When sign in dialog is shown click 'Sign in with Google'
4. And you are redirected to Google accounts selection page
5. If not logged in to Google then login
6. Select Google account with which you want to login to the app
ER: when clicked on the Google account you are redirected back to the app and logged in.
    Your Google avatar is shown together with your First/Last name

Get to checkout:
1. Sign in
2. Click on the button 'Pay £20/mo'
3. You are now redirected to the Checkout page (Stipe)
ER: On the left side of the page selected package and price are shown 
    Subscribe to Application UI Icon Pack
    £20.00 per month
    On the right side email is pre-filled with your email, Country or region is also pre-selected

Get to checkout when not logged in:
1. Open https://qa-challenge-tabeo.vercel.app/
2. Click on the button 'Pay £20/mo'
ER: Sign in dialog is shown, no redirect to Stripe

Pay monthly with valid payment details:
    Test data
        Card number: 4000002760003184
        CVC: Any 3 digits
        Card expiration date: Any future date
        Name on card: any name
1. Sign in
2. Click on the button 'Pay £20/mo'
3. On the checkout page enter your {Card number}
4. Enter card {expiration date}
5. Enter {CVC code}
6. Enter {Name on card}
7. Select your region if it is different from pre-selected
8. Click 'Subscribe' button
9. When '3D Secure' dialog appears press 'Complete authentication'
ER: You are redirected to the Thank you page
    You see thank you message 'Your purchase is ready to be downloaded.'
    You see your order number and status 'Your order #1188110 has been processed.'
    You see your license number e.g. 'HOHMQEIORZJw11YoF0Jr'
    You see what was bought 'Application UI Icon Pack' and description
    You see price calculation - '12 * £20 (£240)'
    You see 'Download' button

Pay yearly with valid payment details:
    Test data
        Card number: 4000002760003184
        CVC: Any 3 digits
        Card expiration date: Any future date
        Name on card: any name
1. Sign in
2. Click on the button 'Pay £220'
3. On the checkout page enter your {Card number}
4. Enter card {expiration date}
5. Enter {CVC code}
6. Enter {Name on card}
7. Select your region if it is different from pre-selected
8. Click 'Subscribe' button
9. When '3D Secure' dialog appears press 'Complete authentication'
ER: You are redirected to the Thank you page
    You see thank you message 'Your purchase is ready to be downloaded.'
    You see your order number and status 'Your order #1366302982 has been processed.'
    You see your license number e.g. '2AoB9T8NuLBSMxtBS2zq'
    You see what was bought 'Application UI Icon Pack' and description
    You see price calculation - 'Price £220'
    You see 'Download' button

Pay yearly with invalid payment details:
    Test data
        Card number: 4000008260003178
        CVC: Any 3 digits
        Card expiration date: Any future date
        Name on card: any name
1. Sign in
2. Click on the button 'Pay £220'
3. On the checkout page enter your {Card number}
4. Enter card {expiration date}
5. Enter {CVC code}
6. Enter {Name on card}
7. Select your region if it is different from pre-selected
8. Click 'Subscribe' button
9. When '3D Secure' dialog appears press 'Complete authentication'
ER: You are not redirected to the Thank you page
    You see error message 'Your card has been declined.'
