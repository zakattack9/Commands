SQL vs non-SQL
Relationship and Non-Relationship Databases
CRUD (Create, Read, Update, Delete)
Relationship databases are connected with foreign keys; data is secure (holds sensitive data)
Non-Relationship databases are not connected and don't link your data; data can be lost
Data integrity

Postgres Commands
*use postgres docs for commands and information*
https://www.tutorialspoint.com/postgresql/postgresql_order_by.htm
http://www.postgresqltutorial.com/postgresql-drop-column/
**postgres commands must end with semicolon to execute**

//  CREATE DATABASE cusomters;
//  customers is the name of database and can be any word; creates database

//  \l
//  lists created databases

//  \connect customers
//  \c customers
//  connects to database; "customers" is name of database

//  **Creating Tables:**
//  CREATE TABLE customer_info(
//  id serial PRIMARY KEY,
//  name CHAR(50) NOT NULL,
//  age INT NOT NULL
//  );

//  *CHAR(50) refers to the maximum amount of characters allowed; NOT NULL means the value wont be accepted or injected if nothing is inputed*

//  you can press enter after each line to enter commands; the command won't execute until the semicolon is entered

// \dt
// lists created tables

//  SELECT * FROM customer_info;
//  selects all rows in table and checks/shows content in table

//  INSERT INTO customer_info VALUES (default, 'zak', 21);
//  inserts data into table; must use single quotes ('')

//  DROP DATABASE customers
//  deletes database;

//  SELECT * FROM students WHERE id = 2;
//  selects row where the id is two (used to select individual rows in table)

//  SELCT firstname FROM students WHERE id = 1;
// selects just the firstname (column) where the id = 1;


//  **Editing Values in Table:**
//  UPDATE students
//  SET age = 17
//  WHERE id = 2
//  ;

//  updates specific values in the table; when changing the value, if it is a word or string, use single quotes (''); in this case, we are updating the table "students", setting the column "age" to 17, but *only* where the id = 2

//  DELETE FROM students WHERE id = 2;
//  delets row from table where id = 2; use single quotes for strings

//  SELECT * FROM students ORDER BY id ASC;
//  orders rows according specified column; this commands sorts the table students in the order of the id in ascending order; *DESC can be used for descending order*

// postgres AWS endpoint
// zak.cb9co1xxtizk.us-west-2.rds.amazonaws.com

