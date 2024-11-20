import fs from 'node:fs/promises'
import {join} from 'path'
import {fileURLToPath} from 'url'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const dataFilePath = join(dirname, 'math-result.json')

async function readData() {
  try {
    const result = await fs.stat(dataFilePath)
    return JSON.parse(result)
  } catch {
    return {value: 2}
  }
}

async function writeData(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data))
}

async function run() {
  try {
    const data = await readData()
    data.value = data.value ** 2
    await writeData(data)
  } catch (e) {
    console.error(e)
  }
}

void run()
