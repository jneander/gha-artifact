import fs from 'node:fs/promises'
import {join} from 'path'
import {fileURLToPath} from 'url'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const dataFilePath = join(dirname, 'math-result.json')

async function readData() {
  try {
    const result = await fs.readFile(dataFilePath)
    return JSON.parse(result)
  } catch (e) {
    console.error(e)
    console.log('using default value')
    return {value: 2}
  }
}

async function writeData(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data))
}

async function run() {
  const entries = await fs.readdir(dirname)
  for (const entry of entries) {
    console.log(`local file: ${entry}`)
  }
  const data = await readData()
  data.value = data.value ** 2
  await writeData(data)
}

void run()
