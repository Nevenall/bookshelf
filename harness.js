import fs from 'node:fs/promises'
import { compile, preprocess } from 'npm:svelte/compiler'


let source = await fs.readFile('src/book/03 Gearing Up.html')

var result = compile(source.toString())

console.log(result)