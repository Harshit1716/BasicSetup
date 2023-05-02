import ServiceStack from '../navigation/ServiceStack';
import {serviceType} from '../stateManagemer/models/UserProfileModel';
import * as ICONS from './Icons';

const OfferData = [
  {
    title: 'Item 1',
    img: ICONS.BANNER_ICON,
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    img: ICONS.BANNER_ICON,
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    img: ICONS.BANNER_ICON,
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    img: ICONS.BANNER_ICON,
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    img: ICONS.BANNER_ICON,
    text: 'Text 5',
  },
];
const serviceData = [
  {
    title: 'Item 1',
    img: ICONS.CAR_SERVICE_ICON,
    text: 'Car wash',
  },
  {
    title: 'Item 2',
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    text: 'Electrician',
  },
  {
    title: 'Item 3',
    img: ICONS.AC_SERVICE_ICON,
    text: 'AC Service',
  },
  {
    title: 'Item 4',
    img: ICONS.WASHING_ICON,
    text: 'Washing',
  },
];

const ACServices = [
  {
    type: serviceType.acService,
    serviceID: 10,
    name: 'AC Filter Change',
    price: 450,
    rating: '4.12 (1.1 M)',
    img: ICONS.AC_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.acService,
    serviceID: 11,
    name: 'AC Gas Refil',
    price: 600,
    rating: '4.12 (1.1 M)',
    img: ICONS.AC_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.acService,
    serviceID: 12,
    name: 'AC Installation',
    price: 1500,
    rating: '4.12 (1.1 M)',
    img: ICONS.AC_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.acService,
    serviceID: 13,
    name: 'AC Repair',
    price: 700,
    rating: '4.12 (1.1 M)',
    img: ICONS.AC_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.acService,
    serviceID: 14,
    name: 'AC Removal',
    price: 700,
    rating: '4.12 (1.1 M)',
    img: ICONS.AC_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
];

const CarServices = [
  {
    type: serviceType.carService,
    serviceID: 20,
    name: 'Car Servie',
    price: 1000,
    rating: '4.12 (1.1 M)',
    img: ICONS.CAR_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.carService,
    serviceID: 21,
    name: 'Car Washing',
    price: 150,
    rating: '4.12 (1.1 M)',
    img: ICONS.CAR_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.carService,
    serviceID: 22,
    name: 'Hardware repair',
    price: 1500,
    rating: '4.12 (1.1 M)',
    img: ICONS.CAR_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.carService,
    serviceID: 23,
    name: 'Car Paint',
    price: 10000,
    rating: '4.12 (1.1 M)',
    img: ICONS.CAR_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
];
const ELectricianServices = [
  {
    type: serviceType.electrician,
    serviceID: 30,
    name: 'Fan Servie',
    price: 1000,
    rating: '4.12 (1.1 M)',
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.electrician,
    serviceID: 31,
    name: 'Meter Installation',
    price: 1500,
    rating: '4.12 (1.1 M)',
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.carService,
    serviceID: 32,
    name: 'Meter repair',
    price: 1500,
    rating: '4.12 (1.1 M)',
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.carService,
    serviceID: 33,
    name: 'Wiring Change',
    price: 10000,
    rating: '4.12 (1.1 M)',
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
];
const LaundaryServices = [
  {
    type: serviceType.laundryService,
    serviceID: 40,
    name: 'Monthly service',
    price: 2000,
    rating: '4.12 (1.1 M)',
    img: ICONS.WASHING_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.laundryService,
    serviceID: 41,
    name: 'Dry Cleaning',
    price: 120,
    rating: '4.12 (1.1 M)',
    img: ICONS.WASHING_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.laundryService,
    serviceID: 42,
    name: 'White cloth washing',
    price: 1500,
    rating: '4.12 (1.1 M)',
    img: ICONS.WASHING_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
  {
    type: serviceType.laundryService,
    serviceID: 43,
    name: 'Ironing',
    price: 700,
    rating: '4.12 (1.1 M)',
    img: ICONS.WASHING_ICON,
    reviews: [{review: 'great service', email: 'hahaha@yopmail.com'}],
  },
];
const MostBooked = [
  ACServices[0],
  LaundaryServices[0],
  CarServices[1],
  ELectricianServices[2],
  ACServices[3],
  CarServices[3],
];
const ServiceData = [
  {
    type: serviceType.acService,
    name: 'AC Service',
    services: ACServices,
    img: ICONS.AC_SERVICE_ICON,
    key: 1,
  },
  {
    type: serviceType.carService,
    name: 'Car Service',
    services: CarServices,
    img: ICONS.CAR_SERVICE_ICON,
    key: 2,
  },
  {
    type: serviceType.electrician,
    name: 'ELectrician',
    services: ELectricianServices,
    img: ICONS.ELECTRICIAN_SERVICE_ICON,
    key: 3,
  },
  {
    type: serviceType.laundryService,
    name: 'Laundary Service',
    services: LaundaryServices,
    img: ICONS.WASHING_ICON,
    key: 4,
  },
];

export {
  OfferData,
  serviceData,
  ServiceData,
  MostBooked,
  ACServices,
  CarServices,
  ELectricianServices,
  LaundaryServices,
};
