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
        "A luxurious blend of rich espresso and silky steamed milk, offering the kind of warmth that feels like wrapping yourself in a soft blanket on a crisp morning. Every sip delivers a perfect harmony of bold coffee depth and creamy smoothness, leaving a velvety finish that lingers pleasantly.",
        
        "A concentrated shot of pure espresso, bold and unapologetically intense. Its deep aroma and robust flavor awaken your senses instantly, delivering a surge of energy and a taste that stays with you long after the last drop.",
        
        "Full-bodied espresso gently diluted with hot water to create a classic Americano—simple in composition yet powerful in flavor. Each sip offers clarity, warmth, and a lingering richness that invites you to slow down and savor the moment.",
        
        "Perfectly balanced espresso topped with steamed milk and a delicate layer of foam. The creamy froth kisses your lips before the deep coffee flavor unfolds, creating a comforting experience that’s both smooth and satisfying.",
        
        "An irresistible meeting of decadent chocolate and bold espresso, where sweetness and strength dance together in perfect harmony. Every sip feels indulgent, like enjoying a fine dessert in liquid form.",
        
        "A velvety-smooth coffee experience with a creamy, lingering finish. The texture glides effortlessly across your palate, leaving behind a luxurious sensation that makes each sip feel like a treat.",
        
        "Strong espresso softened by just a touch of milk, preserving its sharp, vibrant character while adding a subtle layer of smoothness. A quick yet flavorful pick-me-up for those who love their coffee bold but balanced.",
        
        "Equal parts espresso and milk, creating a drink that’s as smooth as it is strong. The perfect middle ground for those who crave both the richness of coffee and the comfort of creaminess.",
        
        "A traditional brew that delivers deep, authentic flavor with every sip. It’s a timeless taste that evokes the warmth of familiar moments and the comfort of classic coffee craftsmanship.",
        
        "Fragrant Arabic coffee infused with a gentle hint of cardamom, transporting you to the heart of Middle Eastern hospitality. Each sip is a warm embrace, rich with tradition and generosity.",
        
        "French-style coffee with a rich, inviting aroma that fills the air before you even take a sip. Elegant and refined, it’s the perfect companion for a quiet morning or an afternoon of indulgence.",
        
        "A creamy cocoa blend that wraps you in the cozy warmth of winter. Rich, smooth, and indulgent, it’s the kind of drink that melts away stress and leaves you feeling comforted.",
        
        "Classic black tea with a light, refreshing taste that’s perfect any time of day. Its gentle aroma and clean finish make it a timeless choice for tea lovers.",
        
        "An earthy, pure green tea infusion that refreshes the senses and leaves you feeling revitalized. Crisp and clean, it’s a sip of nature in its simplest form.",
        
        "A soothing blend of herbs, naturally caffeine-free, offering pure comfort in every cup. Ideal for unwinding in the evening or finding a moment of calm during a busy day.",
        
        "Spiced milk tea with a bold, aromatic flavor that fills your mouth with warmth. Each sip is a journey through vibrant spice markets and cozy tea stalls.",
        
        "Sweet and spicy Indian-style tea, perfectly balancing rich flavors with a comforting sweetness. A drink that warms both body and soul.",
        
        "Steamed milk infused with chai spices, creating a smooth, cozy drink that feels like a gentle hug in a cup. Perfect for chilly evenings or moments of quiet reflection.",
        
        "Vibrant green tea powder blended with creamy milk, resulting in a drink that’s as visually stunning as it is delicious. Each sip offers a burst of energy and a smooth, indulgent texture."
        ],
        // iced
        [
        "Chilled espresso gently poured over cold water, creating a bold yet refreshing drink that awakens your senses. Crisp and invigorating, it’s the perfect choice for a hot day when you still crave that deep coffee kick.",
        
        "Smooth, cold milk cascading over a shot of rich espresso, blending into a creamy, energizing drink. Each sip delivers a gentle balance of cool refreshment and robust coffee flavor.",
        
        "A delightful fusion of iced chocolate and bold coffee, offering a sweet, cool escape. The richness of cocoa meets the depth of espresso for a treat that’s both indulgent and refreshing.",
        
        "Sweetened milk poured over espresso in true Spanish style, creating a chilled drink that’s smooth, creamy, and perfectly balanced between sweetness and coffee strength.",
        
        "Vibrant green tea powder whisked into cold milk, producing a creamy, refreshing drink with a lively color and a naturally uplifting taste. A cool twist on a classic matcha latte.",
        
        "Iced espresso drizzled with golden caramel, layering sweetness over bold coffee. Each sip reveals a new depth of flavor, from the rich espresso base to the silky caramel finish.",
        
        "Slow-steeped coffee brewed cold for hours, resulting in a smooth, low-acid drink with a naturally sweet profile. Perfect for those who love coffee’s flavor without the sharp bite.",
        
        "A frosty blend of caramel and coffee, thick and indulgent. Sweet, creamy, and ice-cold, it’s a dessert and a drink all in one.",
        
        "Rich mocha coffee blended with ice for a chocolate lover’s dream. The deep cocoa flavor pairs perfectly with bold espresso, creating a smooth, frosty indulgence.",
        
        "Classic vanilla coffee blended into a creamy, icy treat. Familiar yet luxurious, it’s the perfect balance of comfort and refreshment.",
        
        "Cool vanilla ice cream blended into a silky, frosty drink. Sweet, creamy, and comforting, it’s like sipping on a cloud of dessert.",
        
        "Chocolate ice cream transformed into a rich, icy blend. Sweet, decadent, and irresistibly smooth, it’s pure indulgence in a glass.",
        
        "Fresh strawberry ice cream blended into a fruity, creamy delight. Sweet and refreshing, it’s a playful treat for warm days.",
        
        "Fresh-squeezed orange juice bursting with bright, tangy flavor. Crisp, revitalizing, and packed with sunshine in every sip.",
        
        "Fresh lemon juice with a zesty, refreshing bite. Light, invigorating, and perfect for cooling down on a hot afternoon.",
        
        "Ripe mango blended into a smooth, tropical drink. Naturally sweet and creamy, it’s like a mini vacation in a glass.",
        
        "Fresh strawberry juice that’s sweet, vibrant, and full of natural flavor. A refreshing burst of summer in every sip.",
        
        "Juicy watermelon blended with a hint of fresh mint, creating a cool, crisp drink that’s as refreshing as a breeze on a hot day.",
        
        "A medley of mixed berries blended into a fruity, bold drink. Sweet, tangy, and bursting with flavor, it’s a colorful celebration in a cup."
        ],
        // signture
        [
        "Sweetened milk poured over rich espresso in true Spanish style, creating a drink that’s both creamy and bold. Each sip offers a luxurious sweetness balanced by the deep, satisfying flavor of freshly brewed coffee.",
        
        "Velvety espresso blended with golden caramel, delivering a smooth, indulgent experience. The caramel’s buttery sweetness wraps around the coffee’s richness, leaving a lingering, decadent finish.",
        
        "Finely ground green tea powder whisked into creamy milk, producing a vibrant, earthy drink with a silky texture. Refreshing yet comforting, it’s a perfect balance of natural energy and smooth indulgence.",
        
        "A nutty, rich fusion of pistachio and bold espresso, creating a unique flavor that’s both earthy and luxurious. Each sip is a warm embrace of roasted nuttiness and deep coffee notes.",
        
        "Golden saffron gently infused into warm milk, offering a luxurious aroma and a subtly floral, exotic taste. Every sip feels like a rare and precious treat.",
        
        "A tropical twist where creamy coconut meets the boldness of espresso. Smooth, slightly sweet, and refreshingly different, it’s a vacation in a cup.",
        
        "Toasted hazelnut flavor swirled into a creamy latte, delivering a warm, nutty aroma and a smooth, comforting taste that lingers pleasantly.",
        
        "Floral and smooth, this lavender-infused coffee offers a calming aroma and a gentle sweetness. A sophisticated choice for moments of quiet indulgence.",
        
        "A mocha with Spanish flair—rich chocolate and bold espresso sweetened to perfection. Each sip is a lively dance of sweetness and strength.",
        
        "Cold brew coffee infused with vanilla, creating a light, fragrant drink. Smooth and refreshing, with a delicate sweetness that enhances the coffee’s natural notes.",
        
        "Naturally sweetened with dates, this coffee offers an earthy richness and a gentle caramel-like flavor. A wholesome, satisfying choice for a natural energy boost.",
        
        "A rose-scented latte that’s delicate, romantic, and beautifully aromatic. The floral notes blend seamlessly with the creamy coffee base for a truly elegant experience.",
        
        "Honey and cinnamon come together in a warm, comforting latte. Sweet, spiced, and soothing, it’s like a cozy blanket in a cup.",
        
        "A classic vanilla bean blend that’s creamy, smooth, and timeless. The rich vanilla aroma pairs perfectly with the coffee’s depth for a familiar yet luxurious treat.",
        
        "A minty mocha that’s cool, chocolatey, and refreshing. The invigorating mint lifts the richness of the chocolate and coffee for a perfectly balanced indulgence.",
        
        "A peanut butter latte that’s nutty, bold, and irresistibly creamy. The roasted peanut flavor adds a unique twist to the coffee’s robust profile.",
        
        "A salted caramel swirl that’s sweet with a hint of savory. The contrast enhances the coffee’s richness, creating a flavor that’s both exciting and comforting.",
        
        "White chocolate and espresso blended into a smooth, sweet drink. Creamy and indulgent, it’s a dessert-like coffee experience.",
        
        "A maple-infused latte that’s cozy, rich, and naturally sweet. The warm maple flavor pairs beautifully with the coffee’s depth, making it perfect for crisp mornings."
        ],
        // dessert
        [
        "A creamy and rich classic cheesecake slice, with a smooth, velvety texture that melts in your mouth. Each bite offers a perfect balance of tangy cream cheese and a buttery, crumbly base.",
        
        "A dense and indulgent fudgy chocolate square, bursting with deep cocoa flavor. Moist, rich, and irresistibly decadent for true chocolate lovers.",
        
        "Layers of coffee-soaked sponge and luscious cream, creating an Italian delight that’s both light and luxurious. Every forkful is a perfect harmony of espresso and sweetness.",
        
        "Soft and fluffy cake that pairs perfectly with coffee or tea. Light in texture yet full of comforting flavor, it’s a timeless treat for any moment.",
        
        "A classic cookie with crispy edges and a chewy center, delivering the perfect contrast in every bite. Sweet, buttery, and utterly satisfying.",
        
        "A buttery, flaky French-style plain croissant with delicate layers that shatter gently as you bite. Light, airy, and irresistibly fresh.",
        
        "A warm, golden croissant filled with rich chocolate, offering a sweet, melty center wrapped in buttery pastry layers.",
        
        "A savory cheese croissant with a golden crust and a melty, flavorful filling. Buttery, rich, and perfect for a hearty snack.",
        
        "A golden waffle topped with your choice of sweet delights. Crispy on the outside, soft inside, and bursting with flavor in every bite.",
        
        "A stack of soft, fluffy pancakes drizzled with syrup. Sweet, comforting, and perfect for a cozy breakfast or dessert.",
        
        "A light, airy pastry filled with smooth cream, offering an elegant balance of texture and flavor. Delicate yet indulgent.",
        
        "A crisp tart shell filled with creamy custard and topped with fresh, colorful fruit. Refreshing, vibrant, and perfectly balanced.",
        
        "A dessert with a warm, molten chocolate center that flows with rich flavor. Soft on the outside, decadent on the inside.",
        
        "Soft, pillowy donuts coated with a sweet glaze. Fun, flavorful, and impossible to resist.",
        
        "Delicate almond meringue shells with a chewy center, available in a rainbow of colors. Light, sweet, and full of charm.",
        
        "A layered pastry filled with nuts and soaked in syrup, a Middle Eastern classic that’s rich, sweet, and full of tradition.",
        
        "A spiced cake topped with creamy frosting, offering warmth and comfort in every slice. Perfect for cozy afternoons.",
        
        "A bold and velvety red cocoa cake layered with tangy cream cheese frosting. Striking in color, unforgettable in taste.",
        
        "A flaky crust filled with cinnamon-spiced apples, baked to golden perfection. A homestyle treat that’s warm, sweet, and comforting."
        ],
        // light maels
        [
        "Toasted bread generously topped with creamy, ripe avocado, offering a fresh, buttery flavor and a satisfying texture. Light yet filling, it’s the perfect wholesome bite for any time of day.",
        
        "Juicy grilled chicken paired with crisp, colorful vegetables, creating a hearty and satisfying plate. Packed with flavor and freshness, it’s a balanced meal that fuels your day.",
        
        "A savory tuna blend layered with fresh lettuce, delivering a classic, light taste. Simple, clean, and full of protein for a refreshing bite.",
        
        "Soft bread topped with creamy avocado and perfectly cooked eggs, combining smooth textures with rich, nutritious flavor. A wholesome start to your morning or a light midday treat.",
        
        "Mini pizza topped with melted cheese and your favorite toppings, offering bite-sized comfort in every mouthful. Crispy, cheesy, and utterly satisfying.",
        
        "Golden pastry rolls filled with tender chicken and melted cheese, served warm for a savory, comforting snack that’s perfect on the go.",
        
        "Crisp romaine lettuce tossed with parmesan and creamy dressing, creating a refreshing Caesar salad with a satisfying crunch in every bite.",
        
        "A Mediterranean medley of juicy tomatoes, briny olives, and creamy feta cheese. Fresh, vibrant, and bursting with sunny flavors.",
        
        "Protein-packed quinoa mixed with fresh vegetables, offering a clean, energizing dish. Light yet nourishing, perfect for a healthy boost.",
        
        "A chilled bowl of seasonal fruits, naturally sweet and refreshing. Colorful, juicy, and perfect for cooling down on a warm day.",
        
        "A bold triple-layer sandwich stacked with savory meats, fresh vegetables, and flavorful sauces. Filling, satisfying, and full of texture.",
        
        "A soft, chewy bagel topped with rich smoked salmon, cream cheese, and fresh garnish. Elegant, flavorful, and perfect for a refined snack or light meal.",
        
        "Grilled vegetables wrapped in a soft tortilla, creating a light, colorful, and flavorful bite. A wholesome choice for a quick, satisfying meal.",
        
        "Tender chicken strips wrapped with fresh vegetables in a soft tortilla. Savory, portable, and perfect for eating on the move.",
        
        "Crispy falafel paired with creamy tahini sauce, wrapped in warm bread. A Middle Eastern classic that’s hearty, flavorful, and satisfying.",
        
        "Golden toasted bread topped with melted cheese, delivering simple comfort in every bite. Warm, gooey, and timeless.",
        
        "Savory turkey layered with smooth cheese, stacked between fresh bread slices. A classic combination that’s both hearty and comforting.",
        
        "Fresh mozzarella, juicy tomato slices, and fragrant basil layered in an Italian-style sandwich. Light, flavorful, and beautifully balanced.",
        
        "Creamy hummus served with crisp, fresh vegetables for dipping. Wholesome, balanced, and full of natural flavor."
        ],
        // snacks
        [
        "Golden fries with a light, satisfying crunch and a fluffy interior. A timeless comfort food that’s perfect on its own or paired with your favorite dip.",
        
        "Classic fries with a spicy twist—crispy, golden, and coated in bold seasoning that delivers a kick of heat with every bite.",
        
        "Thick-cut potato wedges, crispy on the outside and soft, fluffy on the inside. Hearty, flavorful, and perfect for sharing.",
        
        "Breaded mozzarella sticks fried to golden perfection, with a gooey, melty cheese center that stretches with every bite.",
        
        "Bite-sized chicken pieces that are crispy on the outside and juicy on the inside. Fun to eat and full of savory flavor.",
        
        "Crunchy nachos topped with creamy, melted cheese sauce. A perfect balance of crisp texture and rich, cheesy indulgence.",
        
        "Toasted bread brushed with garlic butter, offering a simple yet rich flavor. Warm, aromatic, and irresistibly comforting.",
        
        "Crispy onion rings with a sweet, tender center and a golden, savory coating. A perfect mix of crunch and flavor.",
        
        "A grilled tortilla filled with melted cheese, warm and gooey with every bite. Simple, satisfying, and full of comfort.",
        
        "Mini veggie rolls with a crispy shell and a flavorful vegetable filling. Light, colorful, and packed with taste.",
        
        "Tender chicken bites coated in a golden crust, offering a fun, flavorful snack that’s perfect for any time of day.",
        
        "Stuffed grape leaves with a fragrant, herby filling and a tangy finish. A refreshing and traditional bite full of character.",
        
        "Crispy falafel balls with a warm, spiced interior. Hearty, flavorful, and perfect for dipping in tahini sauce.",
        
        "Mini meat pies with a savory filling wrapped in a golden, flaky crust. Rich, satisfying, and full of homemade flavor.",
        
        "Cheese-filled pastries baked until warm and melty inside, with a golden, flaky exterior that’s impossible to resist.",
        
        "Fresh veggie sticks served with a creamy, flavorful dip. Light, refreshing, and perfect for a healthy snack.",
        
        "Grilled chicken skewers that are bite-sized, smoky, and full of juicy flavor. A satisfying snack or light meal option.",
        
        "Sweet potato fries that are crispy on the outside, tender inside, and naturally sweet. A wholesome twist on a classic favorite.",
        
        "Mini puffs with a light, airy texture and a melted cheese center. Cheesy, delicate, and perfect for snacking."
        ]
    ];
    const menu = ["hot","iced","signature","dessert","light meals","snacks"];
    function products_set(p_file , p_filed , p_img ) {
        const product_filed = document.querySelectorAll('.product-filed');
        const fav_section = document.getElementById('fav-section');
        const cart_section = document.getElementById('cart-section');
        for (let i = 0; i < p_img; i++) {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let card_content = document.createElement('div');
            let card_footer = document.createElement('span');
            let title = document.createElement('h1');

            let card_footer_btns = document.createElement('span');
            let price = document.createElement('p');
            let fav_btn = document.createElement('button');
            let buy_btn = document.createElement('button');
            let cart_btn = document.createElement('button');
            let icon = document.createElement('i');
            let icon_three = document.createElement('i');

            card.className = 'card relative h-11/12 flex flex-col justify-end items-center overflow-hidden hover:scale-[1.05] rounded-2xl backdrop-blur-xs bg-[linear-gradient(180deg,#ffffff0c,#ffffff77)]';
            image.className ='absolute h-[45%] top-[15%] md:top-[2%] drop-shadow-lg rounded-3xl text-myblack border-2';
            card_content.className = 'w-full h-3/5 px-4 pt-8 flex flex-col justify-center items-center gap-4 font-prg text-center text-myblack text-[clamp(1.25rem,3.5vw,2rem)] rounded-3xl bg-mywhite shadow-2xl';
            title.className ='font-semibold';
            card_footer_btns.className = 'absolute top-0 right-0 flex flex-col justify-center items-center gap-2 p-4  text-mywhite'

            card_footer.className = 'w-3/4 flex flex-col items-center gap-2 border-t-2 py-4';
            price.className = 'font-semibold text-[clamp(0.875rem,2vw,1rem)]';
            fav_btn.className ='cursor-pointer hover:scale-[1.1]';
            buy_btn.className =' cursor-pointer md:w-3/4 w-11/12 flex justify-center items-center p-1 rounded-full font-prg font-medium text-[clamp(1rem,2.5vw,1.25rem)] text-center text-myblack border-2 hover:scale-[1.05]';
            cart_btn.className =' cursor-pointer hover:scale-[1.1]';
            icon.className = 'fa-regular fa-heart hover:text-red-500';
            icon_three.className = 'fas fa-shopping-cart hover:text-amber-500';
            
            image.src = `../css/sourecs/images/products-site/the products/${p_file}/${i}.jpg`
            image.alt ="we dont't have image yet..";
            image.setAttribute('loading', 'lazy');

            title.textContent = prod[p_filed][i].name;
            price.textContent = prod[p_filed][i].price+' SYP';
            buy_btn.textContent = 'buy it now'

            fav_btn.appendChild(icon);
            cart_btn.appendChild(icon_three);
            card_footer_btns.appendChild(fav_btn);
            card_footer_btns.appendChild(cart_btn);
            card_footer.appendChild(price);
            card_footer.appendChild(buy_btn);
            

            card_content.appendChild(title);

            card_content.appendChild(card_footer);
            card_content.appendChild(card_footer_btns);

            card.appendChild(image);
            card.appendChild(card_content);
            product_filed[p_filed].appendChild(card);
            let fav_card_copy = null;
            fav_btn.onclick = function () {
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
            const buy_title = document.getElementById('buy-title');
            const buy_desc = document.getElementById('buy-desc');
            const buy_price = document.getElementById('buy-price');
            const buy_img = document.getElementsByClassName('buy-img');
            buy_btn.onclick = function () {
                buy_title.textContent = prod[p_filed][i].name;
                buy_desc.textContent = de[p_filed][i];
                buy_price.textContent = prod[p_filed][i].price+' SYP';
                buy_img[0].src = `../css/sourecs/images/products-site/the products/${p_file}/${i}.jpg`
                buy_img[1].src = `../css/sourecs/images/products-site/the products/${p_file}/${i}.jpg`
                openModal('buy-modal');
            }
            let cart_card_copy = null;
            cart_btn.onclick = function () {
                icon_three.classList.toggle('text-amber-500');

                if (cart_card_copy) {
                cart_card_copy.remove();
                cart_card_copy = null;
            } else {
                // إذا ما فيه نسخة → نعمل نسخة ونضيفها
                cart_card_copy = card.cloneNode(true);
                cart_card_copy.classList.add('min-h-[300px]');
                cart_section.appendChild(cart_card_copy);
                    }
                }
        }
    };
    for (let i = 0; i < menu.length; i++) {
        products_set(menu[i],i, prod[i].length);
    }
    // end the products