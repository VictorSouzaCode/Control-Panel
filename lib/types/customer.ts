export type CustomerType = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    address: {
        address: string,
        city: string,
        state: string,
        country: string,
    },
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string,
    }
    ip: string,
}