let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');


    // DATA 

    let countryData = [
        {
            id: 1,
            name: 'Egypt',
            details: '6 Days and Nights Package',
            price: 2000,
            image: 'countries/filter-Images/Africa/egypt.jpg',
            url: "countries/egypt.html", 
            nature: {
                days: ['aeroplane'],
                type: 'Cultural-Tour'
            }
        },
        {
            id: 2,
            name: 'Kenya',
            details: '15 Days and Nights Package',
            price: 5000,
            image: 'countries/filter-Images/Africa/Kenya.jpg',
            url: "countries/kenya.html", 
            nature: {
                days: ['train'],
                type: 'Family-Tour'
            }
        },
        {
            id: 3,
            name: 'Morocco',
            details: '30 Days and Nights Package',
            price: 2499,
            image: 'countries/filter-Images/Africa/morocco.jpg',
            url: "countries/morrocco.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Cultural-Tour'
            }
        },
        {
            id: 4,
            name: 'Nigeria',
            details: '15 Days and Nights Package',
            price: 3499,
            image: 'countries/filter-Images/Africa/nigeria.jpg',
            url: "countries/nigeria.html", 
            nature: {
                days: ['train'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 5,
            name: 'South Africa',
            details: '10 Days and Nights Package',
            price: 4000,
            image: 'countries/filter-Images/Africa/south africa.jpg',
            url: "countries/southafrica.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 6,
            name: 'France',
            details: '12 Days and Nights Package',
            price: 3500,
            image: 'countries/filter-Images/Europe/france.jpg',
            url: "countries/france.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Cultural-Tour'
            }
        },
        {
            id: 7,
            name: 'Germany',
            details: '18 Days and Nights Package',
            price: 4000,
            image: 'countries/filter-Images/Europe/germany.jpg',
            url: "countries/germany.html", 
            nature: {
                days: ['aeroplane'],
                type: 'Family-Tour'
            }
        },
        {
            id: 8,
            name: 'Italy',
            details: '10 Days and Nights Package',
            price: 6000,
            image: 'countries/filter-Images/Europe/italy.jpg',
            url: "countries/italy.html", 
            nature: {
                days: ['train'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 9,
            name: 'Spain',
            details: '13 Days and Nights Package',
            price: 2000,
            image: 'countries/filter-Images/Europe/spain.jpg',
            url: "countries/spain.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Cultural-Tour'
            }
        },
        {
            id: 10,
            name: 'UK (United Kingdom)',
            details: '60 Days and Nights Package',
            price: 40000,
            image: 'countries/filter-Images/Europe/uk.jpg',
            url: "countries/uk.html", 
            nature: {
                days: ['aeroplane'],
                type: 'Luxury-Tour'
            }
        },
        {
            id: 11,
            name: 'Argentina',
            details: '20 Days and Nights Package',
            price: 35000,
            image: 'countries/filter-Images/South America/Argentica.jpg',
            url: "countries/argentina.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Luxury-Tour'
            }
        },
        {
            id: 12,
            name: 'Brazil',
            details: '10 Days and Nights Package',
            price: 46000,
            image: 'countries/filter-Images/South America/brazil.jpg',
            url: "countries/brazil.html", 
            nature: {
                days: ['train'],
                type: 'Luxury-Tour'
            }
        },
        {
            id: 13,
            name: 'Chile',
            details: '15 Days and Nights Package',
            price: 8000,
            image: 'countries/filter-Images/South America/chile.jpg',
            url: "countries/chile.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 14,
            name: 'Columbia',
            details: '7 Days and Nights Package',
            price: 22000,
            image: 'countries/filter-Images/South America/columbia.jpg',
            url: "countries/columbia.html", 
            nature: {
                days: ['train'],
                type: 'Luxury-Tour'
            }
        },
        {
            id: 15,
            name: 'Peru',
            details: '10 Days and Nights Package',
            price: 4600,
            image: 'countries/filter-Images/South America/peru.jpg',
            url: "countries/peru.html", 
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 16,
            name: 'Canada',
            details: '10 Days and Nights Package',
            price: 2000,
            image: 'countries/filter-Images/North America/canada.jpg',
            url: "countries/canada.html",
            nature: {
                days: ['train'],
                type: '-Tour'
            }
        },
        {
            id: 17,
            name: 'Cuba',
            details: '15 Days and Nights Package',
            price: 5499,
            image: 'countries/filter-Images/North America/cuba.jpg',
            url: "countries/cuba.html",
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 18,
            name: 'Jamaica',
            details: '30 Days and Nights Package',
            price: 12000,
            image: 'countries/filter-Images/North America/jamaica.jpg',
            url: "countries/jamaica.html",
            nature: {
                days: ['train', 'aeroplane'],
                type: 'Adventure-Tour'
            }
        },
        {
            id: 19,
            name: 'Mexico',
            details: '10 Days and Nights Package',
            price: 14000,
            image: 'countries/filter-Images/North America/mexico.jpg',
            url: "countries/mexico.html",
            nature: {
                days: ['train'],
                type: 'Family-Tour'
            }
        },
        {
            id: 20,
            name: 'US (United State)',
            details: '60 Days and Nights Package',
            price: 4000,
            image: 'countries/filter-Images/North America/united state.jpg',
            url: "countries/unitedstates.html",
            nature: {
                days: ['aeroplane'],
                type: 'Curtural-Tour'
            }
        },
    
    ];


    let productFilter = countryData;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = countryData.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check transport
            if(valueFilter.days.value != ''){
                if(!item.nature.days.includes(valueFilter.days.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.toLowerCase().includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    // function showProduct(productFilter){
    //     count.innerText = productFilter.length;
    //     list.innerHTML = '';
    //     productFilter.forEach(item => {
    //         let anchor = document.createElement('a');
    //         anchor.href = item.url
    //         anchor.classList.add('product-link');
            
    //         let newItem = document.createElement('div');
    //         newItem.classList.add('item');
            
    //         // create image
    //         let newImage = new Image();
    //         newImage.src = item.image;
    //         newItem.appendChild(newImage);
    //         // create name product
    //         let newTitle = document.createElement('div');
    //         newTitle.classList.add('title');
    //         newTitle.innerText = item.name;
    //         newItem.appendChild(newTitle);
    //         // create price
    //         let newPrice = document.createElement('div');
    //         newPrice.classList.add('price');
    //         newPrice.innerText = item.price.toLocaleString() + '$';
    //         newItem.appendChild(newPrice);
            
    //         list.appendChild(newItem);
    //         list.appendChild(anchor);

    //         // Append the anchor tag to the list
    //     });
    // }

    function showProduct(productFilter) {
        // Update the count display
        count.innerText = productFilter.length;
        list.innerHTML = '';
    
        productFilter.forEach(item => {
            // Create a new anchor element
            let anchor = document.createElement('a');
            anchor.href = item.url; // URL to navigate to
            anchor.classList.add('product-link'); // Optional: Add a class for styling
    
            // Create a new item div
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // Create and append the image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
    
            // Create and append the product name
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);

            // Create and append the details 
            let newDetail = document.createElement('div');
            newDetail.classList.add('details');
            newDetail.innerText = item.details;
            newItem.appendChild(newDetail);
    
            // Create and append the price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + '$';
            newItem.appendChild(newPrice);
    
            // Append the newItem div to the anchor tag
            anchor.appendChild(newItem);
    
            // Append the anchor tag to the list
            list.appendChild(anchor);
        });
    }
    