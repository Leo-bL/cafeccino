    const loading = document.getElementById('loading-screen');
    const body = document.getElementById('body');
    window.onload = function () {
        loading.classList.add('opacity-0');
        setTimeout(() => {
            loading.classList.add('hidden');
            body.style.overflow = 'auto';
        }, 500);
}
    // start modal
    function openModal(id) {
        const modal = document.getElementById(id);
        const content = modal.querySelector('div');
        modal.classList.remove('hidden');
        content.classList.remove('animate-fade-out');
        content.classList.add('animate-fade-in');
    }
    function closeModal(id) {
        const modal = document.getElementById(id);
        const content = modal.querySelector('div');
        content.classList.remove('animate-fade-in');
        content.classList.add('animate-fade-out');
        setTimeout(() => {
        modal.classList.add('hidden');
        }, 300);
    }
    const sign_up = document.getElementById('sign-up');
    const sign_in = document.getElementById('sign-in');
    const sign_up_filed = document.getElementById('sign-up-filed');
    const sign_in_filed = document.getElementById('sign-in-filed');
    // start sign up
    sign_up.onclick = function(){
        sign_in.classList.remove('bg-mywhite');
        sign_in.classList.remove('text-myblack');
        sign_up.classList.add('bg-mywhite');
        sign_up.classList.add('text-myblack');

        sign_in_filed.classList.add('opacity-0');
        setTimeout(() => {
            sign_in_filed.classList.add('hidden');
            sign_up_filed.classList.remove('hidden');
        setTimeout(() => {
            sign_up_filed.classList.remove('opacity-0');
        }, 50);
        }, 500);
    }
    // end sign up
    // start sign in
    sign_in.onclick = function(){
        sign_up.classList.remove('bg-mywhite');
        sign_up.classList.remove('text-myblack');
        sign_in.classList.add('bg-mywhite');
        sign_in.classList.add('text-myblack');

        sign_up_filed.classList.add('opacity-0');
        setTimeout(() => {
            sign_up_filed.classList.add('hidden');
            sign_in_filed.classList.remove('hidden');
        setTimeout(() => {
            sign_in_filed.classList.remove('opacity-0');
        }, 50);
        }, 500);
    }
    // end sign in
    // end modal
    let indexia = 0;
    const caption = document.getElementById('caption');
    let caption_array = ['Try it once and you will do it again.',' Luxury products like you','Taste the journey of the other world','Take your time, the decision should be delicious']
    setInterval(() => {
        caption.classList.add('opacity-0');
        caption.classList.add('translate-y-[150%]');
        caption.classList.remove('text-mybrawon');
        caption.classList.add('text-myblack');
        setTimeout(() => {
            caption.innerHTML = caption_array[indexia]
        indexia++;
        if (indexia > caption_array.length-1) {
            indexia = 0;
        }
            caption.classList.remove('opacity-0');
        caption.classList.remove('translate-y-[150%]');
        }, 500);
    }, 5000);
    // start the products
    const prod = [
        // القسم الأول: Hot
        [ 
            { name: 'Latte', price: 9000 },
            { name: 'Espresso', price: 6000 },
            { name: 'Americano', price: 7000 },
            { name: 'Cappuccino', price: 8500 },
            { name: 'Mocha', price: 9500 },
            { name: 'Flat White', price: 9000 },
            { name: 'Macchiato', price: 7500 },
            { name: 'Cortado', price: 7800 },
            { name: 'Turkish Coffee', price: 6500 },
            { name: 'Arabic Coffee with Cardamom', price: 7500 },
            { name: 'French Coffee', price: 8500 },
            { name: 'Hot Chocolate', price: 9000 },
            { name: 'Black Tea', price: 4000 },
            { name: 'Green Tea', price: 4500 },
            { name: 'Herbal Tea', price: 5000 },
            { name: 'Karak Tea', price: 6000 },
            { name: 'Masala Chai', price: 7000 },
            { name: 'Chai Latte', price: 7500 },
            { name: 'Matcha Latte', price: 9500 }
        ],

        // القسم الثاني: Iced & Cold
        [ 
            { name: 'Iced Americano', price: 7000 },
            { name: 'Iced Latte', price: 9000 },
            { name: 'Iced Mocha', price: 9500 },
            { name: 'Iced Spanish Latte', price: 9800 },
            { name: 'Iced Matcha Latte', price: 9900 },
            { name: 'Iced Caramel Macchiato', price: 9700 },
            { name: 'Cold Brew Coffee', price: 8500 },
            { name: 'Frappuccino (Caramel)', price: 10000 },
            { name: 'Frappuccino (Mocha)', price: 10000 },
            { name: 'Frappuccino (Vanilla)', price: 10000 },
            { name: 'Milkshake (Vanilla)', price: 9000 },
            { name: 'Milkshake (Chocolate)', price: 9000 },
            { name: 'Milkshake (Strawberry)', price: 9000 },
            { name: 'Fresh Orange Juice', price: 7500 },
            { name: 'Fresh Lemon Juice', price: 7500 },
            { name: 'Fresh Mango Juice', price: 8000 },
            { name: 'Fresh Strawberry Juice', price: 8000 },
            { name: 'Watermelon Mint Juice', price: 8500 },
            { name: 'Mixed Berry Juice', price: 8700 }
        ],

        // القسم الثالث: Signature
        [ 
            { name: 'Spanish Latte', price: 9500 },
            { name: 'Caramel Macchiato', price: 9700 },
            { name: 'Matcha Latte', price: 9900 },
            { name: 'Pistachio Latte', price: 10500 },
            { name: 'Saffron Latte', price: 10700 },
            { name: 'Coconut Coffee', price: 9800 },
            { name: 'Hazelnut Latte', price: 9700 },
            { name: 'Lavender Coffee', price: 10000 },
            { name: 'Spanish Mocha', price: 10200 },
            { name: 'Cold Brew with Vanilla', price: 9400 },
            { name: 'Date Coffee', price: 10000 },
            { name: 'Rose Latte', price: 10200 },
            { name: 'Honey Cinnamon Latte', price: 10300 },
            { name: 'Vanilla Bean Latte', price: 9900 },
            { name: 'Mocha Mint', price: 10000 },
            { name: 'Peanut Butter Latte', price: 10500 },
            { name: 'Salted Caramel Latte', price: 10300 },
            { name: 'White Chocolate Mocha', price: 10500 },
            { name: 'Maple Latte', price: 10200 }
        ],

        // القسم الرابع: Desserts & Pastries
        [
            { name: 'Cheesecake', price: 9500 },
            { name: 'Brownies', price: 7800 },
            { name: 'Tiramisu', price: 9000 },
            { name: 'Muffins', price: 7000 },
            { name: 'Cookies', price: 5600 },
            { name: 'Croissant (Plain)', price: 6400 },
            { name: 'Croissant (Chocolate)', price: 7000 },
            { name: 'Croissant (Cheese)', price: 7000 },
            { name: 'Waffles with Toppings', price: 9800 },
            { name: 'Pancakes', price: 9500 },
            { name: 'Éclairs', price: 8400 },
            { name: 'Fruit Tart', price: 9200 },
            { name: 'Chocolate Soufflé', price: 10000 },
            { name: 'Donuts (Various Flavors)', price: 7600 },
            { name: 'French Macarons', price: 10400 },
            { name: 'Baklava', price: 8000 },
            { name: 'Carrot Cake', price: 9000 },
            { name: 'Red Velvet Cake', price: 9400 },
            { name: 'Apple Pie', price: 8800 }
        ],

        // القسم الخامس: Light Meals
        [ 
            { name: 'Avocado Toast', price: 9500 },
            { name: 'Grilled Chicken Sandwich', price: 11000 },
            { name: 'Tuna Sandwich', price: 10400 },
            { name: 'Egg & Avocado Sandwich', price: 10000 },
            { name: 'Mini Pizza', price: 9800 },
            { name: 'Chicken & Cheese Roll', price: 10200 },
            { name: 'Caesar Salad', price: 9400 },
            { name: 'Greek Salad', price: 9500 },
            { name: 'Quinoa Salad', price: 10000 },
            { name: 'Fresh Fruit Salad', price: 9000 },
            { name: 'Club Sandwich', price: 11600 },
            { name: 'Smoked Salmon Bagel', price: 12400 },
            { name: 'Vegetable Wrap', price: 9800 },
            { name: 'Chicken Wrap', price: 10400 },
            { name: 'Falafel Wrap', price: 9000 },
            { name: 'Grilled Cheese Sandwich', price: 8800 },
            { name: 'Turkey & Cheese Sandwich', price: 10600 },
            { name: 'Caprese Sandwich', price: 10000 },
            { name: 'Hummus & Veggie Plate', price: 9200 }
        ],

        // القسم السادس: Snacks & Sides
        [
            { name: 'French Fries (Classic)', price: 6000 },
            { name: 'French Fries (Spicy)', price: 6400 },
            { name: 'Potato Wedges', price: 7000 },
            { name: 'Mozzarella Sticks', price: 8000 },
            { name: 'Popcorn Chicken', price: 8400 },
            { name: 'Nachos with Cheese Sauce', price: 9000 },
            { name: 'Garlic Bread', price: 7600 },
            { name: 'Onion Rings', price: 7800 },
            { name: 'Cheese Quesadilla', price: 9200 },
            { name: 'Mini Spring Rolls', price: 8000 },
            { name: 'Chicken Nuggets', price: 8400 },
            { name: 'Stuffed Grape Leaves', price: 9000 },
            { name: 'Falafel Balls', price: 7000 },
            { name: 'Mini Meat Pies', price: 9600 },
            { name: 'Cheese Sambousek', price: 9000 },
            { name: 'Veggie Sticks with Dip', price: 7600 },
            { name: 'Mini Chicken Skewers', price: 10000 },
            { name: 'Sweet Potato Fries', price: 7800 },
            { name: 'Mini Cheese Puffs', price: 8400 }
        ]
    ];
    const de = [
        [
            'Smooth espresso with steamed milk—classic comfort',
            'Bold and intense—pure espresso shot',
            'Rich espresso diluted with hot water—simple and strong',
            'Foamy and balanced—espresso with steamed milk and foam',
            'Chocolate meets coffee—sweet and bold',
            'Velvety texture with a creamy finish',
            'Espresso with a touch of milk—sharp and flavorful',
            'Equal parts espresso and milk—smooth and strong',
            'Traditional brew with deep flavor',
            'Fragrant Arabic coffee with a hint of cardamom',
            'French-style coffee with a rich aroma',
            'Creamy cocoa blend—warm and indulgent',
            'Classic black tea—light and refreshing',
            'Earthy and clean—green tea infusion',
            'Soothing blend of herbs—caffeine-free comfort',
            'Spiced milk tea with bold flavor',
            'Sweet and spicy Indian-style tea',
            'Steamed milk with chai spices—smooth and cozy',
            'Green tea powder blended with milk—vibrant and creamy'
        ],
        // iced
        [
            'Chilled espresso with water—refreshing and bold',
            'Cold milk over espresso—smooth and energizing',
            'Iced chocolate and coffee—sweet and cool',
            'Sweetened milk with espresso—Spanish-style refreshment',
            'Green tea powder blended cold—vibrant and creamy',
            'Iced espresso with caramel drizzle—sweet and layered',
            'Slow-steeped coffee—smooth and low-acid',
            'Blended caramel coffee—frosty and indulgent',
            'Blended mocha coffee—rich and chocolatey',
            'Blended vanilla coffee—creamy and classic',
            'Vanilla ice cream blend—cool and comforting',
            'Chocolate ice cream blend—sweet and rich',
            'Strawberry ice cream blend—fruity and creamy',
            'Fresh-squeezed orange—bright and tangy',
            'Fresh lemon juice—zesty and refreshing',
            'Ripe mango blend—tropical and smooth',
            'Fresh strawberry juice—sweet and vibrant',
            'Watermelon with mint—cool and crisp',
            'Mixed berries blend—fruity and bold'
        ],
        // signture
        [
            'Sweetened milk with espresso—Spanish-style richness',
            'Velvety espresso with caramel—smooth and indulgent',
            'Green tea powder with milk—creamy and vibrant',
            'Nutty and rich—pistachio blended with espresso',
            'Golden saffron with milk—luxurious and aromatic',
            'Tropical twist—coconut meets bold coffee',
            'Toasted hazelnut flavor in a creamy latte',
            'Floral and smooth—lavender-infused coffee',
            'Mocha with Spanish flair—sweet and bold',
            'Cold brew with vanilla—light and fragrant',
            'Date-sweetened coffee—natural and earthy',
            'Rose-scented latte—delicate and romantic',
            'Honey and cinnamon—warm and comforting',
            'Vanilla bean blend—classic and creamy',
            'Minty mocha—cool and chocolatey',
            'Peanut butter latte—nutty and bold',
            'Salted caramel swirl—sweet with a kick',
            'White chocolate and espresso—smooth and sweet',
            'Maple-infused latte—cozy and rich'
        ],
        // dessert
        [
            'Creamy and rich—classic cheesecake slice',
            'Fudgy chocolate square—dense and indulgent',
            'Coffee-soaked layers with cream—Italian delight',
            'Soft and fluffy—perfect with coffee',
            'Crispy edges, chewy center—classic cookie',
            'Buttery and flaky—French-style plain croissant',
            'Chocolate-filled croissant—sweet and warm',
            'Savory cheese croissant—golden and melty',
            'Golden waffle with toppings—crunchy and sweet',
            'Stacked pancakes—soft and syrupy',
            'Light pastry filled with cream—elegant and smooth',
            'Fresh fruit on creamy tart—colorful and crisp',
            'Warm chocolate center—rich and molten',
            'Soft donuts with glaze—fun and flavorful',
            'Delicate almond meringue shells—colorful and chewy',
            'Layered pastry with nuts and syrup—Middle Eastern classic',
            'Spiced cake with creamy frosting—comfort in a slice',
            'Red cocoa cake with cream cheese—bold and velvety',
            'Cinnamon apple filling in flaky crust—homestyle treat'
        ],
        // light maels
        [
            'Toasted bread topped with creamy avocado—fresh and filling',
            'Grilled chicken with crisp veggies—hearty and satisfying',
            'Savory tuna blend with lettuce—classic and light',
            'Eggs and avocado on soft bread—nutritious and smooth',
            'Mini pizza with melted cheese—bite-sized comfort',
            'Chicken and cheese rolled in pastry—warm and savory',
            'Romaine lettuce with parmesan and dressing—crisp and creamy',
            'Tomatoes, olives, and feta—Mediterranean freshness',
            'Protein-packed quinoa with veggies—clean and energizing',
            'Seasonal fruits in a chilled bowl—sweet and refreshing',
            'Triple-layer sandwich with meats and sauces—bold and filling',
            'Soft bagel with smoked salmon—elegant and rich',
            'Grilled veggies wrapped in tortilla—light and colorful',
            'Chicken strips in a wrap—savory and portable',
            'Falafel with tahini in a wrap—Middle Eastern classic',
            'Melted cheese on toasted bread—simple and comforting',
            'Turkey and cheese stacked—savory and smooth',
            'Fresh mozzarella, tomato, and basil—Italian-style sandwich',
            'Hummus with crisp veggies—wholesome and balanced'
        ],
        // snacks
        [
            'Golden fries with a light crunch—classic comfort',
            'Spicy twist on classic fries—bold and crispy',
            'Thick-cut wedges—crispy outside, fluffy inside',
            'Breaded mozzarella sticks—melty and satisfying',
            'Bite-sized chicken pieces—crispy and juicy',
            'Crunchy nachos with creamy cheese sauce',
            'Toasted bread with garlic butter—simple and rich',
            'Crispy onion rings—sweet and savory',
            'Grilled tortilla with melted cheese—warm and gooey',
            'Mini veggie rolls—crispy and flavorful',
            'Tender chicken bites—golden and fun',
            'Stuffed grape leaves—herby and tangy',
            'Crispy falafel balls—spiced and hearty',
            'Mini meat pies—savory and golden',
            'Cheese-filled pastries—warm and melty',
            'Fresh veggie sticks with creamy dip',
            'Grilled chicken skewers—bite-sized and smoky',
            'Sweet potato fries—crispy and naturally sweet',
            'Mini puffs with melted cheese—light and cheesy'
        ]
    ];
    const menu = ["hot","iced","signature","dessert","light meals","snacks"];
    function products_set(p_file , p_filed , p_img ) {
        const product_filed = document.querySelectorAll('.product-filed');
        const fav_section = document.getElementById('fav-section');
        for (let i = 0; i < p_img; i++) {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let card_content = document.createElement('div');
            let card_footer = document.createElement('span');
            let title = document.createElement('h1');

            let price = document.createElement('p');
            let button = document.createElement('button');
            let icon = document.createElement('i');
            card.className = 'card relative h-11/12 flex flex-col justify-end items-center overflow-hidden hover:scale-[1.05] rounded-2xl backdrop-blur-xs bg-[linear-gradient(180deg,#ffffff0c,#ffffff77)]';
            image.className ='absolute h-[45%] top-[15%] md:top-[2%] drop-shadow-lg font-prg font-semibold text-mywhite';
            card_content.className = 'w-full h-3/5 px-4 pt-8 flex flex-col justify-center items-center gap-4 font-prg text-center text-myblack text-[clamp(1.25rem,3.5vw,2rem)] rounded-3xl bg-mywhite shadow-2xl';
            title.className ='font-semibold';

            card_footer.className = 'w-3/4 flex justify-around items-center border-t-2 py-4';
            price.className = 'font-semibold text-[clamp(0.875rem,2vw,1rem)]';
            button.className ='btn cursor-pointer hover:scale-[1.1]';
            icon.className = 'fa-regular fa-heart';
            
            image.src = `../css/sourecs/images/products-site/the products/${p_file}/${i}.png`
            image.alt ="we dont't have image yet..";
            image.setAttribute('loading', 'lazy');

            title.textContent = prod[p_filed][i].name;
            price.textContent = prod[p_filed][i].price+' SYP';

            button.appendChild(icon);
            card_footer.appendChild(button);
            card_footer.appendChild(price);

            card_content.appendChild(title);

            card_content.appendChild(card_footer);

            card.appendChild(image);
            card.appendChild(card_content);
            product_filed[p_filed].appendChild(card);
            let fav_card_copy = null;
            button.onclick = function () {
                icon.classList.toggle('fa-solid');
                icon.classList.toggle('fa-regular');
                icon.classList.toggle('text-red-500');

                if (fav_card_copy) {
                fav_card_copy.remove();
                fav_card_copy = null;
            } else {
                // إذا ما فيه نسخة → نعمل نسخة ونضيفها
                fav_card_copy = card.cloneNode(true);
                fav_card_copy.classList.add('min-h-[300px]');
                fav_section.appendChild(fav_card_copy);
                    }
                }
            }
    };
    for (let i = 0; i < menu.length; i++) {
        products_set(menu[i],i, prod[i].length);
    }
    // end the products