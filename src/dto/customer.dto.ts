export interface ICustomer {
    id: number,
    customer_name: string,
    customer_email: string,
    password: string
}

export interface ILoginDto {
    customer_email: string,
    password: string
}