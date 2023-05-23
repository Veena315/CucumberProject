$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Simplilearn application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clck on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_clck_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".error_msg\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D84TOFF\u0027, ip: \u0027192.168.29.249\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Prave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64853}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 23459519c7dc39f65e6868e28fe318d3\n*** Element info: {Using\u003dclass name, value\u003derror_msg}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefs.LoginStepDef.i_should_get_the_error_message(LoginStepDef.java:67)\r\n\tat ✽.I should get the error message(file:///C:/Users/Prave/Desktop/AutomationTesting/CucumberProject/src/test/java/features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"abc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clck on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_clck_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I clck on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "Shivakmr755@gmail.com",
        "Shiveena1705",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "veenajannu@gmail.com",
        "Veena315",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"Shivakmr755@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Shiveena1705\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clck on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_clck_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"veenajannu@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Veena315\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clck on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_clck_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".error_msg\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D84TOFF\u0027, ip: \u0027192.168.29.249\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Prave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65063}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5f714481a931d51d6b01da58b33ac31e\n*** Element info: {Using\u003dclass name, value\u003derror_msg}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefs.LoginStepDef.i_should_get_the_error_message_as(LoginStepDef.java:94)\r\n\tat ✽.I should get the error message as \"The email or password you have entered is invalid.\"(file:///C:/Users/Prave/Desktop/AutomationTesting/CucumberProject/src/test/java/features/Login.feature:38)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});