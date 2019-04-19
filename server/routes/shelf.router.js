const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM "item"`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});


/**
* Add an item for the logged in user to the shelf
*/
router.post('/', (req, res) => {
// req.body should be a project object
    const newItem = req.body;
// database query should mask VALUES
    const queryText = `INSERT INTO "item" 
                        ("description","image_url",)VALUES ($1, $2);`;
    const queryValues = [
        newItem.description,
        newItem.url,
        ];
// database query
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus( 201 )  })
    .catch((error) => {
        console.log( `Error making database query ${ queryText }`, error);
        res.sendStatus( 500 ); // Good servers always responds
})
});


/**
* Delete an item if it's something the logged in user added
*/
router.delete('/:id', (req, res) => {
console.log(req.params.id);
const queryText = 'DELETE FROM item WHERE id=$1';
pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('Error completing SELECT item query', err);
        res.sendStatus(500);
    });
});


/**
* Update an item if it's something the logged in user added
*/
router.put('/:id', (req, res) => {
    
});


/**
* Return all users along with the total number of items 
* they have added to the shelf
*/
router.get('/count', (req, res) => {
    console.log('in count Get');
    pool.query(`SELECT  "user"."username", count ("item"."user_id") FROM "user"
    LEFT JOIN "item" ON "user"."id"="item"."user_id"
    GROUP BY "user"."username";`)
    .then((result) => {res.send(result.rows); })
    .catch((error) => {
        console.log('error on count Get', error);
        res.sendStatus(500)
    })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT "item"."description" FROM "item"
    JOIN "user" ON "user"."id" = "item"."user_id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;