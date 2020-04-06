/* eslint max-len: ["error", { "ignoreStrings": true }] */

'use strict';

const shopContainer = document.getElementById('shopContainer1');
const shopPrev = document.getElementById('shopPrev');
const shopNext = document.getElementById('shopNext');
const shopAll = document.getElementById('shopAll');
const shopArrows = document.getElementsByClassName('arrows')[0];
const shopTypes = document.getElementsByName('type');

let shopTypeChecked = 1;

const shopItems = [
  {
    id: 1,
    title: 'Hydrophilic oil',
    image: './images/shop/1.png',
    price: 160,
    weight: 70,
    text: [
      'It seems that almost every skincare brand offer a hydrophilic oil. So you are probably wondering how this tool works, and who should use it. Hydrophilic oils or cleansing oils especially those that are easily washed off, can become a great addition to your daily skincare routine. And it does not matter whether this product is used by itself or as part of a double-cleansing.',
      'Hydrophilic oils are another option for removing makeup, skin impurities, and excess sebum. But they work differently if compared with conventional cleaning agents, which are produced in the form of creams, gels or foams.',
    ],
    type: 'body',
  },
  {
    id: 2,
    title: 'Face cream',
    image: './images/shop/2.png',
    price: 210,
    weight: 50,
    text: [
      'This daily cream softens and soothes skin without clogging pores for a healthier, plumper-looking complexion. The oil-free formulation includes a blend of moisturizing ceramides and squalene to help hydrate and smooth skin’s appearance.',
      'The formula is also infused with the FAB Antioxidant Booster, a powerful botanical blend of white tea, licorice root, and feverfew extracts, to help combat environmental aggressors. The gentle moisturizer helps keep skin feeling comfortably supple and protected.',
    ],
    type: 'face',
  },
  {
    id: 3,
    title: 'Ubtan',
    image: './images/shop/3.png',
    price: 160,
    weight: 50,
    text: [
      'Ourganic ubtan is based upon traditional concept & recipe of ubtan for exfoliation & removal of dirt & other harmful deposits like environmental pollutants from skin. It helps maintainplexion & glow free from dryness & roughness of skin.',
    ],
    type: 'hair',
  },
  {
    id: 4,
    title: 'Hydration cream',
    image: './images/shop/2.png',
    price: 150,
    weight: 30,
    text: [
      'This anti-aging moisturizer hydrates skin for all-day moisture that helps reduce the appearance of fine lines and wrinkles',
      'Formulated with an Amino-Peptide Complex, it regenerates skin’s youthful appearance',
      'Exfoliates to aid surface cell turnover and regenerates surface skin cells',
    ],
    type: 'body',
  },
  {
    id: 5,
    title: 'Balsamic oil',
    image: './images/shop/1.png',
    price: 150,
    weight: 80,
    text: [
      'Contains Italian modena 25 years ferment balsamic vinegar extract 30% and olive oil',
      'Oil peel off type mask, balsamic oil makes lively skin with moisture and removes dead skin cells softly at the same time.',
      'Soft lotion type mask.',
    ],
    type: 'body',
  },
  {
    id: 6,
    title: 'Olive oil',
    image: './images/shop/1.png',
    price: 180,
    weight: 90,
    text: [
      'In Old Greek, olive oil, in particular the extra virgin olive oil, was used as a beauty care product for the skin.',
      'The fats of olive oil, specifically, blend perfectly with the skin’s sebum, repair the hydrolipidic mantle.',
      'The antioxidant substances present in the olive oil fight free radicals and slow down the aging of the skin.',
    ],
    type: 'body',
  },
  {
    id: 7,
    title: 'Night cream',
    image: './images/shop/2.png',
    price: 170,
    weight: 60,
    text: [
      'Fragrance-Free Night Cream Formula is Specifically Designed to Provide Intense Hydration and Regenerate Skin Surface Cells While You Sleep',
      'Moisture-Binding Formula Plumps Surface Cells Throughout the Night. Fragrance-Free, Non-Greasy, and Quick-Absorbing',
    ],
    type: 'face',
  },
  {
    id: 8,
    title: 'Brightening eye cream',
    image: './images/shop/2.png',
    price: 200,
    weight: 60,
    text: [
      'Eye cream instantly reduces the appearance of dark circles & hydrates to reduce fine lines over time.',
      'Smooth cream made for all skin types absorbs instantly to brighten the look of dark circles.',
    ],
    type: 'face',
  },
  {
    id: 9,
    title: 'Almond Shampoo with Lavender Oil',
    image: './images/shop/2.png',
    price: 300,
    weight: 75,
    text: [
      'Ingredients: cocosulfate, aloe hydrolate, sweet almond oil, wheat proteins, chamomile grass, lavender essential oil.',
      'Application: foam the shampoo in your hands and apply foam on the hair or draw a block over wet hair, foam, massage, rinse, apply balm or conditioner.',
    ],
    type: 'hair',
  },
  {
    id: 10,
    title: 'Bumble and Bumble Tonic Lotion',
    image: './images/shop/1.png',
    price: 250,
    weight: 50,
    text: [
      'For smooth grooming: a rich mix of vitamins, herbs and tea tree oil',
      'Tames tangles Refreshes your head Feeds your hair',
      'A blend of dry, coarse, porous or colored hair',
    ],
    type: 'hair',
  },
  {
    id: 11,
    title: 'Root Booster for Hair',
    image: './images/shop/2.png',
    price: 250,
    weight: 70,
    text: [
      'Tired of battling limp, flat, fine or lifeless hair? Boldify’s powerful root boosting spray instantly lifts up the roots adding all day hold and support. The perfect root volumizer & root lifter for fine hair if you want fast results.',
      'Not only will your roots lift, thicken and volumize, you can comb it through to the ends for added thickness and texture.',
    ],
    type: 'hair',
  },
  {
    id: 12,
    title: 'Efa oil',
    image: './images/shop/1.png',
    price: 370,
    weight: 60,
    text: [
      'Combines an ultra-pure, molecularly distilled triglyceride fish oil with cold-pressed borage oil to support joint, skin and eye health.',
    ],
    type: 'hair',
  },
  {
    id: 13,
    title: 'Black Poppy Jelly Candle',
    image: './images/shop/3.png',
    price: 120,
    weight: 50,
    text: [
      'Revive your sense and fill your room full of the wondrous scents of pretty poppies, jasmine and subtle pink pepper, as the candle flows with colour and uplifting Bergamot & Patchouli essential oils.',
      'Each of our Jelly candles are lovingly hand poured in small batches, using a blend of premium waxes and a generous helping of fine fragrance giving the candles an incredible scent throw .This candle will burn for 45-50 hours. Please carefully follow the directions for use.',
    ],
    type: 'candle',
  },
  {
    id: 14,
    title: 'Mystical Aura Jelly Candle',
    image: './images/shop/3.png',
    price: 120,
    weight: 50,
    text: [
      'A fantasy blend of fresh, green and citrusy scents first fill the room full , then slowly the warm undertones of amber, precious woods, and musk join the fragrance symphony in pleasuring the senses. With added pure Jasmine & Sandalwood essential oils help calm the mind.',
      'Each of our Jelly candles are lovingly hand poured in small batches, using a blend of premium waxes and a generous helping of fine fragrance giving the candles an incredible scent throw .This candle will burn for 45-50 hours. Please carefully follow the directions for use.',
    ],
    type: 'candle',
  },
  {
    id: 15,
    title: 'Florida Blossom Jelly Candle',
    image: './images/shop/3.png',
    price: 150,
    weight: 50,
    text: [
      'Head for the sunshine state, starting the journey with a juicy pineapple blended with a profusion of elegant jasmine. The magic continues with an ultra feminine trail of delicate sandalwood and addictive musk. With added Grapefruit & Lime essential oils to energise.',
      'Each of our Jelly candles are lovingly hand poured in small batches, using a blend of premium waxes and a generous helping of fine fragrance giving the candles an incredible scent throw .This candle will burn for 45-50 hours. Please carefully follow the directions for use.',
    ],
    type: 'candle',
  },
  {
    id: 16,
    title: 'Almond Milk & Honey Body Butter',
    image: './images/shop/2.png',
    price: 150,
    weight: 50,
    text: [
      'Soothing and restoring Body Butter',
      'Intensely moisturises for 48 hours',
      'Suitable for sensitive, dry skin',
    ],
    type: 'body',
  },
  {
    id: 17,
    title: 'Almond Milk & Honey Body Butter',
    image: './images/shop/2.png',
    price: 420,
    weight: 40,
    text: [
      'Soothing and restoring Body Butter',
      'Intensely moisturises for 48 hours',
      'Suitable for sensitive, dry skin',
    ],
    type: 'body',
  },
  {
    id: 18,
    title: 'Thai Makrut Lime Firming Oil',
    image: './images/shop/3.png',
    price: 420,
    weight: 40,
    text: [
      '100% vegan Firming massage oil',
      'Enriched with community trade Marula Oil from Namibia and zingy Makrut Lime',
    ],
    type: 'body',
  },
  {
    id: 19,
    title: 'Vitamin E Hydrating Face Mist',
    image: './images/shop/2.png',
    price: 75,
    weight: 40,
    text: [
      'Suitable for all skin types',
      'Sets makeup for a lasting look',
      'Moisturizes and refreshes',
    ],
    type: 'face',
  },
  {
    id: 20,
    title: 'Coco Calming Face Mist',
    image: './images/shop/2.png',
    price: 210,
    weight: 40,
    text: [
      'Enriched with Community Trade organic aloe vera from Mexico',
      'Pairs perfectly with our Aloe Soothing Day Cream',
    ],
    type: 'face',
  },
  {
    id: 21,
    title: 'Tea Tree Oil',
    image: './images/shop/1.png',
    price: 480,
    weight: 30,
    text: [
      'Battle blemishes with our iconic Tea Tree Oil. We sustainably steam-distil our tea tree leaves within 12 hours of harvest, so we can bottle our purest, most potent oil. With its powerful, purifying properties, our Tea Tree Oil is great for quick application to help reduce blemishes.',
      'Enriched with Community Trade Tea Tree Oil from the foothills of Mount Kenya',
    ],
    type: 'face',
  },
  {
    id: 22,
    title: 'Fuji Green Tea',
    image: './images/shop/2.png',
    price: 500,
    weight: 40,
    text: [
      'For normal to oily hair and scalp',
      'Gently massage to remove impurities and reduce build-up on hair',
      'Enriched with Japanese green tea and Community Trade honey from Ethiopia',
    ],
    type: 'hair',
  },
  {
    id: 22,
    title: 'Scented Candle',
    image: './images/shop/3.png',
    price: 590,
    weight: 40,
    text: [
      'Light your way to a new beginning with this luxurious scented candle. Based on the renewing fragrance of cherry blossom and organic rice milk. The candle lasts for up to 50 hours.',
    ],
    type: 'candle',
  },
  {
    id: 22,
    title: 'Massage Candle',
    image: './images/shop/3.png',
    price: 600,
    weight: 40,
    text: [
      'The Ritual of Jing Massage Candle, a luxurious candle that contains essential nourishing and moisturising oils that help soothe the skin and enhance the quality of sleep. Perfect for when you are looking to create a relaxing moment and de-stress, either for you or a loved one.',
      'The relaxing fragrance of Lavender fuses effortlessly with the tranquil fragrance of Sacred Wood, bringing you a heightened fragrance experience that helps you to fall asleep faster and wake up more refreshed.',
    ],
    type: 'candle',
  },
  {
    id: 22,
    title: 'Precious Amber Scented Candle',
    image: './images/shop/3.png',
    price: 620,
    weight: 40,
    text: [
      'Transform your home into your sanctuary by lighting this luxurious scented candle from our Private Collection. Based on the flowery, mystical scent of amber. Its soothing scent can help relax you for up 60 hours.',
    ],
    type: 'candle',
  },
];

class Shop {
  constructor(num) {
    this.current = 0;
    this.itemsArr = '';
    this.type = 'face';
    this.shopTypeItems = [];
  }
  createItems() {
    if (this.type) {
      this.shopTypeItems = shopItems.filter(item => item.type === this.type);
    } else {
      this.shopTypeItems = shopItems;
    }
    this.max = this.shopTypeItems.length;

    return this.shopTypeItems
      .filter(
        (item, index) =>
          index >= this.current * this.width
          && index < this.current * this.width + this.width
      )
      .map(
        item =>
          `<article class='shop__item'>
            <div class='shop__image-wrapper'>
              <img
                src='${item.image}'
                alt='shop item'
                class='shop__image'
              />
            </div>
            <h3 class='shop__item-title' 
            onclick='setShopItem(${item.id})'>${item.title}</h3>
            <span class='shop__item-price'>${item.price} uah</span>
          </article>`
      );
  }

  checkMedia(customWidth) {
    return window.matchMedia(customWidth).matches;
  }

  setWidth(state) {
    const widthTable = '(max-width: 1000px)';
    const widthMobile = '(max-width: 600px)';
    
    this.width = this.checkMedia(widthMobile)
      ? 1
      : this.checkMedia(widthTable)
        ? 2
        : 3;

    if (state === 'next') {
      this.current++;

      this.render();

      if (this.current >= this.max / this.width - 1) {
        shopNext.classList.add('arrows__item--disable');
      }

      shopPrev.classList.remove('arrows__item--disable');
    } else if (state === 'prev') {
      this.current--;

      shopContainer.innerHTML = this.createItems().join(' ');

      if (this.current === 0) {
        shopPrev.classList.add('arrows__item--disable');
      }
      shopNext.classList.remove('arrows__item--disable');
    }
  }

  initial() {
    this.setWidth();
    this.render();
  }

  next() {
    this.setWidth('next');
  }

  prev() {
    this.setWidth('prev');
  }

  all() {
    this.current = 0;
    this.width = shopItems.length + 1;
    this.type = null;

    shopTypes[shopTypeChecked].checked = false;
    shopArrows.classList.add('hide');
    this.render();
  }

  render() {
    shopContainer.innerHTML = this.createItems().join(' ');
  }

  setType(type) {
    this.type = type;
    this.setWidth();
    this.render();
  }
}

const shop = new Shop();

shopPrev.classList.add('arrows__item--disable');
shop.initial();

shopPrev.addEventListener('click', () => {
  shop.prev();
});

shopNext.addEventListener('click', () => {
  shop.next();
});

shopAll.addEventListener('click', () => {
  shop.all();
  shopAll.classList.add('hide');
});

for (let i = 0; i < shopTypes.length; i++) {
  shopTypes[i].addEventListener('click', function(event) {
    shop.setType(event.target.value);
    shopAll.classList.remove('hide');
    shopArrows.classList.remove('hide');
    shopTypeChecked = i;
  });
}

function setShopItem(id) {
  const shopProductItem = shopItems.find(item => item.id === id);

  localStorage.setItem('shopItem', JSON.stringify(shopProductItem));
  window.location.href = './product.html';
}
