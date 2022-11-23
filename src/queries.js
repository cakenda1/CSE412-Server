const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CSE412',
  password: '1221',
  port: 5432,
})

const getGas = (request, response) => {
    // pool.query('SELECT cost FROM Gas, state WHERE Gas.stateID = state.stateID AND type = \'REGULAR\'', (error, results) => {
        pool.query('SELECT cost, state.stateID, state.name FROM Gas, state WHERE Gas.stateID = state.stateID AND Gas.type LIKE \'Regular%\'', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getGroceries = (request, response) => {
    pool.query('SELECT cost FROM Groceries, state WHERE Groceries.stateID = State.stateID', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getRent = (request, response) => {
    pool.query('SELECT cost FROM Rent, state WHERE Rent.stateID = State.stateID', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getPop = (request, response) => {
    pool.query('SELECT Population, Population Density FROM State', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getHouse = (request, response) => {
    pool.query('SELECT averageSize FROM Household, state WHERE Household.stateID = State.stateID', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }  

  module.exports = {
    getGas,
    getGroceries,
    getRent,
    getHouse,
    getPop
  }