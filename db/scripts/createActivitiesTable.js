const { query } = require('../index')

async function createActivitiesTable() {
  const data = await query(
    'CREATE TABLE activities (id SERIAL PRIMARY KEY, location TEXT, activity TEXT, supplier TEXT); '
  )
  console.log('activities table has been created')
  return
}

createActivitiesTable()
