require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoutes = require('./Routes/ProductsRoutes')
const userRoutes = require('./Routes/UserRoutes')
const corsOptions = {
  origin: true
}

// init app & middleware
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  express.urlencoded({
    extended: true,
  })
);

//connecting to database
mongoose.connect(process.env.URI).then(() => {
  console.log("Connected to Database")
})

// routes 
app.use('/products', productRoutes)
app.use('/users', userRoutes)


app.listen(process.env.PORT , () => {
  console.log(
    `Server started on PORT: ${process.env.PORT } .`
  )
  })




