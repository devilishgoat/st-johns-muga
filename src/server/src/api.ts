import pool from './dbConnector'
const getSpotsFromDatabase = async () => {
    const client = await pool.connect();
    const sql = "SELECT * FROM spots";
    const { rows } = await client.query(sql);
    client.release();
    return rows;
}

export const getSpots = getSpotsFromDatabase