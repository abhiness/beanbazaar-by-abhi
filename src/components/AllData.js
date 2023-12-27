import Img1 from "../img/products/1.jpg";
import Img2 from "../img/products/2.jpg";
import Img3 from "../img/products/3.png";
import Img4 from "../img/products/4.jpg";
import Img5 from "../img/products/5.jpg";
import Img6 from "../img/products/6.jpg";
import Img7 from "../img/products/7.jpg";
import Img8 from "../img/products/8.jpg";
import Img9 from "../img/products/9.jpg";
import Img10 from "../img/products/10.jpg";
import Img11 from "../img/products/11.jpg";
import Img12 from "../img/products/12.jpg";
import Img13 from "../img/products/13.jpg";
import Img14 from "../img/products/14.png";
import Img15 from "../img/products/15.jpg";
import Img16 from "../img/products/16.jpg";
import Img17 from "../img/products/17.jpg";
import Img18 from "../img/products/18.jpg";
import Img19 from "../img/products/19.jpg";
import Img20 from "../img/products/20.jpg";
import Img21 from "../img/products/21.jpg";
import OtherImgs1 from "../img/products/otherProducts/other1.jpg";
import OtherImgs2 from "../img/products/otherProducts/other2.jpg";
import Sweater1 from "../img/products/otherProducts/sweater1.jpg";
import Sweater2 from "../img/products/otherProducts/sweater2.jpg";
import FineMug1 from "../img/products/otherProducts/finemug1.jpg";
import FineMug2 from "../img/products/otherProducts/finemug2.jpg";
import Vanilla1 from "../img/products/otherProducts/vanilla1.jpg";
import Vanilla2 from "../img/products/otherProducts/vanilla2.jpg";
import Vintage1 from "../img/products/otherProducts/vintage1.jpg";
import Vintage2 from "../img/products/otherProducts/vintage2.jpg";
import SingServ1 from "../img/products/otherProducts/singserv1.jpg";
import SingServ2 from "../img/products/otherProducts/singserve2.jpg";
import Cerm1 from "../img/products/otherProducts/cerm1.jpg";
import Cerm2 from "../img/products/otherProducts/cerm2.jpg";
import Grinder1 from "../img/products/otherProducts/grinder1.jpg";
import Grinder2 from "../img/products/otherProducts/grinder2.jpg";
import ButFirst1 from "../img/products/otherProducts/ButFirst1.jpg";
import ButFirst2 from "../img/products/otherProducts/ButFirst2.jpg";
import PT1 from "../img/products/otherProducts/PT1.jpg";
import PT2 from "../img/products/otherProducts/PT2.jpg";
import Mood1 from "../img/products/otherProducts/mood1.jpg";
import Mood2 from "../img/products/otherProducts/mood2.jpg";
import Coding1 from "../img/products/otherProducts/coding1.jpg";
import Delgon1 from "../img/products/otherProducts/Delgon1.jpg";
import Delgon2 from "../img/products/otherProducts/Delgon2.jpg";
import Kawaii1 from "../img/products/otherProducts/kawaii1.png";
import Kawaii2 from "../img/products/otherProducts/kawaii2.png";
import Happy1 from "../img/products/otherProducts/happy1.jpg";
import Happy2 from "../img/products/otherProducts/happy2.jpg";
import Cam1 from "../img/products/otherProducts/lit1.avif";
import Cam2 from "../img/products/otherProducts/lit2.webp";
import Comfy1 from "../img/products/otherProducts/comfy1.jpg";
import Comfy2 from "../img/products/otherProducts/comfy1.jpg";

export const items = [
  {
    id: 1,
    category: "stickers",
    img: Img1,
    description: "'Books and Coffee' Sticker",
    price: 2.25,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:
      "Embrace the cozy and comforting vibes of a good read paired with your favorite brew. Our 'Books and Coffee' sticker captures the essence of literary adventures and caffeine-fueled moments. Stick it to your notebook, laptop, or travel mug, and let the world know you savor the perfect blend of literature and a warm cup of coffee—a pairing that's simply irresistible for the soul.",
    material: "Glossy",
    size: "3cm x 3.6cm",
  },
  {
    id: 2,
    category: "apparel",
    img: Img2,
    description: "Coffee, Coffee, Coffee, Coffee ",
    price: 44.99,
    otherImgs: [Sweater1, Sweater2],
    specs:
      " Embroidered Coffee Sweatshirt, Trendy Tonal Coffee Sweater, Coffee Lovers Gift, Fall Sweatshirts, Preppy Crewneck Sweater",
    material: "Handmade, Gildan, Full-Sleeved",
    size: "Select At Checkout",
  },
  {
    id: 3,
    category: "mugs",
    img: Img3,
    description: "Everything is fine mug",
    price: 7,
    otherImgs: [FineMug1, FineMug2],
    specs:
      "Introducing the 'I'm Fine, Everything is Fine' Mug – your go-to companion for those days when a touch of humor is the perfect remedy. Embrace the chaos with this whimsical mug, designed for those who appreciate a good laugh in the face of everyday chaos. Crafted with high-quality ceramic, it holds your favorite beverages with style, letting you declare, 'I'm fine, and everything is fine' in the most reassuring way possible. Elevate your sipping experience and bring a dash of levity to your daily routine with this delightful and relatable mug.",
    material: "Ceramic",
    size: "11 oz",
  },
  {
    id: 4,
    category: "coffee",
    img: Img4,
    description: "Red Rooster - Ground",
    price: 15.75,
    otherImgs: [Vanilla1, Vanilla2],
    specs:
      "Earthy depth meets a juicy berry sweetness in a rich, chocolaty body - this blend is ready to be the wind beneath your wings.",
    roast: "Medium Roast",
    profile: "Sweet and Smooth",
    weight: "340g",
  },
  {
    id: 5,
    category: "mugs",
    img: Img5,
    description: "Vintage Style Mug",
    price: 12.3,
    otherImgs: [Vintage1, Vintage2],
    specs:
      "Embrace the charm of yesteryears with our Vintage Cottage Core Mug. This enchanting piece captures the essence of a bygone era, featuring a delicate floral pattern that transports you to idyllic countryside cottages. Crafted with care, this mug combines nostalgia with functionality, providing a cozy vessel for your favorite warm beverages. Sip in style and add a touch of vintage allure to your daily rituals with this delightful Cottage Core Mug.",
    profile: "Ceramic",
    size: "11oz",
  },
  {
    id: 6,
    category: "equipment",
    img: Img6,
    description: "Cuisinart Single Serve Coffee Maker",
    price: 49,
    otherImgs: [SingServ1, SingServ2],
    specs:
      "The Cuisinart Single Serve Coffee Maker delivers the perfect cup of coffee with ease. Featuring one-touch operation and a compact design, it brews rich and flavorful coffee quickly, catering to your individual taste preferences for a delightful morning ritual.",
  },
  {
    id: 7,
    category: "mugs",
    img: Img7,
    description: "Blue Ceramic Mug",
    price: 17.88,
    otherImgs: [Cerm1, Cerm2],
    specs:
      "Indulge in the simple joys of your morning routine with our Blue Ceramic Mug. Crafted for comfort and style, this elegant mug features a soothing blue hue, offering a perfect blend of aesthetics and functionality for your daily coffee or tea ritual.",
    material: "Ceramic",
    size: "12oz",
  },
  {
    id: 8,
    category: "coffee",
    img: Img8,
    description: "Huckleberry - Flores Belas",
    price: 15.75,
    otherImgs: [Img8, Img8],
    specs:
      "This gorgeously balanced cup is a Trade exclusive! Rich chocolate flavors pair beautifully with just a splash of orange acidity, and a deep caramel sweetness that lingers past the last drop.",
    taste: "Sweet with Chocolate Profile",
    roast: "Medium",
  },
  {
    id: 9,
    category: "coffee",
    img: Img9,
    description: "PT's Flatlander Blend",
    price: 16.1,
    otherImgs: [PT1, PT2],
    specs:
      "Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here's is to one less complication.",
    roast: "Light Roast",
    taste: "Comforting & Rich",
  },
  {
    id: 10,
    category: "stickers",
    img: Img10,
    description: "Good Mood Sticker",
    price: 1,
    otherImgs: [Mood1, Mood2],
    specs:
      "Adorn your day with our whimsical 'Today's Good Mood is Sponsored by Coffee' sticker! Crafted for coffee enthusiasts and champions of positive vibes, this sticker is a delightful reminder that a cup of your favorite brew can turn any day into a good day. Stick it on your laptop, water bottle, or journal, and let the coffee magic unfold. Embrace the caffeinated joy and spread the smiles with this charming accessory, because every good mood deserves a coffee sponsor!",
  },
  {
    id: 11,
    category: "mugs",
    img: Img11,
    description: "Morning Start-Up Mug",
    price: 16.0,
    otherImgs: [Coding1, Coding1],
    specs:
      "The Here Comes The Sun pendant designed by Bertrand Balas is a quality mugs with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The mugs fits perfectly above both dining room table, kitchen counter, and as living room lighting . ",
    material: "Ceramic",
    size: "11oz",
  },
  {
    id: 12,
    category: "apparel",
    img: Img12,
    description: "But First Coffee Sweater",
    price: 16.55,
    otherImgs: [ButFirst1, ButFirst2],
    specs:
      "Wrap yourself in comfort with our 'But First Coffee Sweater' Embrace cozy moments as you indulge in your favorite brew. Crafted for coffee lovers, this sweater combines warmth with style, making it a must-have for chilly mornings and relaxed evenings. ",
    profile: "Cotton",
    weight: "0.2kg",
    size: "Available At Checkout",
  },

  {
    id: 13,
    category: "equipment",
    img: Img13,
    description: "Delgoni Espresso Maker",
    price: 499.0,
    otherImgs: [Delgon1, Delgon2],
    specs:
      "Introducing the Delgoni Espresso Maker – a sleek and efficient addition to your kitchen. Craft rich, aromatic espresso effortlessly with this stylish appliance, designed for coffee enthusiasts seeking a perfect brew.",
  },
  {
    id: 14,
    category: "stickers",
    img: Img14,
    description: "Mug Love Sticker",
    price: 2,
    otherImgs: [Kawaii1, Kawaii2],
    specs:
      "Spread joy with our cheerful Mug Love sticker! This delightful design features a smiling mug adorned with a vibrant red heart, making it the perfect accessory to add warmth and positivity to your belongings. Stick it on your laptop, water bottle, or anywhere you need a touch of happiness. Embrace the simple yet heartwarming charm of our Mug Love sticker, because sometimes all you need is a friendly mug with a loving grin to brighten your day.",
    material: "Matte Finish",
    size: "2cm x 2cm",
  },
  {
    id: 15,
    category: "stickers",
    img: Img15,
    description: "Happy Mug Sticker",
    price: 3.99,
    otherImgs: [Happy1, Happy2],
    specs:
      "Introducing our delightful Cappuccino Mug Smiley Sticker! Transform your daily coffee ritual into a cheerful experience with this charming sticker. The playful smile on the cappuccino mug adds a touch of joy to every sip, making your coffee moments extra special. Perfect for spreading positive vibes and sharing smiles with your favorite caffeinated companion.",
    material: "Matte Finish",
    size: "2cm x 2cm",
  },
  {
    id: 16,
    category: "literature",
    img: Img16,
    description: "How To Make The Best Coffee At Home",
    price: 12.0,
    otherImgs: [Cam1, Cam2],
    specs:
      "Coffee Expert James Hoffman is here to show you how you can make the best coffee, that suits your pallette and taste, at home. With repeateable recipes to reply on wheter you are just starting on your cofee journey or looking to increase your existing knowledge.",
    author: "James Hoffman",
  },
  {
    id: 17,
    category: "apparel",
    img: Img17,
    description: "Little Bean - Baby Onesie",
    price: 12.25,
    otherImgs: [Img17, Img17],
    specs:
      "Little Bean's Baby Onesie is a cozy and adorable essential for your little one. Crafted with soft, breathable fabric, it ensures comfort and style. Perfect for playtime or naptime, this onesie adds a touch of sweetness to your baby's wardrobe.",
    size: "One Size",
  },
  {
    id: 18,
    category: "coffee",
    img: Img18,
    description: "Methodical - Brazil Signature",
    price: 11.45,
    otherImgs: [Img18, Img18],
    specs:
      "At once light and bright, yet smooth and sweet as milk chocolate. We're picking up a juicy orange acidity and a dried cranberry sweetness..",
    roast: "Medium-Light Roast",
    taste: "Grounded & Earthy",
  },

  {
    id: 19,
    category: "stickers",
    img: Img19,
    description: "Comfy Ghost Barista Sticker",
    price: 1.99,
    otherImgs: [Comfy1, Comfy2],
    specs:
      "Introducing our delightful Ghost Barista Sticker! This whimsical design features a friendly ghost confidently holding a steaming coffee mug, ready to add a touch of charm to your belongings. Perfect for coffee enthusiasts and ghost aficionados alike, this sticker brings a playful spirit to your day. Stick it on your laptop, notebook, or favorite mug, and let this spectral barista be your companion in every coffee-filled adventure!",
    material: "Matte Finish",
    size: "2cm x 2cm",
  },
  {
    id: 20,
    category: "equipment",
    img: Img20,
    description: "HB Coffee Grinder",
    price: 28,
    otherImgs: [Grinder1, Grinder2],
    specs:
      "Experience the perfect grind with the Hamilton Beach Fresh Grind Electric Coffee Grinder. Unleash the rich flavors of your favorite coffee beans, spices, and more with precision and ease. Equipped with stainless steel blades, this grinder ensures consistent results, while the removable chamber makes cleaning a breeze. Designed to cater to coffee enthusiasts, it has the capacity to make up to 12 cups, allowing you to savor the freshness in every brew. Elevate your coffee experience with the convenience and efficiency of Hamilton Beach Fresh Grind – where flavor meets innovation.",
  },
  {
    id: 21,
    category: "literature",
    img: Img21,
    description: "World Atlas of Coffee",
    price: 28.99,
    otherImgs: [Img21, Img21],
    specs:
      " Educational, thought-provoking, and substantial. I've already recommended this book to (our) readers countless times. - Barista Magazine",
    author: "James Hoffman",
  },
];
