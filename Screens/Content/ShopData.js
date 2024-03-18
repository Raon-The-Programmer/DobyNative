const shopData = {

    "Tambaram": [
        {
            "name": "Quality Power",
            "address": "123, Tambaram Main Road, Tambaram, Chennai",
            "image": require('../../assets/Shops/laundry1.jpeg'),
            "description": "Quality Power offers reliable laundry services with a focus on delivering quality results. Whether it's regular laundry or special fabric care, they ensure your clothes are treated with care.",
            "services": {
                "men": {
                    "coatStainRemoval": { "pricePerDress": 50, "image": require('../../assets/images/shirtstainRemoval.jpg'), "description": "Advanced treatment to remove stains from coats and jackets, ensuring they look fresh and clean." },
                    "shirtStainRemoval": { "pricePerDress": 30, "image": require('../../assets/images/coatStain.png'), "description": "Effective stain removal process for shirts, ensuring they are spotless and presentable." },
                    "dryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service to maintain the quality and freshness of your clothes." },
                    "ironing": { "pricePerDress": 20, "image": require('../../assets/images/ironing.jpg'), "description": "Steam ironing to give your clothes a crisp and neat finish." },
                    "alterations": { "pricePerDress": 80, "image": require('../../assets/images/alteration.jpeg'), "description": "Tailoring services for alterations and adjustments to ensure your clothes fit perfectly." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 120, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Gentle washing process for sarees to retain their color and texture." },
                    "dressDryCleaning": { "pricePerDress": 150, "image": require('../../assets/images/dryCleaning.png'), "description": "Specialized dry cleaning for dresses to maintain their fabric quality and appearance." },
                    "blouseIroning": { "pricePerDress": 25, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Professional ironing service for blouses to keep them wrinkle-free and well-presented." },
                    "hemming": { "pricePerDress": 40, "image": require('../../assets/images/Hemming.jpg'), "description": "Expert hemming service to adjust the length of your dresses for a perfect fit." }
                }
            }
        },
        {
            "name": "Laundr O Room",
            "address": "456, Gandhi Street, Tambaram, Chennai",
            "image": require('../../assets/Shops/laundry2.jpeg'),
            "description": "Laundr O Room provides convenient and efficient laundry solutions. With their modern equipment and skilled staff, they make laundry day hassle-free for their customers.",
            "services": {
                "men": {
                    "shirtStainRemoval": { "pricePerDress": 25, "image": require('../../assets/images/coatStain.png'), "description": "Effective stain removal process for shirts, ensuring they are spotless and presentable." },
                    "jeansWashing": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough washing process for jeans to maintain their color and texture." },
                    "dryCleaning": { "pricePerDress": 80, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service to keep your clothes fresh and well-maintained." },
                    "ironing": { "pricePerDress": 15, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service to give your clothes a neat and tidy appearance." },
                    "alterations": { "pricePerDress": 70, "image": require('../../assets/images/dryCleaning.png'), "description": "Tailoring services for alterations and adjustments to ensure your clothes fit perfectly." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 130, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look crisp and well-pressed." },
                    "salwarKameezStarch": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Starching service for salwar kameez to enhance their stiffness and appearance." },
                    "hemming": { "pricePerDress": 35, "image": require('../../assets/images/Hemming.jpg'), "description": "Expert hemming service to adjust the length of your dresses for a perfect fit." }
                }
            }
        },
        {
            "name": "Laudy Wash",
            "address": "789, Anna Salai, Tambaram, Chennai",
            "image": require('../../assets/Shops/laundry3.jpeg'),
            "description": "Laudy Wash is known for its quick and efficient laundry services. They prioritize customer satisfaction and strive to deliver clean and fresh clothes every time.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 20, "image": require('../../assets/images/dryCleaning.png'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "pantsDryCleaning": { "pricePerDress": 60, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service for pants to maintain their fabric quality." },
                    "ironing": { "pricePerDress": 10, "image": require('../../assets/images/ironing.jpg'), "description": "Steam ironing to give your clothes a crisp and neat finish." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look neat and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "blouseAlterations": { "pricePerDress": 50, "image": require('../../assets/images/dryCleaning.png'), "description": "Expert alterations and adjustments for blouses to ensure they fit perfectly." }
                }
            }
        },
        {
            "name": "Smart Laundry",
            "address": "1011, Velachery Main Road, Tambaram, Chennai",
            "image": require('../../assets/Shops/laundry4.jpeg'),
            "description": "Smart Laundry combines technology with expertise to offer smart and efficient laundry solutions. They ensure your clothes are treated with care while delivering fast turnaround times.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 150, "image": require('../../assets/images/dryCleaning.png'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "pantsIroning": { "pricePerDress": 25, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for pants to ensure they look neat and well-pressed." },
                    "stainRemoval": { "pricePerDress": 30, "image": require('../../assets/images/coatStain.png'), "description": "Effective stain removal process for various types of stains, ensuring your clothes look fresh and clean." }
                },
                "women": {
                    "dressWashing": { "pricePerDress": 80, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough washing process for dresses to maintain their color and texture." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." },
                    "sareeIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." }
                }
            }
        },
        {
            "name": "Thee Washers",
            "address": "1213, Pallavaram-Thoraipakkam Radial Road, Tambaram, Chennai",
            "image": require('../../assets/Shops/laundry5.jpeg'),
            "description": "Thee Washers specializes in handling a variety of fabrics with care. With their attention to detail and personalized service, they aim to exceed customer expectations.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 50, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "coatIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for coats to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 100, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Specialized washing process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." }
                }
            }
        }
    ],

    "Perungudi": [
        {
            "name": "Dry Clean House",
            "address": "1415, Old Mahabalipuram Road, Perungudi, Chennai",
            "image": require('../../assets/Shops/laundry6.jpeg'),
            "description": "Dry Clean House offers professional dry cleaning services with a commitment to quality and reliability. They use advanced techniques to ensure your garments look their best.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 150, "image": require('../../assets/images/Dying.jpeg'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "pantsIroning": { "pricePerDress": 25, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for pants to ensure they look neat and well-pressed." },
                    "stainRemoval": { "pricePerDress": 30, "image": require('../../assets/images/coatStain.png'), "description": "Effective stain removal process for various types of stains, ensuring your clothes look fresh and clean." }
                },
                "women": {
                    "dressWashing": { "pricePerDress": 80, "image": require('../../assets/images/Agitation.jpeg'), "description": "Thorough washing process for dresses to maintain their color and texture." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." },
                    "sareeIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." }
                }
            }
        },
        {
            "name": "Best Power Laundry",
            "address": "1617, Perungudi Main Road, Perungudi, Chennai",
            "image": require('../../assets/Shops/laundry7.jpeg'),
            "description": "Best Power Laundry provides efficient laundry solutions with a focus on quality and customer satisfaction. They utilize modern equipment and eco-friendly practices to deliver outstanding results.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 50, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 40, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "coatIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for coats to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 100, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Specialized washing process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." }
                }
            }
        },
        {
            "name": "Tumbledry",
            "address": "1819, Rajiv Gandhi Salai, Perungudi, Chennai",
            "image": require('../../assets/Shops/laundry8.jpeg'),
            "description": "Tumbledry specializes in gentle treatment of delicate fabrics. Their experienced team ensures your clothes receive the care they deserve, leaving them clean and fresh.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 20, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "pantsDryCleaning": { "pricePerDress": 60, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service for pants to maintain their fabric quality." },
                    "ironing": { "pricePerDress": 10, "image": require('../../assets/images/ironing.jpg'), "description": "Steam ironing to give your clothes a crisp and neat finish." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look neat and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "blouseAlterations": { "pricePerDress": 50, "image": require('../../assets/images/alteration.jpeg'), "description": "Expert alterations and adjustments for blouses to ensure they fit perfectly." }
                }
            }
        },
        {
            "name": "Wash Dry",
            "address": "2021, Thiruvalluvar Nagar, Perungudi, Chennai",
            "image": require('../../assets/Shops/laundry9.jpeg'),
            "description": "Wash Dry offers quick and reliable laundry services catering to the busy lifestyles of their customers. They focus on convenience without compromising on quality.",
            "services": {
                "men": {
                    "shirtStainRemoval": { "pricePerDress": 25, "image": require('../../assets/images/shirtstainRemoval.jpg'), "description": "Effective stain removal process for shirts, ensuring they are spotless and presentable." },
                    "jeansWashing": { "pricePerDress": 40, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Thorough washing process for jeans to maintain their color and texture." },
                    "dryCleaning": { "pricePerDress": 80, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service to keep your clothes fresh and well-maintained." },
                    "ironing": { "pricePerDress": 15, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service to give your clothes a neat and tidy appearance." },
                    "alterations": { "pricePerDress": 70, "image": require('../../assets/images/alteration.jpeg'), "description": "Tailoring services for alterations and adjustments to ensure your clothes fit perfectly." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 130, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Careful dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look crisp and well-pressed." },
                    "salwarKameezStarch": { "pricePerDress": 40, "image": require('../../assets/images/SarwarKameez.jpeg'), "description": "Starching service for salwar kameez to enhance their stiffness and appearance." },
                    "hemming": { "pricePerDress": 35, "image": require('../../assets/images/Hemming.jpg'), "description": "Expert hemming service to adjust the length of your dresses for a perfect fit." }
                }
            }
        },
        {
            "name": "Hiten",
            "address": "2223, Perungudi Industrial Estate, Perungudi, Chennai",
            "image": require('../../assets/Shops/laundry10.jpeg'),
            "description": "Hiten is dedicated to providing top-notch laundry services with a focus on customer satisfaction. With their attention to detail, they ensure your garments are cleaned to perfection.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 150, "image": require('../../assets/images/Dying.jpeg'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 40, "image": require('../../assets/images/TrouserWashing.jpg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "coatIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for coats to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 100, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Specialized washing process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/dryCleaning.png'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." }
                }
            }
        }
    ],


    "Nungambakkam": [
        {
            "name": "White Wagon",
            "address": "2425, Nungambakkam High Road, Nungambakkam, Chennai",
            "image": require('../../assets/Shops/laundry11.jpeg'),
            "description": "White Wagon offers premium laundry services with a focus on quality and reliability. They use advanced technology and eco-friendly practices to ensure your clothes are cleaned to perfection.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 150, "image": require('../../assets/images/Dying.jpeg'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "pantsIroning": { "pricePerDress": 25, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for pants to ensure they look neat and well-pressed." },
                    "stainRemoval": { "pricePerDress": 30, "image": require('../../assets/images/coatStain.png'), "description": "Effective stain removal process for various types of stains, ensuring your clothes look fresh and clean." }
                },
                "women": {
                    "dressWashing": { "pricePerDress": 80, "image": require('../../assets/images/Agitation.jpeg'), "description": "Thorough washing process for dresses to maintain their color and texture." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." },
                    "sareeIroning": { "pricePerDress": 35, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." }
                }
            }
        },
        {
            "name": "Laundrex",
            "address": "2627, Valluvar Kottam High Road, Nungambakkam, Chennai",
            "image": require('../../assets/Shops/laundry12.jpeg'),
            "description": "Laundrex provides convenient and efficient laundry solutions for busy individuals. With their quick turnaround times and attention to detail, they make laundry day hassle-free.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 50, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 40, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "coatIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for coats to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 100, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Specialized washing process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseDryCleaning": { "pricePerDress": 40, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Careful dry cleaning process for blouses to keep them fresh and well-maintained." }
                }
            }
        },
        {
            "name": "Prime Laundry",
            "address": "2829, Sterling Road, Nungambakkam, Chennai",
            "image": require('../../assets/Shops/laundry13.jpeg'),
            "description": "Prime Laundry is committed to delivering prime quality laundry services. They prioritize customer satisfaction and ensure your clothes are cleaned to the highest standards.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 20, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "pantsDryCleaning": { "pricePerDress": 60, "image": require('../../assets/images/dryCleaning.png'), "description": "Professional dry cleaning service for pants to maintain their fabric quality." },
                    "ironing": { "pricePerDress": 10, "image": require('../../assets/images/ironing.jpg'), "description": "Steam ironing to give your clothes a crisp and neat finish." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look neat and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "blouseAlterations": { "pricePerDress": 50, "image": require('../../assets/images/alteration.jpeg'), "description": "Expert alterations and adjustments for blouses to ensure they fit perfectly." }
                }
            }
        }
    ],

    "Taramani": [
        {
            "name": "Taramani Laundry Hub",
            "address": "102, Velachery Main Road, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry1.jpeg'),
            "description": "Taramani Laundry Hub offers premium laundry services with a focus on quality and customer satisfaction. They use state-of-the-art equipment and eco-friendly practices to ensure your clothes are cleaned effectively.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 60, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 50, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "suitIroning": { "pricePerDress": 90, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for suits to ensure they look crisp and well-pressed." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 130, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Careful dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseWashing": { "pricePerDress": 45, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Gentle washing process for blouses to retain their color and texture." }
                }
            }
        },
        {
            "name": "Clean Wave",
            "address": "104, Rajiv Gandhi Salai, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry4.jpeg'),
            "description": "Clean Wave is your one-stop destination for all laundry needs. They offer fast and reliable services with a focus on delivering clean and fresh clothes.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 45, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "jeansDryCleaning": { "pricePerDress": 70, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for jeans to maintain their fabric quality and appearance." },
                    "jacketIroning": { "pricePerDress": 55, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for jackets to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 50, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 90, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtWashing": { "pricePerDress": 55, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Elite Laundry Services",
            "address": "106, OMR, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry6.jpeg'),
            "description": "Elite Laundry Services offers top-notch laundry solutions with a focus on efficiency and convenience. They utilize advanced techniques to ensure your clothes are cleaned to perfection.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 120, "image": require('../../assets/images/dryCleaning.png'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "trousersIroning": { "pricePerDress": 55, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for trousers to ensure they look crisp and well-presented." },
                    "tieWashing": { "pricePerDress": 35, "image": require('../../assets/images/tieWashing.jpg'), "description": "Gentle washing process for ties to retain their color and texture." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 110, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Specialized dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 45, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseWashing": { "pricePerDress": 50, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Gentle washing process for blouses to retain their color and texture." }
                }
            }
        },
        {
            "name": "Sparkle Clean",
            "address": "108, OMR, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry4.jpeg'),
            "description": "Sparkle Clean offers efficient laundry services with a focus on quality and affordability. They ensure your clothes are cleaned thoroughly and delivered on time.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 40, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "trousersDryCleaning": { "pricePerDress": 65, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for trousers to maintain their fabric quality and appearance." },
                    "tieIroning": { "pricePerDress": 30, "image": require('../../assets/images/tieWashing.jpg'), "description": "Professional ironing service for ties to ensure they look neat and well-presented." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 45, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 85, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtWashing": { "pricePerDress": 50, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Ocean Breeze Laundry",
            "address": "110, Velachery Main Road, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry9.jpeg'),
            "description": "Ocean Breeze Laundry offers comprehensive laundry solutions with a focus on customer satisfaction. They ensure your clothes are cleaned to perfection using high-quality products and techniques.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 55, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 45, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "suitIroning": { "pricePerDress": 85, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for suits to ensure they look crisp and well-pressed." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 120, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Specialized dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 50, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseWashing": { "pricePerDress": 55, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Gentle washing process for blouses to retain their color and texture." }
                }
            }
        },
        {
            "name": "Spotless Cleaners",
            "address": "112, Rajiv Gandhi Salai, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry6.jpeg'),
            "description": "Spotless Cleaners is dedicated to providing high-quality laundry services with a focus on attention to detail. They ensure your clothes are treated with care and delivered fresh and clean.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 50, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "jeansDryCleaning": { "pricePerDress": 75, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for jeans to maintain their fabric quality and appearance." },
                    "jacketIroning": { "pricePerDress": 60, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for jackets to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 55, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 95, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtWashing": { "pricePerDress": 60, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Fresh Start Laundry",
            "address": "114, OMR, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry7.jpeg'),
            "description": "Fresh Start Laundry offers efficient and reliable laundry services to help you maintain your busy lifestyle. They prioritize customer satisfaction and ensure your clothes are cleaned to perfection.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 45, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "trousersDryCleaning": { "pricePerDress": 70, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for trousers to maintain their fabric quality and appearance." },
                    "tieIroning": { "pricePerDress": 35, "image": require('../../assets/images/tieWashing.jpg'), "description": "Professional ironing service for ties to ensure they look neat and well-presented." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 50, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 90, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtWashing": { "pricePerDress": 55, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Sunshine Laundry",
            "address": "116, Velachery Main Road, Taramani, Chennai",
            "image": require('../../assets/Shops/laundry8.jpeg'),
            "description": "Sunshine Laundry offers comprehensive laundry solutions with a focus on efficiency and quality. They use advanced technology and eco-friendly practices to ensure your clothes are cleaned effectively.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 55, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 50, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "suitIroning": { "pricePerDress": 85, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for suits to ensure they look crisp and well-pressed." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 120, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Specialized dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 45, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseWashing": { "pricePerDress": 50, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Gentle washing process for blouses to retain their color and texture." }
                }
            }
        }
    ],


    "Adyar": [
        {
            "name": "Sunrise Laundry",
            "address": "6869, Besant Avenue, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry9.jpeg'),
            "description": "Sunrise Laundry provides high-quality laundry services with a commitment to customer satisfaction. They offer a wide range of services to meet all your garment care needs.",
            "services": {
                "men": {
                    "shirtIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for shirts to ensure they look neat and well-pressed." },
                    "jeansWashing": { "pricePerDress": 50, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Specialized washing process for jeans to maintain their color and texture." },
                    "coatDryCleaning": { "pricePerDress": 70, "image": require('../../assets/images/coatStain.png'), "description": "Thorough dry cleaning process for coats to keep them fresh and well-maintained." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 120, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Careful dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Expert ironing service for dresses to ensure they look neat and well-pressed." },
                    "skirtWashing": { "pricePerDress": 40, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Fresh Cleaners",
            "address": "7071, LB Road, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry3.jpeg'),
            "description": "Fresh Cleaners offers reliable laundry and dry cleaning services at affordable prices. They prioritize customer satisfaction and ensure your clothes are cleaned to perfection.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/dryCleaning.png'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "trousersIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for trousers to ensure they look crisp and well-presented." },
                    "tieWashing": { "pricePerDress": 30, "image": require('../../assets/images/tieWashing.jpg'), "description": "Gentle washing process for ties to retain their color and texture." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 80, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtIroning": { "pricePerDress": 35, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for skirts to ensure they look neat and well-pressed." }
                }
            }
        },
        {
            "name": "Crystal Clean",
            "address": "7273, Kasturba Nagar, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry16.jpeg'),
            "description": "Crystal Clean offers eco-friendly laundry solutions with a focus on quality and sustainability. They utilize modern equipment and practices to ensure your clothes are cleaned effectively.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 40, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "trousersDryCleaning": { "pricePerDress": 60, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for trousers to maintain their fabric quality and appearance." },
                    "jacketIroning": { "pricePerDress": 50, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for jackets to ensure they look crisp and well-presented." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 100, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Specialized dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressWashing": { "pricePerDress": 60, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Gentle washing process for dresses to retain their color and texture." },
                    "blouseIroning": { "pricePerDress": 30, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Professional ironing service for blouses to ensure they look neat and well-pressed." }
                }
            }
        },
        {
            "name": "Spotless Laundry",
            "address": "7475, Gandhi Nagar, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry12.jpeg'),
            "description": "Spotless Laundry offers fast and efficient laundry services with a focus on convenience. They ensure your clothes are cleaned thoroughly and delivered on time.",
            "services": {
                "men": {
                    "shirtDryCleaning": { "pricePerDress": 50, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for shirts to maintain their fabric quality and appearance." },
                    "trousersWashing": { "pricePerDress": 40, "image": require('../../assets/images/jeensWashing.jpeg'), "description": "Gentle washing process for trousers to retain their color and texture." },
                    "tieIroning": { "pricePerDress": 25, "image": require('../../assets/images/tieWashing.jpg'), "description": "Professional ironing service for ties to ensure they look neat and well-presented." }
                },
                "women": {
                    "sareeIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for sarees to ensure they look crisp and well-pressed." },
                    "dressDryCleaning": { "pricePerDress": 80, "image": require('../../assets/images/dryCleaning.png'), "description": "Thorough dry cleaning process for dresses to maintain their fabric quality and appearance." },
                    "skirtWashing": { "pricePerDress": 40, "image": require('../../assets/images/WashFolds.jpg'), "description": "Gentle washing process for skirts to retain their color and texture." }
                }
            }
        },
        {
            "name": "Prime Cleaners",
            "address": "7677, LB Road, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry13.jpeg'),
            "description": "Prime Cleaners is committed to providing premium laundry and dry cleaning services. They use advanced techniques and quality products to ensure your clothes receive the best care.",
            "services": {
                "men": {
                    "suitDryCleaning": { "pricePerDress": 120, "image": require('../../assets/images/dryCleaning.png'), "description": "Specialized dry cleaning process for suits to maintain their fabric quality and appearance." },
                    "trousersIroning": { "pricePerDress": 45, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for trousers to ensure they look crisp and well-presented." },
                    "tieDryCleaning": { "pricePerDress": 30, "image": require('../../assets/images/tieWashing.jpg'), "description": "Thorough dry cleaning process for ties to keep them fresh and well-maintained." }
                },
                "women": {
                    "sareeWashing": { "pricePerDress": 70, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Specialized washing process for sarees to maintain their fabric quality and appearance." },
                    "dressIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for dresses to ensure they look neat and well-pressed." },
                    "blouseDryCleaning": { "pricePerDress": 50, "image": require('../../assets/images/BlouseIroning.jpg'), "description": "Thorough dry cleaning process for blouses to keep them fresh and well-maintained." }
                }
            }
        },
        {
            "name": "Clean & Go",
            "address": "7879, Kasturba Nagar, Adyar, Chennai",
            "image": require('../../assets/Shops/laundry4.jpeg'),
            "description": "Clean & Go offers quick and reliable laundry services for busy individuals. They focus on delivering clean and fresh clothes with fast turnaround times.",
            "services": {
                "men": {
                    "shirtWashing": { "pricePerDress": 35, "image": require('../../assets/images/ShirtWashing.jpg'), "description": "Gentle washing process for shirts to retain their color and texture." },
                    "trousersIroning": { "pricePerDress": 40, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for trousers to ensure they look crisp and well-presented." },
                    "tieWashing": { "pricePerDress": 25, "image": require('../../assets/images/tieWashing.jpg'), "description": "Gentle washing process for ties to retain their color and texture." }
                },
                "women": {
                    "sareeDryCleaning": { "pricePerDress": 90, "image": require('../../assets/images/sareeDrycleaning.jpeg'), "description": "Thorough dry cleaning process for sarees to maintain their fabric quality and appearance." },
                    "dressWashing": { "pricePerDress": 50, "image": require('../../assets/images/sareeWashing.jpeg'), "description": "Gentle washing process for dresses to retain their color and texture." },
                    "skirtIroning": { "pricePerDress": 30, "image": require('../../assets/images/ironing.jpg'), "description": "Professional ironing service for skirts to ensure they look neat and well-pressed." }
                }
            }
        }
    ]
}

export default shopData