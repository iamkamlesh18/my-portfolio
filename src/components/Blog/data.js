const practiceExercises = {
    'testing-is-risk': 'Pick an app you use. Write down one thing you expect it to do, one way it could fail, and who would be affected.',
    'quality-is-everyones-job': 'Think of a feature you use. What could a tester, developer, and product owner each notice about it?',
    'sdlc-stlc-feedback': 'Choose a feature idea. Write one question the team could answer before building it, one check during building, and one check before release.',
    'understand-before-test-cases': 'Choose a form you know. Write down who uses it, what they need, and two questions you would ask before testing.',
    'test-design-techniques': 'For a form that accepts ages 18 through 65, list the values you would test and explain why you chose them.',
    'exploratory-testing': 'Choose a familiar app feature. Set a five-minute goal, try different actions, and write down what you learned.',
    'risk-based-testing': 'List three features in an app. Put them in order from highest to lowest risk and explain your order.',
    'defects-that-help-teams': 'Write a bug report for a problem you have seen in an app. Include steps, expected result, and actual result.',
    'agile-is-fast-feedback': 'Think of a small feature. What could the team show users early to learn whether it solves the right problem?',
    'gherkin-shared-language': 'Write one Given, When, Then example for signing in with a correct password.',
    'definition-of-done-testing': 'Write three things your team should check before calling a feature complete.',
    'automate-for-value': 'Choose a check that gets repeated. Decide whether it is stable and important enough to automate.',
    'reusable-frameworks': 'Find two workflows that share a step. Describe what you could reuse and what should stay different.',
    'flaky-tests-and-waits': 'Think of a page that loads slowly. What visible sign could a test wait for instead of sleeping for a fixed time?',
    'test-data-and-credentials': 'List what a test needs before it runs. Mark which values should be reset, protected, or kept private.',
    'java-for-test-automation': 'Describe a sign-in test as three small methods: open the page, enter details, and check the result.',
    'selenium-locators-and-pages': 'Choose a button on a page. Write one stable way to identify it and one fragile way you would avoid.',
    'cucumber-step-design': 'Write a Given, When, Then example for changing a profile name. Keep technical clicks out of the steps.',
    'serenity-testng-framework': 'Think of a failed test report you have seen. What extra information would help someone understand the failure?',
    'postman-api-automation': 'Choose a service request. List one successful response and one error response you would check.',
    'api-testing-pyramid': 'Pick a feature. Decide which rule you would check in a small test, which in an API test, and which in a screen test.',
    'mobile-testing-reality': 'Choose a mobile app. List two devices or conditions that could change how the feature behaves.',
    'ci-quality-gates': 'Pick one automated test that should run when code changes. What should the team see if it fails?',
    'career-learning-loop': 'Choose one testing skill. Set a small practice goal and decide how you will know you improved.',
    'union-bank-risk-and-trust': 'For a payment feature, list one normal payment, one boundary case, and one problem case you would test.',
    'elements-fleet-management': 'For a fleet report, trace where the information comes from and what a user might do with it.',
    'cooperative-bank-automation': 'Pick a repeated manual test step. Describe how you could automate it and what result would show it is working.'
};

const post = (slug, title, summary, minutes, sections, extra = {}) => ({
    slug,
    title,
    summary,
    minutes,
    sections,
    takeaway: extra.takeaway || summary,
    exercise: extra.exercise || practiceExercises[slug],
    ...extra
});

export const blogData = [
    {
        slug: 'foundations',
        number: '01',
        title: 'Testing basics',
        description: 'Start here: what testing is, why it matters, and how teams build quality.',
        posts: [
            post('testing-is-risk', 'What software testing does', 'Testing checks whether a product works as people need it to, and helps teams find problems before they cause harm.', 5, [
                { heading: 'Testing in everyday words', paragraphs: ['Imagine ordering food in an app. You expect the right meal, the right price, and a clear message when something is unavailable. A tester tries those actions and checks whether the app does what it promised.', 'Software testing means checking a product, asking questions, and looking for ways it might fail. It does not prove that a product has no bugs. It gives the team useful facts about how it behaves.'] },
                { heading: 'Why it matters', paragraphs: ['A small-looking mistake can have a big effect. A wrong balance in a banking app can worry a customer. A broken sign-in can stop someone from doing their job. Testing helps a team notice these problems while there is still time to fix them.'] },
                { heading: 'A simple example', paragraphs: ['For a sign-in page, check a correct password, a wrong password, an empty password, and what happens after several failed attempts. Each check answers a different question about how the feature works.'] },
                { heading: 'The main idea', bullets: ['Learn what the feature should do.', 'Try normal use and unusual situations.', 'Write down what happened so someone else can understand it.', 'Share important risks with the team.'] }
            ]),
            post('quality-is-everyones-job', 'Quality is a team effort', 'Everyone helps make a product useful: testers, developers, designers, and the people who set product needs.', 4, [
                { heading: 'What quality means', paragraphs: ['Quality is more than “the test passed.” A product should do the right job, be understandable, and work for the people who need it.', 'Testers bring a helpful point of view, but they cannot create quality alone. Developers, product owners, designers, support teams, and users each notice different things.'] },
                { heading: 'A simple example', paragraphs: ['A tester may notice that a payment screen accepts an amount but does not explain the fee. A developer can check the calculation, while a product owner can explain the rule. Sharing the question early helps the whole team make the feature clearer.'] },
                { heading: 'How to work together', bullets: ['Ask questions before the feature is built.', 'Agree on examples of what should happen.', 'Share problems without blaming people.', 'Check together that the fix solves the user problem.'] }
            ]),
            post('sdlc-stlc-feedback', 'When testing happens', 'Testing is useful throughout a product’s life, not only just before release.', 5, [
                { heading: 'From idea to finished feature', paragraphs: ['A product usually starts as an idea, becomes a plan, is built, checked, released, and then supported. This work is sometimes called the software development life cycle, or SDLC.', 'Testing work happens alongside those steps. The test life cycle, or STLC, is one way teams describe planning tests, preparing data, running checks, reporting problems, and sharing results. The short names are less important than getting feedback at the right time.'] },
                { heading: 'An example', paragraphs: ['Before building a new sign-in page, the team can agree what a correct sign-in looks like. While it is being built, they can check smaller parts. Before release, they can try the complete sign-in journey on the finished product.'] },
                { heading: 'Why early feedback helps', bullets: ['A confusing rule is easier to fix before code depends on it.', 'A small check can find a mistake before it spreads.', 'A final full journey shows whether the parts work together.', 'After release, user feedback can reveal what the team missed.'] }
            ])
        ]
    },
    {
        slug: 'manual-testing',
        number: '02',
        title: 'Manual testing',
        description: 'Learn how to plan checks, explore a feature, and report a problem clearly.',
        posts: [
            post('understand-before-test-cases', 'Understand the feature first', 'Before writing steps, find out who needs the feature and what should happen.', 5, [
                { heading: 'Start with the user’s need', paragraphs: ['A requirement is a description of what a product should do. It may be written in a ticket, a design, or a conversation. Before testing, put it into plain words: who is using this, what are they trying to do, and what should happen next?', 'If those answers are unclear, ask. Guessing can make a test look complete while checking the wrong thing.'] },
                { heading: 'Example: a delivery address', paragraphs: ['For an address form, ask whether the apartment number is optional, which countries are supported, and what the user sees if the postcode is not recognized. These questions turn a short request into clear examples the team can agree on.'] },
                { heading: 'A quick starting checklist', bullets: ['Write down the normal user journey.', 'Ask about missing information and limits.', 'Check what different users are allowed to do.', 'Agree what a correct result looks like before testing.'] }
            ]),
            post('test-design-techniques', 'Choose useful test examples', 'Use a few carefully chosen values to check rules without trying every possible value.', 6, [
                { heading: 'Group similar values', paragraphs: ['Suppose a form accepts ages from 18 to 65. Instead of trying every age, group values that should behave the same way: below 18, from 18 through 65, and above 65. Checking one value from each group is called equivalence partitioning.', 'The rule itself decides the groups. If the feature treats age 21 differently, that needs its own group.'] },
                { heading: 'Check the edges', paragraphs: ['Mistakes often happen at the edge where a rule changes. For the 18-to-65 example, try 17, 18, 19, 64, 65, and 66. This is boundary value testing.', 'A useful question is whether each limit is included. “At least 18” includes 18; “over 18” does not.'] },
                { heading: 'Use both ideas', bullets: ['Choose one example from each group of values.', 'Check just below, on, and just above important limits.', 'Include blank, incorrect, or unusually long input when it makes sense.', 'Write down why each example matters.'] }
            ]),
            post('exploratory-testing', 'Explore a feature with a goal', 'Explore beyond a fixed checklist while keeping track of what you tried and found.', 5, [
                { heading: 'What exploration means', paragraphs: ['Exploratory testing is learning about a feature while you test it. You choose an action, watch what happens, and use what you learn to decide what to try next.', 'It is not random clicking. Start with a question, such as “Can a user safely change a saved address?” That gives the exploration a purpose.'] },
                { heading: 'Example: changing an address', paragraphs: ['Change the address, leave a required field blank, use a very long street name, save twice, and then reopen the profile. Each action can reveal something about validation or saving. Stop if the feature behaves in a way that could affect real data.'] },
                { heading: 'Keep useful notes', bullets: ['Write the goal of the session.', 'Record the important actions and test data.', 'Save a screenshot or other evidence when useful.', 'Report problems with steps that another person can repeat.'] }
            ]),
            post('risk-based-testing', 'Test the most important things first', 'When time is limited, start with features where failure would affect people or business the most.', 5, [
                { heading: 'What “risk” means', paragraphs: ['Risk is a way to think about what could go wrong and how much it would matter. A misspelled heading may be annoying. A payment recorded twice could affect someone’s money.', 'You rarely have time to test every possible action. Thinking about risk helps you choose where to spend your time first.'] },
                { heading: 'Compare two features', paragraphs: ['If a release changes both the colour of a button and the way a payment is saved, the payment deserves more attention. Ask how likely a problem is and what its effect would be. Also consider how many people use the feature and whether there is an easy workaround.'] },
                { heading: 'A practical order', bullets: ['Check important user journeys first.', 'Check recent changes and the features connected to them.', 'Check failures that could affect money, access, or important records.', 'Tell the team what you checked and what still needs attention.'] }
            ]),
            post('defects-that-help-teams', 'Write a bug report people can use', 'A useful bug report says what happened, what you expected, and how to see the issue.', 5, [
                { heading: 'What is a bug?', paragraphs: ['A bug, also called a defect, is when a product behaves differently from what was agreed or needed. A clear report helps the team understand the problem and decide what to do next.', 'Keep the report about what the product did. Avoid guessing who caused it or why it happened.'] },
                { heading: 'Example report', paragraphs: ['Title: “Payment button stays disabled after entering a valid amount.” Include the test account or safe test data, the steps you took, what you expected, what happened instead, and a screenshot or error message if it helps.', 'A good report lets another person repeat the issue without needing you to explain it live.'] },
                { heading: 'What to include', bullets: ['A short title that describes the problem.', 'Steps to repeat it and the result you expected.', 'The result you actually saw.', 'Browser, device, build, and test data when relevant.', 'How badly it affects the user, if you know.'] }
            ])
        ]
    },
    {
        slug: 'agile-bdd',
        number: '03',
        title: 'Agile teamwork',
        description: 'See how teams plan small changes and agree on how a feature should behave.',
        posts: [
            post('agile-is-fast-feedback', 'Agile means learning as you work', 'Agile teams make small changes, share progress, and use feedback to improve the product.', 5, [
                { heading: 'Agile in simple terms', paragraphs: ['Agile is a way of working where a team builds a product in smaller pieces, checks progress often, and changes direction when it learns something new. The goal is to deliver useful work and get feedback, not just attend meetings.', 'A sprint is a short, planned period of work. Teams often use sprints that last one or two weeks.'] },
                { heading: 'What the meetings are for', paragraphs: ['Planning helps the team choose work they can finish. A daily check-in helps people share progress and blockers. A review shows the work to others. A retrospective helps the team decide what to improve next time.'] },
                { heading: 'How QA helps', bullets: ['Ask questions while the team is planning the feature.', 'Check small pieces as they are ready.', 'Share problems early so the team can respond.', 'Use the review to confirm the feature meets the need.'] }
            ]),
            post('gherkin-shared-language', 'Gherkin: examples everyone can read', 'Gherkin uses simple Given, When, Then examples to describe how a feature should work.', 5, [
                { heading: 'A shared way to describe a feature', paragraphs: ['Gherkin is a format for writing examples in everyday language. Business teams, developers, and testers can read the same example and discuss what a feature should do.', 'Given says what is true before the action. When says what someone does. Then says what should happen.'] },
                { heading: 'A sign-in example', paragraphs: ['Given I am on the sign-in page. When I enter the correct username and password. Then I see my account page.', 'This example says what the person does and sees. It does not need to describe every click or technical step used by the test.'] },
                { heading: 'Keep examples useful', bullets: ['Use words the team and users understand.', 'Keep one example focused on one result.', 'Add examples for wrong details and other important cases.', 'Review the wording with the people who know the business rule.'] }
            ]),
            post('definition-of-done-testing', 'Agree when work is ready', 'A shared “done” checklist helps a team know when a feature is ready to release.', 4, [
                { heading: '“It works on my machine” is not enough', paragraphs: ['A feature may be written but still need testing, review, or clear release information. A Definition of Done is a team agreement about what must be true before work is called complete.', 'It should fit the product. A change to a banking transaction may need more checks than a small text change.'] },
                { heading: 'What a useful agreement can include', bullets: ['The agreed examples pass.', 'Important automated checks have run.', 'Problems found during testing are resolved or clearly shared.', 'The change has been reviewed and is safe to release.', 'The team knows about any remaining limits.'] },
                { heading: 'Review it as a team', paragraphs: ['A checklist should help the team notice unfinished work, not create paperwork. If an item is often skipped, talk about whether the rule needs to change or the risk needs more attention.'] }
            ])
        ]
    },
    {
        slug: 'automation',
        number: '04',
        title: 'Test automation',
        description: 'Learn what to automate, how to make checks reliable, and how to care for test data.',
        posts: [
            post('automate-for-value', 'What should you automate?', 'Automate repeat checks when doing so saves effort and gives the team dependable feedback.', 6, [
                { heading: 'Automation is a helper', paragraphs: ['Test automation means writing instructions that a computer can repeat. It is useful for checks the team needs to run again and again, such as checking that a sign-in still works after a change.', 'Automation does not replace all testing. A person is often better at exploring a new screen, noticing confusing wording, or deciding whether a new idea feels useful.'] },
                { heading: 'Pick a good first check', paragraphs: ['A good choice happens often, has a clear expected result, and is not changing every day. For example, checking that a saved profile still displays the correct name may be a useful repeat check.', 'Before automating, include the time needed to write, run, understand, and update the test. A check that constantly breaks may cost more than it saves.'] },
                { heading: 'A simple decision list', bullets: ['Will the team run this check often?', 'Can the expected result be stated clearly?', 'Can the test use safe, repeatable data?', 'Will a failure tell someone what went wrong?', 'Would a manual check be simpler for now?'] }
            ]),
            post('reusable-frameworks', 'Reuse steps without hiding the test', 'Shared code saves repeated work, but each test should still be easy to understand.', 5, [
                { heading: 'What reuse means', paragraphs: ['If many tests sign in the same way, the team can write that action once and use it in several tests. A Page Object Model, often shortened to POM, is one way to keep details about a screen in one place.', 'When a screen changes, a shared page component may need one update instead of many separate test edits.'] },
                { heading: 'Keep the test readable', paragraphs: ['A test should still make its purpose clear. “Customer submits a valid payment and sees the confirmation” is easier to understand than a list of hidden technical actions.', 'Reuse actions that are truly common. Do not build a complicated helper for a one-time step just because reuse sounds clever.'] },
                { heading: 'A quick check before sharing code', bullets: ['Does more than one test need this behavior?', 'Can someone understand the test without opening many files?', 'Will an error say which action failed?', 'Is the shared code simple to update?'] }
            ]),
            post('flaky-tests-and-waits', 'Make tests wait for the right thing', 'A test should wait for the page to be ready instead of sleeping for a guessed number of seconds.', 5, [
                { heading: 'Why a test can fail only sometimes', paragraphs: ['A web page may take different amounts of time to load. If a test clicks a button before it appears, the test can fail even though the feature is fine. If it always waits ten seconds, it wastes time when the page loads quickly.', 'A flaky test is one that sometimes passes and sometimes fails without a real product change. Too many flaky tests make people stop trusting the test results.'] },
                { heading: 'Wait for a sign of readiness', paragraphs: ['Instead of waiting a fixed time, tell the test to wait until the button appears or the loading symbol disappears. This is a condition-based wait. It continues when the page is ready and stops if the condition takes too long.'] },
                { heading: 'Make failures clear', bullets: ['Wait for the result the user needs, not an unrelated animation.', 'Set a reasonable limit so the test cannot wait forever.', 'When time runs out, report which page or condition was missing.', 'Do not hide every error by repeating the test many times.'] }
            ]),
            post('test-data-and-credentials', 'Use test accounts and data safely', 'Reliable test data helps tests run consistently and prevents avoidable account problems.', 5, [
                { heading: 'What test data is', paragraphs: ['Test data is the information a test uses: names, account details, amounts, addresses, or sign-in accounts. Good test data is safe to use and gives the test a known starting point.', 'If the data changes unexpectedly, a test may fail for a reason unrelated to the feature.'] },
                { heading: 'Protect sign-in accounts', paragraphs: ['Repeatedly trying passwords can lock an account. If a test account changes after a database refresh, the test should not keep guessing. Use approved test accounts, follow the team’s secret-handling rules, and stop after a known failure.', 'Never put real customer details or passwords into test code, screenshots, or shared reports.'] },
                { heading: 'Keep tests repeatable', bullets: ['Know how each test account is prepared.', 'Use made-up or approved data for test environments.', 'Reset data safely when a test needs a clean start.', 'Report data or sign-in problems separately from product bugs.'] }
            ])
        ]
    },
    {
        slug: 'frameworks',
        number: '05',
        title: 'Testing tools',
        description: 'Plain-language introductions to Java, Selenium, BDD, and API testing tools.',
        posts: [
            post('java-for-test-automation', 'Java for test automation', 'A beginner-friendly look at how Java helps organize automated tests.', 6, [
                { heading: 'What Java does in a test', paragraphs: ['Java is a programming language. In test automation, it can tell a browser what actions to perform and decide whether the result matches what was expected.', 'A test might open a page, enter a name, press Save, and check that the name appears. Java helps write those steps so they can be repeated.'] },
                { heading: 'A few words explained', bullets: ['A variable is a named place to keep a value, such as a username.', 'A method is a named group of steps, such as “sign in”.', 'A class is a place to organize related values and methods.', 'An assertion is a check that compares what happened with what should happen.'] },
                { heading: 'Keep the code easy to read', paragraphs: ['Use names that explain what a value or method is for. Keep each method focused on one job. When a check fails, include a message that says what result was expected.', 'You do not need advanced Java to begin. Learn the parts your tests use, then add more as your work needs them.'] }
            ]),
            post('selenium-locators-and-pages', 'Selenium: find and use page elements', 'Selenium lets automated tests use a browser the way a person does.', 6, [
                { heading: 'What Selenium does', paragraphs: ['Selenium WebDriver is a tool that can open a browser, click buttons, enter text, and read what appears on a page. A test uses it to repeat a user journey and check the result.', 'To click something, the test first needs a reliable way to find it. That description is called a locator.'] },
                { heading: 'Choose a locator that lasts', paragraphs: ['A button named “Save profile” is usually easier to find than “the third button on the page.” If the product provides a stable label or test ID, use it. A locator tied to colour or position may break when the design changes.'] },
                { heading: 'Keep page details in one place', bullets: ['Use clear labels or stable test IDs when available.', 'Keep locators together rather than repeating them everywhere.', 'Name actions after what the person is doing.', 'Wait until the element is ready before using it.'] }
            ]),
            post('cucumber-step-design', 'Cucumber: write steps people understand', 'Cucumber can connect readable feature examples with automated test code.', 5, [
                { heading: 'From example to test', paragraphs: ['Cucumber reads examples written in Gherkin and connects each line to code that performs the action. This lets a team discuss expected behavior in words and run the same example as a test.', 'For example, “When I save my address” can connect to code that fills in the form and presses Save.'] },
                { heading: 'Describe the behavior', paragraphs: ['Good steps explain what the person does or sees. They avoid details such as which CSS selector was clicked. That keeps the example understandable if the page design changes.'] },
                { heading: 'Keep steps consistent', bullets: ['Use the same words for the same action.', 'Keep one step focused on one clear action or result.', 'Share a step when the behavior is truly common.', 'Make failure messages explain what was not found or expected.'] }
            ]),
            post('serenity-testng-framework', 'Serenity BDD and TestNG', 'A short guide to how these tools help organize, run, and explain automated tests.', 6, [
                { heading: 'What these tools do', paragraphs: ['Serenity BDD helps teams write and report on automated checks. It can show which behavior was tested and what happened. TestNG helps organize and run Java tests, including choosing which tests to run and when.', 'These tools do not make a test useful by themselves. The test still needs a clear purpose, reliable data, and an understandable result.'] },
                { heading: 'How a test run fits together', paragraphs: ['A team starts a test run. TestNG chooses the tests to execute. The test code uses browser or API tools to check the product. Serenity then helps present the results so people can see what passed or failed.'] },
                { heading: 'Make reports useful', bullets: ['Use names that explain the feature being checked.', 'Keep setup steps separate from the behavior under test.', 'Include enough information to understand a failure.', 'Remove checks that no longer protect an important feature.'] }
            ]),
            post('postman-api-automation', 'Postman: check an API', 'Use Postman to send a request to a service and check the response.', 6, [
                { heading: 'What an API is', paragraphs: ['An API is a way for two pieces of software to talk to each other. A mobile app might ask an account service for a balance. The service sends back information, often in a format called JSON.', 'Postman is a tool for sending these requests and viewing the replies.'] },
                { heading: 'A simple check', paragraphs: ['Send a request for a test account. Check that the reply says the request succeeded and contains the correct account details. Then try an account that does not exist and check that the service responds safely and clearly.'] },
                { heading: 'Check more than “it replied”', bullets: ['Check the response status.', 'Check that important fields have the right values and types.', 'Try missing, incorrect, and allowed input.', 'Use test data and keep private information out of saved requests.'] }
            ])
        ]
    },
    {
        slug: 'engineering-practice',
        number: '06',
        title: 'APIs, mobile, and build checks',
        description: 'Learn about services, phone testing, automated build checks, and growing your skills.',
        posts: [
            post('api-testing-pyramid', 'Where to test: API or screen?', 'Choose the simplest level that gives a useful answer, then check key user journeys too.', 5, [
                { heading: 'Different tests answer different questions', paragraphs: ['A screen test checks what a person sees and does. An API test checks how services exchange information. A smaller code-level test can check one rule without opening the whole product.', 'No one type replaces all the others. Each finds a different kind of problem.'] },
                { heading: 'Example: saving a profile', paragraphs: ['A code-level check can test how a postcode is validated. An API check can see whether the saved address is returned correctly. A screen test can check that a person can edit and save the address.'] },
                { heading: 'Use each where it helps', bullets: ['Use quick checks for small rules.', 'Use API checks for service behavior and data.', 'Use a few screen checks for the most important user journeys.', 'When a test fails, make sure it points to the right part of the product.'] }
            ]),
            post('mobile-testing-reality', 'Test apps on different phones', 'A mobile app can behave differently across devices, operating systems, and connections.', 5, [
                { heading: 'Why one phone is not enough', paragraphs: ['Phones have different screen sizes, operating system versions, memory, and settings. A page that looks fine on one phone may hide a button on another. An app may also behave differently when the connection is slow or interrupted.'] },
                { heading: 'Think about real use', paragraphs: ['Try the app with a small and a large screen, rotate the device if supported, and check what happens when the connection drops. Consider permissions such as camera or location only when the app needs them.'] },
                { heading: 'Choose devices with a reason', bullets: ['Use devices that represent the people who use the app.', 'Include supported operating system versions.', 'Check important screen sizes and orientations.', 'Use a device service such as BrowserStack when it helps cover more devices.'] }
            ]),
            post('ci-quality-gates', 'GitHub Actions and CI checks', 'A CI workflow can run tests when code changes and share the result with the team.', 5, [
                { heading: 'What CI/CD means', paragraphs: ['Continuous integration (CI) means checking code changes regularly. Continuous delivery (CD) means preparing changes so they can be released safely. A workflow can build the application and run tests when someone pushes code or opens a pull request.', 'GitHub Actions and GitLab CI/CD can run these workflows. The steps are often written in a YAML file, a text file that lists settings and actions in order.'] },
                { heading: 'What a useful check does', paragraphs: ['A useful check runs quickly enough to give feedback, reports what failed, and helps someone decide what to do next. A red result is not helpful if it only says “something went wrong.”'] },
                { heading: 'A simple pipeline', bullets: ['Get the latest code.', 'Install the required packages.', 'Build the application.', 'Run the important tests.', 'Show the results and logs when a step fails.'] }
            ]),
            post('career-learning-loop', 'Keep growing your testing skills', 'Build skill by practising, asking questions, and learning from real work.', 5, [
                { heading: 'Start with the work in front of you', paragraphs: ['You do not need to learn every tool at once. Start with one feature, understand what it should do, and practise checking it well. When you meet something unfamiliar, write down the question and look for a safe way to try it.'] },
                { heading: 'Learn by doing and sharing', paragraphs: ['Try a small example, explain what you found to someone else, and notice what questions they ask. Their questions can show where your explanation or understanding needs more detail.', 'Feedback from a real test run is often more useful than reading a long list of tools without using them.'] },
                { heading: 'A steady learning plan', bullets: ['Choose one skill to practise this week.', 'Build a small example or improve a real check.', 'Ask a teammate to review what you made.', 'Write down what worked and what you want to try next.'] }
            ])
        ]
    },
    {
        slug: 'project-stories',
        number: '07',
        title: 'Project examples',
        description: 'See the products, testing work, and lessons from banking and fleet projects.',
        posts: [
            post('union-bank-risk-and-trust', 'Testing a retail banking product', 'Tested important banking workflows where errors can affect customer money and trust.', 5, [
                { heading: 'The product and why it matters', paragraphs: ['I worked on a retail banking product. Banking software supports actions such as signing in and viewing or managing account information. A mistake in a key workflow can affect a customer’s money, records, or confidence in the service.', 'Before testing a feature, I learned what the user needed to do and what result the product should show.'] },
                { heading: 'How I tested it', paragraphs: ['I checked the normal journey and then asked what could happen if information was missing, an action was repeated, or the service took too long to respond. For important workflows, I checked that the result shown to the user matched the result saved by the product.'], bullets: ['Check expected and incorrect input.', 'Try important limits and error cases.', 'Follow the workflow from start to finish.', 'Record clear steps and evidence when a problem appears.'] },
                { heading: 'What this work taught me', paragraphs: ['A screen can look correct while the information behind it is wrong. Understanding the business purpose helps a tester look beyond the page and check the result that matters to the customer.'] }
            ], { projectName: 'Union Bank', domain: 'Retail banking · Financial services', projectFocus: ['Functional testing', 'Regression testing', 'End-to-end workflows', 'Risk-based testing'], tools: [], result: 'Shared clear test evidence so the team could assess important workflow risks.' }),
            post('elements-fleet-management', 'Testing a fleet management product', 'Tested features and regression workflows in a platform used to manage vehicles and drivers.', 5, [
                { heading: 'The product', paragraphs: ['Elements is a fleet management platform. It brings together information about vehicles, drivers, tracking, and reports. The product helps people keep track of fleet activity and make day-to-day decisions.'] },
                { heading: 'How I tested it', paragraphs: ['I tested features and regression workflows. Rather than checking each screen by itself, I followed how information moved through the product. For example, a vehicle detail might appear in tracking and later in a report.'], bullets: ['Check vehicle and driver information.', 'Follow tracking updates into related workflows.', 'Check reports and the information they show.', 'Retest important features after changes.'] },
                { heading: 'What this work taught me', paragraphs: ['A new industry has rules that may not be obvious from the screen. Learning how people use the product helped me ask better questions and choose tests that matched real work.'] }
            ], { projectName: 'Elements Fleet Management', domain: 'Fleet management', projectFocus: ['Functional testing', 'Regression testing', 'Product workflows', 'Reports and tracking'], tools: [], result: 'Tested connected workflows by following how information moved through the product.' }),
            post('cooperative-bank-automation', 'Making banking tests more reliable', 'Improved regression automation with shared examples, reusable steps, and better waits.', 7, [
                { heading: 'The product and the team', paragraphs: ['I worked on a cooperative banking product with an Agile/Scrum team. Business analysts wrote examples in Gherkin, a simple format for describing what a feature should do. Business, development, and QA could discuss the same examples before and during the work.'] },
                { heading: 'How the automation worked', paragraphs: ['The team used Java, Selenium, Serenity BDD, and Cucumber. We used the Page Object Model (POM) to keep screen details in one place, and shared steps for common actions such as signing in.', 'This made it easier to reuse common work while keeping each scenario focused on the banking task being checked.'] },
                { heading: 'Problems I helped improve', paragraphs: ['Test accounts could change after database refreshes. This sometimes interrupted test runs and needed manual attention. We improved how those credential changes were handled, using test accounts rather than customer accounts.', 'The application also showed a loading spinner for different amounts of time. A fixed delay could be too short on a slow run and waste time on a fast one. We changed the check to wait for the spinner to disappear.'] },
                { heading: 'The result and lesson', paragraphs: ['These changes reduced manual intervention and made regression runs more dependable. I learned that automation needs clear design and regular care—not just more scripts.'], bullets: ['Use shared examples to agree on expected behavior.', 'Reuse common steps but keep tests easy to follow.', 'Wait for the application to be ready instead of guessing.', 'Make failures clear enough for the team to fix.'] }
            ], { projectName: 'Cooperative Banking', domain: 'Banking · Financial services', projectFocus: ['UI automation', 'Regression testing', 'Behavior-driven development', 'Test reliability'], tools: ['Java', 'Selenium', 'Serenity BDD', 'Cucumber', 'Gherkin', 'Page Object Model'], result: 'Reduced manual intervention and made regression runs more dependable.' })
        ]
    }
];

export const allPosts = blogData.flatMap((category) =>
    category.posts.map((item) => ({ ...item, category, categorySlug: category.slug }))
);

export const getPost = (categorySlug, postSlug) =>
    allPosts.find((item) => item.categorySlug === categorySlug && item.slug === postSlug);

export const projectStories = allPosts
    .filter((item) => item.categorySlug === 'project-stories')
    .map((item, index) => ({ ...item, number: String(index + 1).padStart(2, '0') }));
