# https-enforcer

Express middleware to enforce HTTPS connections on non local requests.

## Install

`npm install --save https-enforcer`

## Usage

```
const express = require('express')
const httpsEnforcer = require('https-enforcer')

const app = express()
app.use(httpsEnforcer)
```

## Notes

If you're making a request against localhost or any private IP
it won't redirect to HTTPs.
