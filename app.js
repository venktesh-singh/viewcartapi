const express = require('express');
const app = express();
path = require('path');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const corsOptions ={
    origin:'http://localhost:3000', 
}
app.use(cors(corsOptions));
 
app.use('/uploads', express.static('uploads'));

const connectDB = require('./db/connection')
connectDB();

 
// for the route 
const productRouter = require('./router/productRoutes');
app.use('/api/product', productRouter);
 
const adminRouter = require('./router/adminRoutes');
app.use('/api/', adminRouter);

const categoryRouter = require('./router/categoryRoutes');
app.use('/api/category', categoryRouter); 

const orderRouter = require('./router/orderRoutes');
app.use('/api/order', orderRouter);

const couponRouter = require('./router/couponRoutes'); 
app.use('/api/coupon', couponRouter); 

const customerRoute = require('./router/customerRoutes');
app.use('/api/customer', customerRoute); 

const currencyRoute = require('./router/currencyRoutes');
app.use('/api/currency', currencyRoute);

const languageRoute = require('./router/languageRoutes');
app.use('/api/language', languageRoute); 

/*
const attributeRouter = require('./router/attributeRoutes');
app.use('/api/attribute', attributeRouter); */

app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);
});

