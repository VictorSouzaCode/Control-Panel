export type Order = {
    id: number,
    userId: number,
    total: number,
    totalProducts: number,
    totalQuantity: number,
    discountedTotal: number,
    products: {
        id: number,
        title: string,
        price: number,
        quantity: number,
        total: number,
    }[],
};