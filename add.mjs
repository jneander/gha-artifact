import {readData, writeData} from './shared.mjs'

const FILENAME = 'add-data'

async function run() {
  const data = (await readData(FILENAME)) ?? {}
  data.add = (data.add || 0) + 1
  await writeData(FILENAME, data)
}

void run()
