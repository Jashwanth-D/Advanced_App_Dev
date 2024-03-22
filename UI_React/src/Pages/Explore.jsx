import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Booking from '../Components/Public/Booking';

const Explore = () => {
    const [modalContent, setModalContent] = useState("");

    const handleReadMore = (content) => {
        setModalContent(content);
    };

    const handleBookNow = () => {
        // You might want to add implementation for booking
        // setShowModal(true);
        window.location.href = '/Booking';
    };
    return (
       <div className="bg-gray-200 py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore the Boat Houses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Box 1 */}
                            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                                <div className="rectangle">
                                    <img src="https://media1.thrillophilia.com/filestore/sy9tjvkaspmear8x79i59m5ib0by_e7e0bff4-f519-47a6-b1aa-abc525f83505.jpg?w=360&dpr=2" alt="Boat House 1" className="w-full rounded-t-lg mb-4" />
                                    <div className="content p-6">
                                        <h2 className="text-lg font-bold">Umaim Lake Boathouse</h2>
                                        <p className="text-sm mb-4">Description: Boathouse of Umiam is one of the most sought after destinations of the north east. Uniquely situated at the Lumpongdeng island of the lake Umiam, this is certainly the mandatory "last stop" for solo travelers, couples, families and friends on a leisure trip to Meghalaya. </p>
                                        
                                        <button onClick={() => handleReadMore('Boathouse of Umiam is one of the most sought after destinations of the north east. Uniquely situated at the Lumpongdeng island of the lake Umiam, this is certainly the mandatory "last stop" for solo travelers, couples, families and friends on a leisure trip to Meghalaya. Operational for more than a decade now, the boathouse promises a peaceful stay amidst nature and a lifetime experience of island living.The spaceThe boathouse comprises of a fairly large wooden cabin with a king size bed that is adequate for a couple and a child. There are cupboards, mirrors in the cabin. The private bathroom with all basic amenities. Finally, a wooden deck that offers a magnificent view of the lake.*Additional sleeping arrangement can be made for 1 extra guest.Guest accessGuests have full access to the entire island, however camping and bonfire are to be done at designated places.The swimmers can use the lake, with proper precautions and at own risk.Other things to noteThe boathouse and adjoining luxury cabins are solar powered. Thus electricity supply is limited and completely depends on the availability of sunlight during the day. However, the village lanterns make this place even more interesting.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                                       
                                        <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">Book Now</button>
                
                                    </div>
                                </div>
                            </div>
                             {/* Box 2 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/4ul4k68wox62lb70tmdz9w8xfxt5_60c1040b2bc67.jpg?w=305&h=230&dpr=2.0" alt="Boat House 2" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Luxury Boathouse Srinagar</h2>
                    <p className="text-sm mb-4">Description: 
Luxury boathouses on Dal Lake in Srinagar offer a perfect blend of traditional Kashmiri charm and modern luxury. With opulent interiors, breathtaking views, gourmet dining, and personalized services, they redefine accommodation.</p>
                <button onClick={() => handleReadMore('Luxury boathouses on Dal Lake in Srinagar offer a perfect blend of traditional Kashmiri charm and modern luxury. With opulent interiors, breathtaking views, gourmet dining, and personalized services, they redefine accommodation. Guests can indulge in spa treatments, guided tours, and water activities while contributing to responsible tourism. These boathouses promise an unforgettable retreat, immersed in the timeless allure of Kashmiri hospitality. Experience the tranquility of the serene waters of Dal Lake from the comfort of your private balcony or deck. Immerse yourself in the rich cultural tapestry of Srinagar vibrant markets and serene Mughal gardens. With a commitment to sustainable practices, your stay supports the preservation of the pristine beauty of Dal Lake for generations to come.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 3 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-centeroverflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/763fligi8xekkdlp3w2bnxiijbak_r971qav3v39mscjg44t07ycnfu10_abhishek-prasad-N3VzleBhOvk-unsplash.jpg?w=305&h=230&dpr=2.0" alt="Boat House 3" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Bruton Boatyard</h2>
                    <p className="text-sm mb-4">Description: Nestled within the historical confines of Fort Kochi, Bruton Boatyard stands as a testament to the region's rich colonial heritage. Originally a boatyard dating back to the colonial era, the building has been meticulously transformed into a luxury heritage hotel, seamlessly blending its storied past with contemporary comfort.</p>
                <button onClick={() => handleReadMore('Nestled within the historical confines of Fort Kochi, Bruton Boatyard stands as a testament to the region rich colonial heritage. Originally a boatyard dating back to the colonial era, the building has been meticulously transformed into a luxury heritage hotel, seamlessly blending its storied past with contemporary comfort. Its architecture, adorned with Dutch and Portuguese influences, evokes a sense of nostalgia, complemented by antique furniture, period lighting, and traditional Kerala artifacts. Accommodation options at Bruton Boatyard offer a glimpse into the region history, with each room and suite meticulously designed to reflect its cultural heritage. Dining experiences here are a culinary journey, featuring a fusion of traditional Kerala cuisine and international flavors, all enjoyed against the backdrop of the Arabian Sea. Beyond its walls, guests can immerse themselves in a myriad of activities, from leisurely backwater cruises to exploring the vibrant streets of Fort Kochi. With a steadfast commitment to heritage preservation and sustainability, Bruton Boatyard not only offers an unforgettable stay but also contributes to the conservation of Fort Kochi timeless charm for generations to come.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 4 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/v221brbusorq87lee4llbebfy0nf_shutterstock_1059172250.jpg?w=305&h=230&dpr=2.0" alt="Boat House 4" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Munnar Boathouse</h2>
                    <p className="text-sm mb-4">Description: Nestled amidst the breathtaking landscape of Munnar, boathouses offer a unique and enchanting retreat for travelers seeking solace amidst nature's splendor. Munnar, renowned for its verdant tea plantations, mist-laden hills, and cascading waterfalls, provides the perfect backdrop for these tranquil sanctuaries. </p>
                <button onClick={() => handleReadMore('Nestled amidst the breathtaking landscape of Munnar, boathouses offer a unique and enchanting retreat for travelers seeking solace amidst natures splendor. Munnar, renowned for its verdant tea plantations, mist-laden hills, and cascading waterfalls, provides the perfect backdrop for these tranquil sanctuaries. Boathouses, situated on serene lakes and reservoirs, offer guests an unparalleled experience, allowing them to immerse themselves in the pristine beauty of their surroundings. Featuring comfortable bedrooms, spacious decks, and panoramic views, these boathouses ensure a memorable stay amidst the tranquil waters and lush greenery. Guests can indulge in in-house dining, partake in bonfire gatherings under the starlit sky, or simply unwind with leisurely nature walks along the shoreline. Beyond the confines of the boathouse, Munnar beckons with its array of attractions, including tea estates to explore, national parks to wander through, and viewpoints offering panoramic vistas of the valley below. As stewards of responsible tourism, boathouse owners in Munnar are committed to promoting eco-friendly practices and supporting local communities, ensuring that every stay not only rejuvenates the soul but also contributes to the preservation of this pristine paradise for generations to come.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 5 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/3qxrjkddlfh21hv5k1qltrde2au1_fimqmmr5jenz5ycyi00bq1663kyw_shutterstock_1831942261.jpg?w=305&h=230&dpr=2.0" alt="Boat House 5" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Alleppey Boathouse</h2>
                    <p className="text-sm mb-4">Description: Nestled along the tranquil backwaters of Kerala, Alleppey's boathouses offer travelers an enchanting retreat amidst the timeless charm of the region. Blessed with a network of interconnected rivers, lakes, and canals, Alleppey, also known as Alappuzha, is often referred to as the "Venice of the East" for its picturesque waterways and vibrant culture.</p>
                <button onClick={() => handleReadMore('Nestled along the tranquil backwaters of Kerala, Alleppeys boathouses offer travelers an enchanting retreat amidst the timeless charm of the region. Blessed with a network of interconnected rivers, lakes, and canals, Alleppey, also known as Alappuzha, is often referred to as the "Venice of the East" for its picturesque waterways and vibrant culture. Boathouses, known locally as "Kettuvallams," are traditional rice barges converted into cozy floating accommodations, allowing guests to embark on a journey of relaxation and exploration. These floating abodes feature spacious bedrooms, comfortable lounges, and open-air decks, providing panoramic views of the surrounding coconut groves, paddy fields, and quaint villages. Guests can unwind as they glide along the serene waters, accompanied by the soothing melodies of lapping waves and chirping birds. Indulge in sumptuous Kerala cuisine prepared by skilled chefs on board, savoring the flavors of freshly caught seafood and aromatic spices. As the day unfolds, immerse yourself in the timeless beauty of Alleppeys backwaters, dotted with vibrant houseboats, bustling local life, and verdant landscapes. From tranquil sunset cruises to exhilarating canoe rides through narrow canals, Alleppey offers a myriad of experiences to captivate the soul. With a commitment to sustainable tourism, Alleppey boathouse operators strive to preserve the region natural beauty and cultural heritage, ensuring that every moment spent amidst the backwaters is a testament to Kerala timeless allure.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button  onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 6 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/gwgh72x1uzoa6y99xgafe1nhm79m_shutterstock_534284269.jpg?w=305&h=230&dpr=2.0" alt="Boat House 6" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Kochi Boathouse</h2>
                    <p className="text-sm mb-4">Description:Nestled within the labyrinthine waterways of Kochi, boathouses offer an enchanting escape for travelers seeking serenity amidst the bustling cityscape. Kochi, a vibrant port city steeped in history and culture, is adorned with a network of backwaters, lagoons, and canals that wind through its heart. </p>
                <button onClick={() => handleReadMore('Nestled within the labyrinthine waterways of Kochi, boathouses offer an enchanting escape for travelers seeking serenity amidst the bustling cityscape. Kochi, a vibrant port city steeped in history and culture, is adorned with a network of backwaters, lagoons, and canals that wind through its heart. Boathouses, reminiscent of traditional Kerala houseboats known as "Kettuvallams," provide a unique accommodation experience, combining modern comforts with the timeless charm of floating on tranquil waters. These floating abodes feature well-appointed bedrooms, spacious living areas, and open-air decks that offer panoramic views of the surrounding coconut palms, Chinese fishing nets, and colonial-era buildings. Guests can savor delectable Kerala cuisine prepared by skilled chefs on board, featuring fresh seafood and aromatic spices that tantalize the taste buds. As the boat gently glides along the waterways, guests can immerse themselves in the sights and sounds of Kochi, from bustling waterfront markets to historic landmarks such as Fort Kochi and Mattancherry Palace. Whether enjoying a leisurely sunset cruise or exploring secluded coves and villages, Kochi boathouses promise a tranquil retreat amidst the citys vibrant energy. Committed to sustainable tourism, boathouse operators in Kochi strive to preserve the natural beauty and cultural heritage of the backwaters, ensuring that every moment spent aboard is a celebration of Kerala rich maritime legacy.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 7 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/48mzzlopsgfkopkx2vvryevz1ejt_shutterstock_105663272.jpg?w=305&h=230&dpr=2.0" alt="Boat House 7" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Thekkady Boathouse</h2>
                    <p className="text-sm mb-4">Description: Nestled amidst the verdant wilderness of Thekkady, boathouses offer an unparalleled retreat for travelers seeking solace amidst nature's embrace. Thekkady, renowned for its lush forests, diverse wildlife, and serene lakes, provides the perfect backdrop for these floating sanctuaries. </p>
                <button onClick={() => handleReadMore('Nestled amidst the verdant wilderness of Thekkady, boathouses offer an unparalleled retreat for travelers seeking solace amidst nature embrace. Thekkady, renowned for its lush forests, diverse wildlife, and serene lakes, provides the perfect backdrop for these floating sanctuaries. Boathouses, crafted in traditional Kerala style, provide a unique accommodation experience, allowing guests to immerse themselves in the tranquil beauty of their surroundings. These floating abodes feature comfortable bedrooms, spacious living areas, and open-air decks, offering panoramic views of the serene Periyar Lake and the surrounding Periyar Tiger Reserve. Guests can embark on leisurely cruises along the tranquil waters, observing the myriad of wildlife that thrives along the shores, from grazing elephants to sunbathing crocodiles. Indulge in sumptuous Kerala cuisine prepared by skilled chefs on board, savoring the flavors of locally sourced ingredients and aromatic spices. As the day unfolds, guests can explore the rich biodiversity of Thekkady with guided nature walks, bamboo rafting adventures, or thrilling safaris through the dense forests in search of elusive tigers and exotic birdlife. Committed to responsible tourism, boathouse operators in Thekkady strive to minimize their environmental impact while supporting local communities, ensuring that every moment spent amidst the tranquil waters is a celebration of Kerala natural splendor.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 8 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/dwbfor7u6cp3xj5702nfkymfng0c_shutterstock_1154918653.jpg?w=305&h=230&dpr=2.0" alt="Boat House 8" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Kovalam Boathouse</h2>
                    <p className="text-sm mb-4">Description: Kovalam, with its pristine beaches and azure waters, presents a picturesque setting for boathouses that promise an idyllic retreat along the southern coast of Kerala. These floating sanctuaries, designed to provide a harmonious blend of modern comfort and coastal charm, offer a unique accommodation experience.</p>
                <button onClick={() => handleReadMore('Kovalam, with its pristine beaches and azure waters, presents a picturesque setting for boathouses that promise an idyllic retreat along the southern coast of Kerala. These floating sanctuaries, designed to provide a harmonious blend of modern comfort and coastal charm, offer a unique accommodation experience. Each boathouse features well-appointed bedrooms, spacious living areas, and open decks that provide panoramic views of the shimmering Arabian Sea. Guests can bask in the tranquility of the coastal breeze while enjoying delectable seafood delicacies prepared by skilled chefs on board. Embarking on leisurely cruises along the coastline, guests can witness breathtaking sunsets painting the horizon in hues of orange and pink. Beyond the boathouse, Kovalam beckons with its vibrant beach culture, offering opportunities for water sports, beachside relaxation, and exploration of nearby attractions such as the iconic lighthouse and ancient temples. Committed to sustainable tourism, boathouse operators in Kovalam strive to preserve the pristine marine environment, ensuring that every moment spent aboard is a testament to the natural beauty and coastal allure of Kerala enchanting shoreline.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
                </div>
              </div>
              {/* Box 9 */}
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <div className="rectangle">
                  <img src="https://media1.thrillophilia.com/filestore/9gh3ycb1kocecp1opn0v7tidqqjz_shutterstock_1600449160%20(1).jpg?w=305&h=230&dpr=2.0" alt="Boat House 9" className="w-full rounded-t-lg mb-4" />
                  <div className="content p-6">
                    <h2 className="text-lg font-bold">Periyar National Park Boathouse</h2>
                    <p className="text-sm mb-4">Description: 
Periyar National Park, nestled in the picturesque landscapes of Kerala's Western Ghats, stands as a verdant sanctuary teeming with biodiversity and natural splendor. Spanning over 900 square kilometers, this protected area is renowned for its lush forests, pristine rivers, and diverse wildlife. </p>
                <button onClick={() => handleReadMore('Periyar National Park, nestled in the picturesque landscapes of Kerala Western Ghats, stands as a verdant sanctuary teeming with biodiversity and natural splendor. Spanning over 900 square kilometers, this protected area is renowned for its lush forests, pristine rivers, and diverse wildlife. Home to the majestic Indian elephant, Periyar National Park offers visitors a rare opportunity to witness these gentle giants in their natural habitat, as well as other iconic species such as tigers, leopards, sambar deer, and gaur. The centerpiece of the park is the tranquil Periyar Lake, where boat safaris offer a unique perspective of the surrounding wilderness, allowing guests to observe wildlife congregating along the waters edge. Guided nature walks through the parks dense forests provide intimate encounters with its rich flora and fauna, including endemic bird species like the Malabar grey hornbill and the Nilgiri wood pigeon. Additionally, cultural experiences such as visits to tribal villages and spice plantations offer insight into the regions indigenous heritage. As a bastion of conservation efforts, Periyar National Park is committed to preserving its pristine ecosystems and promoting sustainable tourism practices, ensuring that future generations can continue to marvel at the wonders of this natural haven.')} className="text-blue-500 hover:text-blue-700">Read More</button>
                <button onClick={handleBookNow} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-20">Book Now</button>
                  </div>
               
                            
                        </div>
                    </div>
                </div>
                {modalContent && (
                    <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded-lg">
                            <p className="text-lg">{modalContent}</p>
                            <button onClick={() => setModalContent('')} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
                        </div>
                    </div>
                )}
               
            </div>
           
        </div>
    );
}

export default Explore;