# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# Development Strategy

##To complete this project:
Review the Feed Reader Testing Project Rubric here:
https://review.udacity.com/#!/rubrics/18/view

Get The Starter code here:
https://github.com/udacity/frontend-nanodegree-feedreader

##Steps to be take care of to get the project done:


1. Take the JavaScript Testing course
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) for better understanding of how the code /app works
3. Understand  the Jasmine spec file in ./jasmine/spec/feedreader.js and review the Jasmine documentation.
4. Try and see the allFeeds variable in ./js/app.js to make the provided test fail by editing the feeds and see how Jasmine visualizes this failure in your application.
5. Write a test that loops through each feed in the allFeeds object and verify that it has a URL defined and that the URL is not empty.
6. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
7. Write a new test suite named "The menu".
8. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
9. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
10. Write a test suite named "Initial Entries".
11. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
12. Write a test suite named "New Feed Selection".
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
No test should be dependent on the results of another.
Callbacks should be used to ensure that feeds are loaded before they are tested.
Implement error handling for undefined variables and out-of-bound array access.
When complete - all of your tests should pass.

Additionall Tips:
 * When complete, all of your tests should pass
 * Every test result should be dependent on the results of another
 * Callbacks should be used to ensure that feeds are loaded before they are tested
 
###To Run the Application:
1. Download or clone the below repository.
 https://github.com/udacity/frontend-nanodegree-feedreader

2. Open the  index.html file in a  browser (chrome/firefox etc).

3. After opening index.html file,you can see  Jasmine tests  displayed at the bottom of the index.html page.

4. For editing purpose you have to Open the jasmine/spec/feedreader.js file .


