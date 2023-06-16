#### App Title ---

# **Adventure Camp**

#

## **Live Site**

(https://adventure-camp-27384.web.app/ “Adventure Camp”)

#



#

## Site features

1. Adventure camp is a summer camp website.
2. There can be 3 types of user in this suite.While registering by default users will be give  student role option, or they can choose Instructor role.
3. Users with student role can select classes and pay for its. Stripe is used for payment integration.
4. Users with instructor role can add classes.
5. Third type of user is admin.Admin can see all types of users including instructor and student.Admin can manage users and classes which was added by instructor
6. Users have to sign up or login to go to dashboard
7. Routes of dashboard will change automatically based on the user role.

#

## Packages and Technologies used (Client Side)

1. Tailwind CSS , daisyui (Tailwind component library)
2. React router dom to route through components
3. React (JS library)
4. react-icons --> used as it is easier to work with
5. react-spinner --> more fancier than normal ones and easily customizable
6. firebase-authentication ---> firebase allows users to register or login to the app
7. axios --> to make http requests
8. react-hot-toast -->to show a toast (success / error)
9. react-helmet-async --> to make the page title dynamic and different for every pages

10. react-scroll-to-top ---> scroll to the top of the page
11. Stripe --> for payment integration


## Packages and Technologies used (Server Side)

1. Nodemon --> to monitor changes while updating
2. Express js (Node js framework)
3. Cors --> supports data transfer between servers
4. Stripe --> for payment integration
5. jsonwebtoken --> to securing information sharing between server and client
6. dotenv --> to separate secrets from my code