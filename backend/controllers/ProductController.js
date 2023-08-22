const getTheProducts = (req, res) => {
  res.status(200).send('ok products');
};

const addNewProduct = async (req, res) => {
  const { title, desc, price } = req.body;
  try {
    if (!(title, desc, price)) {
      res.status(401).send('All the fields are compulsory');
    }                       


    
  } catch (error) {
    console.log(error);
  }

  res.status(201).send('ok products recieved');
};

module.exports = { getTheProducts, addNewProduct };
