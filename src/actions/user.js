import { SET_USER_PURCHASES } from './types';
import { SET_PURCHASE_DETAIL } from './types';

export function setPurchaseDetail(_id) { 
    return ({ 
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() { 
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 3.50,
                orderNumber: 'AD216650FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '123 Easy Street, SomeCity, WA 24005'
                }
            },
            {
                _id: 1,
                total: 7.59,
                orderNumber: 'KJ3648920FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'John Banton',
                    shippingAddress: '434 Crazy Street, AnotherCity, VA 90253'
                }
            },
            {
                _id: 2,
                total: 56.23,
                orderNumber: 'UI23546210FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Joe Exotic',
                    shippingAddress: '456  Tiger Street, SomeTown, OK 94591'
                }
            },
            {
                _id: 3,
                total: 350,
                orderNumber: 'LP354910FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'KoolAid Man',
                    shippingAddress: '321 OhYeah Ave, Summervile, FL 77652'
                }
            },
            {
                _id: 4,
                total: 15.52,
                orderNumber: 'AW874680FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Mister Sandman',
                    shippingAddress: '555 Sleepy Street, Anywhere, WY 98351'
                }
            },
            {
                _id: 5,
                total: 69.63,
                orderNumber: 'RT9879880FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'The Dude',
                    shippingAddress: '548 Hazey Avenue, Los Angelos, CA 90210'
                }
            },
            {
                _id: 6,
                total: 23.74,
                orderNumber: 'HG687490FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Max Nelson',
                    shippingAddress: '1337 Coding Lane, Whereever, US 43353'
                }
            },            
            {
                _id: 7,
                total: 3.50,
                orderNumber: 'JK6894220FF',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Little Fella',
                    shippingAddress: '100 TooSmall Street, LittleTown,  80984'
                }
            }

        ]
    })
}