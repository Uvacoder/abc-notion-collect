const fs = require('fs')
const request = require('request')
const path = require('path')
const categoriesDatabaseId = '1d04aea0c68b437b8f2ad68168e62167'

const envFile = fs.readFileSync(path.join(__dirname, '/.env'), 'utf-8')
const env = {}

envFile.split('\n').forEach((envData) => {
  const envVar = envData.split('=')
  const envName = envVar[0]
  const envValue = envVar[1]
  env[[envName]] = envValue
})
const WORKER_ENDPOINT = env.WORKER_ENDPOINT
request
  .get(`${WORKER_ENDPOINT}/v1/table/${categoriesDatabaseId}`)
  .pipe(fs.createWriteStream(path.join(__dirname, './src/store/categories.json')))
