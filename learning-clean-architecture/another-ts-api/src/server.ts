import { app } from './app'
import { database } from './database'

database.initialize()
app.listen(3333)
