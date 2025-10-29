import arc from '@architect/functions'

const app = arc.http.async()

console.log('Server started! Listening for requests…')

export default app