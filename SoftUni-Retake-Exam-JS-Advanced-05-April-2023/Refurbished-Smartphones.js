class RefurbishedSmartphones {

    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    };
    addSmartphone(model, storage, price, condition) {
        if (model == '' || storage < 0 || price < 0 || condition == '') {
            throw Error('Invalid smartphone!');
        } else {
            this.availableSmartphones.push({ model, storage, price, condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }

    };
    sellSmartphone(model, desiredStorage) {
        let isNotInArr = false;
        for (const el of this.availableSmartphones) {
            if (el.model === model) {
                if (el.storage >= desiredStorage) {
                    el.price = el.price;
                } else if ((desiredStorage - el.storage) <= 128) {
                    el.price -= el.price * 0.10;
                } else if ((desiredStorage - el.storage) > 128) {
                    el.price -= el.price * 0.20;
                }
                let currentModel = el.model;
                let storage = el.storage;
                let price = el.price;

                this.soldSmartphones.push({ currentModel, storage, price });
                let index = this.availableSmartphones.findIndex(x => x.model == model);
                this.availableSmartphones.splice(index, 1);
                this.revenue += price;

                return `${model} was sold for ${price.toFixed(2)}$`;

            } else {
                isNotInArr = true;
            }
        };
        if (isNotInArr) {
            throw Error(`${model} was not found!`);
        }

    };

    upgradePhones (){
        let result = [];
        result.push('Upgraded Smartphones:')
        for (const el of this.availableSmartphones) {
            el.storage = el.storage *2;
            result.push(`${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$`);
            
        };
        if(this.availableSmartphones.length == 0){
            throw Error('There are no available smartphones!');
        }else{
            return result.join('\n');
        }

    };

    salesJournal (criteria) {
        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);
        if(criteria == 'storage'){
            this.soldSmartphones.sort((a,b) => a.storage - b.storage);

        }else if(criteria == 'model'){
            this.soldSmartphones.sort((a,b) => a.model - b.model);
        }else{
            throw Error('Invalid criteria!');
        }
        for (const el of this.soldSmartphones) {
            result.push(`${el.model} / ${el.storage} GB / ${el.price}$`);
        }
        return result.join('\n');

    }



}

/*let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));*/

/*let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));*/

/*let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.upgradePhones());*/

/*let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));*/