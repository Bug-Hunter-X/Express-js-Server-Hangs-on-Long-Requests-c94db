# Express.js Server Hangs on Long Requests

This repository demonstrates a common issue in Express.js applications where long-running requests can cause the server to hang.  The `bug.js` file shows the problem, while `bugSolution.js` provides a solution using request-timeout.

## Problem

The example uses `setTimeout` to simulate a long request. Without proper timeout handling, the server will appear unresponsive during this period.

## Solution

The solution uses the `request-timeout` middleware to set a timeout for requests. If a request exceeds the timeout, it will be terminated.