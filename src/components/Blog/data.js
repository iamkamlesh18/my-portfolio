const plainLanguageCopy = {
    'testing-is-risk': ['Testing helps reduce risk', 'Testing finds problems and gives the team facts to make release decisions.'],
    'quality-is-everyones-job': ['Quality is a team effort', 'Testers, developers, and product teams all help make software work well.'],
    'sdlc-stlc-feedback': ['Test from start to finish', 'Testing at each stage helps the team find problems sooner.'],
    'understand-before-test-cases': ['Understand the feature first', 'Learn what users need and what should happen before writing tests.'],
    'test-design-techniques': ['Test the edge values', 'Check typical values and the limits where errors often happen.'],
    'exploratory-testing': ['Explore the feature', 'Try real user paths, take notes, and make problems easy to repeat.'],
    'risk-based-testing': ['Test high-risk areas first', 'When time is short, check the failures that could cause the most harm.'],
    'defects-that-help-teams': ['Report bugs clearly', 'Show what happened, what you expected, and how to see the problem again.'],
    'agile-is-fast-feedback': ['Agile helps teams learn faster', 'Meetings are useful when they help the team share feedback and fix issues early.'],
    'gherkin-shared-language': ['Use Gherkin to agree on behavior', 'Clear examples help business, development, and QA agree on how a feature should work.'],
    'definition-of-done-testing': ['Agree when work is complete', 'Decide together what checks a feature needs before it is ready.'],
    'automate-for-value': ['Automate repeat checks', 'Automate checks that are useful, repeatable, and reliable to run.'],
    'reusable-frameworks': ['Reuse code and keep tests clear', 'Shared code can save effort while each test stays easy to understand.'],
    'flaky-tests-and-waits': ['Wait for the app, not a timer', 'Check that the app is ready instead of guessing how long to wait.'],
    'test-data-and-credentials': ['Keep test data and sign-ins reliable', 'Plan safe test data and sign-in checks to avoid lockouts and confusing failures.'],
    'java-for-test-automation': ['Java for test automation', 'Use Java features to write tests that are clear and easier to fix.'],
    'selenium-locators-and-pages': ['Find page elements reliably', 'Use stable labels and keep page details separate from test steps.'],
    'cucumber-step-design': ['Write clear Cucumber steps', 'Describe what the user does and sees, not every click behind the scenes.'],
    'serenity-testng-framework': ['Keep test suites easy to update', 'Organize tests and reports so the team can run them and understand failures.'],
    'postman-api-automation': ['Test APIs with Postman', 'Check service responses and errors with repeatable test data.'],
    'api-testing-pyramid': ['Test APIs and user journeys', 'Use API tests for service rules and screen tests for key user actions.'],
    'mobile-testing-reality': ['Test apps on different devices', 'Check device sizes, operating systems, connections, and permissions.'],
    'ci-quality-gates': ['Make CI checks useful', 'Fast, clear checks help the team fix problems before release.'],
    'career-learning-loop': ['Grow your QA skills', 'Learn through practice, teamwork, and looking back at what worked.'],
    'union-bank-risk-and-trust': ['Testing a banking product', 'Banking bugs can affect money and trust, so important workflows need careful checks.'],
    'elements-fleet-management': ['Testing a fleet product', 'Learn how people use the product, then test how its connected workflows behave.'],
    'cooperative-bank-automation': ['Making banking tests more reliable', 'Shared scenarios and reliable automation helped reduce manual fixes to test runs.']
};

const post = (slug, title, summary, minutes, sections, reflection, project = null) => ({
    slug,
    title: plainLanguageCopy[slug]?.[0] || title,
    summary: plainLanguageCopy[slug]?.[1] || summary,
    minutes,
    sections,
    reflection,
    ...(project || {})
});

export const blogData = [
    {
        slug: 'foundations',
        number: '01',
        title: 'Testing basics',
        description: 'Start with the purpose of a feature before choosing what to test.',
        posts: [
            post('testing-is-risk', 'Testing is a way to reduce risk', 'Why the goal is confidence and informed decisions—not a promise that bugs do not exist.', 7, [
                { heading: 'Quality is bigger than a test result', paragraphs: ['A green test run tells us that a set of checks passed under a particular set of conditions. It does not prove that every customer, device, integration, or unusual sequence will behave correctly. Testing gives a team evidence; the team uses that evidence to make a release decision.', 'I think of testing as reducing uncertainty around the risks that matter. The question is not only “does it work?” It is also “where could this fail, who would be affected, and what evidence would help us decide what to do next?”'] },
                { heading: 'Start with impact, then design checks', paragraphs: ['A defect in an account balance or transaction flow can affect customer money and trust. A defect in a rarely used decorative element may be inconvenient but carry less business risk. The right test strategy reflects that difference instead of giving every screen equal attention.'], bullets: ['Understand who uses the feature and what they are trying to accomplish.', 'Map failure modes to customer, operational, compliance, and financial impact.', 'Prioritize checks by likelihood and consequence, then revisit assumptions as evidence changes.'] },
                { heading: 'Evidence, not guarantees', paragraphs: ['Testing cannot eliminate all risk, especially in complex systems with changing data and external dependencies. It can expose risk early, make unknowns visible, and help a team choose a proportionate response. That is more useful—and more honest—than claiming software is defect-free.'] }
            ], 'When have you seen a passing check create false confidence? What evidence would have made the risk clearer?'),
            post('quality-is-everyones-job', 'Quality is a team responsibility', 'How testers make quality collaborative rather than owning every defect alone.', 6, [
                { heading: 'The quality-team trap', paragraphs: ['When a team treats QA as the last line of defense, requirements arrive late, feedback arrives late, and testers inherit decisions they had no chance to influence. Quality becomes a department rather than a way of working.', 'A quality engineer contributes a testing perspective, but product owners clarify value, developers design and verify implementation, and business analysts help make behavior understandable. Shared ownership starts with shared conversations.'] },
                { heading: 'Shift feedback closer to the decision', paragraphs: ['Review a story before implementation. Ask about unclear acceptance criteria during refinement. Pair with a developer on a risky integration. These small feedback loops can prevent misunderstanding from turning into expensive rework.', 'This does not mean every person does every task. It means the team is responsible for the quality of the outcome and makes room for expertise at the right time.'], bullets: ['Invite QA into discovery, refinement, and design discussions.', 'Agree on what “done” means, including evidence and known limitations.', 'Share findings in terms of product behavior and user impact—not blame.'] }
            ], 'Which quality conversation could you move earlier in your current workflow?'),
            post('sdlc-stlc-feedback', 'SDLC, STLC, and the value of early feedback', 'A practical view of development and testing lifecycles as connected feedback loops.', 7, [
                { heading: 'Two lenses on one delivery process', paragraphs: ['The software development lifecycle describes how a product moves from an idea toward delivery and support. The software testing lifecycle describes the testing work that helps a team understand whether each change meets its intent and is safe to release.', 'They are not separate assembly lines. Requirements shape test ideas; test findings can change design; production observations can reshape priorities. The most effective testing is woven into those loops rather than saved for a final gate.'] },
                { heading: 'Shift left means learn sooner', paragraphs: ['“Shift left” is useful when it means getting feedback earlier—not merely moving a test activity to an earlier calendar date. Reviewing acceptance criteria, trying an API contract, or checking a risky data migration design can reveal a problem before a full interface exists.', 'Early feedback still needs to be balanced with later end-to-end validation. A fast unit check and a realistic user workflow answer different questions.'] },
                { heading: 'Use the right evidence at the right stage', bullets: ['During discovery: examples, edge cases, and business-rule questions.', 'During implementation: focused unit, component, and API checks.', 'Before release: integrated workflows, regression risk, environment readiness, and clear known issues.', 'After release: monitoring and feedback that confirm real behavior.'] }
            ], 'Which risk in a feature could be tested before the user interface is ready?')
        ]
    },
    {
        slug: 'manual-testing',
        number: '02',
        title: 'Manual testing',
        description: 'Understand what to test, explore a feature, and report bugs clearly.',
        posts: [
            post('understand-before-test-cases', 'Understand the requirement before writing cases', 'A disciplined question-first approach to test design.', 8, [
                { heading: 'Pause before opening the spreadsheet', paragraphs: ['A detailed test case cannot rescue a misunderstood requirement. Before writing steps, identify the user problem, the intended outcome, and the rules that distinguish a valid result from an invalid one.', 'In banking work, a sentence about a transaction can hide important questions: what are the limits, when does the balance change, what happens after a timeout, and how is the result reconciled? Asking these questions early often improves both the implementation and the tests.'] },
                { heading: 'Turn uncertainty into examples', bullets: ['Ask what should happen at the minimum and maximum permitted values.', 'Clarify permissions, account states, timing, and dependencies.', 'Explore what the user sees when a downstream service is unavailable.', 'Agree on the expected result and the evidence that proves it.'], paragraphs: ['Examples make abstract rules concrete. A product owner and tester can discuss one ordinary case, one boundary case, and one failure case, then use the answers to refine acceptance criteria.'] },
                { heading: 'A lightweight analysis routine', paragraphs: ['Read the story and its context, map the main workflow, list assumptions, and classify risks. Record open questions with an owner instead of quietly guessing. Once the behavior is clear, choose the smallest useful set of checks that covers normal, boundary, and failure conditions.'] }
            ], 'What assumption in a recent requirement would you want confirmed before testing?'),
            post('test-design-techniques', 'Boundary values and equivalence classes', 'Use input partitions to find high-value cases without testing every possible value.', 8, [
                { heading: 'Equivalence partitioning', paragraphs: ['Equivalence partitioning groups inputs that should be handled in the same way. If a form accepts ages from 18 through 65, values below 18, within the range, and above 65 are separate partitions. A representative value from each partition can reveal broad rule errors efficiently.', 'The technique depends on the requirement being understood. If age 21 triggers a different rule, the original partitions are too coarse and need to be split.'] },
                { heading: 'Boundary value analysis', paragraphs: ['Many defects occur where behavior changes. For the inclusive range 18–65, useful checks include 17, 18, 19, 64, 65, and 66. These values examine just outside and just inside each boundary.', 'For amounts, dates, lengths, and counts, identify whether the boundary is inclusive and whether formatting or precision changes the result. A maximum amount with extra decimal places may reveal a different failure than a simple value just above the limit.'] },
                { heading: 'Combine techniques with risk', bullets: ['Partition inputs by expected behavior, not merely by data type.', 'Test both sides of meaningful boundaries.', 'Add combinations when rules interact, such as role plus account status.', 'Keep a short rationale so future maintainers know what each case protects.'] }
            ], 'For a transfer limit, which values would you choose around the boundary and why?'),
            post('exploratory-testing', 'Exploratory testing with a clear mission', 'Explore beyond scripted steps while keeping your observations reproducible.', 7, [
                { heading: 'Exploration is purposeful', paragraphs: ['Exploratory testing combines learning, test design, and execution. It is not random clicking. A charter gives the session a focus, such as “explore how a user recovers from an interrupted payment,” while leaving room to follow useful clues.', 'A short time box encourages focus. Capture the environment, account state, data used, actions, observations, and questions as you work. Notes make discoveries discussable and help another person reproduce an issue.'] },
                { heading: 'Follow the surprising behavior', paragraphs: ['A slow response, duplicate row, stale balance, or unexpected permission prompt can be a clue. Change one variable at a time where possible and compare the result with a known baseline. If the behavior is risky, stop and preserve evidence before changing data further.'] },
                { heading: 'Close the loop', bullets: ['Summarize what you explored and what you did not cover.', 'Separate confirmed defects from questions and observations.', 'Turn repeatable, high-value checks into regression coverage.', 'Share risks early rather than waiting for a polished report.'] }
            ], 'Write a one-sentence charter for exploring a workflow you know well.'),
            post('risk-based-testing', 'Risk-based testing for limited time', 'Spend test effort where failure would matter most.', 7, [
                { heading: 'Risk has two dimensions', paragraphs: ['A practical risk estimate considers both the chance of failure and its impact. An infrequently used workflow can still deserve attention if it affects account security or financial reconciliation. A commonly used workflow may also be high risk because a defect affects many customers.', 'Risk scores help structure discussion, but they are not objective truth. Use them to explain trade-offs, then update them as you learn more.'] },
                { heading: 'Prioritize transparently', bullets: ['Identify critical business journeys and their dependencies.', 'Look for recent code changes, complex rules, and weakly understood integrations.', 'Consider customer impact, recoverability, and detection after release.', 'Record what is deferred and why, so a release decision is informed.'], paragraphs: ['A risk-based plan is not an excuse to skip testing without discussion. It is a clear statement about where the team will spend its time and what residual risk remains.'] }
            ], 'If your release window shrank by half, which workflow would you protect first?'),
            post('defects-that-help-teams', 'Write defects that move work forward', 'Make a bug report reproducible, factual, and useful to the people resolving it.', 6, [
                { heading: 'A good report reduces guesswork', paragraphs: ['State the observed behavior, expected behavior, environment, and smallest repeatable set of steps. Include relevant role, data state, timestamps, and evidence while protecting private customer data.', 'Describe impact in the product’s language. “The balance shown after a declined transfer differs from the ledger value” is more actionable than “screen is broken.” Avoid assigning blame or guessing at root cause unless evidence supports it.'] },
                { heading: 'Triage is a conversation', bullets: ['Confirm severity based on user impact and workarounds.', 'Share logs or screenshots that isolate the behavior.', 'Retest the fix against the original failure and nearby risks.', 'Close the loop with the reporter and update regression coverage if appropriate.'] }
            ], 'What additional piece of context most often helps your team reproduce a defect?')
        ]
    },
    {
        slug: 'agile-bdd',
        number: '03',
        title: 'Agile and Gherkin',
        description: 'Work with the team and use examples everyone can understand.',
        posts: [
            post('agile-is-fast-feedback', 'Agile is fast feedback, not meeting attendance', 'Look beyond ceremonies to the learning loop that gives them purpose.', 6, [
                { heading: 'The ceremony is not the outcome', paragraphs: ['Daily stand-ups, planning, story points, demos, and retrospectives can help a team coordinate. They are not Agile by themselves. A team can attend every meeting and still discover a misunderstood requirement at the end of a sprint.', 'In a 14-day sprint, the useful question is how quickly the team can learn whether an idea, implementation, or assumption is wrong. Grooming, planning, execution, demo, and retrospective should make that feedback timely and visible.'] },
                { heading: 'Make work visible and finish in slices', paragraphs: ['Small stories with clear acceptance criteria are easier to discuss, test, and demonstrate. A working slice creates evidence sooner than a large batch of loosely connected work.', 'Testing throughout the sprint helps developers and product partners react while context is fresh. It also gives the team a more honest view of unfinished risk at the demo.'] },
                { heading: 'Use retrospectives to change one thing', bullets: ['Bring a specific observation rather than a general complaint.', 'Agree on one small experiment and how the team will tell if it helped.', 'Review the experiment next sprint; keep, adjust, or stop it.'] }
            ], 'Which ceremony in your team could be redesigned around faster feedback?'),
            post('gherkin-shared-language', 'Gherkin as shared executable language', 'How concrete examples can align business, development, and QA.', 8, [
                { heading: 'From vague prose to observable behavior', paragraphs: ['“Login should be secure and user-friendly” expresses intent but leaves many decisions open. A scenario makes one behavior discussable: Given a user is on the login page, When valid credentials are submitted, Then the user reaches the dashboard.', 'In one cooperative banking team, business analysts wrote requirements directly in Gherkin. Business, development, and QA used the same feature files as a shared reference, and the acceptance criteria became executable documentation rather than a separate translation.'] },
                { heading: 'Keep scenarios about behavior', paragraphs: ['Gherkin is most useful when it describes business-visible outcomes. A scenario that names a button’s CSS class or the exact database query becomes coupled to implementation and is harder for business partners to review.', 'Use Given for meaningful starting context, When for the user action or event, and Then for observable outcomes. Keep one scenario focused on one behavior and use examples to clarify variations.'] },
                { heading: 'A shared file still needs collaboration', bullets: ['Discuss examples together before implementation.', 'Review language with the people who own the business rule.', 'Keep technical setup out of the behavior unless it matters to the scenario.', 'Automate selectively and keep the scenario readable when it fails.'] }
            ], 'Rewrite one vague acceptance criterion as an observable Given/When/Then example.'),
            post('definition-of-done-testing', 'A Definition of Done that includes quality', 'Make completion a shared agreement about evidence and remaining risk.', 6, [
                { heading: '“Code complete” is not complete', paragraphs: ['A story can compile and still lack verified acceptance criteria, integration checks, accessibility considerations, or clear release notes. A Definition of Done makes the team’s minimum quality agreement explicit.', 'The agreement should fit the product and risk. A financial workflow may need stronger audit and reconciliation evidence than a low-risk content update. The team should say what is expected, not rely on the word “tested.”'] },
                { heading: 'Make it observable', bullets: ['Acceptance criteria reviewed and verified.', 'Relevant automated checks run with results available.', 'Exploratory or integration risks considered where appropriate.', 'Known limitations documented and communicated.', 'Changes reviewed and safe to deploy or clearly flagged.'], paragraphs: ['A checklist is only useful if the team uses it to surface gaps. If an item is repeatedly waived, discuss whether the rule is unrealistic or the underlying risk is being ignored.'] }
            ], 'Which quality expectation is currently implicit in your team’s definition of done?')
        ]
    },
    {
        slug: 'automation',
        number: '04',
        title: 'Test automation',
        description: 'Build automated checks that are useful, reliable, and easy to update.',
        posts: [
            post('automate-for-value', 'Automate behavior, not every test case', 'Choose automation by value, stability, repeatability, and feedback speed.', 8, [
                { heading: 'Automation has a cost', paragraphs: ['Every automated check must be designed, reviewed, run, debugged, and maintained. Automating a check that rarely runs or changes constantly can cost more than it saves. Automation is not automatically faster or more reliable than a thoughtful manual check.', 'A useful candidate is repeatable, has a stable expected outcome, and protects behavior that matters. Regression workflows and API contracts are often good candidates, while one-off visual exploration may be better done manually.'] },
                { heading: 'Automate business behavior', paragraphs: ['Screens and selectors change; business workflows often outlive a particular layout. A workflow such as “authenticate, submit a transfer, and verify the resulting state” gives the team more durable confidence than a large set of isolated button-click scripts.', 'Choose the lowest level that gives trustworthy evidence. API checks are usually faster and more focused; a smaller set of UI journeys then validates the experience end to end.'] },
                { heading: 'Evaluate return honestly', bullets: ['Estimate how often the check is run and how much manual effort it replaces.', 'Include setup, maintenance, flaky reruns, and debugging in the cost.', 'Prefer stable, high-impact checks that provide quick, actionable feedback.', 'Review whether automation is still protecting the risk it was built for.'] }
            ], 'Which check in your regression suite creates the clearest value—and which one is expensive to maintain?'),
            post('reusable-frameworks', 'Reusability: write once, use everywhere', 'How shared steps and components reduce duplication without hiding behavior.', 7, [
                { heading: 'Reuse the stable action', paragraphs: ['A shared “user logs in” step can keep authentication behavior consistent across scenarios. Once implemented and reviewed, the team can focus new automation on the business behavior unique to each workflow rather than rewriting login logic.', 'In a Serenity BDD, Java, Selenium, and Cucumber framework, reusable step definitions and Page Object components helped keep common behavior in one place. Feature files could then emphasize the business outcome.'] },
                { heading: 'Reuse needs boundaries', paragraphs: ['A step such as “I click the third blue button and wait 2 seconds” hides intent and spreads fragile assumptions. Good reuse expresses a stable behavior, accepts meaningful parameters, and reports useful context when it fails.', 'Dynamic locators can be parameterized when labels are genuinely variable. Centralizing a locator helps, but a clever XPath is not automatically stable; prefer accessible roles or robust attributes when the application provides them.'] },
                { heading: 'A practical reuse test', bullets: ['Does the helper represent a concept used in more than one scenario?', 'Can a reader understand the behavior from the scenario?', 'Will failures identify which data or action was involved?', 'Can a change be made in one place without surprising other scenarios?'] }
            ], 'What repeated automation behavior is stable enough to become a shared component?'),
            post('flaky-tests-and-waits', 'Flaky tests: wait for state, not time', 'Replace timing guesses with synchronization tied to the application’s actual behavior.', 8, [
                { heading: 'Why fixed sleeps fail', paragraphs: ['A fixed delay assumes the application always responds within one chosen interval. A spinner that disappears in two seconds today may need twenty seconds after a slow service response. Too short causes intermittent failures; too long wastes time on every run.', 'Flaky failures erode trust. Teams start rerunning tests until they pass, and a real regression can be hidden in the noise.'] },
                { heading: 'Wait for the condition that matters', paragraphs: ['In a banking application, an inconsistent loading spinner made automation proceed before the page was ready. Waiting for the spinner to become invisible tied the test to an application state instead of a guessed duration.', 'Use explicit waits for meaningful conditions: an element is visible, a navigation completes, a response arrives, or a loading indicator disappears. Set a bounded timeout and report which condition did not occur.'] },
                { heading: 'Diagnose before increasing timeouts', bullets: ['Capture screenshots, browser logs, and timing around the failed condition.', 'Check whether the locator is unique and the expected state is correct.', 'Separate application slowness from test synchronization problems.', 'Track flaky tests and fix or quarantine them with a clear owner.'] }
            ], 'What observable state should your most unreliable fixed sleep wait for instead?'),
            post('test-data-and-credentials', 'Test data and credentials without lockouts', 'Design resilient authentication checks that protect accounts and keep failures diagnosable.', 7, [
                { heading: 'A recurring environment problem', paragraphs: ['Database refreshes can alter test-user data. In one project, changing credentials caused repeated automation login failures, account lockouts, and manual recovery that depended on privileged support. Treating that friction as normal made the regression process less reliable.', 'The first step is to understand the source of truth for test identities and how refreshes are meant to be handled. Prefer approved test-account provisioning or a controlled secret-management process over embedding credentials in feature files or source code.'] },
                { heading: 'Recover safely, not blindly', paragraphs: ['Retries can help with a known transient condition, but repeated credential guesses are dangerous: they can lock accounts, hide a real authentication regression, and make failures harder to diagnose. A retry policy must be bounded and aligned with the application’s security controls.', 'The durable goal is to detect expected test-data state before execution, request or provision a valid account through the approved path, and stop clearly when recovery cannot be verified. If alternate test identities are used, their ownership, access, and lockout policies must be explicit.'] },
                { heading: 'A safer operating pattern', bullets: ['Never commit passwords or expose live customer credentials in logs.', 'Use dedicated, least-privilege test accounts and approved secret storage.', 'Validate account readiness before running a large suite.', 'Bound retries, stop before lockout thresholds, and report the actual failure.', 'Coordinate database refresh behavior with environment owners.'] }
            ], 'What is the approved recovery path for a test identity after an environment refresh?')
        ]
    },
    {
        slug: 'frameworks',
        number: '05',
        title: 'Tools I use',
        description: 'Notes on Java, Selenium, testing frameworks, and APIs.',
        posts: [
            post('java-for-test-automation', 'Java foundations for test automation', 'Use core Java concepts to make test code clear, reusable, and easier to debug.', 9, [
                { heading: 'Write code that explains the test', paragraphs: ['Automation code is production code for your feedback system. Use meaningful names, small methods, and types that make it clear what data a test expects. Avoid compressing several actions and assertions into a single line that is difficult to diagnose.', 'Object-oriented programming can help model pages, API clients, and domain concepts. Encapsulation keeps implementation details close to the behavior they support; composition often makes dependencies easier to replace than a deep inheritance tree.'] },
                { heading: 'Choose the right collection', paragraphs: ['Lists preserve order and allow duplicates, which is useful for ordered search results. Sets represent uniqueness. Maps associate a key—such as a field name—with a value. Selecting a collection because it matches the data’s meaning makes test setup easier to reason about.', 'Be explicit about equality and ordering in assertions. A map comparison may be appropriate when JSON object key order is irrelevant; a list comparison is appropriate when sequence is part of the contract.'] },
                { heading: 'Handle failures with context', paragraphs: ['Catch an exception only when the test can add useful context or recover safely. Catching every exception and returning a default value can turn an infrastructure or product failure into a misleading pass. Include the operation, relevant non-sensitive test data, and the original cause in failure output.', 'Streams and lambdas can make transformations concise, but they should not hide side effects or turn a simple loop into a puzzle. Prefer readable code over showing off language features.'] },
                { heading: 'Keep test code maintainable', bullets: ['Use constants or configuration for values that change by environment.', 'Keep secrets out of source code and test reports.', 'Close files, streams, and other resources with structured resource handling.', 'Use assertions that state the expected behavior and produce helpful failure messages.', 'Keep utility methods focused; do not build a general framework for one scenario.'] }
            ], 'Which Java abstraction in your test code makes intent clearer—and which one may be unnecessary?'),
            post('selenium-locators-and-pages', 'Selenium locators and page boundaries', 'Choose resilient element strategies and keep UI details out of business scenarios.', 8, [
                { heading: 'Choose a locator for its meaning', paragraphs: ['Prefer stable, unique attributes designed for automation or accessibility, such as an element role, label, or dedicated test identifier. CSS selectors are often concise. XPath can express relationships and dynamic text, but long positional XPath chains are tightly coupled to document structure.', 'A parameterized locator can help when the business label varies. Keep the template centralized, escape or constrain dynamic input appropriately, and verify uniqueness rather than assuming a matching string identifies one element.'] },
                { heading: 'Give page objects a useful boundary', paragraphs: ['A Page Object can group UI locators and user-facing operations for a page or component. A scenario should express behavior such as selecting an account and submitting a transfer; the page object handles how that interaction is performed.', 'Avoid making every tiny click a reusable business step. Keep page objects cohesive, return meaningful state, and avoid assertions in low-level locator helpers when a scenario-level assertion gives a clearer failure.'] },
                { heading: 'Synchronize on observable state', paragraphs: ['Find the condition that proves the next action is safe: a button becomes enabled, a dialog appears, or a spinner is no longer visible. Use bounded explicit waits and handle stale elements by understanding why the page rerendered, not by adding blind retries.', 'Window, frame, alert, dropdown, and Actions APIs each change browser context or interaction style. Make those transitions explicit and restore the expected context so later checks do not depend on hidden state.'] }
            ], 'Which locator on a frequently changed page is coupled to layout rather than user-visible meaning?'),
            post('cucumber-step-design', 'Cucumber steps that stay readable', 'Connect Gherkin to automation without letting implementation details leak into the behavior.', 8, [
                { heading: 'Keep feature files about the business', paragraphs: ['A good scenario communicates an example to a product partner. Given describes relevant starting context, When describes an action or event, and Then describes an observable outcome. A feature file full of click, type, and wait instructions reads like a script rather than a behavior agreement.', 'Scenario outlines are useful when the same rule applies to multiple examples. Use a data table when several related values belong together. Background should hold only context that genuinely applies to every scenario in that feature.'] },
                { heading: 'Make step definitions focused', paragraphs: ['A step definition maps readable language to an action or assertion. Reuse common behavior such as authentication, but avoid a single generic step that accepts dozens of options and is impossible to understand from a failure.', 'Hooks are for shared setup and cleanup, not hidden business behavior. Keep state scoped to the scenario so parallel runs do not interfere with each other.'] },
                { heading: 'Avoid common sources of brittleness', bullets: ['Do not couple feature text to CSS selectors, database tables, or exact implementation steps.', 'Avoid duplicate step patterns that match the same phrase ambiguously.', 'Keep assertions close to the behavior they verify.', 'Use scenario names and tags to support clear reporting and selective execution.', 'Review feature files with business partners before treating them as executable truth.'] }
            ], 'Could a non-technical teammate understand what outcome your newest scenario describes?'),
            post('serenity-testng-framework', 'Designing a maintainable Serenity and TestNG suite', 'Organize reporting, execution, and shared components around useful team feedback.', 9, [
                { heading: 'Structure around responsibilities', paragraphs: ['A framework can separate feature files and step definitions, page objects, shared test support, and environment configuration. The goal is not a particular folder count; it is knowing where a behavior belongs and keeping changes local.', 'Serenity BDD can connect test execution to readable reports and business scenarios. Useful reporting includes what was attempted, what was observed, and where failure occurred. A report should not leak credentials, tokens, or customer data.'] },
                { heading: 'Use TestNG deliberately', paragraphs: ['TestNG annotations define setup, teardown, grouping, data providers, and listeners. Use setup for required scenario context and teardown to release resources even when assertions fail. Groups can make suite selection explicit; data providers can supply controlled examples.', 'Parallel execution is not a free speed improvement. First isolate browser sessions, test data, static state, and accounts. Then run a small parallel subset and confirm both reliability and resource capacity before scaling.'] },
                { heading: 'Treat the framework as a product', bullets: ['Make local and CI execution use the same documented configuration model.', 'Keep waits, browser setup, and reporting conventions consistent.', 'Name and quarantine unstable tests with a clear owner and resolution plan.', 'Review framework changes for readability as well as passing status.', 'Measure maintenance and diagnosis effort, not only test count.'] }
            ], 'What would need to be isolated before your current suite could run safely in parallel?'),
            post('postman-api-automation', 'From Postman collection to API automation', 'Build repeatable API checks with environments, explicit assertions, and safe data.', 8, [
                { heading: 'Model the service contract', paragraphs: ['Start with the HTTP method, resource, request shape, authentication, and expected response. Status codes matter, but a test should also assert business fields, schema constraints, and state transitions. Include invalid and unauthorized requests to verify how errors are handled.', 'Postman collections group requests into a journey. Collection and environment variables help reuse a base URL and non-secret configuration, but secrets belong in secure local or CI variables—not exported collections committed to a repository.'] },
                { heading: 'Make scripts explain expectations', paragraphs: ['Pre-request scripts can prepare dynamic values, and tests can assert response status, headers, and JSON fields. Keep assertions independent of response ordering unless order is part of the contract. Use unique test data and plan cleanup so reruns do not collide.', 'The Collection Runner is useful for exploratory and repeatable runs. Newman can run collections from a command line or pipeline, where failures should return a clear non-zero result and reports should avoid sensitive values.'] },
                { heading: 'Plan coverage and security together', bullets: ['Validate success, boundary, validation-error, authorization, and dependency-failure behavior.', 'Use a dedicated test environment and least-privilege credentials.', 'Avoid logging tokens, passwords, account details, or sensitive response payloads.', 'Make request data deterministic enough to reproduce a failure.', 'Keep API checks focused and reserve browser automation for user-visible integration.'] }
            ], 'Which response assertion would catch a meaningful business regression beyond checking for HTTP 200?')
        ]
    },
    {
        slug: 'engineering-practice',
        number: '06',
        title: 'Other QA topics',
        description: 'Learn about API tests, mobile apps, build checks, and growing your skills.',
        posts: [
            post('api-testing-pyramid', 'API testing: validate contracts and behavior', 'Test service behavior directly and use UI checks for the user journeys they uniquely cover.', 7, [
                { heading: 'What an API check can tell you', paragraphs: ['An API test can verify status codes, response structure, business rules, authorization, and error behavior without driving a browser. It is a focused way to find failures in a service contract and is often faster to diagnose than an end-to-end UI test.', 'A 200 response alone is not proof of success. Validate the meaningful fields, state changes, permissions, and behavior for invalid or missing input.'] },
                { heading: 'Build a useful set of checks', bullets: ['Cover normal, boundary, unauthorized, and invalid requests.', 'Assert response schema and business invariants, not incidental ordering.', 'Use isolated test data and clean up safely.', 'Keep credentials outside source control and redact sensitive response data.', 'Use UI tests for a smaller set of integrated customer journeys.'] }
            ], 'Which business rule could be tested faster and more clearly at the API layer?'),
            post('mobile-testing-reality', 'Mobile testing beyond a single device', 'Plan around operating systems, screen sizes, connectivity, permissions, and real usage.', 7, [
                { heading: 'Fragmentation changes the risk', paragraphs: ['A mobile application runs across different operating-system versions, device capabilities, screen sizes, network conditions, and permission settings. A test passing on one simulator does not establish a consistent experience everywhere.', 'Prioritize a device matrix using user analytics, supported platforms, and risk. A small representative set can give better coverage than an arbitrary list of devices.'] },
                { heading: 'Test the interruptions', bullets: ['Switch between Wi-Fi and cellular or temporarily lose connectivity.', 'Background and resume the app during a long workflow.', 'Deny and later grant camera, location, or notification permissions.', 'Check text scaling, keyboard behavior, and smaller displays.', 'Verify installation, upgrade, and offline or retry paths where relevant.'], paragraphs: ['Automation is helpful for repeatable flows, but exploratory testing remains important for gestures, interruptions, and platform-specific behavior that is difficult to model exhaustively.'] }
            ], 'Which device or interruption would expose a risk that your current happy-path test misses?'),
            post('ci-quality-gates', 'CI quality gates that help instead of block', 'Use fast, meaningful feedback and make a failed check actionable.', 6, [
                { heading: 'A gate should answer a question', paragraphs: ['A pipeline that runs many checks without explaining what a failure means creates noise. A useful quality gate protects a clear risk and gives enough evidence for someone to decide what to do next.', 'Run fast unit and API checks early, then broader integration and browser suites where they add value. Report the environment, test, and failed assertion; avoid turning every intermittent failure into a silent retry.'] },
                { heading: 'Keep the signal healthy', bullets: ['Separate product failures from infrastructure failures.', 'Make ownership and triage visible for quarantined checks.', 'Track duration and flaky rate as well as pass percentage.', 'Treat a skipped check as a documented risk, not a green result.'] }
            ], 'Which pipeline result currently takes the longest to interpret?'),
            post('career-learning-loop', 'How to grow from tester to quality engineer', 'Build expertise through curiosity, experimentation, collaboration, and reflection.', 7, [
                { heading: 'Learn the system, not only the tool', paragraphs: ['Tools and frameworks change. The ability to understand a customer problem, investigate behavior, and communicate risk remains useful across technologies. Learning a tool is valuable when it helps answer a real engineering question.', 'My own path moved through manual testing, banking and financial-services work, fleet management, web and mobile testing, and automation. Each domain required learning its users and workflows before choosing the right checks.'] },
                { heading: 'A repeatable learning loop', bullets: ['Curiosity: ask why behavior matters and what could go wrong.', 'Experimentation: make a small change and observe the result.', 'Failure: inspect an unexpected outcome without hiding it.', 'Observation: record the clue, evidence, and assumptions.', 'Reflection: share the learning and decide what to improve next.'], paragraphs: ['I continue exploring cloud technologies, AI-assisted quality work, mobile automation, and newer testing practices. The point is not collecting labels; it is understanding where a new capability can help a team deliver better evidence.'] },
                { heading: 'Show impact with honesty', paragraphs: ['Strong interview stories explain the situation, task, action, result, and learning. Use numbers only when they were measured. Be clear about what you owned, what the team contributed, and what remained imperfect. A thoughtful account of a small recurring problem can be more convincing than inflated claims.'] }
            ], 'What problem from this week is worth investigating, documenting, or sharing with your team?')
        ]
    },
    {
        slug: 'project-stories',
        number: '07',
        title: 'Projects',
        description: 'The banking and fleet products I tested, and the automation work I contributed to.',
        posts: [
            post('union-bank-risk-and-trust', 'Testing a banking product', 'Tested important banking workflows where errors can affect customer money and trust.', 5, [
                { heading: 'Why careful testing matters', paragraphs: ['I worked on a retail banking product. A problem in a banking workflow can affect a customer’s money, records, or trust, so I first learned what the feature was meant to do and who used it.', 'This helped me focus on the workflows where a failure would matter most.'] },
                { heading: 'What I tested', paragraphs: ['I checked key user journeys from sign-in through the expected result. I also looked at what could happen when data was missing, an action was repeated, or the system returned an error.'] , bullets: ['Check the expected result and the information saved by the system.', 'Test valid, invalid, and boundary values.', 'Check errors, timeouts, and recovery.', 'Write clear steps and evidence when a problem appears.'] },
                { heading: 'What I learned', paragraphs: ['A good test starts with understanding the product, not just following a list of steps. Knowing why a workflow matters helps me choose useful checks and explain the impact of a defect to the team.'] }
            ], null, {
                projectName: 'Union Bank',
                domain: 'Retail banking',
                projectFocus: ['Functional testing', 'Regression testing', 'End-to-end workflows', 'Risk-based testing'],
                tools: [],
                result: 'Shared clear test evidence so the team could assess important workflow risks.'
            }),
            post('elements-fleet-management', 'Testing a fleet product', 'Tested features and regression workflows in a fleet management platform.', 5, [
                { heading: 'What the product does', paragraphs: ['Elements is a fleet management platform. It brings together information about vehicles, drivers, tracking, and reports. Those parts connect, so a change in one area can affect work elsewhere in the product.'] },
                { heading: 'What I tested', paragraphs: ['I tested features and regression workflows, following information through the product instead of checking each screen by itself. I learned how people used the platform so I could focus on realistic work and useful results.'] , bullets: ['Check how vehicle and driver information moves through the product.', 'Follow tracking updates into related workflows and reports.', 'Retest important features after changes.'] },
                { heading: 'What I learned', paragraphs: ['A new industry can have rules that are not obvious from the screen. Learning the users’ work helped me ask better questions and choose tests that matched how the product was used.'] }
            ], null, {
                projectName: 'Elements Fleet Management',
                domain: 'Fleet management',
                projectFocus: ['Functional testing', 'Regression testing', 'Product workflows', 'Reports and tracking'],
                tools: [],
                result: 'Tested connected workflows by following how information moved through the product.'
            }),
            post('cooperative-bank-automation', 'Making banking tests more reliable', 'Improved regression automation with shared scenarios, reusable steps, and better waits.', 7, [
                { heading: 'The product and the team', paragraphs: ['I worked on a cooperative banking product with a team using Agile/Scrum. Business analysts wrote examples in Gherkin, so business, development, and QA could discuss the same expected behavior.'] },
                { heading: 'How the automation worked', paragraphs: ['The team used Java, Selenium, Serenity BDD, and Cucumber. We used the Page Object Model and shared steps, such as signing in, so common actions did not need to be written again for each test.'] },
                { heading: 'Problems I helped fix', paragraphs: ['Test accounts could change after database refreshes, which sometimes interrupted test runs and needed manual attention. We improved how those credential changes were handled.', 'The application also showed a loading spinner for different amounts of time. Replacing a fixed delay with a check for the spinner to disappear made the test wait for the application instead of guessing.'] },
                { heading: 'The result', paragraphs: ['These changes reduced manual intervention and made regression runs more dependable. The main lesson for me was that automation needs clear design and regular care—not just more scripts.'] , bullets: ['Share readable examples with the team.', 'Reuse common steps while keeping each scenario easy to follow.', 'Wait for the application state rather than a fixed time.', 'Explain what changed and how it helped the team.'] }
            ], null, {
                projectName: 'Cooperative Banking',
                domain: 'BFSI · Banking',
                projectFocus: ['UI automation', 'Regression testing', 'BDD', 'Test reliability'],
                tools: ['Java', 'Selenium', 'Serenity BDD', 'Cucumber', 'Gherkin', 'Page Object Model'],
                result: 'Reduced manual intervention and made regression runs more dependable.'
            })
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
