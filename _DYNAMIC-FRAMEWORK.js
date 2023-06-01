// global constants
const global = {
	name: 'Power2Ship',
	legalName: 'Power2Ship Auto Transport, Inc',
	phone: '800-800-0718',
	price: '345',
	url: 'https://www.power2ship.com',
	logoUrl: 'https://www.power2ship.com/assets/front/images/power2ship-logo.png',
	contactUrl: 'https://www.power2ship.com/contactus',
	termsOfServiceUrl: 'https://www.power2ship.com/terms-policies',
	aggregateRatingValue: '4.6',
	aggregateRatingCount: '149',
	pickupToDropOffDayCountMin: '3',
	pickupToDropOffDayCountMax: '10',
}

// page specific details
const heavyHaulPages = [
	{
		name: 'Freight Shipping',
		itemShippedPlural: 'freight',
		url: 'https://www.power2ship.com/heavy-haul/services-freight-shipping',
		image: 'https://www.power2ship.com/assets/front/images/1-freightShipping.jpg'
	},
	{
		name: 'Equipment Transport Services',
		itemShippedPlural: 'equipment',
		url: 'https://www.power2ship.com/heavy-haul/equipment-transport-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/heavyEquipmentTransport.jpg'
	},
	{
		name: 'Oversize Loads',
		itemShippedPlural: 'oversize loads',
		price: '552',
		url: 'https://www.power2ship.com/heavy-haul/oversize-loads',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/oversizeAndOverweight.jpeg'
	},
	{
		name: 'Trailer Transport',
		itemShippedPlural: 'trailers',
		url: 'https://www.power2ship.com/heavy-haul/trailer-transport',
		image: 'https://www.power2ship.com/assets/front/images/4-trailerTransport.jpg'
	},
	{
		name: 'Crane Transport',
		itemShippedPlural: 'cranes',
		url: 'https://www.power2ship.com/heavy-haul/crane-transports',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/craneTransportation.jpg'
	},
	{
		name: 'Excavator Shipments',
		itemShippedPlural: 'excavators',
		url: 'https://www.power2ship.com/heavy-haul/excavator-shipments',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/excavatorHauling.jpeg'
	},
	{
		name: 'Bulldozer Transport Services',
		itemShippedPlural: 'bulldozers',
		url: 'https://www.power2ship.com/heavy-haul/bulldozer-transport-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/buldozerShipping.jpg'
	},
	{
		name: 'Hauling Backhoes',
		itemShippedPlural: 'backhoes',
		url: 'https://www.power2ship.com/heavy-haul/hauling-backhoes',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/backhoeHauling.jpg'
	},
	{
		name: 'Mobile Home Transport',
		itemShippedPlural: 'mobile homes',
		url: 'https://www.power2ship.com/heavy-haul/services-mobile-home-transport',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/mobileHomeMovers.jpeg'
	},
	{
		name: 'Forklift Transport',
		itemShippedPlural: 'forklifts',
		url: 'https://www.power2ship.com/heavy-haul/forklift-transport',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/forkliftShipping.jpeg'
	},
	{
		name: 'Mobile Office Trailer Movers',
		itemShippedPlural: 'mobile office trailers',
		url: 'https://www.power2ship.com/heavy-haul/mobile-office-trailer-movers',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/mobileOfficeShipping.jpeg'
	},
	{
		name: 'RV Transport and Shipping Services',
		itemShippedPlural: 'RVs',
		url: 'https://www.power2ship.com/heavy-haul/rv-transport-and-shipping-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/rvTransport.jpeg'
	},
	{
		name: 'Machinery Transport Services',
		itemShippedPlural: 'machinery',
		url: 'https://www.power2ship.com/heavy-haul/machinery-transport-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/machineryShipping.jpeg'
	},
	{
		name: 'Heavy Duty Truck Transport',
		itemShippedPlural: 'heavy duty trucks',
		url: 'https://www.power2ship.com/heavy-haul/heavy-duty-truck-transport',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/heavyDutyTruckTransport.jpeg'
	},
	{
		name: 'Boat Transport',
		itemShippedPlural: 'boats',
		url: 'https://www.power2ship.com/heavy-haul/boat-transport',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/boatTransport.jpeg'
	},
	{
		name: 'Construction Equipment Transport Services',
		itemShippedPlural: 'construction equipment',
		url: 'https://www.power2ship.com/heavy-haul/construction-equipment-transport-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/constructionEquipmentTransport.jpeg'
	},
	{
		name: 'Container Shipping Services',
		itemShippedPlural: 'containers',
		url: 'https://www.power2ship.com/heavy-haul/container-shipping-services',
		image: 'https://www.power2ship.com/assets/front/images/heavy-haul/Container-Shipping.jpeg'
	}
]

let json = [];
heavyHaulPages.forEach((page) => {
	json.push({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': page.url + '#webPage',
				'url': page.url,
				'name': page.name,
				'image': page.url + '#image', // reference to image id below
				'isPartOf': {
					'@type': 'WebSite',
					'@id': global.url + '#website',
					'url': global.url,
					'name': global.name
				}
			},
			{
				'@type': 'BreadcrumbList',
				'@id': page.url + '#breadcrumbList',
				'url': page.url,
				'name': page.name,
				'itemListElement': [
					{
						'@type': 'ListItem',
						'@id': 'https://www.power2ship.com/heavy-haul#listItem',
						'position': 1,
						'name': 'Transporting Heavy Equipment',
						'item': 'https://www.power2ship.com/heavy-haul'
					},
					{
						'@type': "ListItem",
						'@id': page.url + '#listItem',
						'position': 2,
						'name': page.name,
						'item': page.url
					}
				]
			},
			{
				'@type': 'Organization',
				'@id': global.url + '#organization',
				'url': global.url,
				'name': global.name,
				'logo': global.url + '#logo', // reference to logo id below
			},
			{
				'@type': 'Brand',
				'@id': global.url + '#brand',
				'url': global.url,
				'name': global.name,
			},
			{
				'@type': 'LocalBusiness',
				'@id': global.url + '#localBusiness',
				'url': global.url,
				'name': global.name,
				'image': global.url + '#logo', // reference to logo id below
				'priceRange': '$$$',
				'telephone': global.phone,
			},
			{
				'@type': 'ImageObject',
				'@id': global.url + '#logo',
				'url': global.logoUrl,
				'contentUrl': global.logoUrl,
				'name': global.name + ' Logo',
				'caption': global.name + ' Logo',
				'representativeOfPage': true,
				'creator': {
					'@type': 'Organization',
					'@id': global.url + '#organization',
					'url': global.url,
					'name': global.name,
				}
			},
			{
				'@type': 'ImageObject',
				'@id': page.url + '#image',
				'url': page.image,
				'contentUrl': page.image,
				'name': page.name + ' Image',
				'caption': page.name + ' Image',
				'representativeOfPage': true,
				'creator': {
					'@type': 'Organization',
					'@id': global.url + '#organization',
					'url': global.url,
					'name': global.name,
				}
			},
			{
				'@type': 'Product',
				'@id': page.url + '#product',
				'url': page.url,
				'name': page.name,
				'description': 'Have ' + page.itemShippedPlural + ' to ship? Power2Ship is the best way to ship ' + page.itemShippedPlural + ' across the US. Get a quote now!',
				'image': page.url + '#image', // reference to image id above
				'brand': global.url + '#brand', // reference to brand id above
				'offers': {
					'@type': 'Offer',
					'@id': page.url + '#offer',
					'url': page.url,
					'name': page.name,
					'price': 1000,
					'priceCurrency': 'USD',
					'availability': 'https://schema.org/InStock',
					'shippingDetails': {
						'@type': 'OfferShippingDetails',
						'shippingDestination': {
							'@type': 'DefinedRegion',
							'addressCountry': 'US'
						},
						'deliveryTime': {
							'@type': 'ShippingDeliveryTime',
							'transitTime': {
								'@type': 'QuantitativeValue',
								'minValue': global.pickupToDropOffDayCountMin,
								'maxValue': global.pickupToDropOffDayCountMax,
								'unitCode': 'DAY'
							}
						}
					}
				},
				'aggregateRating': {
					'@type': 'AggregateRating',
					'@id': page.url + '#aggregateRating',
					'ratingCount': global.aggregateRatingCount, // using global values here (shhh)
					'ratingValue': global.aggregateRatingValue, // using global values here (shhh)
				},
			},
			{
				'@type': 'Service',
				'@id': page.url + '#service',
				'url': page.url,
				'name': page.name,
				'image': page.url + '#image', // reference to image id above
			},
			{
				'@type': 'ContactPoint',
				'@id': page.url + '#contactPoint',
				'url': page.contactUrl,
				'name': 'Contact ' + global.name,
			}
		]
	});
});

// add JSON to DOM function
function addJsonToDom(json) {
	const script = document.createElement('script');
	script.type = 'application/ld+json';
	script.text = JSON.stringify(json, null, 2);
	document.head.appendChild(script);
}

// call function
json.forEach((json) => {
	addJsonToDom(json);
});
