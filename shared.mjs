import fs from 'node:fs/promises'
import {join} from 'path'
import {fileURLToPath} from 'url'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const dataFilePath = join(dirname, 'example-data.json')

export async function readData() {
  try {
    const result = await fs.readFile(dataFilePath)
    return JSON.parse(result)
  } catch {
    console.debug('Data file does not exist.')
    return {}
  }
}

export async function writeData(data) {
  console.debug('saving data', data)
  await fs.writeFile(dataFilePath, JSON.stringify(data))
}
