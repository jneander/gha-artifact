import {readData, writeData} from './shared.mjs'

const FILENAME = 'square-data'

async function run() {
  const data = (await readData(FILENAME)) ?? {}

  if (data.square == null || data.square > 1000000) {
    data.square = 2
  } else {
    data.square = data.square ** 2
  }

  console.debug(data)

  await writeData(FILENAME, data)
}

void run()
