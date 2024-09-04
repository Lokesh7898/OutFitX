import React, { Component } from 'react';
import blankheart from "../../Media/Icon/heart.png";
import redheart from "../../Media/Icon/love.png";

const products = {
  men: [
    { id: 1, name: 'Slim Fit Dress Shirt', description: 'A slim fit dress shirt perfect for a modern look.', image: 'https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt.jpg', price: 9.99 },
    { id: 2, name: 'Classic Button-Down Shirt', description: 'A classic button-down shirt for a timeless style.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXlSt5PQ0tylxPAT0Tpu-Rw-STbj5hBdhow&s', price: 8.99 },
    { id: 3, name: 'Oxford Shirt', description: 'An Oxford shirt offering a crisp, professional appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Esjs4QwpqXmDZk4xSQoSGHItbA9q-MCePQ&s', price: 9.49 },
    { id: 4, name: 'Flannel Shirt', description: 'A cozy flannel shirt ideal for casual wear.', image: 'https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg', price: 9.79 },
    { id: 5, name: 'Herringbone Dress Shirt', description: 'A herringbone dress shirt with a subtle pattern for sophistication.', image: 'https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639', price: 8.49 },
    { id: 6, name: 'Chambray Shirt', description: 'A chambray shirt offering a light and airy feel.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=90&crop=false', price: 9.29 },
    { id: 7, name: 'Patterned Dress Shirt', description: 'A patterned dress shirt adding a touch of flair to formal outfits.', image: 'https://www.tistabene.com/cdn/shop/products/mainimage1610537684.jpg?v=1694074737', price: 9.99 },
    { id: 8, name: 'Linen Shirt', description: 'A lightweight linen shirt perfect for warm weather.', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/342711746/RJ/BN/TB/79714885/men-plain-shirts-men-shirt-250x250.jpg', price: 8.79 },
    { id: 9, name: 'Plaid Button-Up Shirt', description: 'A plaid button-up shirt offering a casual, yet stylish look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFEDEmqndt_9B39HsAYRuVlNQKvKZofSQMg&s', price: 9.19 },
    { id: 10, name: 'Gingham Shirt', description: 'A gingham shirt with a classic checkered pattern for a smart appearance.', image: 'https://m.media-amazon.com/images/I/813UIVxLD3L._AC_UY1100_.jpg', price: 8.99 },
    { id: 11, name: 'White Dress Shirt', description: 'A crisp white dress shirt ideal for formal occasions.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=90&crop=false', price: 9.49 },
    { id: 12, name: 'Denim Shirt', description: 'A durable denim shirt perfect for casual outings.', image: 'https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg', price: 8.69 },
    { id: 13, name: 'Twill Shirt', description: 'A twill shirt offering a textured look and feel.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVp8h938RMKn9mZrypLBrNjHlEWBxk6FWmw&s', price: 9.59 },
    { id: 14, name: 'Corduroy Shirt', description: 'A corduroy shirt providing warmth and a unique texture.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfp-A4Y7oZyQZSi-6i4vKZgTyWN7oRvulLg&s', price: 9.29 },
    { id: 15, name: 'Pinstripe Shirt', description: 'A pinstripe shirt offering a sophisticated, vertical pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdry6_gIAQ9O2uT4QI0mQ0ZELG-DVMI8Arug&s', price: 9.79 },
    { id: 16, name: 'Classic Crew Neck Tee', description: 'A classic crew neck tee for everyday wear.', image: 'https://m.media-amazon.com/images/I/81wy4PsxSCL._AC_UY1100_.jpg', price: 8.99 },
    { id: 17, name: 'Graphic Print Tee', description: 'A graphic print tee with vibrant designs.', image: 'https://www.jiomart.com/images/product/500x630/rvjj0ksuo1/tee-town-cotton-polo-neck-tshirt-for-mens-polo-1-grey-product-images-rvjj0ksuo1-0-202211011321.jpg', price: 9.49 },
    { id: 18, name: 'V-Neck Cotton Tee', description: 'A v-neck cotton tee combining comfort with style.', image: 'https://www.jiomart.com/images/product/500x630/rvtdvtuhds/coloured-collar-t-shirt-for-men-casual-regular-fit-t-shirt-pure-cotton-lightweight-comfortable-classic-t-shirt-classic-vertical-stripes-medium-green-product-images-rvtdvtuhds-0-202209090825.jpg', price: 9.19 },
    { id: 19, name: 'Henley Neck T-Shirt', description: 'A henley neck t-shirt offering a casual, layered look.', image: 'https://www.jiomart.com/images/product/original/rvxqd4wmk4/eyebogler-light-green-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rvxqd4wmk4-1-202402121853.jpg?im=Resize=(500,630)', price: 9.29 },
    { id: 20, name: 'Performance Sports Tee', description: 'A performance sports tee designed for active wear.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/7/s-oversized-beige-ironflex-original-imagkjashnhxktjg.jpeg?q=90&crop=false', price: 9.79 },
    { id: 21, name: 'Striped Short Sleeve Tee', description: 'A striped short sleeve tee for a casual yet trendy look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZeFiPi39Q8sObSHdgc_IzYIKFKhuJ4gQWg&s', price: 9.49 },
    { id: 22, name: 'Pocket Detail T-Shirt', description: 'A pocket detail t-shirt adding a functional element to casual wear.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/7/s/i/m-mens-tshirt-hs-light-blue-white-kings-london-original-imagsuxhya44u7cu.jpeg?q=90&crop=true', price: 8.79 },
    { id: 23, name: 'Colorblock Tee', description: 'A colorblock tee featuring bold contrasting panels.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a969xmmbDoNRCIY9nhr3dcg4BhPYcbCCqw&s', price: 8.99 },
    { id: 24, name: 'Plain Essential Tee', description: 'A plain essential tee that is a staple for any wardrobe.', image: 'https://assets.ajio.com/medias/sys_master/root/20231214/xIDk/657ad736afa4cf41f5cff63e/-473Wx593H-464531848-navy-MODEL.jpg', price: 9.29 },
    { id: 25, name: 'Vintage Wash Tee', description: 'A vintage wash tee providing a retro, worn-in feel.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRKree7gCjgtXWGRjSCNMJaBIZ05pXHfUsg&s', price: 9.59 },
    { id: 26, name: 'Contrast Collar Tee', description: 'A contrast collar tee with a distinct style element.', image: 'https://images-platform.99static.com//MZ2XrZGJPVL_v3s7ltKdTqCP_rY=/0x0:2040x2040/fit-in/590x590/99designs-contests-attachments/134/134468/attachment_134468955', price: 8.79 },
    { id: 27, name: 'Heathered Crew Tee', description: 'A heathered crew tee offering a subtle texture and casual vibe.', image: 'https://rukminim2.flixcart.com/image/828/828/l071d3k0/t-shirt/v/a/w/m-fnth08-black-nags-original-imagcffg54pf2yqg.jpeg?q=60&crop=false', price: 8.79 },
    { id: 28, name: 'Tie-Dye Tee', description: 'A tie-dye tee featuring a colorful, psychedelic pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwtLeOWq-4uVgMjFSfUMJO_4sjHTQp8fyew&s', price: 8.99 },
    { id: 29, name: 'Basic Crew Tee', description: 'A basic crew tee for simple and comfortable wear.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJyf-dktTQjfOC59J4THfKgnWR5xiHC08zg&s', price: 9.79 },
    { id: 30, name: 'Regular Fit Tee', description: 'A regular fit tee offering a comfortable and versatile option.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tgRXscu4bCPepJ1EFKg2mgiyfVDFKobNDQ&s', price: 8.99 },
  ],
  women: [
    { id: 1, name: 'Floral Button-Down Shirt', description: 'A chic floral button-down shirt perfect for any occasion.', image: 'https://assets.ajio.com/medias/sys_master/root/20230606/7wXp/647e8ae242f9e729d7273b80/-473Wx593H-466239355-lavender-MODEL.jpg', price: 9.0 },
    { id: 2, name: 'Long Sleeve Blouse', description: 'Elegant long sleeve blouse ideal for a sophisticated look.', image: 'https://assets.ajio.com/medias/sys_master/root/20231128/zkbG/6565c3ddafa4cf41f5a5ea1c/-473Wx593H-466833334-white-MODEL.jpg', price: 8.5 },
    { id: 3, name: 'Chiffon Shirt', description: 'Lightweight chiffon shirt for a breezy and stylish appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK2woMOzAlYkJx_1bZtQzxweepKzyx_rQGQ&s', price: 9.0 },
    { id: 4, name: 'Plaid Check Shirt', description: 'Classic plaid check shirt that adds a touch of pattern to your outfit.', image: 'https://assets.ajio.com/medias/sys_master/root/20230609/DoTY/64834c8742f9e729d735587b/-473Wx593H-443013006-ltblue-MODEL.jpg', price: 8.5 },
    { id: 5, name: 'Denim Button-Up Shirt', description: 'Versatile denim button-up shirt for a casual, relaxed look.', image: 'https://assets.ajio.com/medias/sys_master/root/20230624/lsId/6496050eeebac147fce3d743/-473Wx593H-465068575-white-MODEL.jpg', price: 8.0 },
    { id: 6, name: 'Ruffle Sleeve Shirt', description: 'Charming ruffle sleeve shirt that adds a playful touch to your ensemble.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMP4tbTiPdXAJDxsL4_5uG6OIrMbNqmGcLDg&s', price: 9.0 },
    { id: 7, name: 'Linen Blend Shirt', description: 'Breathable linen blend shirt perfect for warm weather.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xpcES1OvK8Go7gc0Km9T87iRvwx3rfcCgg&s', price: 8.5 },
    { id: 8, name: 'Embroidered Blouse', description: 'Elegant embroidered blouse that features intricate designs.', image: 'https://assets.ajio.com/medias/sys_master/root/20230314/nFpJ/64109483f997dde6f4f99674/-473Wx593H-443007587-pink-MODEL.jpg', price: 8.0 },
    { id: 9, name: 'Peplum Shirt', description: 'Stylish peplum shirt with a flattering fit and flare design.', image: 'https://www.hancockfashion.com/cdn/shop/files/13007WhiteS_1.jpg?v=1686918434', price: 8.5 },
    { id: 10, name: 'Off-Shoulder Blouse', description: 'Trendy off-shoulder blouse for a chic and relaxed look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8M0_80PFm6j-f-FigvzGaiH0PGFzGXR0UA&s', price: 8.0 },
    { id: 11, name: 'Silk Button-Down Shirt', description: 'Luxurious silk button-down shirt for an elegant appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SaAtLpxEI5Cz9jtFifd6RBjXcKReUVrRiQ&s', price: 9.0 },
    { id: 12, name: 'Striped Long Sleeve Shirt', description: 'Classic striped long sleeve shirt perfect for a timeless style.', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/30062023/410361508013_2.jpg', price: 8.5 },
    { id: 13, name: 'Polka Dot Shirt', description: 'Fun polka dot shirt that adds a playful element to your wardrobe.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicIRqFLfYvKbpxc8noAWSys0-RlavMC_q-A&s', price: 8.0 },
    { id: 14, name: 'Tie-Front Shirt', description: 'Stylish tie-front shirt that features a trendy knot detail.', image: 'https://assets.ajio.com/medias/sys_master/root/20230802/yHg9/64c9fc5fa9b42d15c984e5d4/-473Wx593H-465780368-blue-MODEL.jpg', price: 8.5 },
    { id: 15, name: 'Mock Neck Blouse', description: 'Modern mock neck blouse that adds a touch of sophistication.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjvYs-_Sx3NfI6JXDWo7H1sILQDUFYgjH0Q&s', price: 8.0 },
    // tshirts
    { id: 16, name: 'Graphic Print Tee', description: 'Bold graphic print tee for a standout casual look.', image: 'https://assets.ajio.com/medias/sys_master/root/20230628/c55I/649bdeb0a9b42d15c90c84ec/-473Wx593H-465797883-black-MODEL.jpg', price: 9.0 },
    { id: 17, name: 'Floral Patterned Tee', description: 'Pretty floral patterned tee for a fresh and feminine style.', image: 'https://assets.ajio.com/medias/sys_master/root/20231120/ZsLK/655b6112ddf77915198dc951/-473Wx593H-466810747-pink-MODEL.jpg', price: 8.5 },
    { id: 18, name: 'Ruffled Sleeve Tee', description: 'Charming ruffled sleeve tee that adds a playful touch.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2m2ckTK2Y1mmS1EjNx1GsWwU9wPC56e8wA&s', price: 8.0 },
    { id: 19, name: 'Cotton V-Neck Tee', description: 'Comfortable cotton v-neck tee for everyday wear.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dq5_OsTMKs2fA2u9UrQa98fK3qOo9IKpNQ&s', price: 8.5 },
    { id: 20, name: 'Tie-Dye T-Shirt', description: 'Trendy tie-dye t-shirt with a vibrant and colorful design.', image: 'https://muselot.in/cdn/shop/products/Navy-blue-plain-t-shirts-for-women-online-in-100_-cotton_-round-neck-and-half-sleeves---MUSELOT.jpg?v=1658090205', price: 9.0 },
    { id: 21, name: 'Striped Short Sleeve Tee', description: 'Casual striped short sleeve tee with a classic pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9JgylZZiYhTtK2VhECb4XJPhmlhEMbL3Mw&s', price: 8.0 },
    { id: 22, name: 'Pocket Detail Tee', description: 'Relaxed tee with a practical pocket detail for added style.', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/414391680/UB/MN/NE/162311225/oversized-t-shirts-for-women.jpg', price: 8.5 },
    { id: 23, name: 'Animal Print Tee', description: 'Fierce animal print tee that adds a wild touch to your wardrobe.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuioxlz5CO1hijGdsZR19aN_XxtT7hjiPTWA&s', price: 9.0 },
    { id: 24, name: 'Oversized Graphic Tee', description: 'Comfortable oversized graphic tee with bold designs.', image: 'https://images.glowroad.com/faceview/c9b/g1j/jj/b1e/imgs/07ba3cfe-26ff-4af3-9755-4d88825294bf_14996921-xlgn400x400.jpg?productId=P-12783097', price: 8.5 },
    { id: 25, name: 'Henley Neck Tee', description: 'Casual henley neck tee with a classic button placket.', image: 'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirt_girl_final_16_9_2022/music_panda_black_t-shirt_for_girls_base_5_10_2022_400x533.jpg', price: 8.0 },
    { id: 26, name: 'Simple Crew Neck Tee', description: 'Essential crew neck tee with a minimalist design.', image: 'https://rukminim2.flixcart.com/image/828/994/xif0q/shopsy-t-shirt/m/e/4/m-grl-fs49-red-battale-leotude-original-imagmxpgxz4urh7y.jpeg?q=60&crop=false', price: 8.5 },
    { id: 27, name: 'Colorblock Tee', description: 'Trendy colorblock tee featuring vibrant color contrasts.', image: 'https://images-cdn.ubuy.co.in/64ef92b5aaf88d4025183ff4-teen-girls-cat-t-shirt-kawaii.jpg', price: 9.0 },
    { id: 28, name: 'Polka Dot Print Tee', description: 'Fun polka dot print tee with a whimsical design.', image: 'https://www.campanakids.com/cdn/shop/products/CK51801_A_1080x.jpg?v=1676901677', price: 8.5 },
    { id: 29, name: 'Embroidered Pocket Tee', description: 'Simple tee with an embroidered pocket detail for added flair.', image: 'https://www.redwolf.in/image/cache/catalog/t-shirts/mojo-jojo-chillin-like-a-villain-t-shirt-india-600x800.jpg?m=1717051961', price: 8.0 },
    { id: 30, name: 'Basic White Tee', description: 'Classic white tee with a clean and timeless look.', image: 'https://images.glowroad.com/faceview/c9b/g1j/jj/b1e/imgs/65e09314-2669-4b58-8f46-350dcef773b3_14996921-xlgn400x400.jpg?productId=P-12782985', price: 8.5 }
  ],
  all: [
    { id: 1, name: 'Slim Fit Dress Shirt', description: 'A slim fit dress shirt perfect for a modern look.', image: 'https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt.jpg', price: 9.99 },
    { id: 2, name: 'Classic Button-Down Shirt', description: 'A classic button-down shirt for a timeless style.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXlSt5PQ0tylxPAT0Tpu-Rw-STbj5hBdhow&s', price: 8.99 },
    { id: 3, name: 'Oxford Shirt', description: 'An Oxford shirt offering a crisp, professional appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Esjs4QwpqXmDZk4xSQoSGHItbA9q-MCePQ&s', price: 9.49 },
    { id: 4, name: 'Flannel Shirt', description: 'A cozy flannel shirt ideal for casual wear.', image: 'https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg', price: 9.79 },
    { id: 5, name: 'Herringbone Dress Shirt', description: 'A herringbone dress shirt with a subtle pattern for sophistication.', image: 'https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639', price: 8.49 },
    { id: 6, name: 'Chambray Shirt', description: 'A chambray shirt offering a light and airy feel.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=90&crop=false', price: 9.29 },
    { id: 7, name: 'Patterned Dress Shirt', description: 'A patterned dress shirt adding a touch of flair to formal outfits.', image: 'https://www.tistabene.com/cdn/shop/products/mainimage1610537684.jpg?v=1694074737', price: 9.99 },
    { id: 8, name: 'Linen Shirt', description: 'A lightweight linen shirt perfect for warm weather.', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/342711746/RJ/BN/TB/79714885/men-plain-shirts-men-shirt-250x250.jpg', price: 8.79 },
    { id: 9, name: 'Plaid Button-Up Shirt', description: 'A plaid button-up shirt offering a casual, yet stylish look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFEDEmqndt_9B39HsAYRuVlNQKvKZofSQMg&s', price: 9.19 },
    { id: 10, name: 'Gingham Shirt', description: 'A gingham shirt with a classic checkered pattern for a smart appearance.', image: 'https://m.media-amazon.com/images/I/813UIVxLD3L._AC_UY1100_.jpg', price: 8.99 },
    { id: 11, name: 'White Dress Shirt', description: 'A crisp white dress shirt ideal for formal occasions.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=90&crop=false', price: 9.49 },
    { id: 12, name: 'Denim Shirt', description: 'A durable denim shirt perfect for casual outings.', image: 'https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg', price: 8.69 },
    { id: 13, name: 'Twill Shirt', description: 'A twill shirt offering a textured look and feel.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVp8h938RMKn9mZrypLBrNjHlEWBxk6FWmw&s', price: 9.59 },
    { id: 14, name: 'Corduroy Shirt', description: 'A corduroy shirt providing warmth and a unique texture.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfp-A4Y7oZyQZSi-6i4vKZgTyWN7oRvulLg&s', price: 9.29 },
    { id: 15, name: 'Pinstripe Shirt', description: 'A pinstripe shirt offering a sophisticated, vertical pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdry6_gIAQ9O2uT4QI0mQ0ZELG-DVMI8Arug&s', price: 9.79 },
    { id: 16, name: 'Classic Crew Neck Tee', description: 'A classic crew neck tee for everyday wear.', image: 'https://m.media-amazon.com/images/I/81wy4PsxSCL._AC_UY1100_.jpg', price: 8.99 },
    { id: 17, name: 'Graphic Print Tee', description: 'A graphic print tee with vibrant designs.', image: 'https://www.jiomart.com/images/product/500x630/rvjj0ksuo1/tee-town-cotton-polo-neck-tshirt-for-mens-polo-1-grey-product-images-rvjj0ksuo1-0-202211011321.jpg', price: 9.49 },
    { id: 18, name: 'V-Neck Cotton Tee', description: 'A v-neck cotton tee combining comfort with style.', image: 'https://www.jiomart.com/images/product/500x630/rvtdvtuhds/coloured-collar-t-shirt-for-men-casual-regular-fit-t-shirt-pure-cotton-lightweight-comfortable-classic-t-shirt-classic-vertical-stripes-medium-green-product-images-rvtdvtuhds-0-202209090825.jpg', price: 9.19 },
    { id: 19, name: 'Henley Neck T-Shirt', description: 'A henley neck t-shirt offering a casual, layered look.', image: 'https://www.jiomart.com/images/product/original/rvxqd4wmk4/eyebogler-light-green-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rvxqd4wmk4-1-202402121853.jpg?im=Resize=(500,630)', price: 9.29 },
    { id: 20, name: 'Performance Sports Tee', description: 'A performance sports tee designed for active wear.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/7/s-oversized-beige-ironflex-original-imagkjashnhxktjg.jpeg?q=90&crop=false', price: 9.79 },
    { id: 21, name: 'Striped Short Sleeve Tee', description: 'A striped short sleeve tee for a casual yet trendy look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZeFiPi39Q8sObSHdgc_IzYIKFKhuJ4gQWg&s', price: 9.49 },
    { id: 22, name: 'Pocket Detail T-Shirt', description: 'A pocket detail t-shirt adding a functional element to casual wear.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/7/s/i/m-mens-tshirt-hs-light-blue-white-kings-london-original-imagsuxhya44u7cu.jpeg?q=90&crop=true', price: 8.79 },
    { id: 23, name: 'Colorblock Tee', description: 'A colorblock tee featuring bold contrasting panels.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a969xmmbDoNRCIY9nhr3dcg4BhPYcbCCqw&s', price: 8.99 },
    { id: 24, name: 'Plain Essential Tee', description: 'A plain essential tee that is a staple for any wardrobe.', image: 'https://assets.ajio.com/medias/sys_master/root/20231214/xIDk/657ad736afa4cf41f5cff63e/-473Wx593H-464531848-navy-MODEL.jpg', price: 9.29 },
    { id: 25, name: 'Vintage Wash Tee', description: 'A vintage wash tee providing a retro, worn-in feel.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRKree7gCjgtXWGRjSCNMJaBIZ05pXHfUsg&s', price: 9.59 },
    { id: 26, name: 'Contrast Collar Tee', description: 'A contrast collar tee with a distinct style element.', image: 'https://images-platform.99static.com//MZ2XrZGJPVL_v3s7ltKdTqCP_rY=/0x0:2040x2040/fit-in/590x590/99designs-contests-attachments/134/134468/attachment_134468955', price: 8.79 },
    { id: 27, name: 'Heathered Crew Tee', description: 'A heathered crew tee offering a subtle texture and casual vibe.', image: 'https://rukminim2.flixcart.com/image/828/828/l071d3k0/t-shirt/v/a/w/m-fnth08-black-nags-original-imagcffg54pf2yqg.jpeg?q=60&crop=false', price: 8.79 },
    { id: 28, name: 'Tie-Dye Tee', description: 'A tie-dye tee featuring a colorful, psychedelic pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwtLeOWq-4uVgMjFSfUMJO_4sjHTQp8fyew&s', price: 8.99 },
    { id: 29, name: 'Basic Crew Tee', description: 'A basic crew tee for simple and comfortable wear.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJyf-dktTQjfOC59J4THfKgnWR5xiHC08zg&s', price: 9.79 },
    { id: 30, name: 'Regular Fit Tee', description: 'A regular fit tee offering a comfortable and versatile option.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tgRXscu4bCPepJ1EFKg2mgiyfVDFKobNDQ&s', price: 8.99 },

    { id: 31, name: 'Floral Button-Down Shirt', description: 'A chic floral button-down shirt perfect for any occasion.', image: 'https://assets.ajio.com/medias/sys_master/root/20230606/7wXp/647e8ae242f9e729d7273b80/-473Wx593H-466239355-lavender-MODEL.jpg', price: 9.0 },
    { id: 32, name: 'Long Sleeve Blouse', description: 'Elegant long sleeve blouse ideal for a sophisticated look.', image: 'https://assets.ajio.com/medias/sys_master/root/20231128/zkbG/6565c3ddafa4cf41f5a5ea1c/-473Wx593H-466833334-white-MODEL.jpg', price: 8.5 },
    { id: 33, name: 'Chiffon Shirt', description: 'Lightweight chiffon shirt for a breezy and stylish appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK2woMOzAlYkJx_1bZtQzxweepKzyx_rQGQ&s', price: 9.0 },
    { id: 34, name: 'Plaid Check Shirt', description: 'Classic plaid check shirt that adds a touch of pattern to your outfit.', image: 'https://assets.ajio.com/medias/sys_master/root/20230609/DoTY/64834c8742f9e729d735587b/-473Wx593H-443013006-ltblue-MODEL.jpg', price: 8.5 },
    { id: 35, name: 'Denim Button-Up Shirt', description: 'Versatile denim button-up shirt for a casual, relaxed look.', image: 'https://assets.ajio.com/medias/sys_master/root/20230624/lsId/6496050eeebac147fce3d743/-473Wx593H-465068575-white-MODEL.jpg', price: 8.0 },
    { id: 36, name: 'Ruffle Sleeve Shirt', description: 'Charming ruffle sleeve shirt that adds a playful touch to your ensemble.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMP4tbTiPdXAJDxsL4_5uG6OIrMbNqmGcLDg&s', price: 9.0 },
    { id: 37, name: 'Linen Blend Shirt', description: 'Breathable linen blend shirt perfect for warm weather.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xpcES1OvK8Go7gc0Km9T87iRvwx3rfcCgg&s', price: 8.5 },
    { id: 38, name: 'Embroidered Blouse', description: 'Elegant embroidered blouse that features intricate designs.', image: 'https://assets.ajio.com/medias/sys_master/root/20230314/nFpJ/64109483f997dde6f4f99674/-473Wx593H-443007587-pink-MODEL.jpg', price: 8.0 },
    { id: 39, name: 'Peplum Shirt', description: 'Stylish peplum shirt with a flattering fit and flare design.', image: 'https://www.hancockfashion.com/cdn/shop/files/13007WhiteS_1.jpg?v=1686918434', price: 8.5 },
    { id: 40, name: 'Off-Shoulder Blouse', description: 'Trendy off-shoulder blouse for a chic and relaxed look.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8M0_80PFm6j-f-FigvzGaiH0PGFzGXR0UA&s', price: 8.0 },
    { id: 41, name: 'Silk Button-Down Shirt', description: 'Luxurious silk button-down shirt for an elegant appearance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SaAtLpxEI5Cz9jtFifd6RBjXcKReUVrRiQ&s', price: 9.0 },
    { id: 22, name: 'Striped Long Sleeve Shirt', description: 'Classic striped long sleeve shirt perfect for a timeless style.', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/30062023/410361508013_2.jpg', price: 8.5 },
    { id: 43, name: 'Polka Dot Shirt', description: 'Fun polka dot shirt that adds a playful element to your wardrobe.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicIRqFLfYvKbpxc8noAWSys0-RlavMC_q-A&s', price: 8.0 },
    { id: 44, name: 'Tie-Front Shirt', description: 'Stylish tie-front shirt that features a trendy knot detail.', image: 'https://assets.ajio.com/medias/sys_master/root/20230802/yHg9/64c9fc5fa9b42d15c984e5d4/-473Wx593H-465780368-blue-MODEL.jpg', price: 8.5 },
    { id: 45, name: 'Mock Neck Blouse', description: 'Modern mock neck blouse that adds a touch of sophistication.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjvYs-_Sx3NfI6JXDWo7H1sILQDUFYgjH0Q&s', price: 8.0 },
    // tshirts
    { id: 46, name: 'Graphic Print Tee', description: 'Bold graphic print tee for a standout casual look.', image: 'https://assets.ajio.com/medias/sys_master/root/20230628/c55I/649bdeb0a9b42d15c90c84ec/-473Wx593H-465797883-black-MODEL.jpg', price: 9.0 },
    { id: 47, name: 'Floral Patterned Tee', description: 'Pretty floral patterned tee for a fresh and feminine style.', image: 'https://assets.ajio.com/medias/sys_master/root/20231120/ZsLK/655b6112ddf77915198dc951/-473Wx593H-466810747-pink-MODEL.jpg', price: 8.5 },
    { id: 48, name: 'Ruffled Sleeve Tee', description: 'Charming ruffled sleeve tee that adds a playful touch.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2m2ckTK2Y1mmS1EjNx1GsWwU9wPC56e8wA&s', price: 8.0 },
    { id: 49, name: 'Cotton V-Neck Tee', description: 'Comfortable cotton v-neck tee for everyday wear.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dq5_OsTMKs2fA2u9UrQa98fK3qOo9IKpNQ&s', price: 8.5 },
    { id: 50, name: 'Tie-Dye T-Shirt', description: 'Trendy tie-dye t-shirt with a vibrant and colorful design.', image: 'https://muselot.in/cdn/shop/products/Navy-blue-plain-t-shirts-for-women-online-in-100_-cotton_-round-neck-and-half-sleeves---MUSELOT.jpg?v=1658090205', price: 9.0 },
    { id: 51, name: 'Striped Short Sleeve Tee', description: 'Casual striped short sleeve tee with a classic pattern.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9JgylZZiYhTtK2VhECb4XJPhmlhEMbL3Mw&s', price: 8.0 },
    { id: 52, name: 'Pocket Detail Tee', description: 'Relaxed tee with a practical pocket detail for added style.', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/414391680/UB/MN/NE/162311225/oversized-t-shirts-for-women.jpg', price: 8.5 },
    { id: 53, name: 'Animal Print Tee', description: 'Fierce animal print tee that adds a wild touch to your wardrobe.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuioxlz5CO1hijGdsZR19aN_XxtT7hjiPTWA&s', price: 9.0 },
    { id: 54, name: 'Oversized Graphic Tee', description: 'Comfortable oversized graphic tee with bold designs.', image: 'https://images.glowroad.com/faceview/c9b/g1j/jj/b1e/imgs/07ba3cfe-26ff-4af3-9755-4d88825294bf_14996921-xlgn400x400.jpg?productId=P-12783097', price: 8.5 },
    { id: 55, name: 'Henley Neck Tee', description: 'Casual henley neck tee with a classic button placket.', image: 'https://www.beyoung.in/api/cache/catalog/products/printed_t-shirt_girl_final_16_9_2022/music_panda_black_t-shirt_for_girls_base_5_10_2022_400x533.jpg', price: 8.0 },
    { id: 56, name: 'Simple Crew Neck Tee', description: 'Essential crew neck tee with a minimalist design.', image: 'https://rukminim2.flixcart.com/image/828/994/xif0q/shopsy-t-shirt/m/e/4/m-grl-fs49-red-battale-leotude-original-imagmxpgxz4urh7y.jpeg?q=60&crop=false', price: 8.5 },
    { id: 57, name: 'Colorblock Tee', description: 'Trendy colorblock tee featuring vibrant color contrasts.', image: 'https://images-cdn.ubuy.co.in/64ef92b5aaf88d4025183ff4-teen-girls-cat-t-shirt-kawaii.jpg', price: 9.0 },
    { id: 58, name: 'Polka Dot Print Tee', description: 'Fun polka dot print tee with a whimsical design.', image: 'https://www.campanakids.com/cdn/shop/products/CK51801_A_1080x.jpg?v=1676901677', price: 8.5 },
    { id: 59, name: 'Embroidered Pocket Tee', description: 'Simple tee with an embroidered pocket detail for added flair.', image: 'https://www.redwolf.in/image/cache/catalog/t-shirts/mojo-jojo-chillin-like-a-villain-t-shirt-india-600x800.jpg?m=1717051961', price: 8.0 },
    { id: 60, name: 'Basic White Tee', description: 'Classic white tee with a clean and timeless look.', image: 'https://images.glowroad.com/faceview/c9b/g1j/jj/b1e/imgs/65e09314-2669-4b58-8f46-350dcef773b3_14996921-xlgn400x400.jpg?productId=P-12782985', price: 8.5 }
  ],
};

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'all',
      wishlist: new Set(),
      cart: JSON.parse(sessionStorage.getItem("cart")) || [],
      addWishlist: JSON.parse(sessionStorage.getItem("wishlist")) || [],
    };
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const newCart = [...prevState.cart, product];
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  };

  handleToggleWishlist = (product) => {
    this.setState((prevState) => {
      const newWishlist = new Set(prevState.wishlist);
      let newWishlistDetails = [...prevState.addWishlist];

      if (newWishlist.has(product.id)) {
        newWishlist.delete(product.id);
        newWishlistDetails = newWishlistDetails.filter(item => item.id !== product.id);
      } else {
        newWishlist.add(product.id);
        newWishlistDetails.push(product);
      }

      sessionStorage.setItem("wishlist", JSON.stringify(newWishlistDetails));
      return { wishlist: newWishlist, addWishlist: newWishlistDetails };
    });
  };

  isProductInWishlist = (product) => {
    return this.state.wishlist.has(product.id);
  };

  render() {
    const { selectedCategory } = this.state;

    return (
      <div className="products-page" id='productsMain'>
        <div className="category-dropdown">
          <label htmlFor="category-select">Category: </label>
          <select
            id="category-select"
            onChange={this.handleCategoryChange}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
        <div className="products">
          {products[selectedCategory].map((product, index) => (
            <div className="product" key={`${product.id}-${index}`}>
              <div className="wishlist-icon" onClick={() => this.handleToggleWishlist(product)}>
                <img
                  src={this.isProductInWishlist(product) ? redheart : blankheart}
                  alt="Wishlist"
                  className="wishlist-icon-image"
                />
              </div>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <img className='product-rating' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1WvHa77Ib9WFdn-WrXlTq-6ikmYhkzvy8Q&s' alt="Rating" />
                <b className='productPrice'>Price: ${product.price.toFixed(2)}</b>
                <div className="product-btns">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => this.handleAddToCart(product)}
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  {/* <button className="shop-now-btn">Shop Now!</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default ProductsPage;
