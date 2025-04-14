function getShippingCost(country) {
    let price;
    switch (country) {
      case 'China':
        price = 100;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        return ;
      case 'Chile':
        price = 250;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        return ;
      case 'Australia':
        price = 170;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        return ;
      case 'Jamaica':
        price = 120;
        console.log(`Shipping to ${country} will cost ${price} credits`);
        return ;
      default:
        console.log('Sorry, there is no delivery to your country');
        return ;
    }
  }