import * as path from "path";
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
 
// const typesArray = loadFilesSync(path.dirname(fileURLToPath(import.meta.url)), { extensions: ['graphql'] })
const typesArray = loadFilesSync(path.join(__dirname), { extensions: ['graphql'] }) // dir ifadesi babel sayesinde çalışıyor.

export default mergeTypeDefs(typesArray)