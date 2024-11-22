import fs from 'node:fs/promises'
import {join} from 'path'
import {fileURLToPath} from 'url'

const dirname = fileURLToPath(new URL('.', import.meta.url))

export async function readData(fileName) {
  const dataFilePath = join(dirname, `${fileName}.json`)

  try {
    const result = await fs.readFile(dataFilePath)
    return JSON.parse(result)
  } catch {
    console.debug('Data file does not exist.')
    return null
  }
}

export async function writeData(fileName, data) {
  const dataFilePath = join(dirname, `${fileName}.json`)

  console.debug('saving data', data)
  await fs.writeFile(dataFilePath, JSON.stringify(data))
}
