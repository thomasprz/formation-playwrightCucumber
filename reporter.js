const reporter = require("cucumber-html-reporter")

const options = {
    theme: 'bootstrap',
    jsonFile: "cucumber_report.json",
    output: "reports/cucumber_report.html",
    reportSuitesAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "App Version" : "1.0.0",
        "Test Environment": "STAGING",
        Browser : "Chrome 133.0",
        Platform: "Windows 10", 
    }
}

reporter.generate(options)